import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import { TextArea } from "../../components/TextArea";
import { createPlate } from "../../services/api";

export function AddPrato() {
  const [title, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [img, setImg] = useState(null);

  const navigate = useNavigate();
  const options = ["Prato Principal", "Sobremesa", "Bebida"];
  const [type, setType] = useState(options[0]);

  function handleBack() {
    navigate(-1);
  }

  const handleAddIngredient = () => {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  const handleRemoveIngredient = (item) => {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient !== item,
    );

    setIngredients(newIngredients);
  };

  const handleImg = (e) => {
    const file = e.target.files[0];

    setImg(file);
  };

  async function handleAddDish() {
    if (newIngredient.length > 0) {
      return alert(
        "Existem ingredientes pendentes, que não foram adicionados ainda.",
      );
    }

    if (
      !title.length ||
      !type ||
      !price.length ||
      !description.length ||
      !ingredients.length ||
      !img
    ) {
      return alert("Preencha todos os campos");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("img", img);

    try {
      await createPlate(formData);
      alert("Prato criado com sucesso!");
      navigate(-1);
    } catch (error) {
      alert("Erro ao criar prato");
      console.error(error);
    }

    return null;
  }

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <Form>
          <header>
            <button type="button" onClick={handleBack}>
              <FiChevronLeft />
              voltar
            </button>
          </header>
          <h1>Novo Prato</h1>
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
              <h5>Name</h5>
              <Input
                title="Nome"
                type="text"
                placeholder="Ex.:Salada Ceasar"
                name="title"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="category">
              <h5>Categoria</h5>
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
                {ingredients.map((item, index) => (
                  <Tag
                    key={String(`${item}-${index}`)}
                    value={item}
                    onClick={() => handleRemoveIngredient(item)}
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
            />
          </div>

          <div className="button">
            <Button
              onClick={handleAddDish}
              title="Salvar alterações"
              type="button"
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
