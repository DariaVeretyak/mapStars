import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import './Footer.scss';

export const Footer = ({ headerRef }) => {
  const [menuOpen] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="Footer">
      <Link
        to="/header"
        onClick={() => handleScroll()}
      >
        <img
          className="Footer__logo"
          src={logo}
          alt="logo"
        />
      </Link>

      <nav
        className={
          classNames(`Footer__nav + ${menuOpen
            ? 'Footer__nav--open'
            : ''
          }`)
        }
      >
        <ul className="Footer__nav-ul">
          <li className="Footer__nav-li">
            <NavLink
              href="/privacy"
              className="Footer__link"
            >
              Privacy Policy
            </NavLink>
          </li>
          <li className="Footer__nav-li">
            <NavLink
              to="/terms"
              className="Footer__link"
            >
              Terms of Service
            </NavLink>
          </li>
          <li className="Footer__nav-li">
            <NavLink
              to="/shedule"
              className="Footer__link"
            >
              Schedule a Call
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="Footer__social-links">
        <a
          className="Footer__social-link Footer__social-link--facebook"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
        <a
          className="Footer__social-link Footer__social-link--twitter"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
        <a
          className="Footer__social-link Footer__social-link--instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
        <a
          className="Footer__social-link Footer__social-link--linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  headerRef: PropTypes.string.isRequired,
};
