import { ERROR404, ERROR500 } from "../../constant/routes";
import { ICartItemResponse, IViewCartResponse } from "../../model/IProductType";

export const getOfferPrice = (price: number = 0, offer: number = 0) => {
  let formattedPrice = price - (price * offer) / 100;
  return formattedPrice?.toFixed();
};
export function generateRandomId(length: number) {
  let tempId = Math.random().toString();
  let uid = tempId.substr(2, length);
  return uid;
}

export const LoggedInUser = localStorage.getItem("user-login");
export const LoggedInProf = localStorage.getItem("player-login");

export default function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const removeChar = (item: string) => {
  return item?.replace(/[^a-zA-Z ]/g, "")?.replace(/ /g, "");
};

export const dateInPast = function (firstDate: any, secondDate: any) {
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  }

  return false;
};

export const handleErrorResponse = (error: any) => {
  if (error.response) {
    switch (error.response.status) {
      case 500: {
        window.location.href = ERROR500;
        break;
      }
      case 404: {
        window.location.href = ERROR404;
        break;
      }
      default:
        window.location.href = ERROR500;
    }
  }
};
export const getUrl = (hostName: string, item: any) => {
  let url = hostName;

  for (let value of Object.values(item)) {
    if (!!value) {
      url += `/${removeChar(value as string)}`;
    }
  }

  return url;
};

const findTotal = (cartItem: ICartItemResponse[]) => {
  let totalPrice = cartItem.reduce(function (accumulator, item) {
    return accumulator + item.subTotal;
  }, 0);

  return totalPrice;
};

const findTax = (cartItem: ICartItemResponse[]) => {
  let totalPrice = cartItem.reduce(function (accumulator, item) {
    return accumulator + item.tax;
  }, 0);

  return totalPrice;
};

const getExistingItem = (
  cartItems: ICartItemResponse[] | any,
  mcid: number,
  size: string
) => {
  let products: ICartItemResponse[] = [];
  const parcedupdatedCartItems = JSON.parse(cartItems);
  products = parcedupdatedCartItems.cartItem;

  const existingCartItemIndex = products.findIndex(
    (item: ICartItemResponse) =>
      item.productInfo.productCode === mcid && item.productInfo.size === size
  );

  const existingCartItem = products[existingCartItemIndex];

  const details = {
    products,
    existingCartItemIndex,
    existingCartItem,
  };

  return details;
};

export const updateLocalCart = (selectedProduct: any) => {
  let cartItems = localStorage.getItem("cartItems") as any;
  let products: ICartItemResponse[] = [];
  let updatedItems;

  // Already pdts available in local storage
  if (cartItems) {
    // Parsing cart items in local storage
    const existingItemDetails = getExistingItem(
      cartItems,
      selectedProduct.productInfo.productCode,
      selectedProduct.productInfo.size
    );

    const {
      products: cartProducts,
      existingCartItemIndex,
      existingCartItem,
    } = existingItemDetails;

    products = cartProducts;

    // Updating existing state
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + selectedProduct.quantity,
        subTotal: existingCartItem.subTotal + selectedProduct.subTotal,
        tax: existingCartItem.tax + selectedProduct.tax,
      };
      updatedItem.productInfo.qty =
        updatedItem.productInfo.qty + selectedProduct.productInfo.qty;
      updatedItems = [...products];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // Adding new pdt
    else {
      updatedItems = products.concat(selectedProduct);
    }
  }
  // adding new pts
  else {
    updatedItems = products.concat(selectedProduct);
  }

  const updatedCartItems: IViewCartResponse = {
    orderNumber: 0,
    cartItem: [...updatedItems],
    totalPrice: findTotal(updatedItems),
    addId: 0,
    tax: findTax(updatedItems),
  };

  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};

export const RemoveItem = (mcId: number, size: string) => {
  let cartItems = localStorage.getItem("cartItems") as any;
  let products: ICartItemResponse[] = [];
  let updatedItems;

  const existingItemDetails = getExistingItem(cartItems, mcId, size);
  const {
    products: cartProducts,
    existingCartItemIndex,
    existingCartItem: existingItem,
  } = existingItemDetails;
  products = cartProducts;

  if (existingItem?.quantity === 1) {
    products.splice(existingCartItemIndex, 1);
    updatedItems = [...products];
  } else {
    const taxValue = existingItem.tax
      ? existingItem.tax / existingItem.quantity
      : 0;

    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity - 1,
      subTotal: existingItem.subTotal - existingItem.productInfo.price,
      tax: existingItem.tax ? taxValue * (existingItem.quantity - 1) : 0,
    };

    updatedItem.productInfo.qty = existingItem.quantity - 1;
    updatedItems = [...products];
    updatedItems[existingCartItemIndex] = updatedItem;
  }

  const updatedCartItems: IViewCartResponse = {
    orderNumber: 0,
    cartItem: [...updatedItems],
    totalPrice: findTotal(updatedItems),
    addId: 0,
    tax: findTax(updatedItems),
  };

  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};

export const DeleteItem = (mcId: number, size: string) => {
  let cartItems = localStorage.getItem("cartItems") as any;
  let products: ICartItemResponse[] = [];
  let updatedItems;

  if (cartItems) {
    const existingItemDetails = getExistingItem(cartItems, mcId, size);

    const {
      products: cartProducts,
      existingCartItemIndex,
      existingCartItem,
    } = existingItemDetails;

    products = cartProducts;

    if (existingCartItem) {
      products.splice(existingCartItemIndex, 1);
      updatedItems = [...products];
    } else {
      updatedItems = [...products];
    }
  } else {
    updatedItems = [...products];
  }

  const updatedCartItems: IViewCartResponse = {
    orderNumber: 0,
    cartItem: [...updatedItems],
    totalPrice: findTotal(updatedItems),
    addId: 0,
    tax: findTax(updatedItems),
  };

  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};

export const getProductDetails = (productDetails: any, updatedProduct: any) => {
  const priceValue = getOfferPrice(
    updatedProduct.price,
    productDetails.offer
  ) as any;

  const productInfo = {
    productCode: productDetails.mcId,
    productName: productDetails.productname,
    price: priceValue,
    offer: productDetails.offer,
    imageurl: productDetails.imageurl,
    sPhone: productDetails.phone,
    enddate: productDetails.date,
    size: updatedProduct.size,
    color: productDetails.productcolor,
    descpription: productDetails.descpription,
    cartId: Math.trunc(Math.random()),
    qty: +updatedProduct.qty,
    minqty: productDetails.minqty,
  };

  return {
    productInfo,
    quantity: updatedProduct.qty,
    subTotal: updatedProduct.qty * priceValue,
    deduction: 0,
    tax: productDetails.tax
      ? productDetails.tax * updatedProduct.qty
      : productDetails.tax,
  };
};
export const capitalizeFirstLetter = (item: string) => {
  const arr = item?.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] =
      arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLocaleLowerCase();
  }

  const transformedString = arr.join(" ");

  return transformedString;
};

export const getProductHeader = (mtName: string, pageHeader: any) => {
  let title = capitalizeFirstLetter(mtName);

  for (let value of Object.values(pageHeader)) {
    if (!!value) {
      title += ` / ${capitalizeFirstLetter(value as string)}`;
    }
  }

  return title;
};
