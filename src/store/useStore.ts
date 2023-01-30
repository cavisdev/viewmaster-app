import { create } from "zustand";

interface State {
  sliderActive: boolean;
  setSliderActive: () => void;
}

const useStore = create<State>()((set, get) => ({
  sliderActive: false,
  setSliderActive: () => {
    if (get().sliderActive === false) {
        set(() => ({ sliderActive: true }));
        setTimeout(() => { set(() => ({ sliderActive: false }))}, 1000)
    }
  },
}));

export { useStore };
