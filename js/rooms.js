const roomsData = [
    { id: 1, number: '101', status: 'vacant', type: 'single', occupants: [] },
    { id: 2, number: '102', status: 'occupied', type: 'double', occupants: ['John Doe', 'Jane Smith'] },
    { id: 3, number: '103', status: 'booked', type: 'single', occupants: [] },
    
];

function displayRooms(rooms) {
    const roomsTable = document.getElementById('rooms-table');
    roomsTable.innerHTML = '';

    rooms.forEach(room => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-2 px-4 border-b">${room.id}</td>
            <td class="py-2 px-4 border-b">${room.number}</td>
            <td class="py-2 px-4 border-b">${room.status}</td>
            <td class="py-2 px-4 border-b">${room.occupants.length ? room.occupants.join(', ') : 'None'}</td>
        `;
        roomsTable.appendChild(row);
    });
}

displayRooms(roomsData);

document.getElementById('search-bar').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const filteredRooms = roomsData.filter(room =>
        room.number.includes(searchQuery) ||
        room.occupants.some(occupant => occupant.toLowerCase().includes(searchQuery))
    );
    displayRooms(filteredRooms);
});

document.getElementById('filter-status').addEventListener('change', function () {
    const filterValue = this.value;
    const filteredRooms = roomsData.filter(room =>
        filterValue === '' || room.status === filterValue
    );
    displayRooms(filteredRooms);
});