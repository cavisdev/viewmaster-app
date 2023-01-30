import styled from "styled-components";

const BlueBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.03em;
  text-align: center;
  padding: 0.5em 0;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export { BlueBox };
