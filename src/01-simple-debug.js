//console.log('Simple debugging example running.')
//debugger;

//let x = 99
//debugger
//console.log(x)

function homeTeamName() {
    let game = gameObject();
    //return totalGame.home.teamName;
    return game["home"]["teamName"];
}
console.log(homeTeamName());

let x = 99;
let y = 42;
//debugger;
console.log("x:", x);