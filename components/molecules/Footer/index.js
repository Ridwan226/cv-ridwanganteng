import styled from 'styled-components';
import {Texttitle} from '../../atoms';

function Footer() {
  return (
    <Container>
      <Contain>
        <WrapperContain>
          <Texttitle title="About Me" />
          <h3>
            My name is Ridwan Romadhon and I am now 23 years. I have a very good
            health condition, my educational background is quite good. I always
            give my best for every project that i did. As well as I provide
            solutions with my creative thinking
          </h3>
        </WrapperContain>
        <WrapperContain>
          <Texttitle title="Contact" />
          <h3>email : contact@ridwanromadhon.com</h3>
          <h3>WhatsApp : +62 858 1776 7241</h3>
          <h3>Address : Jl Persatuan ,gg gana no 162 Cinere Depok</h3>
        </WrapperContain>
        <WrapperContain>
          <Texttitle title="WebSite" />
          <h3>Copywrite @ 2020 by Ridwan</h3>
        </WrapperContain>
      </Contain>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: transparent;
  height: 300px;
  border-radius: 30px 30px 0px 0px;
  justify-content: center;
  /* align-items: center; */
  display: flex;
  box-shadow: 0px -5px 54px rgba(129, 209, 255, 0.55);
  @media (max-width: 670px) {
    height: auto;
  }
`;

const Contain = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: center;
  @media (max-width: 670px) {
    flex-wrap: wrap;
  }
`;

const WrapperContain = styled.div`
  width: 350px;
  /* background-color: #fff; */
  margin: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 0.5rem;
    color: #515151;
  }
`;
