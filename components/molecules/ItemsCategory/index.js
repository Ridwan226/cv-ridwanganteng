import styled from 'styled-components';

function ItemsCategory({image}) {
  return (
    <Container
      style={{
        backgroundImage: `url("${image}")`,
      }}>
      <WrepperText>
        <p>Adventure</p>
      </WrepperText>
    </Container>
  );
}

export default ItemsCategory;

const Container = styled.div`
  width: 240px;
  height: 175px;
  /* background-color: red; */
  border-radius: 10px;
  margin: 1rem;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 175px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }
`;
const WrepperText = styled.div`
  background-color: #81d1ff;
  position: absolute;
  bottom: 0;
  padding: 5px 30px;
  border-radius: 0px 10px;

  p {
    font-size: 18px;
    font-weight: 400;
    color: white;
  }
`;
