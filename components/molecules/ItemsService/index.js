import styled from 'styled-components';
import {IlWebDev} from '../../../assets';

function ItemsService() {
  return (
    <Container>
      <h1>Service</h1>
      <Containe>
        <IlWebDev />
        <Desc>
          I studied and made a project with several technologies such as HTML,
          CSS, PHP (Laravel, CI), JS (React Js)
        </Desc>
      </Containe>
    </Container>
  );
}

export default ItemsService;

const Container = styled.div`
  width: 359px;
  height: 562px;
  border-radius: 2rem;
  padding: 12px 20px;
  box-shadow: 0px 10px 10px rgba(102, 213, 68, 0.38);
  @media (max-width: 670px) {
    width: 100%;
    margin: 1rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }
`;

const Containe = styled.div`
  margin: 1rem;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin: 1rem;
`;
