import MainContainer from "./components/MainContainer";
import BasicContainer from "./components/BasicContainer"
import InfoContainer from "./components/InfoContainer";

const App = () => {
  return (
    <div className="w-2xl">
      <h1 className="text-3xl text-[var(--primary)] mb-6">
        Bem vindo ao site para automatizar suas finanças
      </h1>
      <MainContainer>
        <InfoContainer
          info="Selecione ou arraste o arquivo para aqui"
        />
      </MainContainer>
    </div>
  );
};

export default App;
