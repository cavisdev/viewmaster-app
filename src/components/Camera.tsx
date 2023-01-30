import { useStore } from "../store/useStore";
import { photos } from "../data/photos";
import {
  CameraBody,
  CameraContainer,
  EyeRest,
  FilmDisk,
  SlideButton,
  Thumbnail,
} from "../styles/Camera.styles";

export default function Camera() {
  const sliderActive = useStore((state) => state.sliderActive);
  const setSliderActive = useStore((state) => state.setSliderActive);

    const photoDisplay = photos.map((url) => <Thumbnail key={url} background={url} />)  
    
  return (
    <CameraContainer>
          <FilmDisk>
              
      </FilmDisk>
      <CameraBody>
        <SlideButton
          className={sliderActive ? "active" : ""}
          onClick={() => setSliderActive()}
        />
        <EyeRest className="left"></EyeRest>
        <EyeRest className="right"></EyeRest>
      </CameraBody>
    </CameraContainer>
  );
}
