import { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  const url = 'https://yt-api.p.rapidapi.com/home';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '54872b3296msh002c6b1243f63a3p1ded80jsn5590c1203a1b',
      'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
  };

  const fetchYoutubeData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result.filters || []); // Assuming filters is the array you want

      const fetchData = result.data.map((item) => console.log(item.data))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchYoutubeData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <span>{item.data || "No data available"}</span>
              <a href={item.url || "#"}>{item.filter || "No filter name"}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
