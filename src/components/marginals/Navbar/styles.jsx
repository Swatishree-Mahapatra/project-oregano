import styled, { keyframes } from 'styled-components';

const fadeDown = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: .3;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const NavSection = styled.header`
  padding-top: 1em;
  padding-bottom: 1em;
  position: relative;
  z-index: 99999;
  .no-underline {
    color: var(--text-color-dark);
    &:hover {
      color: #fff;
    }
  }
  .navRight {
    position: relative;
  }
  .navWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navLeft {
    font-family: 'Pacifico', cursive;
  }
  .navHomeLink {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    &:hover {
    }
  }
  .navLinkList {
    display: none;
    list-style: none;
  }
  .navLinkItem {
    margin-right: 32px;
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
    }
  }
  .navLink {
    text-decoration: none;
    &:hover {
      color: var(--text-color-primary);
    }
  }
  .no-underline {
    display: flex;
    align-items: center;
  }
  @media (min-width: 759px) {
    .navLinkList {
      display: flex;
    }
  }
  @media (max-width: 759px) {
    .sponsor-sec {
      display: none;
    }
  }
`;

export const StyledMobileNav = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #17171d;
  z-index: 9999;
  animation: ${fadeDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  .mobile-nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }
  .linkList {
    list-style-type: none;
  }
  .listItem {
    text-align: center;
    margin-bottom: 1em;
  }
  .link {
    font-size: 1.2em;
    text-decoration: none;
  }
`;

export const StyledHamburger = styled.button`
  height: 2em;
  width: 2em;
  background: inherit;
  display: block;
  padding: 0.5em;
  border: 1px solid #fff;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    background: #fff;
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    right: 0;
    transition: all 0.25s;
  }
  &:active,
  &:focus {
    outline-color: #fff;
  }
  &::before {
    top: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(40deg)' : null)};
  }
  &::after {
    width: ${({ menuOpen }) => (menuOpen ? '100%' : '80%')};
    bottom: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-40deg)' : null)};
  }
  @media all and (min-width: 758px) {
    display: none;
  }
`;
