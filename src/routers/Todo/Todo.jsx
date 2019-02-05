import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const {} = PropTypes;


class Todo extends Component {
  static propTypes = {};

  render() {

    return (
      <div className="Todo">
        Todo
      </div>
    );
  }
}


const mapStateToProps = state => ({});

const matchDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Todo);
