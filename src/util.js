import axios from "axios";

const customInst = axios.create({
  baseURL: "https://api.unsplash.com/photos",
});

export default customInst;
