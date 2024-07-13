function pencil1(){
    document.getElementById('name').removeAttribute('readonly');
}
const homeCustomer = [
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'skadj@gmail.com', col5: '2GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'skadj@gmail.com', col5: '0.4GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'skadj@gmail.com', col5: '200GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'skadj@gmail.com', col5: '50GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'skadj@gmail.com', col5: '45GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'skadj@gmail.com', col5: '500GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'skadj@gmail.com', col5: 'GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'skadj@gmail.com', col5: 'GB' },
];

function HomeCustomer() {
    var tableBody = document.getElementById('CustomerTable').getElementsByTagName('tbody')[0];
    var tableBody1=document.getElementById('DepartmentTable').getElementsByTagName('tbody')[0];
  
    homeCustomer.forEach(function(rowDataItem) {
        var row = document.createElement('tr');

        var keys = Object.keys(rowDataItem);

        for (var i = 0; i < 5; i++) {
            var cell = document.createElement('td');
            cell.textContent = keys[i] ? rowDataItem[keys[i]] : '';
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
    homeDepartment.forEach(function(rowDataItem) {
    
        var row = document.createElement('tr');

        
        var keys = Object.keys(rowDataItem);

        
        for (var i = 0; i < 5; i++) {
            var cell = document.createElement('td');
            cell.textContent = keys[i] ? rowDataItem[keys[i]] : '';
            row.appendChild(cell);
        }

        tableBody1.appendChild(row);
    });
}
const homeDepartment=[

    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'Row 10 Col 4', col5: 'B' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'Row 10 Col 4', col5: 'GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'Row 10 Col 4', col5: 'GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'Row 10 Col 4', col5: 'GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'Row 10 Col 4', col5: 'GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'Row 10 Col 4', col5: 'GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'Row 10 Col 4', col5: 'GB' },
    { col1: 'Row 10 Col 1', col2: 'Row 10 Col 2', col3: 'Row 10 Col 3', col4: 'Row 10 Col 4', col5: 'GB' },
];

document.addEventListener('DOMContentLoaded', HomeCustomer);

function addRowsToTable2() {
    var tableBody = document.getElementById('CustomerP').getElementsByTagName('tbody')[0];
    homeCustomer.forEach(function(rowDataItem) {
        var row = document.createElement('tr');
        var keys = Object.keys(rowDataItem);
        for (var i = 0; i < 5; i++) {
            var cell = document.createElement('td');
            cell.textContent = keys[i] ? rowDataItem[keys[i]] : ''; 
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', addRowsToTable2);
function addRowsToTable1() {
    var tableBody = document.getElementById('DepartmentsP').getElementsByTagName('tbody')[0];
    homeDepartment.forEach(function(rowDataItem) {
        var row = document.createElement('tr');
        var keys = Object.keys(rowDataItem);
        for (var i = 0; i < 5; i++) {
            var cell = document.createElement('td');
            cell.textContent = keys[i] ? rowDataItem[keys[i]] : ''; 
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}

// Initialize tables on each page

document.addEventListener('DOMContentLoaded', addRowsToTable1);