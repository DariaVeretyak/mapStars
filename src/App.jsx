import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { LangProvider } from './context/LangProvider';
import { Header } from './components/Header/Header';
import { GetStartedDialog } from './components/GetStartedDialog';
import { HomePage } from './components/HomePage';
import { Technology } from './components/Technology';
import { Advantages } from './components/Advantages/Advantages';
import { HowWork } from './components/HowWork/HowWork';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Examples } from './components/Examples';
import { Awards } from './components/Awards/Awards';
import { UsefulInfo } from './components/UsefulInfo';
import { SettingUp } from './components/SettingUp';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import './App.scss';

const App = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const techRef = useRef(null);
  const advantagesRef = useRef(null);
  const howWorkRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);

  const getStarted = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <LangProvider>
      <div
        className={
          classNames(`App + ${openDialog
            ? 'App--dialog'
            : ''
          }`)
        }
      >
        <Header
          getStarted={getStarted}
          techRef={techRef}
          advantagesRef={advantagesRef}
          howWorkRef={howWorkRef}
          packagesRef={packagesRef}
          contactRef={contactRef}
        />

        {openDialog && <GetStartedDialog closeDialog={closeDialog} />}

        <div className="App__mainBlock">
          <HomePage getStarted={getStarted} />
          <Technology techRef={techRef} />
          <Advantages advantagesRef={advantagesRef} />
          <HowWork howWorkRef={howWorkRef} />
          <Services />
          <UsefulInfo />
          <Packages getStarted={getStarted} packagesRef={packagesRef} />
          <Examples />
          <Awards />
          <SettingUp />
          <Contacts getStarted={getStarted} contactRef={contactRef} />
        </div>

        <Footer />
      </div>
    </LangProvider>
  );
};

export default App;
