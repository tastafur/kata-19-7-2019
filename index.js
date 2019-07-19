exports.lockAndSay = (number) => {
    const digits = (''+number).split('')
    let countDigit = 1 
    digits.forEach((digit, i) =>{
        if(i > 0){
            if(digit === digits[i -1])
                countDigit++
        }
    })
    return `${countDigit}${digits[0]}` 
}