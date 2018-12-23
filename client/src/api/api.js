import config from '../config.jsx';
import { resolve } from 'url';

function post(url, data) {
  return requestToApi("Post", url, data);

}

function get(url, data) {
  return requestToApi("Get", url, data);
}

function put(url, data) {
  return requestToApi("Put", url, data);
}

function _delete(url, data) {
  return requestToApi("delete", url, data);
}


function requestToApi(method, url, data) {
  return new Promise((resolve, reject) => {
    url = config.serverUrl + url.trim();
    console.log("urllllll", url, method);
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: method,
      body: JSON.stringify(data)
    };
    // if(method==="Get" && options.body){
    //   delete options.body 
    // }
    method === "Get" && delete options.body;
    // 
    //  console.log("this is the state", options);
    return fetch(url, options)
      .then((response) => {
        if (response.status == 200) {
          response.json().then((data) => {
            console.log("the data is",data);
            resolve(data);
          }
          )
        }
      }
      ).catch((err) => {
        reject(err);
      }
      )
  }
  )
}
export { post, get, put, _delete };
