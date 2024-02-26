import { ImageButtonProps } from "../types";

export default function ImageButton({ image, onClick }: ImageButtonProps) {
  return (
    <button className="imageButton" onClick={onClick}>
      <img className="img" src={image} alt="click me" />
    </button>
  );
}
