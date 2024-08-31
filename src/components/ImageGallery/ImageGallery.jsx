import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

function ImageGallery({ gallery, openModal }) {
  return (
    <ul className={style.list}>
      {gallery.map((image) => (
        <li
          key={image.id}
          className={style.item}
          onClick={() => openModal(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
