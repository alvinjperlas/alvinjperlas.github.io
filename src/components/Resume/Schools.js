import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Schools = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Schools.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Schools.defaultProps = {
  data: [],
};

export default Schools;
