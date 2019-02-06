import Login from './non-login/Login/Login';
import Register from './non-login/Register/Register';
import Page404 from './Page404/Page404';
import Todo from './Todo/Todo';

export const ROUTERS = {
  INDEX: '/',

  LOGIN: '/login',
  REGISTER: '/register',
};

const routes = [
  {
    path: ROUTERS.LOGIN,
    withoutLogin: true,
    component: Login
  },
  {
    path: ROUTERS.REGISTER,
    withoutLogin: true,
    component: Register
  },
  {
    path: ROUTERS.INDEX,
    exact: true,
    component: Todo
  },

  {
    component: Page404
  }

];

export default routes;
