import axios from "axios";

export const KEY = ""; // Your Api Key Here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
