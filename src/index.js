module.exports = function toReadable (number) {

    var mass1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var mass2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var mass3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number >= 0 && number < 10){
      return mass1[number];
    }

    if(number >= 10 && number < 20){
        return mass2[number - 10];
    }

    if(number >=20 && number < 100){
        if(number % 10 == 0){
            return mass3[(number / 10) - 2] ;
        } else { 
            return ((mass3[Math.floor((number / 10) - 2)]) + ' ' + mass1[number % 10]);
        }
    }
    if(number > 99 && number < 1000){
        if(number % 100 == 0){
            return mass1[(number / 100)] + ' hundred';
        } 
        if((number % 100 > 0) && (number % 100 < 10)){
            return mass1[Math.floor(number / 100)] + ' hundred ' + mass1[number % 100];
        }
        if((number - Math.floor(number / 100) * 100 ) >= 10 && (number - Math.floor(number / 100) * 100 ) < 20 ){
            return mass1[Math.floor(number / 100)] + ' hundred ' + mass2[number - Math.floor(number / 100) * 100 - 10];
        }
        if(number % 10 == 0){
            return mass1[Math.floor(number / 100)] + ' hundred ' + mass3[Math.floor((number - Math.floor(number / 100) * 100 ) / 10 - 2)];
        } 
        else {
            return mass1[Math.floor(number / 100)] + ' hundred ' + mass3[Math.floor((number - Math.floor(number / 100) * 100 ) / 10 - 2)]
            + ' ' + mass1[Math.trunc(number%10)];
        }
}
}
