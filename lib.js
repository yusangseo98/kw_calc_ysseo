function avg(numbers){
    let s = numbers.reduce((prev, curr)=>prev + curr,0);
    return s/numbers.length;
}

function prime(num){
  // 2 이하의 숫자는 소수가 아닙니다.
  if (num <= 1) {
    return false;
  }

  // 2는 소수입니다.
  if (num === 2) {
    return true;
  }

  // 2를 제외한 모든 짝수는 소수가 아닙니다.
  if (num % 2 === 0) {
    return false;
  }

  // 3부터 제곱근 이하의 홀수로 나누어 떨어지면 소수가 아닙니다.
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function fact(num)
{
    if (num> 15) return -1;
    else if (num === 0 || num === 1) {
        return 1; // 0!과 1!은 항상 1입니다.
      } else if (num < 0) {
        return -1;
      } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
          result *= i;
        }
        return result;
      }
}

module.exports = {
    avg,
    prime,
    fact
}