let login = document.getElementById("login-form");
login.addEventListener("submit", user);

function user(event){
    // event.preventDefault(); // Prevent form from submitting and refreshing the page
    let username = document.getElementById("username").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("pwd").value;

    console.log("Username: " + username);
    console.log("Phone Number: " + phone);
    console.log("Password: " + password);

   
};

// const loginForm = document.getElementById('login-form');

//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const username = document.getElementById('login-username').value;
//         const password = document.getElementById('login-password').value;

//         const storedUser = JSON.parse(localStorage.getItem(username));

//         if (storedUser && storedUser.password === password) {
//             alert('Login successful!');
//             // Redirect to another page or perform a successful login action
//         } else {
//             alert('Invalid username or password');
//         }
//     });