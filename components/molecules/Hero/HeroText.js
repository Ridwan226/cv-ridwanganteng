import styled from 'styled-components';
function HeroText() {
  return (
    <Container>
      <h5>Online Education System</h5>
      <h1>Learn</h1>
      <h1>Anything</h1>
      <h1>Anytime</h1>
      <h1>Anyware</h1>
      <ButtonContainer>
        <button className="readmore">Read More</button>
        <button>7 Day Free</button>
      </ButtonContainer>
    </Container>
  );
}

export default HeroText;
const ButtonContainer = styled.div`
  margin-top: 2rem;

  button {
    background-color: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 15px 24px -7px #7781d4;
    transition: all 0.4s ease-in-out;
    margin: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 17px 10px -11px #7781d4;
      transform: translateY(-5);
    }
  }

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
