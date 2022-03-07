import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Work = ({ data }) => (
  <div className="resume">
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Work.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ),
};

Work.defaultProps = {
  data: [],
};

export default Work;
