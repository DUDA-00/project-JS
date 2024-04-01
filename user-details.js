const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

    
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        const userDetails = document.getElementById('userDetails');
        userDetails.innerHTML = `
        <p> Address: ${user. address}</p>
        <p>Company: ${user. company}</p>
        <p> Email: ${user. email}</p>
        <p>Id: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p> Phone: ${user .phone}</p>
        <p> Username: ${user. username}</p>
        <p>Website: ${user. website}</p>
       
        
        `;
        
    });
 function showUserPosts() {
  window.location.href = `user-posts.html?userId=${userId}`;
}

