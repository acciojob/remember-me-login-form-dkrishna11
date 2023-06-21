 var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    // Show login button for existing user if there are saved details
    if (savedUsername && savedPassword) {
      var existingUserBtn = document.createElement("button");
      existingUserBtn.id = "existing";
      existingUserBtn.textContent = "Login as existing user";
      document.body.appendChild(existingUserBtn);
      existingUserBtn.addEventListener("click", function() {
        alert("Logged in as " + savedUsername);
      });
    }

    // Add submit event listener to the form
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      // Get form values
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var rememberMe = document.getElementById("checkbox").checked;

      // Save details to local storage if checkbox is checked
      if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Show alert with logged in username
      alert("Logged in as " + username);
    });