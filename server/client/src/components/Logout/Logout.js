import React from 'react';
import Button from 'antd/lib/button/button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Logout.scss'
import { saveTasks } from '../../redux/actions/tasks/tasks';


function Logout() {

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <Button onClick={logout} className='Logout'>Logout</Button>
  );
}


const matchDispatchToProps = dispatch => bindActionCreators({
  saveTasks
}, dispatch);

export default connect(null, matchDispatchToProps)(Logout);

