import { useStore } from "./store/useStore";
import { photos } from "./data/photos";
import {
  CameraBody,
  CameraContainer,
  EyeRest,
  FilmDisk,
  ImageContainer,
  Lens,
  SlideButton,
  Thumbnail,
} from "./styles/Camera.styles";

export default function Camera() {
  const sliderActive = useStore((state) => state.sliderActive);
  const setSliderActive = useStore((state) => state.setSliderActive);
  const angle = useStore((state) => state.angle);
  const setPhotoVisible = useStore((state) => state.setPhotoVisible)

  const photoDisplay = photos.map(({ id, url }) => (
    <Thumbnail
      key={id}
      background={url}
      rotate={id % 9 !== 0 ? (360 / photos.length) * id : null}
    />
  ));

  return (
    <CameraContainer>
      <FilmDisk>
        <ImageContainer currentAngle={(360 / photos.length) * angle}>
          {photoDisplay}
        </ImageContainer>
      </FilmDisk>
      <CameraBody>
        <SlideButton
          className={sliderActive ? "active" : ""}
          onClick={() => setSliderActive()}
        />
        <EyeRest className="left">
          <Lens image={photos[angle % photos.length].url} onClick={() => setPhotoVisible()} />
        </EyeRest>
        <EyeRest className="right">
          <Lens image={photos[angle % photos.length].url} onClick={() => setPhotoVisible()}/>
        </EyeRest>
      </CameraBody>
    </CameraContainer>
  );
}
