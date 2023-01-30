import styled from "styled-components";
import { BlueBox } from "./Toolbox.styles";


const FooterContainer = styled(BlueBox)`
    font-size: 4vw;
    font-weight: 300;

    @media only screen and (min-width: 1024px) {
        font-size: 2vw;
    }

    @media only screen and (min-width: 1280px) {
        font-size: 1vw;
    }
`

export {FooterContainer}