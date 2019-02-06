import React from 'react';
import Button from 'antd/lib/button/button';

import './Logout.scss'


function Logout() {

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <Button onClick={logout} className='Logout'>Logout</Button>
  );
}


export default Logout;

