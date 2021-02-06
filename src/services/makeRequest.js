export const makeRequest = async(url, method, data) => {

  if(method === 'GET') {
    return await fetch(`${url}`, {
      method: `${method}`,
    })
      .then(res => res.json());
  } else {
    return await fetch(`${url}`, {
      method: `${method}`,
      body: JSON.stringify(`${data}`)
    })
      .then(res => res.json());
  }
};
