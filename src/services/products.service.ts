export const getAllProductsList = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch("https://fakestoreapi.com/products", requestOptions).then((res) => res.json());
};
