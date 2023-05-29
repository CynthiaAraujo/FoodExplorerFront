import { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import { TextArea } from "../../components/TextArea";
import { deletePlate, getPlateById, updatePlate } from "../../services/api";

export function EditarPrato() {
  const { id } = useParams();
  const [title, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [img, setImg] = useState(null);
  const options = ["Prato Principal", "Sobremesa", "Bebida"];
  const [type, setType] = useState(options[0]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlateData() {
      try {
        const plateData = await getPlateById(id);
        setName(plateData.title);
        setPrice(String(plateData.price));
        setDescription(plateData.description);
        setIngredients(plateData.ingredients);
        setImg(plateData.img);
        setType(plateData.type);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPlateData();
  }, [id]);

  function handleBack() {
    navigate(-1);
  }

  const handleAddIngredient = () => {
    setIngredients((prevState) => [
      ...prevState,
      { id: prevState.length, name: newIngredient },
    ]);
    setNewIngredient("");
  };

  const handleRemoveIngredient = (ingredient) => {
    const newIngredients = ingredients.filter((item) => item !== ingredient);

    setIngredients(newIngredients);
  };

  const handleImg = (e) => {
    const file = e.target.files[0];

    setImg(file);
  };

  async function handleDeletePlate() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {
      try {
        await deletePlate(id);
        alert("Prato removido com sucesso!");
        navigate("/");
      } catch (error) {
        alert("Erro ao remover o prato");
        console.error(error);
      }
    }
  }

  async function handleUpdate() {
    window.confirm("Deseja realmente editar o prato?");

    if (
      !title.length ||
      !type ||
      !price ||
      !description ||
      !ingredients.length ||
      !img
    ) {
      return alert("Preencha todos os campos");
    }

    const ingredientesNomes = ingredients.map(
      (ingrediente) => ingrediente.name,
    );

    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("price", price.replace(",", "."));
    formData.append("description", description);
    formData.append("ingredients", ingredientesNomes);
    formData.append("img", img);

    try {
      await updatePlate(id, formData);
      alert("Prato editado com sucesso!");
      navigate(-1);
    } catch (error) {
      alert("Erro ao editar o prato");
      console.error(error);
    }

    return null;
  }

  return (
    <Container>
      <HeaderAdmin />
      <main>
        {title && price && description && ingredients && (
          <Form>
            <header>
              <button type="button" onClick={handleBack}>
                <FiChevronLeft />
                voltar
              </button>
            </header>
            <h1>Editar prato</h1>
            <div className="FirstInformation">
              <div className="dishImage">
                <h5>Imagem do prato</h5>
                <div className="image">
                  <label htmlFor="inputImage">
                    Selecione imagem
                    <input
                      type="file"
                      onChange={handleImg}
                      name="inputImage"
                      id="inputImage"
                    />
                  </label>
                </div>
              </div>

              <div className="name">
                <h5>Nome</h5>
                <Input
                  title="Nome"
                  value={title}
                  type="text"
                  placeholder="Ex.:Salada Ceasar"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="category">
                <h5 htmlFor="category">Categoria</h5>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  {options.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="additionalInformation">
              <div className="ingredientes">
                <h5>Ingredientes</h5>
                <div className="tags">
                  {ingredients.map((ingredient) => (
                    <Tag
                      key={ingredient.id}
                      value={ingredient.name}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}

                  <Tag
                    isNew
                    placeholder="Ingredientes"
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                </div>
              </div>
              <div className="price">
                <h5>Preço</h5>
                <Input
                  title="price"
                  type="text"
                  placeholder="R$00,00"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="description">
              <h5>Descrição</h5>
              <TextArea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={description}
              />
            </div>

            <div className="button">
              <Button
                onClick={handleDeletePlate}
                title="Excluir o prato"
                type="button"
              />
              <Button
                onClick={handleUpdate}
                title="Salvar alterações"
                type="button"
              />
            </div>
          </Form>
        )}
      </main>
      <Footer />
    </Container>
  );
}
