import { create } from "zustand";
import { photos } from "../data/photos";

interface State {
  sliderActive: boolean;
  setSliderActive: () => void;
  activeSlide: number;
  setActiveSlide: () => void;
}

const useStore = create<State>()((set, get) => ({
  sliderActive: false,
  setSliderActive: () => {
    if (get().sliderActive === false) {
        set(() => ({ sliderActive: true }));
      setTimeout(() => {
        set(() => ({ sliderActive: false }));
      }, 1000)
    }
  },
  activeSlide: 0,
  setActiveSlide: () => {
    if (get().activeSlide < photos.length - 1) {
      set(() => ({activeSlide: get().activeSlide + 1}))
    } else {
      set(() => ({activeSlide: 0}))
    }
  }
}));

export { useStore };
