import MainContainer from '../components/MainContainer';
import ShowData from '../components/ShowData';

const Result = ({ data }) => (
  <MainContainer>
    {data ? <ShowData data={data} /> : <p>Nenhum dado disponível.</p>}
  </MainContainer>
);

export default Result;
