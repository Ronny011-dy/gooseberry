export const eventAddToCart = (skuToAdd: string, cartArr: string[]) => {
  (window as any).DY.API('event', {
    name: 'Add to Cart',
    properties: {
      dyType: 'add-to-cart-v1',
      value: 1,
      productId: skuToAdd,
      quantity: 1,
      cart: cartArr.concat(skuToAdd),
    },
  });
};
