import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mediaQuery from '@/utils/units/mediaQuery';
import useResize from '@/hooks/useResize';
import styled from 'styled-components';
import logo from '@/assets/images/whitegym-logo.jpeg';

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 var(--space-3xl);
    transition: all 300ms ease;
    min-height: 100px;
    margin: 0 auto;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-right: var(--space-3xl);

    a:hover {
      opacity: 1;
    }

    img {
      transition: all 300ms ease;
      width: 270px;
    }
  }

  .menu {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 200px;

    .menu-item {
      cursor: pointer;
      text-transform: capitalize;
      transition: all 400ms ease;
      font-family: 'Montserrat Medium';
      font-size: var(--font-size-md);
      padding: 0px var(--space-xl);
      color: var(--color-gray-700);

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .scrolling {
    .container {
      min-height: 70px;
    }

    .logo {
      img {
        width: 80px;
      }
    }
  }

  ${mediaQuery['belowDesktop']} {
    .container {
      width: calc(100% - 40px);
      margin: 0 var(--space-2sm);
    }
  }
`;

const HeaderMobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 60px;

  .logo {
    margin-right: 0;

    img {
      padding: var(--space-3xs) 0;
      width: 70px;
    }
  }

  .menu-toggle {
    cursor: pointer;
    overflow: hidden;
    width: var(--space-lg);
    height: var(--space-lg);
    background: var(--color-white);
    position: absolute;
    right: var(--space-sm);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .line-toggle {
    position: absolute;
    display: block;
    width: var(--space-lg);
    height: var(--obj-radius-xs);
    background: var(--color-gray-750);
    border-radius: var(--obj-radius-xs);
    transition: all 400ms;
  }

  .line-toggle:first-child {
    transform: translateY(-7px) translateX(4px);
    width: var(--space-sm);
    transition-delay: 0s;
  }

  .menu-toggle .line-toggle:nth-child(2) {
    transition-delay: 0.12s;
  }

  .line-toggle:last-child {
    transform: translateY(7px) translateX(7px);
    width: 10px;
    transition-delay: 0s;
  }

  .menu-toggle.expanded .line-toggle:first-child {
    background: var(--color-gray-750);
    transform: translateY(0) translateX(0) rotate(45deg);
    width: var(--space-lg);
    height: var(--obj-radius-xs);
    transition-delay: 0.1s;
  }

  .menu-toggle.expanded .line-toggle:nth-child(2) {
    transform: translateX(110px);
    transition-delay: 0s;
  }

  .menu-toggle.expanded .line-toggle:last-child {
    background: var(--color-gray-750);
    transform: translateY(0) translateX(0) rotate(314deg);
    width: var(--space-lg);
    height: var(--obj-radius-xs);
    transition-delay: 0.1s;
  }
`;

const menus = [
  {
    name: 'Prices',
    url: '/prices',
  },
  {
    name: 'Personal Trainer',
    url: '/personal-trainer',
  },
  {
    name: 'Suplements',
    url: '/suplements',
  },
  {
    name: 'Equipments',
    url: '/equipments',
  },
];

const HeaderMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <HeaderMobileWrapper>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="thuc-logo" />
        </Link>
      </div>

      <div className={`menu-toggle ${toggle ? 'expanded' : ''}`} onClick={() => setToggle(!toggle)}>
        <span className="line-toggle" />
        <span className="line-toggle" />
        <span className="line-toggle" />
      </div>
    </HeaderMobileWrapper>
  );
};

const HeaderDesktop = () => (
  <div className="container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="whitegym-logo" />
      </Link>
    </div>

    <div className="menu">
      {menus.map(({ name, url }, idx) => {
        return (
          <div className="menu-item" key={idx}>
            <Link to={url}>{name}</Link>
          </div>
        );
      })}
    </div>
  </div>
);

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const { isMobile } = useResize();

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (scrollY > 150) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, isMobile]);

  return (
    <HeaderWrapper>
      <div className={isScroll ? 'scrolling' : null}>
        {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
