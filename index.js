var rs = require('readline-sync');

rs.setDefaultOptions({limit: ['+', '-', '*', '/']}); 
var oper = rs.question('What operation would you like to perform? '); {
    console.log('You chose ' + oper);
}     
       
     var fstNumber = rs.questionInt('Please enter the first number: '); {
    console.log('Your first number is: ' + fstNumber);
}
var scdNumber = rs.questionInt('Please enter the second number: '); {
    console.log('Your second number is: ' + scdNumber);
}

    const first = parseFloat(fstNumber);
    const second =parseFloat(scdNumber);
    switch(oper) {
        case '+':
            computation = first + second;
            break
            case '-':
            computation = first = second;
            break
            case '*':
                computation = first * second;
                break
                case '/':
                    computation = first / second;
                    break
    }

console.log('The answer is: ' + computation);



