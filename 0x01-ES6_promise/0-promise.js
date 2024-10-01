function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            resolve('Response from API');
        }, 1000);
    });
}