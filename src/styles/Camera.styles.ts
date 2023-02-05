import styled from "styled-components";
import { slideAnimation } from "./animations/SlideButton.animation";

interface ThumbnailProps {
  background: string;
  rotate: number | null;
}

interface ImageContainerProps {
  currentAngle: number;
}

interface LensProps {
  image: string;
}

const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
`;

const CameraBody = styled.div`
  position: relative;
  width: 100%;
  height: 50vw;
  max-height: 360px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 1em;
`;

const FilmDisk = styled.div`
  z-index: -100;
  height: 25vw;
  max-height: 216px;
  width: 50vw;
  max-width: 80%;
  align-self: center;
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-bottom: none;
  border-radius: 25vw 25vw 0 0;
`;

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 100%;
  height: 200%;
  transform: rotate(${props => props.currentAngle}deg);
  transition: transform 1s linear;
`

const Thumbnail = styled.div<ThumbnailProps>`
  position: absolute;
  width: 15%;
  height: 15%;
  top: 50%;
  left: 50%;
  margin: -7.5%;
  transform: ${props => props.rotate ? `rotate(${props.rotate}deg) translate(250%) ` : `translate(250%)`};
  background-image: url("./images/${(props) => props.background}");
  background-color: ${({ theme }) => theme.colors.black};
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
`;

const SlideButton = styled.div`
  position: absolute;
  top: -10%;
  right: -10%;
  height: 15vw;
  max-height: 108px;
  width: 15vw;
  max-width: 108px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple};
  box-shadow: -4px 4px 4px rgba(37, 38, 39, 0.25);
  cursor: pointer;

  &.active {
    animation: 1s 1 ${slideAnimation};
  }
`;

const EyeRest = styled.div`
  position: absolute;
  display: flex;
  top: 35%;
  width: 50%;
  height: 45%;
  background-color: ${({ theme }) => theme.colors.red};

  &.left {
    left: -10%;
    box-shadow: 4px 4px 4px rgba(37, 38, 39, 0.25);
    border-radius: 25% 25% 50% 25%;
  }

  &.right {
    right: -10%;
    box-shadow: -4px 4px 4px rgba(37, 38, 39, 0.25);
    border-radius: 25% 25% 25% 50%;
  }
`;

const Lens = styled.div<LensProps>`
  width: 40%;
  height: 40%;
  border-radius: 50%;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:hover, &.focus {
    background-image: url("./images/${props => props.image}");
    background-size: cover;
    background-blend-mode: overlay;
  }
`

export {
  CameraContainer,
  CameraBody,
  FilmDisk,
  ImageContainer,
  Thumbnail,
  SlideButton,
  EyeRest,
  Lens
};
