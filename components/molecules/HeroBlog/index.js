import styled from 'styled-components';
import Searchblog from './Searchblog';

function HeroBlog() {
  return (
    <Conteiner>
      <WrapperContain>
        <h1>Write What You Want To Search</h1>
        <div>
          <Searchblog />
        </div>
      </WrapperContain>
    </Conteiner>
  );
}

export default HeroBlog;

const Conteiner = styled.div`
  height: 40vh;
  justify-content: center;
  align-items: center;
  display: flex;

  h1 {
    font-weight: 500;
    color: #515151;
    text-align: center;
  }

  @media (max-width: 670px) {
    display: none;
  }
`;

const WrapperContain = styled.div`
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
