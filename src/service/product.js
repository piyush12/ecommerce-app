import axios from "../axios";

export const fetchData = () =>
  new Promise((resolve, reject) =>
    axios
      .get("/products.json")
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  );
