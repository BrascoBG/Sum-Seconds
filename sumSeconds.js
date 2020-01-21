function sumSeconds([arg1,arg2,arg3]){
  let firstPlayer = parseInt(arg1);
  let secondPlayer = parseInt(arg2);
  let thirdPlayer = parseInt(arg3);
  let seconds = firstPlayer + secondPlayer + thirdPlayer;
  minutes = 0;

  if(seconds > 59){
    minutes++;
    seconds = seconds - 60;
  }
  if(seconds > 59){
    minutes++;
    seconds = seconds - 60;
  } 
  if(seconds > 59){
    minutes++;
    seconds = seconds - 60;
  }
  if(seconds < 10){
    console.log(minutes + ":0" + seconds);
  } else{
    console.log(minutes + ":" + seconds);
  }
}

sumSeconds([14,12,10]);
