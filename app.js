const formTitle = document.getElementById('form-title');
const toggleForm = document.getElementById('toggleForm');
const authForm = document.getElementById('authForm');
let isLogin = true;

toggleForm.addEventListener('click', () => {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
    authForm.querySelector('button').textContent = isLogin ? 'Login' : 'Sign Up';
    toggleForm.textContent = isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login';
});

authForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const endpoint = isLogin ? 'login' : 'signup';

    const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const result = await response.json();
        if (isLogin) {
            alert('Login successful! Token: ' + result.token);
        } else {
            alert('Signup successful! Please login.');
        }
    } else {
        const error = await response.text();
        alert('Error: ' + error);
    }
});
