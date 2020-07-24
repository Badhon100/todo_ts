"use strict";
var activity = [];
var count = 0;
var track = [];
function list() {
    var input = document.getElementById("input");
    count = 0;
    activity.push(input.value);
    document.getElementById("list").innerHTML = "";
    for (var i = 0; i < activity.length; i++) {
        count = i + 1;
        document.getElementById("list").innerHTML +=
            "<li>" + count + "." + " " + activity[i] + "</li>" + "</input>";
        // "<button class = 'btn btn-danger' onclick = ''>" + 
        // "<i class='icon-minus-sign icon'>" + "</button>";
        console.log(activity);
    }
}
// function remove(check:number){
//   activity.splice(check-1, check);
//   list();
// }
