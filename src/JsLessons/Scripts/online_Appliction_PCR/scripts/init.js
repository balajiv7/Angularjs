var rIndex,
  table = document.getElementById("table"),
  table2  = document.getElementById("table2");

// check the empty input
function checkEmptyInput() {
  var isEmpty = false,
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    age = document.getElementById("age").value,
    Aadhar = document.getElementById("aadhar").value,
    DOB = document.getElementById("Dob").value,
    city = document.getElementById("city").value,
    Dot = document.getElementById("dot").value,
    Tot = document.getElementById("tot").value,
    Lab = document.getElementById("lab").value,
    rep = document.getElementById("rep").value,
    gender = document.getElementById("gender").value,
    Result = document.getElementById("res").value;

  if (fname === "") {
    alert("First Name Connot Be Empty");
    isEmpty = true;
  } else if (lname === "") {
    alert("Last Name Connot Be Empty");
    isEmpty = true;
  } else if (age === "") {
    alert("Age Connot Be Empty");
    isEmpty = true;
  } else if (Aadhar === "") {
    alert("Aadhar cannot be Empty");
    isEmpty = true;
  } else if (DOB === "") {
      alert("DOB cannot be Empty");
      isEmpty = true;
    } else if (city === "") {
        alert("City cannot be Empty");
        isEmpty = true;
  } else if (Dot === "") {
      alert("DateOfBirth cannot be Empty");
      isEmpty = true;
  } else if (Tot === "") {
      alert("Tot cannot be Empty");
      isEmpty = true;
  } else if (Lab === "") {
      alert("Lab cannot be Empty");
      isEmpty = true;
  } else if (rep === "") {
      alert("rep cannot be Empty");
      isEmpty = true;
  }else if (gender === "") {
      alert("Gender cannot be Empty");
      isEmpty = true;
  }else if (Result === "") {
      alert("result cannot be Empty");
      isEmpty = true;
  }

  return isEmpty;
}

// add Row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
    
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),
      cell6 = newRow.insertCell(5),
      cell7 = newRow.insertCell(6),
      cell8 = newRow.insertCell(7),
      cell9 = newRow.insertCell(8),
      cell10 = newRow.insertCell(9),
      cell11 = newRow.insertCell(10),
      cell12 = newRow.insertCell(11),
      fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      age = document.getElementById("age").value,
      Aadhar = document.getElementById("aadhar").value,
      DOB = document.getElementById("Dob").value,
      city = document.getElementById("city").value,
      Dot = document.getElementById("dot").value,
      Tot = document.getElementById("tot").value,
      Lab = document.getElementById("lab").value,
      rep = document.getElementById("rep").value,
      gender = document.getElementById("gender").value,
      Result = document.getElementById("res").value;

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = age;
    cell4.innerHTML = Aadhar;
    cell5.innerHTML = DOB;
    cell6.innerHTML = city;
    cell7.innerHTML = Dot;
    cell8.innerHTML = Tot;
    cell9.innerHTML = Lab;
    cell10.innerHTML = rep;
    cell11.innerHTML = gender;
    cell12.innerHTML = Result;

    // call the function to set the event to the new row
    selectedRowToInput();
    removeSelectedRow();
  }
}

// display selected row data into input text
function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the selected row index
      rIndex = this.rowIndex;
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("lname").value = this.cells[1].innerHTML;
      document.getElementById("age").value = this.cells[2].innerHTML;
      document.getElementById("aadhar").value = this.cells[3].innerHTML;
      document.getElementById("Dob").value = this.cells[4].innerHTML;
      document.getElementById("city").value = this.cells[5].innerHTML;
      document.getElementById("dot").value = this.cells[6].innerHTML;
      document.getElementById("tot").value = this.cells[7].innerHTML;
      document.getElementById("lab").value = this.cells[8].innerHTML;
      document.getElementById("rep").value = this.cells[8].innerHTML;
      document.getElementById("gender").value = this.cells[8].innerHTML;
      document.getElementById("res").value = this.cells[8].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
  var fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    age = document.getElementById("age").value,
    Aadhar = document.getElementById("aadhar").value,
    DOB = document.getElementById("Dob").value,
    city = document.getElementById("city").value,
    Dot = document.getElementById("dot").value,
    Tot = document.getElementById("tot").value,
    Lab = document.getElementById("lab").value,
    rep = document.getElementById("rep").value,
    gender = document.getElementById("gender").value,
    Result = document.getElementById("res").value;

  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = lname;
    table.rows[rIndex].cells[2].innerHTML = age;
    table.rows[rIndex].cells[3].innerHTML = Aadhar;
    table.rows[rIndex].cells[4].innerHTML = DOB;
    table.rows[rIndex].cells[5].innerHTML = city;
    table.rows[rIndex].cells[6].innerHTML = Dot;
    table.rows[rIndex].cells[7].innerHTML = Tot;
    table.rows[rIndex].cells[8].innerHTML = Lab;
    table.rows[rIndex].cells[9].innerHTML = rep;
    table.rows[rIndex].cells[10].innerHTML = gender;
    table.rows[rIndex].cells[11].innerHTML = Result;
   
  }
}

function removeSelectedRow() {
  // table.deleteRow(rIndex);
  // clear input text
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("age").value = "";
  document.getElementById("aadhar").value = "";
  document.getElementById("Dob").value = "";
  document.getElementById("city").value = "";
  document.getElementById("dot").value = "";
  document.getElementById("tot").value = "";
  document.getElementById("lab").value = "";
  document.getElementById("rep").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("res").value = "";
  
}
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("find");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }}}}
      