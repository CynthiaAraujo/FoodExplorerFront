import { useEffect, useState } from "react";
import FoodImg from "../../assets/FoodImage.png";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { HeaderUser } from "../../components/HeaderUser";
import { Section } from "../../components/Section";
import { Container, Form } from "./styles";

import { userAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/useSearch";

export function Home() {
  const { isAdmin } = userAuth();
  const [loading, setLoading] = useState(true);
  const { plates, handleSearch } = useSearch();

  useEffect(() => {
    async function fetchPlates() {
      try {
        await handleSearch();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlates();
  }, []);

  const renderSections = () => {
    const mainDishes = plates.filter(
      (plate) => plate.type === "Prato Principal",
    );
    const desserts = plates.filter((plate) => plate.type === "Sobremesa");
    const drinks = plates.filter((plate) => plate.type === "Bebida");

    return loading ? (
      <p>Carregando...</p>
    ) : (
      <>
        {mainDishes.length > 0 && (
          <Section title="Refeição" cards={mainDishes} admin={isAdmin} />
        )}
        {desserts.length > 0 && (
          <Section title="Sobremesa" cards={desserts} admin={isAdmin} />
        )}
        {drinks.length > 0 && (
          <Section title="Bebidas" cards={drinks} admin={isAdmin} />
        )}
      </>
    );
  };

  return (
    <Container>
      {isAdmin ? (
        <HeaderAdmin handleSearch={handleSearch} />
      ) : (
        <HeaderUser handleSearch={handleSearch} />
      )}
      <Form>
        <div className="ImageHome">
          <img className="imageHeader" src={FoodImg} alt="FoodImage" />
          <div className="description">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
        {renderSections()}
      </Form>
      <Footer />
    </Container>
  );
}
