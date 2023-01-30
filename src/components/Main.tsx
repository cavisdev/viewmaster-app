import { MainContainer, TextColumn, Text} from "../styles/Main.styles";
import Camera from "./Camera";

export default function Main() {

    return (
        <MainContainer>
            <Camera />
            <TextColumn>
            <Text>click the <span className="bold">purple circle</span> to <span className="bold">change</span> the photo</Text>
            <Text className="right">click the <span className="bold">lense circles</span> to <span className="bold">view</span> the photo</Text>
            </TextColumn>
        </MainContainer>
    )
}