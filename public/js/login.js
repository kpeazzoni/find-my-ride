const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('hello...');
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('response was: ' + response.status);
    if (response.ok) {
      console.log('user successfully logged in..');
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