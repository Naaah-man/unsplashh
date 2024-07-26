import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&per_page=6`;

function Gallery() {
  const { searchTerm } = useGlobalContext();
  const result = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data;
    },
  });
  console.log(result);

  if (result.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (result.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = result.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found ...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        return (
          <img
            key={item.id}
            src={item?.urls?.regular}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
}
export default Gallery;
