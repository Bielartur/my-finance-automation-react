import { useState } from "react";
import MainContainer from "./components/MainContainer";
import InfoContainer from "./components/InfoContainer";
import ShowData from "./components/ShowData";

const App = () => {
  const [data, setData] = useState(null);

  return (
    <div className="w-2xl">
      <h1 className="text-3xl text-[var(--primary)] mb-6">
        Bem vindo ao site para automatizar suas finanças
      </h1>
      <MainContainer className={data? "" : "flex justify-center items-center"}>
        {data ? (
          <ShowData data={data}/>
        ) : (
          <InfoContainer
            info="Selecione ou arraste o arquivo para aqui"
            onFileUploaded={setData}
          />
        )}
      </MainContainer>
    </div>
  );
};

export default App;
