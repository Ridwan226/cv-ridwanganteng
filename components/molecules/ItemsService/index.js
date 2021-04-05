import styled from 'styled-components';
import {IlWebDev, IlAppsDev, IlUiUx} from '../../../assets';
import {Button} from '../../atoms';

const ImageIl = ({title}) => {
  switch (title) {
    case 'Web Development':
      return <IlWebDev />;
    case 'Apps Development':
      return <IlAppsDev />;
    case 'Design and UI / UX':
      return <IlUiUx />;
    default:
      return <IlWebDev />;
  }
  return <IlWebDev />;
};

function ItemsService({title, description}) {
  return (
    <Container>
      <h1>{title}</h1>
      <Containe>
        <ImageIl title={title} />
        <Desc>{description}</Desc>
        <ButtonContainer>
          <Button type="primary" title="Portofolio" />
          <Button type="primary" title="Hire Now" />
        </ButtonContainer>
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
  box-shadow: 0px 10px 10px rgba(129, 209, 255, 0.55);
  @media (max-width: 670px) {
    width: 100%;
    margin: 1rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    color: #3c0473;
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
  color: #515151;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
