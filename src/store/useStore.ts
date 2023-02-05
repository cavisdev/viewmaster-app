import { create } from "zustand";

interface State {
  sliderActive: boolean;
  setSliderActive: () => void;
  angle: number;
  setAngle: () => void;
  photoVisible: boolean;
  setPhotoVisible: () => void;
}

const useStore = create<State>()((set, get) => ({
  sliderActive: false,
  setSliderActive: () => {
    if (get().sliderActive === false) {
      set(() => ({ sliderActive: true }));
      get().setAngle()
      setTimeout(() => {
        set(() => ({ sliderActive: false }));
      }, 1000)
    }
  },
  angle: 0,
  setAngle: () => {
      set(() => ({angle: get().angle + 1}))
      
  },
  photoVisible: false,
  setPhotoVisible: () => {
    set(() => ({photoVisible: !get().photoVisible}))
  }
}));

export { useStore };
