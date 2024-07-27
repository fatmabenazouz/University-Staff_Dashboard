document.addEventListener('DOMContentLoaded', function () {
  // sidebar
  let sidebarOpen = false;
  const sidebar = document.getElementById('sidebar');

  function openSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add('sidebar-responsive');
      sidebarOpen = true;
    }
  }

  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove('sidebar-responsive');
      sidebarOpen = false;
    }
  }

  // pie chart
  const pieChartOptions = {
    series: [347, 358],
    chart: {
      type: 'pie',
      height: 350,
    },
    labels: ['Male', 'Female'],
    colors: ['#D0E8FFB2', '#FED0EEB2'],
    legend: {
      labels: {
        colors: '#474747',
      },
      show: true,
      position: 'top',
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#474747'],
      },
    },
    tooltip: {
      theme: 'dark',
    },
  };

  const pieChart = new ApexCharts(document.querySelector('#pie-chart'), pieChartOptions);
  pieChart.render();

  function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
      searchBar.style.display = 'inline-block';
      searchBar.focus();
    } else {
      searchBar.style.display = 'none';
    }
  }

  function searchContent() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      let cardText = card.innerText.toLowerCase();
      if (cardText.includes(input)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function toggleProfile() {
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileDropdown.style.display === 'none' || profileDropdown.style.display === '') {
      profileDropdown.style.display = 'block';
    } else {
      profileDropdown.style.display = 'none';
    }
  }

  function toggleNotifications() {
    const notificationDropdown = document.getElementById('notification-dropdown');
    if (notificationDropdown.style.display === 'none' || notificationDropdown.style.display === '') {
      notificationDropdown.style.display = 'block';
    } else {
      notificationDropdown.style.display = 'none';
    }
  }

  function sendNotification(name, title, details) {
    const notificationDropdown = document.getElementById('notification-dropdown');
    const newNotification = document.createElement('div');
    newNotification.classList.add('notification');
    newNotification.innerHTML = `
      <p class="notification-title">${title}</p>
      <p class="notification-details">${details}</p>
    `;
    notificationDropdown.appendChild(newNotification);
  }

  // theme switcher
  const themeSwitch = document.getElementById('themeSwitch');
  themeSwitch.addEventListener('change', function () {
    if (themeSwitch.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});

  function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
      searchBar.style.display = 'inline-block';
      searchBar.focus();
    } else {
      searchBar.style.display = 'none';
    }
  }

  function searchContent() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      let cardText = card.innerText.toLowerCase();
      if (cardText.includes(input)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function toggleProfile() {
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileDropdown.style.display === 'none' || profileDropdown.style.display === '') {
      profileDropdown.style.display = 'block';
    } else {
      profileDropdown.style.display = 'none';
    }
  }

  function toggleNotifications() {
    const notificationDropdown = document.getElementById('notification-dropdown');
    if (notificationDropdown.style.display === 'none' || notificationDropdown.style.display === '') {
      notificationDropdown.style.display = 'block';
    } else {
      notificationDropdown.style.display = 'none';
    }
  }

  function sendNotification(name, title, details) {
    const notificationDropdown = document.getElementById('notification-dropdown');
    const newNotification = document.createElement('div');
    newNotification.classList.add('notification');
    newNotification.innerHTML = `
      <p class="notification-title">${title}</p>
      <p class="notification-details">${name}: ${details}</p>
    `;
    notificationDropdown.appendChild(newNotification);
  }





    const events = [
    { id: 1, title: 'Event Title 1', date: 'August 15, 2024', description: 'Details about Event 1', location: 'Location 1' },
    { id: 2, title: 'Event Title 2', date: 'August 22, 2024', description: 'Details about Event 2', location: 'Location 2' }
  ];

  function renderEvents() {
    const eventsTableBody = document.getElementById('events-table-body');
    eventsTableBody.innerHTML = '';

    events.forEach(event => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${event.title}</td>
        <td>${event.date}</td>
        <td>${event.description}</td>
        <td>${event.location}</td>
        <td>
          <button onclick="viewEvent(${event.id})">View</button>
          <button onclick="updateEvent(${event.id})">Update</button>
          <button onclick="deleteEvent(${event.id})">Delete</button>
        </td>
      `;
      eventsTableBody.appendChild(row);
    });
  }

  function viewEvent(id) {
    alert('Viewing event with ID: ' + id);
  }

  function updateEvent(id) {
    alert('Updating event with ID: ' + id);
  }

  function deleteEvent(id) {
    if (confirm('Are you sure you want to delete this event?')) {
      const index = events.findIndex(event => event.id === id);
      if (index > -1) {
        events.splice(index, 1);
        renderEvents(); 
      }
    }
  }

  renderEvents();
  let editIndex = -1; 

// event form
function showEventForm() {
    document.getElementById('event-form-container').classList.remove('hidden');
    document.getElementById('form-title').textContent = 'Add New Event';
    document.getElementById('event-form').reset();
    editIndex = -1;
    hideEventDetails(); 
}

function hideEventForm() {
    document.getElementById('event-form-container').classList.add('hidden');
}

function showEventDetails(row) {
    const cells = row.cells;
    document.getElementById('event-detail-title').textContent = cells[0].textContent;
    document.getElementById('event-detail-date').textContent = cells[1].textContent;
    document.getElementById('event-detail-description').textContent = cells[2].textContent;
    document.getElementById('event-detail-location').textContent = cells[3].textContent;
    document.getElementById('event-details-container').classList.remove('hidden');
}

function hideEventDetails() {
    document.getElementById('event-details-container').classList.add('hidden');
}

function addEvent(event) {
    event.preventDefault(); 

    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const description = document.getElementById('event-description').value;
    const location = document.getElementById('event-location').value;

    const tbody = document.getElementById('event-table-body');
    if (editIndex === -1) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${date}</td>
            <td>${description}</td>
            <td>${location}</td>
            <td>
                <button onclick="editEvent(this)">Edit</button>
                <button onclick="deleteRow(this)">X</button>
                <button onclick="showEventDetails(this.parentElement.parentElement)">View</button>
            </td>
        `;
        tbody.appendChild(newRow);
    } else {
        const row = tbody.rows[editIndex];
        row.cells[0].textContent = title;
        row.cells[1].textContent = date;
        row.cells[2].textContent = description;
        row.cells[3].textContent = location;
        editIndex = -1;
    }

    document.getElementById('event-form').reset();
    hideEventForm();
}

function editEvent(button) {
    const row = button.parentElement.parentElement;
    const cells = row.cells;
    document.getElementById('event-title').value = cells[0].textContent;
    document.getElementById('event-date').value = cells[1].textContent;
    document.getElementById('event-description').value = cells[2].textContent;
    document.getElementById('event-location').value = cells[3].textContent;

    document.getElementById('form-title').textContent = 'Edit Event';
    document.getElementById('event-form').scrollIntoView();

    editIndex = row.rowIndex - 1;
    showEventForm();
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    hideEventDetails(); 
}

document.getElementById('event-form').addEventListener('submit', addEvent);





let editingRow = null;

    function toggleReportForm() {
      const formContainer = document.getElementById('report-form-container');
      formContainer.classList.toggle('hidden');
    }

    document.getElementById('add-report-btn').addEventListener('click', function () {
      editingRow = null;
      document.getElementById('report-form').reset();
      document.getElementById('form-title').textContent = 'Add New Report';
      toggleReportForm();
    });

    document.getElementById('report-form').addEventListener('submit', function (event) {
      event.preventDefault();

      const date = document.getElementById('report-date').value;
      const type = document.getElementById('report-type').value;
      const description = document.getElementById('report-description').value;
      const status = document.getElementById('report-status').value;

      if (editingRow) {
        editingRow.children[1].textContent = date;
        editingRow.children[2].textContent = type;
        editingRow.children[3].textContent = description;
        editingRow.children[4].textContent = status;
      } else {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                    <td>${Date.now()}</td>
                    <td>${date}</td>
                    <td>${type}</td>
                    <td>${description}</td>
                    <td>${status}</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                `;

        document.getElementById('reports-table-body').appendChild(newRow);
      }

      updateSummaryCounts();
      toggleReportForm();

      document.getElementById('report-form').reset();
      editingRow = null;
    });
    function updateSummaryCounts() {
      const totalReports = document.getElementById('reports-table-body').children.length;
      document.getElementById('total-reports').textContent = totalReports;

      const reportsThisMonth = Array.from(document.getElementById('reports-table-body').children).filter(row => {
        const reportDate = new Date(row.children[1].textContent);
        const today = new Date();
        return reportDate.getMonth() === today.getMonth() && reportDate.getFullYear() === today.getFullYear();
      }).length;
      document.getElementById('reports-this-month').textContent = reportsThisMonth;

      const pendingReports = Array.from(document.getElementById('reports-table-body').children).filter(row => {
        return row.children[4].textContent === 'Pending';
      }).length;
      document.getElementById('pending-reports').textContent = pendingReports;
    }

    document.getElementById('reports-table-body').addEventListener('click', function (event) {
      if (event.target.classList.contains('edit-btn')) {
        const row = event.target.closest('tr');
        const date = row.children[1].textContent;
        const type = row.children[2].textContent;
        const description = row.children[3].textContent;
        const status = row.children[4].textContent;

        document.getElementById('report-id').value = row.children[0].textContent;
        document.getElementById('report-date').value = date;
        document.getElementById('report-type').value = type;
        document.getElementById('report-description').value = description;
        document.getElementById('report-status').value = status;

        editingRow = row;
        document.getElementById('form-title').textContent = 'Edit Report';
        toggleReportForm();
      } else if (event.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this report?')) {
          const row = event.target.closest('tr');
          row.remove();
          updateSummaryCounts();
        }
      }
    });

    




             // maintenance page 

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('room-filter').addEventListener('input', filterRequests);
      document.getElementById('status-filter').addEventListener('change', filterRequests);
    
      function filterRequests() {
        const roomFilter = document.getElementById('room-filter').value.toLowerCase();
        const statusFilter = document.getElementById('status-filter').value.toLowerCase();
        const requestRows = document.querySelectorAll('#request-list tr');
    
        requestRows.forEach(row => {
          const room = row.cells[0].textContent.toLowerCase();
          const status = row.cells[2].textContent.toLowerCase();
          const matchesRoom = room.includes(roomFilter);
          const matchesStatus = statusFilter === 'all' || status === statusFilter;
          
          if (matchesRoom && matchesStatus) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      }

      window.updateRequest = function(button) {
        const row = button.parentElement.parentElement;
        const note = row.querySelector('input[type="text"]').value;
        console.log(`Note for room ${row.cells[0].textContent}: ${note}`);
      }
    
      document.querySelector('.material-icons-outlined.account_circle').addEventListener('click', () => {
        const profileDropdown = document.getElementById('profile-dropdown');
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
      });
    
      document.querySelector('.material-icons-outlined.notifications').addEventListener('click', () => {
        const notificationDropdown = document.getElementById('notification-dropdown');
        notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
      });
    
      window.toggleSearch = function() {
        const searchBar = document.getElementById('search-bar');
        searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
      }
    
      window.openSidebar = function() {
        document.getElementById('sidebar').style.display = 'block';
      }
    
      window.closeSidebar = function() {
        document.getElementById('sidebar').style.display = 'none';
      }
    
      document.getElementById('themeSwitch').addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
      });
    });