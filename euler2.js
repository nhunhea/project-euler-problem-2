function sumOfevenF(x) {
  var fibon = [1, 2];
  var sum = 0,
    x;
  function fibo(arr) {
    return arr[arr.length - 1] + arr[arr.length - 2];
  }
  while (fibon[fibon.length - 1] < x) {
    fibon.push(fibo(fibon));
  }
  fibon.forEach(function(n) {
    if (n % 2 === 0) {
      sum += n;
    }
  });
  return sum;
}
console.log(sumOfevenF(4000000));
