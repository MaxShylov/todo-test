import axios from 'axios';
import message from 'antd/lib/message'


export const ajax = ({
                       url,
                       method = 'POST',
                       headers,
                       data = {},
                       cb = () => null,
                       err = res => handleError(res),
                       isFormData = false
                     }) => {

  const token = localStorage.token;

  headers = {
    'Content-Type': !isFormData ? 'application/json' : 'multipart/form-data; boundary=blob',
    ...headers
  };

  if (token) headers.Authorization = 'Token ' + token;

  if (!isFormData) {
    data = JSON.stringify(data);
  }

  axios({
    url,
    baseURL: process.env.REACT_APP_URL_API,
    method,
    headers,
    data,
    crossDomain: true
  })
    .then(response => {
      let res = response.request.response;

      res = !res ? '' : JSON.parse(res);

      cb(res)
    })
    .catch(res => {
      if (res.response && res.response.status === 401) {
        window.localStorage.removeItem('token');
        setTimeout(() => window.location.reload(), 500);
      }
      if (res.response && +res.response.status >= 500) {
        message.error('Server error');
      }
      err(res)
    })
};

const handleError = res => {
  console.error(res);

  if (!res.response) return false;

  const
    { data } = res.response,
    errorText = (data && data.detail) ? data.detail : 'Error';

  message.error(errorText);
};
