import styled from 'styled-components';

function Button({type, title, onClick}) {
  return (
    <ButtonItem
      className={`${type === 'primary' ? 'readmore' : null}`}
      onClick={onClick}>
      {title}
    </ButtonItem>
  );
}

export default Button;

const ButtonItem = styled.button`
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

  .readmore {
    color: #7781d4;
    background: transparent;
    border: 2px solid #81d1ff;
  }
`;
