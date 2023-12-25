type productDetails = {
  productId: string;
  quantity: number;
  itemPrice: number;
};

export const eventAddToCart = (skuToAdd: string, cartArr: string[]) => {
  (window as any).DY.API('event', {
    name: 'Add to Cart',
    properties: {
      dyType: 'add-to-cart-v1',
      value: 1,
      productId: skuToAdd,
      quantity: 1,
      cart: convertToDetailedArr(cartArr.concat(skuToAdd)),
    },
  });
};

export const eventRemoveFromCart = (skuToRemove: string, cartArr: string[]) => {
  const lastIndexOfSku = cartArr.lastIndexOf(skuToRemove);
  (window as any).DY.API('event', {
    name: 'Remove from Cart',
    properties: {
      dyType: 'remove-from-cart-v1',
      value: 1,
      productId: skuToRemove,
      quantity: 1,
      cart: convertToDetailedArr(cartArr.toSpliced(lastIndexOfSku, 1)),
    },
  });
};

export const eventPurcahse = (cartArr: string[]) => {
  (window as any).DY.API('event', {
    name: 'Purchase',
    properties: {
      uniqueTransactionId: crypto.randomUUID(),
      dyType: 'purchase-v1',
      value: 1,
      cart: cartArr,
    },
  });
};

const convertToDetailedArr = (arr: string[]) => {
  const detailedCartArr: productDetails[] = [];
  arr.map((sku) =>
    detailedCartArr.push({ productId: sku, quantity: 1, itemPrice: 1 })
  );
  return detailedCartArr;
};
