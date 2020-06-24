// Global variables(used in functions)

const doorImage1 = document.getElementById('door1');

const doorImage2 = document.getElementById('door2');

const doorImage3 = document.getElementById('door3');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

const startButton = document.getElementById('start');

let currentlyPlaying = true;

// Functions for determining game logic, win or loss
const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}
const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}
const playDoor = (door) => {
  numClosedDoors -= 1;
  if(numClosedDoors === 0) {
    gameOver('win');
  } else if(isBot(door) === true) {
    gameOver();
  }
}
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath; 
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

// onclick functions to determine logic
doorImage1.onclick = () => {
  if(currentlyPlaying === true && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
  
};

doorImage2.onclick = () => {
  
  if(currentlyPlaying === true && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if(currentlyPlaying === true && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
  
};

startButton.onclick = () => {
  if(currentlyPlaying === false) {
    startRound();
  }
  
};

const startRound = () => {
  numClosedDoors = 3;
  doorImage.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
};

/* Calling the startRound arrow function:
startRound() function calls the randomChoreDoorGenerator() arrow function: */

startRound();
