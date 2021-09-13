import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/crazy-shop-51b5f/us-central1/api", // THE API (cloud function) URL
});

export default instance;
