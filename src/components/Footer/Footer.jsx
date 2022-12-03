import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../images/logo.svg';
import './Footer.scss';

export const Footer = () => {
  const [menuOpen] = useState(false);

  return (
    <div className="Footer">
      <a
        href="#header"
      >
        <img
          className="Footer__logo"
          src={logo}
          alt="logo"
        />
      </a>

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
    </div>
  );
};
