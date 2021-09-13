import styled from "styled-components";
import { Flex, Text } from "rebass";

import Button from "../Button";

import TextSlowMotion from "../TextSlowMotion";

import headerImage from "../../assets/images/header.jpg";

//Wrapper Class
const HeaderWrapper = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  align-items: center;

  //   border: 1px solid black;
  border-radius: 5px;

  width: 100%;
  height: 600px;
  over-flow: hidden;

  font-family: "Orbitron", sans-serif;

  background-image: url(${headerImage});
  background-repeat: no-repeat;
  object-fit: cover;

  @media (max-width: 640px) {
    background-image: url(${headerImage});
    background-repeat: no-repeat;
    width: 100%;
  }
`;

/**
 * Header
 * @param {title} param0 string
 * @returns
 */
const Header = ({ name, info, designation }) => {
  return (
    <>
      <HeaderWrapper fontSize={[16, 20, 38]}>
        <TextSlowMotion text={name}>
          <Text fontSize={[14, 18, 24]} fontWeight="body" margin="20px 0">
            {designation}
          </Text>
          <Text fontSize={[12, 14, 16]} fontWeight="body">
            {info}
          </Text>
          <Button>Check me out</Button>
          <Button>Know more</Button>
        </TextSlowMotion>
      </HeaderWrapper>
    </>
  );
};

export default Header;
