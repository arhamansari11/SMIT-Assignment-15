// Function that returns a Promise
function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        const isError = false; 
  
        if (!isError) {
          resolve(data); 
        } else {
          reject(new Error("Failed to fetch data!")); 
        }
      }, 2000); 
    });
  }
  
  
  fetchDataFromServer()
    .then((data) => {
      console.log(data.message); 
    })
    .catch((error) => {
      console.error(error.message);
    });
  