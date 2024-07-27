document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        themeSwitch.checked = currentTheme === 'dark';
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});


function closeResidentDetails() {
    document.getElementById('resident-details-modal').classList.add('hidden');
}

function searchResidents() {
    const searchInput = document.getElementById('search-residents').value.toLowerCase();
    const rows = document.querySelectorAll('#residents-table tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const id = cells[0].textContent.toLowerCase();
        const name = cells[1].textContent.toLowerCase();
        const room = cells[3].textContent.toLowerCase();
        if (id.includes(searchInput) || name.includes(searchInput) || room.includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function filterResidents() {
    const filterValue = document.getElementById('filter-status').value.toLowerCase();
    const rows = document.querySelectorAll('#residents-table tr');
    rows.forEach(row => {
        const status = row.querySelector('td:nth-child(5)').textContent.toLowerCase();
        if (filterValue === '' || status === filterValue) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function openAddResidentModal() {
    document.getElementById('add-resident-modal').style.display = 'block';
}

function closeAddResidentModal() {
    document.getElementById('add-resident-modal').style.display = 'none';
}

function addResident(event) {
    event.preventDefault();

    const id = document.getElementById('resident-id').value;
    const name = document.getElementById('resident-name').value;
    const room = document.getElementById('resident-room').value;
    const status = document.getElementById('resident-status').value;
    const email = document.getElementById('resident-email').value;

    const table = document.getElementById('residents-table');
    const row = table.insertRow();
    row.innerHTML = `
    <td class="py-2 px-4 border-b">${id}</td>
    <td class="py-2 px-4 border-b">${name}</td>
    <td class="py-2 px-4 border-b">${room}</td>
    <td class="py-2 px-4 border-b">${status}</td>
    <td class="py-2 px-4 border-b">${email}</td>
    `;

    closeAddResidentModal();
    document.getElementById('add-resident-form').reset();
}