const darkModeToggle = document.getElementById("darkModeToggle");
    const toggleModeButton = document.getElementById("toggleModeButton");

    // Set initial button text based on mode
    // toggleModeButton.textContent = document.body.classList.contains("dark-mode")
    //   ? "Switch to Light Mode"
    //   : "Switch to Dark Mode";

    darkModeToggle.addEventListener("click", function() {
      // Toggle dark mode class on the body
      document.body.classList.toggle("dark-mode");
      
      // Change the button text based on the current mode
      if (document.body.classList.contains("dark-mode")) {
        toggleModeButton.textContent = "Light Mode";
      } else {
        toggleModeButton.textContent = "Dark Mode";
      }
    });

