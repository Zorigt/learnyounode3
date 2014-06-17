var temp = process.argv, sum = 0;

for(var i = 2; i < temp.length; i++) {
  sum += Number(temp[i]);
}

console.log(sum);
