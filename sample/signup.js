document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        if (localStorage.getItem(username)) {
            alert('Username already exists');
        } else {
            const user = {
                username: username,
                password: password
            };
            localStorage.setItem(username, JSON.stringify(user));
            alert('Sign up successful!');
            // Redirect to the login page or perform another action
        }
    });
});
