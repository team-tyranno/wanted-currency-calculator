const request = {
  get: async (path) => {
    try {
      const response = await fetch(path, { method: 'GET' });
      const json = await response.json();

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return json;
    } catch (e) {
      return e;
    }
  },
};

export default request;
