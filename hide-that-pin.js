// Medium - 1
const hidePin = (num) => {
    const obj = {
        1: 'pop',
        10: 'double rip',
        100: 'hide your mints',
        1000: 'fall',
        10000: 'reverse the output'
    }
    let binary = num.toString(2);
    let rev = false;
    const result = [];
    while (binary) {
        if (binary >= 10000) {
            rev = !rev;
            binary = binary - 10000;
        } else if (binary >= 1000) {
            result.push(obj[1000]);
            binary = binary - 1000;
        } else if (binary >= 100) {
            result.push(obj[100]);
            binary = binary - 100;
        } else if (binary >= 10) {
            result.push(obj[10]);
            binary = binary - 10;
        } else if (binary >= 1) {
            result.push(obj[1]);
            binary = binary - 1;
        }
    }
    return rev ? result : result.reverse();
}

console.log(hidePin(3));