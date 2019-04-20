// Code your solution in this file!

function distanceFromHqInBlocks(currentLocation){
  return Math.abs(42 - currentLocation)
}

function distanceFromHqInFeet(currentLocation){
  return Math.abs(42 - currentLocation)*264
}

function distanceTravelledInFeet(starting_block, ending_block){
  BlocksTravelled = Math.abs(ending_block - starting_block);
     return BlocksTravelled * 264;
  return
}

function calculatesFarePrice(start, destination){
    const numberInFeet = distanceTravelledInFeet(start,destination);
    const freeFeet = 400;
    if (numberInFeet <= freeFeet){
            return 0;
        }else if (numberInFeet >= 400 && numberInFeet <= 2000) {
            return Price = (numberInFeet - freeFeet) * 0.02;
        } else if  (numberInFeet > 2000 && numberInFeet < 2500) {
            return 25;
        } else {
            return "cannot travel that far";
        }
    }
