export const makeRequest = async(url, method, data) => {
  return await fetch(`${url}`, {
    method: `${method}`,
    body: JSON.stringify(`${data}`)
  })
    .then(res => res.json());
};
