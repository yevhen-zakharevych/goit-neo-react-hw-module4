import axios from "axios";

export async function fetchImages(options) {
  const params = {
    client_id: "WZVSOlpEawZc0gg5Cf3WcrdYTfWpnqZRqVjVJSVs7Wo",
    per_page: 12,
    ...options,
  };

  const response = await axios.get("https://api.unsplash.com/search/photos", {
    method: "GET",
    params,
  });

  return response.data;
}
