import styled from 'styled-components';
import ItemsService from '../ItemsService';
import {Texttitle} from '../../atoms';

function SectionService() {
  return (
    <Container>
      <WrapperText>
        <Texttitle title="Services" />
      </WrapperText>
      <WrapperContaine>
        <ItemsService />
        <ItemsService />
        <ItemsService />
      </WrapperContaine>
    </Container>
  );
}

export default SectionService;

const Container = styled.div`
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-self: center;
  @media (max-width: 670px) {
    height: auto;
    /* padding: 1rem; */
  }
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
`;

const WrapperContaine = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  @media (max-width: 670px) {
    width: 100%;
  }
`;
