import styled from "styled-components";
import { BlueBox } from "./Toolbox.styles";


const HeaderContainer = styled(BlueBox)`
    font-size: 10vw;
    font-weight: 900;

    @media only screen and (min-width: 1024px) {
        font-size: 5vw;
    }

    @media only screen and (min-width: 1280px) {
        font-size: 2.5vw;
    }
`

export {HeaderContainer}