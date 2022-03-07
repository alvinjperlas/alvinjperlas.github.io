import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Work from '../components/Resume/Work';
import positions from '../data/resume/positions';

const Exp = () => (
  <Main
    title="Experience"
    description="Alvin Perlas's Resume. Raytheon Technologies, Spireon, Extron Electronics, Intellicon Inc "
  >
    <article className="post" id="work">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/experiece">Experience</Link></h2>
        </div>
      </header>
      <Work data={positions} />
    </article>
  </Main>
);

export default Exp;
