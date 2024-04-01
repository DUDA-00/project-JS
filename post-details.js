const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then(post => {
    const postDetailsDiv = document.getElementById('postDetails');
    postDetailsDiv.innerHTML = `
    <p>Title: ${post.title}</p>
    <p>Body: ${post.body}</p>`;
  });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  .then(res => res.json())
  .then(comments => {

    const commentsDiv = document.getElementById('comments');

    comments.forEach(comment => {
    const commentDiv = document.createElement('div');
       commentDiv.innerHTML = `
       <p>Name: ${comment.name}</p>
       <p>Email: ${comment.email}</p>
       <p>Body: ${comment.body}</p>`;
          commentsDiv.appendChild(commentDiv);
    });
 });


