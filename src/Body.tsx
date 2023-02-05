import {
  MainContainer,
  TextColumn,
  Text,
  ActiveImage,
} from "./styles/Body.styles";
import { photos } from "./data/photos";
import Camera from "./Camera";
import { useStore } from "./store/useStore";
import { useEffect, useRef } from "react";

export default function Main() {
    const angle = useStore((state) => state.angle);
    const photoVisible = useStore((state) => state.photoVisible)
    const setPhotoVisible = useStore((state) => state.setPhotoVisible)
    const ref = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            console.log(e)
            if (photoVisible && ref.current && !ref.current.contains(e.target)) {
                setPhotoVisible()
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [photoVisible])

  return (
    <MainContainer>
      <Camera />
      <TextColumn>
        <Text>
          click the <span className="bold">purple circle</span> to{" "}
          <span className="bold">change</span> the photo
        </Text>
        <Text className="right">
          click the <span className="bold">lense circles</span> to{" "}
          <span className="bold">view</span> the photo
        </Text>
      </TextColumn>
          {photoVisible && <ActiveImage ref={ref} src={`./images/${photos[angle % photos.length].url}`} />}
    </MainContainer>
  );
}
