import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

const notify = () => toast("Please enter text for the search");

function SearchBar({ onSearchChange }) {
  const onSubmit = (event) => {
    event.preventDefault();

    const value = event.target.elements.search.value;

    if (!value) {
      notify();
      return;
    }

    onSearchChange(value);
  };
  return (
    <header className={style.header}>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="bottom-center" />
    </header>
  );
}

export default SearchBar;
