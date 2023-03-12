

// fetch(
//   "https://sheets.googleapis.com/v4/spreadsheets/11lTLi1K4B3l5re0lpVeiWN2Ggnwfm5UD2FeMma64bqI/values/drawtable?alt=json&key=AIzaSyCu603-EKBk-T1VziLK0wPmCNv1vQlxCDg"
// )
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });


  fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1-vTT5LVlscvExPjqJHrhmlO2ZMM-93McoP-yXT8gyOU/values/工作表1?alt=json&key=AIzaSyAVlwHA4EQx7AWjK1QsT87shL37vhKWrl4"
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });