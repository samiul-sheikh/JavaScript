function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return "not a prime number";
        }
    }
    return "your number is prime";
}

var result = isPrime(4);
console.log(result);