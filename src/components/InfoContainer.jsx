import BasicContainer from "./BasicContainer";
import Button from "./Button";
import FileChooser from "./FileChooser";

const InfoContainer = ({ info, btnLabel }) => {
  return (
    <BasicContainer className="flex flex-col justify-around items-center">
      <p className="text-[var(--primary)] text-xl text-center">{info}</p>

      {btnLabel ? <Button label={btnLabel} /> : <FileChooser />}
      
    </BasicContainer>
  );
};

export default InfoContainer;
