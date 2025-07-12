function fetechData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Fetch Data Succesfully!");
      } else {
        reject("Error fetching data!");
      }
    }, 3000);
  });
}

fetechData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// let response = fetechData();
// console.log(response);
