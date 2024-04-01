fetch('https://jsonplaceholder.typicode.com/users/')
.then(res => res.json())
.then(users => {
   const userListDiv = document.getElementById('userList');
   users.forEach (user => {

       const userBlock = document.createElement('div');
       userBlock.classList.add('userBlock');
       userBlock.innerHTML = `
       
       <p> ID: ${user.id}</p>
       <p> NAME: ${user.name}</p>
       <button onclick="location.href='user-details.html?id=${user.id}'">Details</button>

       `
       userListDiv.appendChild(userBlock);

   })
   

   
});

function showUserDetails(userId) {
    window.location.href = `user-details.html?userId=${userId}`;
  }
