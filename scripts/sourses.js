function BiggestSum(array) {
//array.split(' ');
var i = 0;
var result = 0;
while (i < array.length) {
  var firstsum = array[i] + array[i + 1];
  if (firstsum > result) {
  result = firstsum;
  }
  i++;
}
return result;
}
