import React, { useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import { Card } from "../components/Card";

const ColumnStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    display: block;
}
`

const handleClick = (columnId, setBoard) => {
  const desc = window.prompt();

  setBoard(existingBoard => ({
    ...existingBoard,
    cards: [
      ...existingBoard.cards,
      {
        position: columnId,
        desc
      }
    ]
  }));
};

export const Column = ({ column }) => {
  const { state: board, setState: setBoard } = useContext(AppContext);
  const { cards } = board;
  return (
    <React.Fragment>
      {/* <SectionTitle>{column.title}</SectionTitle> */}
      <ColumnStyles>
        {cards.map(card => column.id === card.position && <Card card={card} />)}
      </ColumnStyles>
    </React.Fragment>

  );
};
