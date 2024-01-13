type ProductData = {
  image_url: string;
  name: string;
  price: string;
  url: string;
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
