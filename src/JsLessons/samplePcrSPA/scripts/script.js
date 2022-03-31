import { move, myFunction, reset } from "./func.js";

export var fname = document.getElementById("fname").value;
export var lname = document.getElementById("lname").value;
export var dob = document.getElementById("dob").value;
export var gender = document.getElementById("gender").value;
export var city = document.getElementById("city").value;
export var date = document.getElementById("date").value;
export var time = document.getElementById("time").value;
export var lab = document.getElementById("lab").value;
export var report = document.getElementById("report").value;
export var result = document.getElementById("result").value;
export var aadhar = document.getElementById("aadhar").value;
export var store = [];

export var table = document.getElementById("table1");
export var tr = table.getElementsByTagName("tr");

export var input = document.getElementById("find").value;
export var tr = table.getElementsByTagName("tr");
export var table1 = document.getElementById("table1");
// export var tr1 = table.getElementById("sear");
export var msg = document.getElementById("msg");

var input1 = document.getElementById("ip");
input1.addEventListener("click", myFunction);

var add = document.getElementById("add");
add.addEventListener("click", move);

var typed = document.getElementById("find");
typed.addEventListener("keyup",reset);



            

