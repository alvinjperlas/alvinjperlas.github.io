import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h2><a href={data.link} top>{data.company}</a></h2>
    </header>
    <ul className="points">
      {data.position.map((position) => (
        <>
          <div><h5>{position.title}  &nbsp;&nbsp;{position.program}</h5></div>
          <div></div>
          <div><p className="daterange">{position.daterange}</p></div>
          <ul className="positions">
            {position.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        daterange: PropTypes.string.isRequired,
        program: PropTypes.number.isRequired,
        points: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default Job;
