function getAPI({ req }) {
  const apiKey = "1ba672a9";
  const API = `https://www.omdbapi.com/?apikey=${apiKey}&${req}`;
  return API;
}

export default getAPI;
