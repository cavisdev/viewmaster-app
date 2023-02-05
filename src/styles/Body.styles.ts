import styled from "styled-components";

interface ImageProps {
  ref: HTMLInputElement;
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 3em auto;
  width: 75%;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    width: 80%;
    gap: 6rem;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 0;
  margin-top: 1em;
  align-self: flex-start;
  font-family: "Kalam", sans-serif;
  font-weight: 300;
  font-size: 5vw;
  width: 70%;

  &.right {
    align-self: flex-end;
    text-align: right;
  }

  & span.bold {
    font-weight: 700;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.5vw;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 1.25vw;
  }
`;

const ActiveImage = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  border: 8px solid ${({ theme }) => theme.colors.white};
  box-shadow: -2px 2px 8px rgba(37, 38, 39, 0.25);
`;

export { MainContainer, TextColumn, Text, ActiveImage };
