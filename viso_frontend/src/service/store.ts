import { create } from "zustand";
import { EntityDataType } from "./entity.interface";

interface UserStoreState {
  allData: EntityDataType[];
  dataList: EntityDataType;
  didAdd: boolean;
  setDataList: (newDataList: EntityDataType) => void;
  setAllData: (newDataList: EntityDataType[]) => void;
  setDidAdd: () => void;
}

const useUserStore = create<UserStoreState>((set) => ({
  allData: [],
  dataList: {
    __typename: "",
    id: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
    contactEmail: ""
  },
  didAdd: false,
  setDataList: (newDataList) => set({ dataList: newDataList }),
  setAllData: (newDataList) => set({ allData: newDataList }),
  setDidAdd: () => set((state) => ({ didAdd: !state.didAdd }))
}));

export default useUserStore;
