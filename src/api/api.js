const host = "http://localhost:8700/api";
// const host = "https://shoeshop-0oo7.onrender.com/api";
const LoginRoute = `${host}/users/login`;
const RegisterRoute = `${host}/users/register`;
const productsRoute = `${host}/products/new`;
const AllproductRoute = `${host}/products/allproducts`;
const singleRoute = `${host}/products/single`;
const ordersRoute = `${host}/order/neworder`;
const getOrders = `${host}/order/getorder`;

export {
  host,
  LoginRoute,
  productsRoute,
  AllproductRoute,
  singleRoute,
  RegisterRoute,
  ordersRoute,
  getOrders,
};
