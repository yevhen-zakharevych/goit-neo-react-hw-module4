import style from "./ImageCard.module.css";

function ImageCard({ image }) {
  return (
    <div>
      <img
        className={style.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;
