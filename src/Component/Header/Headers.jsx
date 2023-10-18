import React from 'react';
import { Container, Row, Button, Nav } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import one from './../../assets/images/oneimage.jpg';
import './Header.css';
const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About Us'
  },
  {
    path: '/career',
    display: 'Career'
  }, {
    path: '/offers',
    display: 'Offers'
  },
  {
    path: '/blog',
    display: 'Blog'
  }, {
    path: '/faq',
    display: 'FAQ'
  },
  {
    path: '/contact',
    display: 'Contact Us'
  }

]
const Headers = () => {
  return <header className='header'>
    <Container>
      <Row>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={one} alt='' />
          </div>
          {/* ======================= menu start =========================== */}
          <div className='navigation'>
            <ul className='menu d-flex align-tems-center gap-5'>
              {
                nav__links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink 
                    to={item.path} 
                    className={navClass =>
                     navClass.isActive ? 'active__link': ''
                     }>
                      {item.display}</NavLink>
                  </li>
                ))

              }

            </ul>

          </div>



          {/* ======================= menu end =========================== */}
          {/* ======================= menu end =========================== */}
          {/* ======================= menu end =========================== */}
          <div className='nav__right d-flex align-items-center gap-4'>
            <div className='nav__btns d-flex align-items-center gap-4'>
              <Button className='btn primary__btn'>
                <Link to='./login'>Apply </Link>

              </Button>
              <span className='mobile__menu'>
                <i class="ri-menu-line"></i>
              </span>

            </div>
          </div>

        </div>
      </Row>
    </Container>
  </header>


}

export default Headers;
