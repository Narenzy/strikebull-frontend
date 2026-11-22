import { create } from "zustand";

import type { ContactPlanId, ContactRequestType } from "@/types/contact";

type ContactRequestStore = {
  selectedPlanId: ContactPlanId;
  requestType: ContactRequestType;

  setSelectedPlanId: (planId: ContactPlanId) => void;
  setRequestType: (type: ContactRequestType) => void;
  resetRequest: () => void;
};

export const useContactRequestStore = create<ContactRequestStore>((set) => ({
  selectedPlanId: null,
  requestType: "contact",

  setSelectedPlanId: (planId) => {
    set({ selectedPlanId: planId });
  },

  setRequestType: (requestType) => {
    set({ requestType });
  },

  resetRequest: () => {
    set({
      selectedPlanId: null,
      requestType: "contact",
    });
  },
}));
