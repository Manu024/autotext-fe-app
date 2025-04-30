const fetchPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      return { data: data, isSuccess: true }; // Return the fetched data
    }
  } catch (err) {
    return { data: null, isSuccess: false };
  }
};

const fetchWeather = async (city) => {
  const apiKey = process.env.REACT_APP_APIKEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.cod === 200) {
      return { data: data, isSuccess: true }; // Return the fetched data
    }
  } catch (err) {
    return { data: null, isSuccess: false };
  }
};

export { fetchPosts, fetchWeather };
