import styled from 'styled-components';
import ItemsService from '../ItemsService';
import {Button, Texttitle} from '../../atoms';

function SectionService() {
  return (
    <Container>
      <WrapperText>
        <Texttitle title="Services" />
      </WrapperText>
      <WrapperContaine>
        <ItemsService
          title="Web Development"
          description="I studied and made a project with several 
technologies such as
HTML, CSS, PHP (Laravel, CI), JS (React Js)"
        />
        <ItemsService
          title="Apps Development"
          description="To Create a Mobile Apps Project I 
usually use and study React Native as 
a manufacturing technology"
        />
        <ItemsService
          title="Design and UI / UX"
          description="To make work easier at the beginning,
 I usually design a flow system 
with Figma, Draw.io"
        />
      </WrapperContaine>
    </Container>
  );
}

export default SectionService;

const Container = styled.div`
  justify-content: center;
  height: 80vh;
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
