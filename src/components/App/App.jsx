import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import { fetchImages } from "../../Gallery.api";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const onSearchChange = (value) => {
    setSearchString(value);
    setGallery([]);
    setPage(1);
  };

  const openModal = (image) => {
    setIsModalOpen(true);
    setSelectedImage(image);
  };

  useEffect(() => {
    if (!searchString) {
      return;
    }

    const fetchGallery = async () => {
      const params = {
        query: searchString,
        page,
      };

      setIsLoading(true);

      try {
        const data = await fetchImages(params);
        const images = data.results;
        setError(null);

        if (images.length < 12) {
          setIsLoadingMore(false);
        } else {
          setIsLoadingMore(true);
        }
        setGallery((prev) => [...prev, ...images]);
      } catch {
        setError("Something went wrong, please try again later");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, [searchString, page]);

  return (
    <>
      <SearchBar onSearchChange={onSearchChange} />
      <main className="main">
        <ImageGallery gallery={gallery} openModal={openModal} />
        {isLoadingMore && <LoadMoreBtn loadMore={loadMore} />}
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
      </main>

      <ImageModal
        isModalOpen={isModalOpen}
        image={selectedImage}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
