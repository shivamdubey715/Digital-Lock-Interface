function sumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
      const digit = num % 10;
      sum += digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  function isPrime(n) {
    for (var i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
  
  function function2(minute) {
    let finalPrime = 0;
    let k = 1;
    for (let i = 950000101; i >= 0; i -= 18) {
      if (k === minute) {
        break;
      }
      if (i % 10 !== 5 ) {
        if(sumOfDigits(i) === 16){
          if(isPrime(i)){
            finalPrime = i;
            k++;
          }
        }
      }
    }
    return finalPrime;
  }
  
  function function1(power) {
    let finalPrime = 0;
    for (let i = 59; i <= 1000000000; i += 18) {
      if (i < power) {
        continue;
      }
      if (i % 10 !== 5) {
        if(sumOfDigits(i) === 14){
          if(isPrime(i)){
            finalPrime = i;
            break;
          }
        }
        
      }
    }
    return finalPrime;
  }
  
  function myPow(x, n) {
    let ans = 1.0;
    let nn = n;
    if (nn < 0) {
      nn = -1 * nn;
    }
    while (nn) {
      if (nn % 2) {
        ans = ans * x;
        nn = nn - 1;
      } else {
        x = x * x;
        nn = nn / 2;
      }
    }
    if (n < 0) {
      ans = 1.0 / ans;
    }
    return ans;
  }
  
  function checkPassword(password) {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    let sum = hour + minute + day + month + year;
    let power = sum % 10;
    if (power === 0) {
      power = 5;
    } else if (power === 1) {
      power = 5;
    } else if (power === 2) {
      power = 6;
    } else if (power === 3) {
      power = 7;
    } else if (power === 4) {
      power = 8;
    }
    let limit = myPow(10, power);
  
    let temp1 = (function1(limit) % 10000) + Math.floor(function1(limit) / 10000);
  
    let temp2 = (function2(minute) % 10000) + Math.floor(function2(minute) / 10000);
  
    let ans = (temp1 + temp2 + year + minute + hour) % 10000;
  
    return ans === password;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('checkBtn');
    const passwordInput = document.getElementById('password');
    const result = document.getElementById('result');
  
    checkBtn.addEventListener('click', () => {
      const password = parseInt(passwordInput.value);
      if (isNaN(password)) {
        result.textContent = 'Please enter a valid password.';
        result.style.color = 'red'; // Set color to red
      } else if (checkPassword(password)) {
        result.textContent = 'Password is correct. Access granted.';
        result.style.color = 'green'; // Set color to green
      } else {
        result.textContent = 'Incorrect password. Access denied.';
        result.style.color = 'red'; // Set color to red
      }
    });
    
  });
  