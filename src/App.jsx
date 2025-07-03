import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

const App = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleFileUploaded = (fileData) => {
    setData(fileData);
    navigate("/resultado");
  };

  return (
    <div className="w-2xl">
      <h1 className="text-3xl text-[var(--primary)] mb-6">
        Bem vindo ao site para automatizar suas finanças
      </h1>
      <Routes>
        <Route path="/" element={<Home onFileUploaded={handleFileUploaded} />} />
        <Route path="/resultado" element={<Result data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
