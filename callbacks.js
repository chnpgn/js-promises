const posts = [
  { id: 1, title: "Post 1", body: "This is post one!" },
  { id: 2, title: "Post 2", body: "This is post two!" },
  { id: 3, title: "Post 3", body: "This is post three!" },
  { id: 4, title: "Post 4", body: "This is post four!" },
  { id: 5, title: "Post 5", body: "This is post five!" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.map((post) => {
      output += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
};

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
};

const deletePost = (index) => {
    setTimeout(() => {
        posts.splice(index, 1)
    }, 2000)
};

// getPosts();
createPost({ id: 6, title: 'Post 6', body: 'This is post six!'}, getPosts)
// deletePost(2)
