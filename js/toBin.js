function toBin(str) {
    const arr = [];
    let remainder, str2, num, char;
    while (str.length > 0) {
        str2 = ""; 
        remainder = 0;
        for (let i = 0; i < str.length; i++) { // str2 = str组成的十进制数 / 2
            num = Number(str[i]);
            num = remainder * 10 + num;
            char = Math.floor(num / 2).toString();
            // 忽略最高为的0，即最高位如果是0, 则不放入 str2
            if (!(char === "0" && str2 === "")) { 
                str2 += char; 
            }
            remainder = num % 2;
        }
        str = str2;
        arr.push(remainder); // 保存余数
    }
    return arr.reverse().join('');
}
console.log(toBin("3")); // 11
console.log(toBin("9")); // 1001
console.log(toBin("10")); // 1010
console.log(toBin("120")); // 1111000
console.log(toBin("90071992547409921")); // 101000000000000000000000000000000000000000000000000000001