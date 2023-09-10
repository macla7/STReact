export async function fetchPost(postId) {
  // don't want to require auth for this.... hmmmm
  // const auth_token = await getValueFor("auth_token");
  return fetch(`http://49.127.15.229:3000/api/v1/posts/${postId}.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      // Not a longer term proper soloution
      return {};
    });
}
