import { useState } from "react";
import MainContainer from "./components/MainContainer";
import InfoContainer from "./components/InfoContainer";

const App = () => {
  const [data, setData] = useState(null);

  return (
    <div className="w-2xl">
      <h1 className="text-3xl text-[var(--primary)] mb-6">
        Bem vindo ao site para automatizar suas finanças
      </h1>
      <MainContainer>
        {data ? (
          <pre className="whitespace-pre-wrap text-left">
            {JSON.stringify(data, null, 2)}
          </pre>
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
