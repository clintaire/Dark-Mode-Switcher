document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check the user's preference from local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set initial dark mode state
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkModeEnabled = body.classList.toggle('dark-mode');
        darkModeToggle.checked = isDarkModeEnabled;
        // Store the user's preference in local storage
        localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
    }

    // Event listener for the dark mode toggle
    darkModeToggle.addEventListener('change', function () {
        toggleDarkMode();
    });
});
