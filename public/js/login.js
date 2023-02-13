const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const email = document.querySelector('#email-login').value;
  const password = document.querySelector('#password-login').value;

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('response was: ' + response.status);
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      const json = await response.json();
      alert(json.message);
    }
  }
};

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);