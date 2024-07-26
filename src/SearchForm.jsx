import { useGlobalContext } from "./context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          id="search"
          placeholder="cat"
        />
        <button type="submit" name="bittun" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}
export default SearchForm;
