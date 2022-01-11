import axios from "axios";

const cries = axios.create({
  baseURL: "https://pokemoncries.com/cries/",
});

export default cries;
