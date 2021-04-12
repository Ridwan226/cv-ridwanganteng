import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Logo} from '../../../assets';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <ImageLogo />
        <Hamburger>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon style={{color: '#F774C5'}} />
          </IconButton>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <Link href="/" passHref>
              <MenuLink>Home</MenuLink>
            </Link>
            <Link href="/">
              <MenuLink>Portofolio</MenuLink>
            </Link>

            <Link href="/">
              <MenuLink>Educations</MenuLink>
            </Link>

            <Link href="/blog">
              <MenuLink>Blogs</MenuLink>
            </Link>

            <Button>Hear Now</Button>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const ImageLogo = styled(Logo)`
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1080px;
  margin: auto;
  padding: 2rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1 rgba(0, 0, 0, 0.6);
    max-height: ${({isOpen}) => (isOpen ? '300px' : '0')};
    width: 100%;
    transition: max-height 0.3s ease-in-out;

    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    /* padding: 0.3rem; */
    flex-direction: column;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #858586;
  font-size: 0.9rem;
  padding: 0.7rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;

  &:hover {
    color: #7781d4;
    background: #e7e9fc;
    cursor: pointer;
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  background: #f774c5;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 15px 24px -7px #ecb6d7;
  transition: all 0.2s ease-in;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    /* padding: 0.3rem; */
  }
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
