//console.log('Advanced debugging example running.')
//debugger

// function goodPractices() {
//   let game = gameObject();
//   // game variable is now the whole function calling the info for everyone
//   for (let gameKey in game) {
//   // this for in loop goes through every key (gameKey) in the whole function
//     let teamObj = game[gameKey]
//     // teamObj variable is now equal to the key in this function
//     for (let teamKey in teamObj) {
//     // this for in loop goes through every key in the current team
//       let data = teamObj.player
//       // data variable is equal to this team's player
//       for (let key in data) {
//       //this for in loop goes through every key in the data and harnesses the debugger
//       }
//     }
//   }
// }

//goodPractices();

let game = gameObject();

function numPointsScored(playerName) {
  let requestedPoints;
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let playerObj = teamObj[teamKey];
        for (let player in playerObj) {
          if (player === playerName) {
            requestedPoints = playerObj[player].points;
          }
        }
      }
    }
  }
  console.log(requestedPoints);
  //debugger;
  return requestedPoints;
}

function shoeSize(playerName) {
  let requestedShoeSize;
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if(teamKey === "players") {
        let playerObj = teamObj[teamKey];
        for (let player in playerObj) {
          if (player === playerName) {
            requestedShoeSize = playerObj[player].shoe;
          }
        }
      }
    }
  }
  console.log(requestedShoeSize);
  //debugger;
  return requestedShoeSize;
}

function teamColors(teamName) {
  let requestedColors = [];
  if (teamName === game.home.teamName) {
    return requestedColors = game.home.colors.slice();
  }
  if (teamName ===  game.away.teamName) {
    return requestedColors = game.away.colors.slice();
  }
}

function teamNames() {
  let allTeams = [game.home.teamName, game.away.teamName];
  return allTeams;
}

function playerNumbers(teamName) {
  let allTeamPlayerNumbers = [];
  // Iterate over the home and away teams
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    // Check if the current team matches the specified team name
    if (teamObj.teamName === teamName) {
      for (let playerName in teamObj.players) {
        let playerObj = teamObj.players[playerName];
        let playerNumber = playerObj.number;
        allTeamPlayerNumbers.push(playerNumber);
      }
    }
  }
  return allTeamPlayerNumbers;
}

function playerStats(playerName) {
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let playerNameKey in teamObj.players) {
      if (playerNameKey === playerName) {
        // If the player name matches, return a copy of the player's stats
        return { ...teamObj.players[playerNameKey] };
      }
    }
  }
}

function bigShoeRebounds() {
  let maximumShoeSize = 0;
  let biggestShoePlayer;
  let numberOfRebounds = 0;
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let playerName in teamObj.players) {
      let playerObj = teamObj.players[playerName];
      let playerShoeSize = playerObj.shoe;
      if (playerShoeSize > maximumShoeSize) {
        maximumShoeSize = playerShoeSize;
        biggestShoePlayer = playerName;
        numberOfRebounds = playerObj.rebounds;
      }
    }
  }
  //debugger;
  return numberOfRebounds;
}

function mostPointsScored() {
  let maximumPoints = -1;
  let highScorePlayer;
  for(let teamKey in game) {
    let teamObj = game[teamKey];
    for (let playerName in teamObj.players) {
      let playerObj = teamObj.players[playerName];
      let playerPoints = playerObj.points;
      if (playerPoints > maximumPoints) {
        maximumPoints = playerPoints;
        highScorePlayer = playerName;
      }
    }
  }
  return highScorePlayer;
}
mostPointsScored();

function winningTeam() {
  let totalHomeTeamPoints = 0;
  let totalAwayTeamPoints = 0;
  let winningTeam;

  for (let teamKey in game) {
    let teamObj = game[teamKey];
    let teamPoints = 0;

    for (let playerName in teamObj.players) {
      let playerObj = teamObj.players[playerName];
      let playerPoints = playerObj.points;
      teamPoints += playerPoints;
    }

    if (teamKey === "home") {
      totalHomeTeamPoints = teamPoints;
    } else if (teamKey === "away") {
      totalAwayTeamPoints = teamPoints;
    }

    if (totalHomeTeamPoints > totalAwayTeamPoints) {
      winningTeam = teamObj.teamName;
    } else if (totalHomeTeamPoints < totalAwayTeamPoints) {
      winningTeam = teamObj.teamName;
    }
  }
  return winningTeam;
}
winningTeam();

function playerWithLongestName() {
  let longestNamePlayer;
  let maximumNumberOfLetters = -1;

  for(let teamKey in game) {
    debugger;
    let teamObj = game[teamKey];
    for (let playerName in teamObj.players) {
      let playerObj = teamObj.players[playerName];
      let nameLength = playerName.length;
      if (nameLength > maximumNumberOfLetters) {
        maximumNumberOfLetters = nameLength;
        longestNamePlayer = playerName;
      }
    }
  }
  return longestNamePlayer;
}

function doesLongNameStealATon() {
  let longestNamePlayer;
  let mostStealsPlayer;
  let maximumNumberOfLetters = 0;
  let maximumSteals = 0;
  let doTheyStealALot = false;

  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let playerName in teamObj.players) {
      let playerObj = teamObj.players[playerName];
      let playerSteals = playerObj.steals;

      if (playerSteals > maximumSteals) {
        maximumSteals = playerSteals;
        mostStealsPlayer = playerName;
      }

      if (playerName.length > maximumNumberOfLetters) {
        maximumNumberOfLetters = playerName.length;
        longestNamePlayer = playerName;
      }
    }
  }

  if (longestNamePlayer === mostStealsPlayer) {
    doTheyStealALot = true;
  }

  console.log(`The person who steals the most is ${mostStealsPlayer}.`);
  console.log(`The longest named player is ${longestNamePlayer}.`);

  return doTheyStealALot;
}