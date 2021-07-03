// Code your solution in this file!


function distanceFromHqInBlocks(currentLocation){
  return Math.abs(42-currentLocation)
}

function distanceFromHqInFeet(currentLocation){
  return Math.abs(42-currentLocation)*264
}

function distanceTravelledInFeet(startStreet, endStreet){
  return Math.abs(startStreet-endStreet)*264
}

function calculatesFarePrice(startStreet, endStreet){
  if (Math.abs(startStreet-endStreet)*264 <= 400){
    return 0
  }
  else if (Math.abs(startStreet-endStreet)*264 > 2500){
    return 'cannot travel that far'
  }
  else if (Math.abs(startStreet-endStreet)*264 > 2000){
    return 25
  }
  else if (Math.abs(startStreet-endStreet)*264 > 400){
    return (((Math.abs(startStreet-endStreet)*264)-400)*2)/100
  }
}

