export type Slot = {
  productData: Object;
  sku: string;
  slotId: string;
};

type Choice = {
  variations: {
    payload: {
      data: {
        slots: Slot[];
      };
    }[];
  }[];
};

export type QueryData = {
  choices: Choice[];
};
