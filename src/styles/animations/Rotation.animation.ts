import { keyframes } from "styled-components";
import { photos } from "../../data/photos";

const rotationAnimation = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
`

export {rotationAnimation}