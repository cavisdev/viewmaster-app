import { useStore } from "../store/useStore";
import { photos } from "../data/photos";
import {
  CameraBody,
  CameraContainer,
  EyeRest,
  FilmDisk,
  ImageContainer,
  SlideButton,
  Thumbnail,
} from "../styles/Camera.styles";

export default function Camera() {
  const sliderActive = useStore((state) => state.sliderActive);
  const setSliderActive = useStore((state) => state.setSliderActive);

  const photoDisplay = photos.map(({ id, url }) =>
    <Thumbnail
      key={id}
      background={url}
      rotate={ 
        (id % 9 !== 0)  ?  360/photos.length * id : null} / >)  
    
  return (
    <CameraContainer>
      <FilmDisk>
        <ImageContainer duration={photos.length} className={sliderActive ? "rotate" : ""}>
          {photoDisplay}
        </ImageContainer>
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
