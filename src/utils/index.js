// add to cart

export const addtoCart = (state, currentProduct) => {
  const isProductExist = state.find(
    product => product.id === currentProduct.id
  );

  if (isProductExist) {
    const addQuantity = state.map(product => {
      if (product.id === currentProduct.id) {
        const quantity = {
          ...product,
          quantity: product.quantity + 1
        };
        return quantity;
      } else {
        return product;
      }
    });
    return [...addQuantity];
  } else {
    const quantity = {
      ...currentProduct,
      quantity: 1
    };
    return [...state, quantity];
  }
};

// remove from cart

export const removeFromCart = (state, currentProduct) => {
  const isProductExist = state.find(item => item.id === currentProduct.id);
  if (isProductExist.quantity > 1) {
    const filteredProduct = state.map(item => {
      if (item.id === currentProduct.id) {
        const newQuantity = {
          ...item,
          quantity: item.quantity - 1
        };
        return newQuantity;
      } else {
        return item;
      }
    });
    return filteredProduct;
  }
};

export const deleteFromCart = (state, currentProduct) => {
  const isProductExist = state.find(item => item.id === currentProduct.id);
  if (isProductExist) {
    const removedFilterd = state.filter(item => item.id !== currentProduct.id);
    return removedFilterd;
  }
};

// cart Total

export const cartTotal = cart => {
  let total = 0;
  cart.forEach(item => {
    total = total + item.quantity;
  });
  return total;
};

export const cartTotalPrice = cart => {
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice = totalPrice + item.price * item.quantity;
  });

  return totalPrice;
};

// filter products

export const filterProducts = (items, filterBy) => {
  const getItems = items.filter(item =>
    filterBy.find(f => item.availableSizes.find(i => i === f))
  );
  if (filterBy.length > 0) {
    return [...getItems];
  }
  return items;
};
