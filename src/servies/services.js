
import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  /* baseURL: "https://pokeapi.co/api/v2/pokemon", */
  baseURL: "https://raw.githubusercontent.com/",
});

export default api;