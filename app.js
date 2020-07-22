"use strict";
function list() {
    var input = document.getElementById("input");
    console.log(input.value);
    document.getElementById("list").innerHTML = input.value;
    var hold = input.value;
    var name = [hold];
    console.log(name);
}
