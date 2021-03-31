import styled from 'styled-components';
import Tilt from 'react-tilt';
import HeroText from './HeroText';

function Hero() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{max: 25}}>
            <Img src="/images/hero.png" alt="" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

export default Hero;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;
const Right = styled.div``;
