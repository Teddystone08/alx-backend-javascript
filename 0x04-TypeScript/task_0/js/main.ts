interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Array containing the two students
const studentsList: Student[] = [student1, student2];

// Vanilla JavaScript to render a table
const renderTable = (): void => {
  // Create the table element
  const table = document.createElement("table");
  table.border = "1";

  // Create table header
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";
  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);

  // Append rows for each student
  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  // Append the table to the document body
  document.body.appendChild(table);
};

// Call the function to render the table
renderTable();

