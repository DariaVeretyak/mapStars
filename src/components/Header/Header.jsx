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
  const [selectOpen, setSelectOpen] = useState(false);
  // const headerLang = document.querySelector('.Header__select-header');
  const activeLang = document.querySelector('.Header__select-current');
  const allLang = [ ...document.querySelectorAll('.Header__select-item') ];
  // const bodyLang = document.querySelector('.Header__select-body');

  function removeItemsClass(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('select__item--active');
    }
  };

  function openSelect () {
    setSelectOpen(!selectOpen);

    setTimeout(() => {
      setSelectOpen(false)
    }, 7000)
  };

  const changeLanguage = (activeItem) => {
    // removeItemsClass(allLang);

    // console.log(activeItem);

    // activeItem.classList.add('Header__select-item--active');
    document.querySelector('.Header__select-current').textContent = activeItem;
    setSelectOpen(false);
  };

  const handleScroll = (ref) => {
    try {
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleScrollTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  // #region changeLanguage
  // const languages = ['Eng', 'Ukr', 'Rus', 'Ger'];
  // const [languagesChoose, setLanguagesChoose] = useState(languages[0]);

  // const onKeyPress = (eKey, value) => {
  //   if (eKey === 'Enter') {
  //     setLanguagesChoose(value);
  //   }
  // };
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
            onClick={() => openSelect()}
          >
            <div className="Header__select">
              <div className="Header__select-header">
                <span className="Header__select-current">Eng</span>
                <div className="Header__select-icon"></div>
              </div>
              <div
                className={
                  classNames(`Header__select-body + ${selectOpen
                    ? 'Header__select-body--active'
                    : ''
                  }`)
                }
              >
                <div
                  className="Header__select-item Header__select-item--active"
                  data-current="Eng"
                  onClick={() => changeLanguage("Eng")}
                >
                  Eng
                </div>
                <div
                  className="Header__select-item"
                  data-current="Ukr"
                  onClick={() => changeLanguage("Ukr")}
                >
                  Ukr
                </div>
                <div
                  className="Header__select-item"
                  data-current="Rus"
                  onClick={() => changeLanguage("Rus")}
                >
                  Rus
                </div>
                <div
                  className="Header__select-item"
                  data-current="Ger"
                  onClick={() => changeLanguage("Ger")}
                >
                  Ger
                  </div>
              </div>
            </div>
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
