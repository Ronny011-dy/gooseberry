type productDetails = {
  itemPrice: number;
  productId: string;
  quantity: number;
};

export const eventAddToCart = (skuToAdd: string, cartArr: string[]) => {
  (window as any).DY.API('event', {
    name: 'Add to Cart',
    properties: {
      cart: convertToDetailedArr(cartArr.concat(skuToAdd)),
      dyType: 'add-to-cart-v1',
      productId: skuToAdd,
      quantity: 1,
      value: 1
    }
  });
};

export const eventRemoveFromCart = (skuToRemove: string, cartArr: string[]) => {
  const lastIndexOfSku = cartArr.lastIndexOf(skuToRemove);
  (window as any).DY.API('event', {
    name: 'Remove from Cart',
    properties: {
      cart: convertToDetailedArr(cartArr.toSpliced(lastIndexOfSku, 1)),
      dyType: 'remove-from-cart-v1',
      productId: skuToRemove,
      quantity: 1,
      value: 1
    }
  });
};

export const eventPurchase = (cartArr: string[]) => {
  (window as any).DY.API('event', {
    name: 'Purchase',
    properties: {
      cart: cartArr,
      dyType: 'purchase-v1',
      uniqueTransactionId: crypto.randomUUID(),
      value: 1
    }
  });
};

const convertToDetailedArr = (arr: string[]) => {
  const detailedCartArr: productDetails[] = [];
  arr.map((sku) => detailedCartArr.push({ itemPrice: 1, productId: sku, quantity: 1 }));
  return detailedCartArr;
};
