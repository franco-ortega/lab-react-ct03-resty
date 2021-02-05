export const makeRequest = async(url, method, data) => {
  return await fetch(`${url}`, {
    method: `${method}`,
  })
    .then(res => res.json());
};


// refer to screenshots from start of Thursday to handle different requests (?)
//body: JSON.stringify(`${data}`)
