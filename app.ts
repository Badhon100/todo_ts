let activity: string[] = [];
let count: number = 0;
let track: number[] = [];

function list() {

  let input = document.getElementById("input")! as HTMLInputElement;
  count = 0;
  activity.push(input.value);
  document.getElementById("list")!.innerHTML = "";
  for (let i = 0; i < activity.length; i++) {
    count = i + 1;
    document.getElementById("list")!.innerHTML +=
    "<li>" + count + "." + " " + activity[i] + "</li>";
  }
  

}



