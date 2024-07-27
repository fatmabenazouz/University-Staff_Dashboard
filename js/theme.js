const themeSwitch = document.getElementById('themeSwitch');

// Get the current theme from local storage
const currentTheme = localStorage.getItem('theme');

// Set the initial theme based on the stored value or default to light theme
if (currentTheme === 'dark') {
  themeSwitch.checked = true;
  document.body.classList.add('dark-theme');
}

// Add event listener to the switch slider
themeSwitch.addEventListener('change', function() {
  const theme = this.checked ? 'dark' : 'light';

  // Store the selected theme in local storage
  localStorage.setItem('theme', theme);

  // Apply the theme to all pages
  document.body.classList.toggle('dark-theme', theme === 'dark');
});
const profilePictureInput = document.getElementById('profilePicture');
const profileImage = document.getElementById('profileImage');

profilePictureInput.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        profileImage.src = e.target.result;
    }

    reader.readAsDataURL(file);
});