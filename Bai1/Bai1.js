function Firstclass(a,b) {
    if (a === 0) {
        if (b === 0) {
            return  'Phương trình có vô số nghiệm' ;
        }
        else {
            return  'Phương trình vô nghiệm'
        }
    }
    else {
        return  'Phương trình có một nghiệm là x: ' + -b/a ;
    }
}
 let result = Firstclass(5,8)
document.write(result) ;