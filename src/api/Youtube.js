import axios from "axios";

export const KEY = "AIzaSyC_4-9T7dArsfQixLyiOIkYsSnlZ8JJl8k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
