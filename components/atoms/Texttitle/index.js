import styled from 'styled-components';
function Texttitle({title}) {
  return (
    <>
      <TitleText>{title}</TitleText>
    </>
  );
}

export default Texttitle;

const TitleText = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;
