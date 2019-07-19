exports.lookAndSay = (number) => {
    const digits = (''+number).split('')
    let countDigit = 1
    let result = ''
    if(digits.length === 1)
        return `1${number}`
        
    digits.forEach((digit, i) =>{
        if(i > 0){
            if(digit === digits[i -1]){
                countDigit++
                if(i + 1 === digits.length) {
                    result = result + countDigit + digits[i -1]
                }
            } else {
                result = result + countDigit + digits[i -1]
                countDigit = 1
            }
        }
    })
    return result
}