import Lottie from 'react-lottie';
import styled from 'styled-components';
import {ItemsCategory} from '..';
import {AnimBlogs} from '../../../assets';
import {Texttitle} from '../../atoms';

function SectionBlogs() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimBlogs,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Containet>
      <WrapperText>
        <Texttitle title="Blogs" />
      </WrapperText>
      <WrapperContaine>
        <Left>
          <Lottie options={defaultOptions} width={400} />
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
