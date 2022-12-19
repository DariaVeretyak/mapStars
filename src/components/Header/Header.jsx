import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import logoWhite from '../../images/logo-white.svg';
import './Header.scss';

export const Header = ({
  getStarted,
  techRef,
  advantagesRef,
  howWorkRef,
  packagesRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (ref) => {
    // eslint-disable-next-line no-console
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // #region changeLanguage
  const languages = ['Eng', 'Ukr', 'Rus', 'Ger'];
  const [languagesChoose, setLanguagesChoose] = useState(languages[0]);

  const onKeyPress = (eKey, value) => {
    if (eKey === 'Enter') {
      setLanguagesChoose(value);
    }
  };
  // #endregion

  return (
    <header className="Header">
      <div className="Header__conteiner">
        <Link
          className="Header__logo"
          to="/"
          onClick={() => handleScrollTop()}
        >
          {menuOpen ? (
            <img
              className="Header__logo-img"
              src={logoWhite}
              alt="logo"
            />
          ) : (
            <img
              className="Header__logo-img"
              src={logo}
              alt="logo"
            />
          )}
        </Link>

        <nav
          className={
            classNames(`Header__nav + ${menuOpen
              ? 'Header__nav--open'
              : ''
            }`)
          }
        >
          <ul
            className={
              classNames(`Header__nav-ul + ${menuOpen
                ? 'Header__nav-ul--open'
                : ''
              }`)
            }
          >
            <li className="Header__nav-li">
              <Link
                className={
                  classNames(`Header__link + ${menuOpen
                    ? 'Header__link--open'
                    : ''
                  }`)
                }
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                  handleScroll(techRef.current);
                }}
              >
                Technology
              </Link>
            </li>
            <li className="Header__nav-li">
              <Link
                to="/"
                className={
                  classNames(`Header__link + ${menuOpen
                    ? 'Header__link--open'
                    : ''
                  }`)
                }
                onClick={() => {
                  handleScroll(advantagesRef.current);
                  setMenuOpen(false);
                }}
              >
                Advantages
              </Link>
            </li>
            <li className="Header__nav-li">
              <Link
                to="/"
                className={
                  classNames(`Header__link + ${menuOpen
                    ? 'Header__link--open'
                    : ''
                  }`)
                }
                onClick={() => {
                  handleScroll(howWorkRef.current);
                  setMenuOpen(false);
                }}
              >
                How it works
              </Link>
            </li>
            <li className="Header__nav-li">
              <Link
                to="/"
                className={
                  classNames(`Header__link + ${menuOpen
                    ? 'Header__link--open'
                    : ''
                  }`)
                }
                onClick={() => {
                  handleScroll(packagesRef.current);
                  setMenuOpen(false);
                }}
              >
                Packages
              </Link>
            </li>
            <li className="Header__nav-li">
              <Link
                to="/"
                className={
                  classNames(`Header__link + ${menuOpen
                    ? 'Header__link--open'
                    : ''
                  }`)
                }
                onClick={() => {
                  handleScroll(contactRef.current);
                  setMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="Header__actions">
          <label
            htmlFor="language"
            className="Header__changeLanguage"
          >
            <select
              className="Header__select"
              name="language"
              id="language"
              value={languagesChoose}
              onChange={(event) => {
                setLanguagesChoose(event.target.value);
              }}
              onKeyDown={onKeyPress}
            >
              {languages.map(language => (
                <option key={language}>
                  {language}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="Header__getStarted"
            onClick={() => getStarted()}
          >
            Get started
          </button>

          <button
            className={
              classNames(`Header__hamburger + ${menuOpen
                ? 'Header__hamburger--open'
                : ''
              }`)
            }
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen
              ? (<FontAwesomeIcon icon={faBars} />)
              : (<FontAwesomeIcon icon={faXmark} />)
            }
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  getStarted: PropTypes.func.isRequired,
  techRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  advantagesRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  howWorkRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  packagesRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  contactRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
