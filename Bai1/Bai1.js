function Firstclass(a,b) {
    if (a == 0) {
        if (b == 0) {
            document.write('Phương trình có vô số nghiệm')
        }
        else {
            document.write('Phương trình vô nghiệm')
        }
    }
    else {
        document.write('Phương trình có một nghiệm là x: ' + (-b/a) )
    }
}
 let giaiPT = Firstclass(5,8)