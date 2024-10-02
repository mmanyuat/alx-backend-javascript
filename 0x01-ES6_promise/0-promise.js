function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Change this to `false` to simulate a failure
      if (success) {
        resolve('Data received from API');
      } else {
        reject(new Error(' Failed to fetch data from API'));
      }
    }, 1000);
  });
}

export default getResponseFromAPI;
