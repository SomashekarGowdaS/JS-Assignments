// Easy - 2
const shortenString = (str) => {
    let shortenedStr = '';
    let count = 0;
    const arr = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            if (count !== 0) {
                shortenedStr += (count + 1) + arr[i];
                count = 0;
            } else {
                shortenedStr += arr[i];
            }
        }
    }
    return shortenedStr;
}

const getOriginalString = (str) => {
    let originalStr = '';
    let count = '';
    const arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            count += arr[i];
        } else {
            if (count === '') {
                originalStr += arr[i];
            } else {
                for (let j = 0; j < Number(count); j++) {
                    originalStr += arr[i];
                }
                count = '';
            }
        }
    }
    return originalStr;
}

console.log(shortenString('AAAAAAAAAAABWWWWWWWWWWWBB'));
console.log(getOriginalString('11AB11W2B'));