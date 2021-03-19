// Hard - 1
const checkSequence = (arrayOfChais, k) => {
    let count = 1;
    let currentValue = arrayOfChais[0];
    let flag = false;
    for (let i = 1; i < arrayOfChais.length; i++) {
        if (currentValue === arrayOfChais[i]) {
            currentValue = arrayOfChais[i];
            count = count + 1;
        } else {
            count = 1;
            currentValue = arrayOfChais[i];
        }
        if (count > k) {
            flag = true
            break;
        }
    }
    return flag;
}

const makeChai = (values) => {
    let { n, k, g, b } = values;
    let result = [];
    let flag;
    for (let i = 0; i < n; i++) {
        if (g > 0) {
            result.push('green');
            g--;
        }
        if (b > 0) {
            result.push('black');
            b--;
        }
    }
    flag = checkSequence(result, k);
    return flag ? [] : result;
}

console.log(makeChai({ n: 5, k: 1, g: 3, b: 2 }));