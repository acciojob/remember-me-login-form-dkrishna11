//your JS code here. If required.
 if (localStorage.getItem('username')) {
      var existingUserButton = document.createElement('button');
      existingUserButton.id = 'existing';
      existingUserButton.textContent = 'Login as existing user';
      document.body.appendChild(existingUserButton);
    }

    // Handle form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var checkbox = document.getElementById('checkbox').checked;

      if (checkbox) {
        // Save details to localstorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      }

      alert('Logged in as ' + username);
    });

    // Handle existing user button click
    document.getElementById('existing').addEventListener('click', function() {
      var savedUsername = localStorage.getItem('username');
      alert('Logged in as ' + savedUsername);
    });