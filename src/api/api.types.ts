type ProductData = {
  name: string;
  image_url: string;
  price: string;
};

export type Slot = {
  productData: ProductData;
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
