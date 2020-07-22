
function list(){
    let input = document.getElementById("input")! as HTMLInputElement;
    console.log(input.value);
    document.getElementById("list")!.innerHTML = input.value;
    let hold = input.value;
    let name:string [] = [hold];
    console.log(name);
    
}

