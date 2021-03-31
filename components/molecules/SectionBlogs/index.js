import styled from 'styled-components';
import {Texttitle} from '../../atoms';
import {Player, Controls} from '@lottiefiles/react-lottie-player';
import {AnimBlogs} from '../../../assets';
import {ItemsCategory} from '..';
function SectionBlogs() {
  return (
    <Containet>
      <WrapperText>
        <Texttitle title="Blogs" />
      </WrapperText>
      <WrapperContaine>
        <Left>
          <Player
            autoplay
            loop
            src={AnimBlogs}
            style={{height: '500px', width: '500px'}}></Player>
        </Left>
        <Right>
          <ItemsCategory image="https://placeimg.com/640/480/any" />
          <ItemsCategory image="https://placeimg.com/640/480/any" />
          <ItemsCategory image="https://placeimg.com/640/480/any" />
          <ItemsCategory image="https://placeimg.com/640/480/any" />
        </Right>
      </WrapperContaine>
    </Containet>
  );
}

export default SectionBlogs;

const Containet = styled.div`
  justify-content: center;
  height: 70vh;
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
  max-width: 1080px;
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
`;
const Left = styled.div`
  width: 30%;
  justify-content: center;
  align-items: center;
  z-index: 1; /* background-color: red; */
  @media (max-width: 670px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 670px) {
    width: 100%;
  }
`;
