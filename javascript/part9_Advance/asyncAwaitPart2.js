function postData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched succesfully");
    }, 2000);
  });
}

function commentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data from post  fetched succesfully");
    }, 4000);
  });
}

async function blogData() {
  try {
    console.log("Fetching Your data...");
    // let commentdata = await commentData();
    // let postdata = await postData();
    const [postdata, commentdata] = await Promise.all([
      postData(),
      commentData(),
    ]);
    console.log(postdata);
    console.log(commentdata);
    console.log("Feteched Everything Succesfully!");
  } catch (error) {
    console.log("Error fetching Post Data");
  }
}

blogData();
