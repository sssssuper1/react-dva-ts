import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {Promise<{data: any}>}           An object containing either "data" or "err"
 */
function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      if (data.code === 401) {
        window.g_app._store.dispatch({ type: 'user/goLogin' })
      }
      return ({ data })
    })
    .catch(err => ({ err }));
}

function get(url, params = {}) {
  let p = url + '?'
  for (let key in params) {
    p = p + key + '=' + encodeURIComponent(params[key]) + '&'
  }

  return request(p.substring(0, p.length-1), {
    method: 'GET'
  })
}

function post(url, params = {}) {
  return request(url, {
    method: 'POST',
    // header: { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: params
  })
}

export default {
  get,
  post
}
