const themeSwitch = document.getElementById('themeSwitch');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  themeSwitch.checked = true;
  document.body.classList.add('dark-theme');
}

themeSwitch.addEventListener('change', function() {
  const theme = this.checked ? 'dark' : 'light';

  localStorage.setItem('theme', theme);

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