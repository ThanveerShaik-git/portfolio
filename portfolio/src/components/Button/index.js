import styled from "styled-components";

const ButtonWrapper = styled.button`
  height: 40px;
  background-color: ${(props) => `${props.theme.buttons.secondary.bg}`};
  color: #fff;
  margin: 10px 10px;
  cursor: pointer;

  border-radius: 10px;
  border: ${(props) => `1px solid ${props.theme.colors.white}`};

  -webkit-box-shadow: 7px 9px 22px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 9px 22px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 9px 22px -10px rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: ${(props) => `${props.theme.buttons.hover.bg}`};
  }
`;

const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
