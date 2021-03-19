// Easy - 1
const getFactors = (num) => {
    const factors = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

const getSum = (factors) => {
    let sum = 0;
    factors.forEach(num => {
        sum += num;
    });
    return sum;
}

const isPerfect = (num) => {
    const factors = getFactors(num);
    const sum = getSum(factors);
    if (sum === num) {
        return 'Perfect';
    } else if (sum > num) {
        return 'Abundant';
    } else {
        return 'Deficient';
    }
}

console.log(isPerfect(8));