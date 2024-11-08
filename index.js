// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  //substing 
  // hourHand and minuteHand
  // if minute is 0 = "o'clock"
  // 
  let map = {
    "1": "one",
    "2": "two",
    "3":"three",
    "4": "four",
    "5" : "five",
    "6" : "six",
    "7": "seven",
    "8" : "eight",
    "9" : "nine",
    "10" : "ten",
    "11" : "eleven",
    "12" : "t"
  }
  if (time === '0:00') {
    return 'midnight';
  }else if (time=== '12:00'){
    return 'midday'
  }
  let res
  hands = time.split(":")
  switch(hands[1]){
    case '15':{
      res = 'quarter past';
      res = map[hands[0]] + res;
      break;
    }
    case '30' :{
      res = 'half past'
      res = map[hands[0]] + res;
      break;
    }
    case '45':{
      res = 'quarter to';
      res = map[hands[0]] + res;
      break;
    }
    case '00':{
      res = `o' clock`;
      res = map[hands[0]] + res;
      break;
    }
    default :{
      timeUtil(hands[0],hands[1])
    }
  }
  return res ;
}

function handleHourHand(hourHand, timeString) {
  
}
function timeUtil(hourHand, minHand){

}

module.exports = { convertTimeToWords };