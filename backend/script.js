function HourMin() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    return [hour, minute];
}

function sumOfDigits(num) {
    var sum = 0;
    while (num !== 0) {
        var x = num % 10;
        sum = sum + x;
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
    var finalPrime = 0;
    var k = 1;
    for (var i = 950000101; i >= 0; i -= 18) {
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
    var finalPrime = 0;
    for (var i = 59; i <= 1000000000; i += 18) {
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
    var ans = 1.0;
    var nn = n;
    if (nn < 0) {
        -1 * nn;
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

function generatePassword() {
    const hour = parseInt(document.getElementById('hour').value);
    const minute = parseInt(document.getElementById('minute').value);
    // var [hour, minute] = HourMin();
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero-based
    var year = date.getFullYear();

    var sum = hour + minute + day + month + year;
    var power = sum % 10;
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

    var limit = myPow(10, power);

    var temp1 = (function1(limit) % 10000) + Math.floor(function1(limit) / 10000);
    var temp2 = (function2(minute) % 10000) + Math.floor(function2(minute) / 10000);

    var password = (temp1 + temp2 + year + minute + hour) % 10000;
    return password;
}

document.getElementById('generateBtn').addEventListener('click', function() {
    var passwordElement = document.getElementById('password');
    var password = generatePassword();
    passwordElement.textContent = "Generated Password: " + password;
});
