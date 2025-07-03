import MainContainer from '../components/MainContainer';
import InfoContainer from '../components/InfoContainer';

const Home = ({ onFileUploaded }) => (
  <MainContainer className="flex justify-center items-center">
    <InfoContainer
      info="Selecione ou arraste o arquivo para aqui"
      onFileUploaded={onFileUploaded}
    />
  </MainContainer>
);

export default Home;
