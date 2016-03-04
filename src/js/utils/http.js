const Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

const Events = {
  ABORT: 'abort',
  ERROR: 'error',
  LOAD: 'load',
  TIMEOUT: 'timeout'
};

class Http {

  _parse(req) {
    let result;
    try {
      result = JSON.parse(req.responseText);
    } catch (e) {
      result = req.responseText;
    }
    return result;
  }

  _res(req) {
    let data = this._parse(req);
    return {
      status: req.status,
      response: req.response,
      data,
      req
    };
  }

  _ajax(method, url, data, options) {
    return new Promise((resolve, reject) => {// eslint-disable-line no-undef
      let XHR = window.XMLHttpRequest || window.ActiveXObject;
      let request = new XHR('MSXML2.XMLHTTP.3.0');
      request.open(method, url, true);

      request.setRequestHeader('Content-type', options.contentType || 'application/json; charset=utf-8')

      request.addEventListener(Events.LOAD, () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(this._res(request));
        } else {
          reject(this._res(request));
        }
      });

      request.addEventListener(Events.ABORT, () => reject(this._res(request)));
      request.addEventListener(Events.ERROR, () => reject(this._res(request)));
      request.addEventListener(Events.TIMEOUT, () => reject(this._res(request)));

      if (data !== undefined) {
        request.send(data);
      } else {
        request.send();
      }
    });
  }

  get(url, data, options = {}) {
    return this._ajax(Methods.GET, url, JSON.stringify(data), options);
  }

  post(url, data, options = {}) {
    return this._ajax(Methods.POST, url, JSON.stringify(data), options);
  }

  put(url, data, options = {}) {
    return this._ajax(Methods.PUT, url, JSON.stringify(data), options);
  }

  delete(url, data, options = {}) {
    return this._ajax(Methods.DELETE, url, JSON.stringify(data), options);
  }
}

const http = new Http();
export default http;
