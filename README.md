# Promises Demo Application

## Overview

This small demo project shows how JavaScript promises, async/await, and `fetch()` work together in a browser environment. It uses a local `posts` array to simulate asynchronous operations on data and includes examples of:

- creating new posts with a `Promise`
- reading posts after a delay
- deleting a post from the array
- using `Promise.all()` to wait for multiple asynchronous values
- fetching remote user data with `async/await`

## Project Files

- `index.html` - loads the JavaScript demo in a browser.
- `promises.js` - contains the core promise and async/await logic.
- `README.md` - describes the project and usage.

## How it works

1. `posts` is an array of sample post objects.
2. `getPosts()` waits 2 seconds and then renders each post body into the page body.
3. `createPost(post)` returns a promise that waits 1 second, adds the post to the array, and resolves or rejects.
4. `deletePost(index)` removes a post from the array after 1 second.
5. The demo also defines several sample promises and a remote fetch to demonstrate `Promise.all()`.
6. `fetchUsers()` uses `async/await` to fetch users from `https://jsonplaceholder.typicode.com/users` and logs the result.

## Step-by-step usage

1. Open `index.html` in a browser.
2. The browser loads `promises.js` automatically via the `<script>` tag.
3. `promises.js` currently runs the `fetchUsers()` function immediately.
4. The page body will show fetched user data only in the console, because `getPosts()` and `createPost()` are not called by default.
5. To see `getPosts()` render posts on the screen, uncomment `init()` in `promises.js` and comment out or adjust the `fetchUsers()` call.
6. To add a new post and then render it, uncomment the `createPost(...).then(getPosts).catch(...)` block.
7. To see `Promise.all()` in action, uncomment the `Promise.all([...]).then(...)` block.

## Running the demo

1. Start a simple static server if you want a proper origin, or just open `index.html` directly.
2. Open the browser DevTools console to inspect logged data from the remote fetch.
3. Edit `promises.js` to enable the function calls you want to test.

## Notes

- `createPost()` simulates an asynchronous server request by using a `Promise` and `setTimeout`.
- `getPosts()` simulates rendering delayed data after the posts have been loaded.
- The remote fetch in `fetchUsers()` is used to demonstrate `async/await` with a real API.
- The current demo uses hard-coded sample data and is intended for learning rather than production.

