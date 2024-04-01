const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  .then(res => res.json())
  .then(posts => {
    const userPostsDiv = document.getElementById('userPosts');
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.innerHTML = `
      
      <p>Title: ${post.title}</p>
      <button onclick="showPostDetails(${post.id})">Details</button>`;
      
      userPostsDiv.appendChild(postDiv);
    });
  });

function showPostDetails(postId) {
  window.location.href = `post-details.html?postId=${postId}`;
}