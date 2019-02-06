import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from 'antd/lib/alert';

import './Info.scss';
import Container from '../Container/Container';

const { bool } = PropTypes;


Info.propTypes = {
  onLine: bool
};


export function Info(props) {
  const { onLine } = props;

  return (
    <Container className="Info">
      {!onLine && (
        <Alert
          message="Internet is disconnect"
          description="All information is saving to local storage"
          type="warning"
          showIcon
        />
      )}
    </Container>
  );
}


const mapStateToProps = state => ({
  onLine: state.connection.onLine
});


export default connect(mapStateToProps, null)(Info);
