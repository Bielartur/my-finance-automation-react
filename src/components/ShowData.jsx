import { useState } from "react";
import BasicContainer from "./BasicContainer";

const ShowData = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const totalMaioresCustos = data.data.biggests_costs;
  const maioresCustos = totalMaioresCustos.slice(0, visibleCount);
  console.log("Atualizou");
  console.log(visibleCount)

  return (
    <>
      <section className="w-full">
        <h2 className="text-[1.6rem]">Maiores despesas</h2>
        <h3 className="text-[1.2rem]">Produtos</h3>
        <BasicContainer>
          <ul>
            {maioresCustos.map((item, idx) => (
              <li key={idx}>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
          {visibleCount < totalMaioresCustos.length && (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
              onClick={() =>
                setVisibleCount((prev) =>
                  // não ultrapassar o tamanho total
                  Math.min(prev + 5, totalMaioresCustos.length)
                )
              }
            >
              Mostrar mais
            </button>
          )}
        </BasicContainer>
      </section>
    </>
  );
};

export default ShowData;
