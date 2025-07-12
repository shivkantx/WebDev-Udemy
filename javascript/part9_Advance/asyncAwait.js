function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "shiv", url: "https://github.com/shivkantx/" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Ftetching User Data");
    let userData = await fetchUserData();
    console.log(userData);
    console.log("Fetched  data successfully!");
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
