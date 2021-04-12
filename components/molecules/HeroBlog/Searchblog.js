import styled from 'styled-components';
import {Button} from '../../atoms';

export default function Searchblog() {
  return (
    <Container>
      <InputForm type="text" placeholder="Type anything here ..." />
      <Button title="Search" />
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  width: 585px;
  padding: 18px;
  border-radius: 0.7rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 14px 22px 8px rgba(129, 209, 255, 0.55);
`;

const InputForm = styled.input`
  background-color: #e0e0e0;
  padding: 0.5rem 21px;
  border: none;
  border-radius: 2rem;
  width: 427px;

  &:focus {
    outline: none;
    box-shadow: 0px 7px 22px 8px rgba(129, 209, 255, 0.55);
  }
`;
