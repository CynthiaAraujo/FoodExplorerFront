import { useEffect, useState } from "react";
import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form } from "./styles";

import { HeaderUser } from "../../components/HeaderUser";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Tag } from "../../components/Tag";
import { userAuth } from "../../hooks/auth";
import { getPlateById } from "../../services/api";

export function Plate() {
  const { id } = useParams();
  const { isAdmin } = userAuth();
  const [plate, setPlate] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlate() {
      try {
        const plateData = await getPlateById(id);
        const plateWithImgUrl = {
          ...plateData,
          img: `${import.meta.env.VITE_API_URL}/files/${plateData.img}`,
        };
        setPlate(plateWithImgUrl);
        setIngredients(plateData.ingredients);
      } catch (error) {
        console.error("Erro ao acessar ao prato", error);
      }
    }

    fetchPlate();
  }, [id]);

  function handleBack() {
    navigate(-1);
  }

  function handleEditPlate() {
    navigate(`/EditarPrato/${id}`);
  }

  function handleDecrease() {
    if (quantity <= 1) {
      setQuantity(1);
      return alert("Quantidade mínima é 1");
    }
    setQuantity(quantity - 1);
    return null;
  }

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  return (
    <Container>
      {isAdmin ? <HeaderAdmin /> : <HeaderUser />}
      <Form>
        <button className="handleBack" type="button" onClick={handleBack}>
          <FiChevronLeft />
          <h5>voltar</h5>
        </button>
        {plate && (
          <main>
            <img src={plate.img} alt="Imagem do prato" />

            <div className="dishInformation">
              <h1>{plate.title}</h1>
              <p>{plate.description}</p>

              <div className="tags">
                {ingredients.map((ingredient) => (
                  <Tag key={ingredient.id} value={ingredient.name} isFixed />
                ))}
              </div>
              {isAdmin ? (
                <div className="dishAdd">
                  <Button title="Editar prato" onClick={handleEditPlate} />
                </div>
              ) : (
                <div className="quantity">
                  <div className="decreaseOrAdd">
                    <FiMinus type="button" onClick={handleDecrease} />
                    <span>{quantity}</span>
                    <FiPlus type="button" onClick={handleIncrease} />
                  </div>
                  <Button className="dishAdd" title="incluir R$:">
                    <p>{plate.price * quantity}</p>
                  </Button>
                </div>
              )}
            </div>
          </main>
        )}
      </Form>
      <Footer />
    </Container>
  );
}
