import { create } from "zustand";

const useUserStore = create((set) => ({
  allData: [],
  dataList: {},
  didAdd: false,
  setDataList: (newDataList: any) => set({ dataList: newDataList }),
  setAllData: (newDataList: any) => set({ allData: newDataList }),
  setDidAdd: () => set((state) => ({ didAdd: !state.didAdd }))
}));

export default useUserStore;
