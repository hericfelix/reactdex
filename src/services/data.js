import axios from "axios";

const data = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default data;
