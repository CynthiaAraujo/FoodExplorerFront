import { useState } from "react";
import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";

import { HeaderUser } from "../../components/HeaderUser";

import { Tag } from "../../components/Tag";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function PratoClient() {
  const data = {
    img: "https://i.imgur.com/ZCKjUvq.png",
    title: "Salada Ravanello",
    description:
      "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
    tags: [
      {
        id: 1,
        name: "cebola",
      },
      {
        id: 2,
        name: "calabresa",
      },
    ],
    price: "25",
  };

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

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

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <HeaderUser />
      <Form>
        <button className="handleBack" type="button" onClick={handleBack}>
          <FiChevronLeft />
          <h3>voltar</h3>
        </button>
        {data && (
          <main>
            <img src={data.img} alt="Imagem do seu prato" />

            <div className="dishInformation">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <div className="tags">
                {data.tags &&
                  data.tags.map((tag) => (
                    <Tag key={String(tag.id)} value={tag.name} isFixed />
                  ))}
              </div>
              <div className="quantity">
                <div className="decreaseOrAdd">
                  <FiMinus type="button" onClick={handleDecrease} />
                  <span>{quantity}</span>
                  <FiPlus type="button" onClick={handleIncrease} />
                </div>
                <Button className="dishAdd" title="incluir R$:">
                  <p>{data.price * quantity}</p>
                </Button>
              </div>
            </div>
          </main>
        )}
      </Form>
      <Footer />
    </Container>
  );
}
