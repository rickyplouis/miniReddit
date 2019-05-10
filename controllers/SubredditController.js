/* global fetch */
const handleSuccess = res => res.json().then(val => val);
const handleError = res => res.json().then(val => val.description[0]);

const makeRequest = endpoint =>
  new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch(endpoint, options)
      .then(response => {
        if (response.status === 200) {
          resolve(handleSuccess(response));
        } else {
          reject(handleError(response));
        }
      })
      .catch(error => {
        reject(error);
      });
  });

const getReq = (endpoint, token) => makeRequest(endpoint, false, token);

module.exports = {
  getReq
};
