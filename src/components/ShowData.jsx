import ListContainer from "./ListContainer";

const ShowData = ({ data }) => {

  return (
    <>
      <h2 className="text-[1.6rem]">Maiores despesas</h2>
      <section className="w-full flex justify-around">
        <ListContainer
          title="Produtos"
          data={data.data.biggests_costs}
        />

        <ListContainer 
          title="Categorias"
          data={data.data.biggests_costs_category.categories}
        />
      </section>
      <section>
        <h2 className="mt-4 text-[1.6rem]">Gráficos</h2>

      </section>
    </>
  );
};

export default ShowData;
