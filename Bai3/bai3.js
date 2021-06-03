let str1 = 'codegym' ;
function checkVowels(str) {
    let counter = 0;
    let vowels = ["a", "e", "i", "o", "u"] ;
    for ( let i = 0 ; i < str.length ; i++ ) {
        if ( vowels.indexOf(str[i]) !== -1) {
            counter++ ;
        }
    }
    if (counter) {
        return counter
    }else {
        return false ;
    }
}
let result = checkVowels(str1) ;
if (result) {
    document.write('Số ký tự nguyên âm là : ' + result) ;
} else {
    document.write('Không có ký tự nguyên âm nào');
}