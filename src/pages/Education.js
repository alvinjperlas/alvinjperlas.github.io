import React from 'react';
import Main from '../layouts/Main';
import { Link } from 'react-router-dom';
import School from '../components/Resume/Schools';
import degrees from '../data/resume/degrees';

const Exp = () => (
  <Main
    title="Education"
    description="Schools"
  >
    <article className="post" id="education">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/Education">Education</Link></h2>
         
        </div>
      </header>
      <School data={degrees} />
    </article>
  </Main>
);

export default Exp;
