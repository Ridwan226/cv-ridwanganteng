import styled from 'styled-components';
import {Button} from '../../atoms';
function HeroText() {
  return (
    <Container>
      <h5>
        Saya selalu memberikan upaya terbaik untuk setiap proyek yang saya
        lakukan. Serta saya memberikan solusi dengan pemikiran kreatif saya.
      </h5>
      <h1>GRAPHIC</h1>
      <h1>AND</h1>
      <h1>Web / Apps</h1>
      <ButtonContainer>
        <Button title="Portofolio" />
        <Button type="primary" title="Educations" />
      </ButtonContainer>
    </Container>
  );
}

export default HeroText;
const ButtonContainer = styled.div`
  margin-top: 2rem;

  .readmore {
    color: #7781d4;
    background: transparent;
    border: 3px solid #81d1ff;
  }
`;
const Container = styled.div`
  padding: 1rem;

  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #88497c;
      font-weight: 700;
    }
    &:nth-of-type(3) {
      color: #651fac;
      font-weight: 700;
    }
    &:nth-of-type(4) {
      color: #3c0473;
      font-weight: 700;
    }
  }
`;
