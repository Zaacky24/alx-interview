function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation here
    // If the operation is successful, call resolve() with the desired response
    // If there's an error, call reject() with the error message

    // For example, let's simulate a successful API response after a delay
    setTimeout(() => {
      const response = "API response";
      resolve(response);
    }, 2000);
  });
}

export default getResponseFromAPI;

