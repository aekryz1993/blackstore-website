import { InputButton } from "../../../../../../../../styles/components/Input";
import { ImageInputContainer } from "./style";
import { ImageInputTypes } from "./type";

const ImageInput = ({ onFileChange, image, fileRef }: ImageInputTypes) => {
  return (
    <ImageInputContainer
      image={image}
      className="flex justify-center items-center w-full h-24"
    >
      <InputButton
        type="file"
        name="file"
        content="Upload product picture"
        onChange={onFileChange}
        ref={fileRef}
      />
    </ImageInputContainer>
  );
};

export default ImageInput;
