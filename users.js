console.log("Sumaiya");


function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsers(data))

}
loadUsers();



function displayUsers(data){

        const sectionId = document.getElementById("user");
        for(const users of data){
            const div = document.createElement('div');
            div.classList.add("user")
            div .innerHTML = `
                 <h1>${users.name}</h1>
                 <h5>${users.usersname}</h5>
                 <h4>${users.email}</h4>
                 <a>${users.phone}</a>
                 <a href="${users.website}">website</a>
                
                 `;
            sectionId.appendChild(div);

        console.log(users);
    }
}