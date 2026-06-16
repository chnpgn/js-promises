const posts = [
  { id: 1, title: "Post 1", body: "This is post one!" },
  { id: 2, title: "Post 2", body: "This is post two!" },
  { id: 3, title: "Post 3", body: "This is post three!" },
  { id: 4, title: "Post 4", body: "This is post four!" },
  { id: 5, title: "Post 5", body: "This is post five!" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.map((post) => {
      output += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!!");
      }
    }, 1000);
  });
};

const deletePost = (index) => {
  setTimeout(() => {
    posts.splice(index, 1);
  }, 1000);
};

// A number of promises --- Promise.all([])
const promise1 = Promise.resolve("Hello Javascript Promise!");
const promise2 = Math.floor(Math.random() * 2);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "The end of the season!!");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

// Promise.all([promise1, promise2, promise3, promise4])
//     .then((values) => console.log(values))

// createPost({ id: 6, title: "Post 6", body: "This is post six!" })
//   .then(getPosts)
//   .catch((err) => console.error(err));

// Async / Await
const init = async () => {
  createPost({ id: 6, title: "Post 6", body: "This is post six!" });
  getPosts();
};

// init();

// Async / Await -- fetch()
const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data)
}

fetchUsers()
