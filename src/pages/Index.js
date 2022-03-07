import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';
import EmailLink from '../components/Contact/EmailLink';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={"Alvin Perlas's personal website."}
  >
    <article className="post" id="index">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>Alvin Perlas</h2>
          <p><a href="mailto:alvinjperlas@gmail.com">alvinjperlas@gmail.com</a></p>
        </header>
        <center><EmailLink /></center>
      </section>
     
    </article>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;Alvin Perlas &nbsp;<Link to="/">alvinperlas.com</Link>.</p>
    </section>

  </Main>
);

export default Index;
