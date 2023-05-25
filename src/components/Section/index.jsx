import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Cards } from "../Cards";
import { Container } from "./styles";

export function Section({ title, cards, admin = false }) {
  const carousel = useRef(null);
  const cardRef = useRef([]);
  const handleLeftClick = (e) => {
    e.preventDefault();

    const newScroll =
      carousel.current.scrollLeft - cardRef.current.offsetWidth - 24;

    if (newScroll < -cardRef.current.offsetWidth) {
      carousel.current.scrollLeft = carousel.current.offsetWidth;
    } else {
      carousel.current.scrollLeft = newScroll;
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    const newScroll =
      carousel.current.scrollLeft + cardRef.current.offsetWidth + 24;

    if (newScroll > carousel.current.offsetWidth) {
      carousel.current.scrollLeft = 0;
    } else {
      carousel.current.scrollLeft = newScroll;
    }
  };

  return (
    <Container>
      <h2>{title}</h2>
      <div className="CarouselSection">
        <div className="carousel" ref={carousel}>
          <button
            type="button"
            className="arrow-left button"
            aria-label="Previous Image"
            onClick={handleLeftClick}
          >
            <FiChevronLeft size={40} color="#FFFFFF" />
          </button>

          <button
            type="button"
            className="arrow-right button"
            aria-label="Previous Image"
            onClick={handleRightClick}
          >
            <FiChevronRight size={40} color="#FFFFFF" />
          </button>
          <div className="cardSection">
            {cards &&
              cards.map((card) => (
                <Cards
                  key={card.id}
                  plates={card}
                  admin={admin}
                  ref={cardRef}
                />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
