import { forwardRef, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiEdit2, FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Container } from "./styles";

export const Cards = forwardRef(
  ({ plates, favorite, admin = false, ...rest }, ref) => {
    const [quantity, setQuantity] = useState(1);
    const [favoriteP, setFavoriteP] = useState(favorite);
    const navigate = useNavigate();

    function handleFavorite() {
      setFavoriteP(!favoriteP);
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

    function handleViewPlate({ id }) {
      navigate(`/Plate/${id}`);
    }

    function handleEditPlate({ id }) {
      navigate(`/EditarPrato/${id}`);
    }

    const button = admin ? (
      <div className="icon">
        <FiEdit2 onClick={() => handleEditPlate(plates)} />
      </div>
    ) : (
      <button className="favorite" type="button" onClick={handleFavorite}>
        {favoriteP ? (
          <AiFillHeart color="#FFFFFF" size={24} />
        ) : (
          <AiOutlineHeart color="#FFFFFF" size={24} />
        )}
      </button>
    );

    const clickPlate = admin ? (
      <button
        className="imgPlate admin"
        onClick={() => handleViewPlate(plates)}
        type="button"
      >
        <img
          src={`${import.meta.env.VITE_API_URL}/files/${plates.img}`}
          alt="imagem do prato"
        />
      </button>
    ) : (
      <button
        className="imgPlate"
        onClick={() => handleViewPlate(plates)}
        type="button"
      >
        <img
          src={`${import.meta.env.VITE_API_URL}/files/${plates.img}`}
          alt="imagem do prato"
        />
      </button>
    );

    return (
      <Container ref={ref} {...rest}>
        {button}
        <div className="plates">
          {plates && (
            <main>
              {clickPlate}
              <div className="informations">
                <h1>{plates.title}</h1>
                <p>{plates.description}</p>
                <h5>
                  {plates.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h5>

                {!admin && (
                  <div className="includePlates">
                    <div className="decreaseOrAdd">
                      <FiMinus type="button" onClick={handleDecrease} />
                      <span>{quantity}</span>
                      <FiPlus type="button" onClick={handleIncrease} />
                    </div>
                    <Button className="dishAdd" title="incluir" />
                  </div>
                )}
              </div>
            </main>
          )}
        </div>
      </Container>
    );
  },
);
