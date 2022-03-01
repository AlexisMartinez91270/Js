const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let string = '';
  for (i = 0; i < arr.length; i++) {
    string += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('... ' + string);
}
printForecast(data1);
printForecast(data2);
