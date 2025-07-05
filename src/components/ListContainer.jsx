import { useState } from "react";
import BasicContainer from "./BasicContainer";

const ListContainer = ({ title, data }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [verMais, setVerMais] = useState(false);

  const totalLista = data;
  console.log(data)
  const lista = totalLista.slice(0, visibleCount);

  return (
    <div>
          <h3 className="text-xl mb-1">{title}</h3>
          <BasicContainer
            btn={true}
            verMais={verMais}
            className="min-w-full w-84"
            onClick={() => {
              // alterna verMais
              setVerMais(!verMais);
              // incrementa em 5, sem ultrapassar o total
              let cont = verMais ? -5 : 5;
              setVisibleCount((prev) =>
                Math.min(prev + cont, totalLista.length)
              );
            }}
          >
            <ul>
              {lista.map((item, idx) => {
                const cleanTitle = item.title.includes(" - ")
                  ? item.title.split(" - ")[0]
                  : item.title;

                return (
                  <li
                    key={idx}
                    className="list-disc ml-3 w-full flex justify-between leading-7"
                  >
                    <span>{cleanTitle}</span>
                    <span className="w-21">R$ {item.amount}</span>
                  </li>
                );
              })}
            </ul>
            <button className="mostrar-tudo-btn">Mostrar tudo</button>
          </BasicContainer>
        </div>
  )
}

export default ListContainer;