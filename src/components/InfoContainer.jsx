import BasicContainer from "./BasicContainer";
import Button from "./Button";
import FileChooser from "./FileChooser";

const InfoContainer = ({ info, btnLabel, onFileUploaded }) => {
  return (
    <BasicContainer className="flex flex-col justify-around items-center">
      <p className="text-xl text-center">{info}</p>

      {btnLabel ? <Button label={btnLabel} /> : <FileChooser onSuccess={onFileUploaded} />}
      
    </BasicContainer>
  );
};

export default InfoContainer;
