let progressBar = document.getElementById('progressBar')
let copy = document.getElementById('copy')
let numberChange = document.getElementById('number')
let display = document.getElementById('pGen')

const upperCase = document.getElementById('upperCase')
const lowerCase = document.getElementById('lowerCase')
const incNumber = document.getElementById('incNumber')
const incSymbol = document.getElementById('incSym')
const button = document.getElementById('button')
const bar1 = document.getElementById('bar1')
const bar2 = document.getElementById('bar2')
const bar3 = document.getElementById('bar3')
const bar4 = document.getElementById('bar4')
const strengthTitle = document.getElementById('strengthTitle')




// pakt waarde van de range en returnt het.
let waarde = document.getElementById('myRange').oninput = function() {
    numberChange.innerHTML = this.value
    return waarde = this.value
}

function kleurChange() {
    if(waarde ==='10' || waarde === '11'){
        strengthTitle.innerHTML = 'TOO WEAK!'
        strengthTitle.style.marginLeft = '93px' 
        bar1.style.backgroundColor = '#F64A4A'
        bar1.style.border = '2px solid #F64A4A '
        bar2.style.backgroundColor = '#18171F'
        bar2.style.border = '2px solid #E6E5EA '
        bar3.style.backgroundColor = '#18171F'
        bar3.style.border = '2px solid #E6E5EA '
        bar4.style.backgroundColor = '#18171F'
        bar4.style.border = '2px solid #E6E5EA'
        }  else if(waarde === '12'  || waarde === '13'){
        strengthTitle.innerHTML = 'WEAK'
        strengthTitle.style.marginLeft = '164px' 
        bar1.style.backgroundColor = '#FB7C58'
        bar1.style.border = '2px solid #FB7C58 '
        bar2.style.backgroundColor = '#FB7C58'
        bar2.style.border = '2px solid #FB7C58 '
        bar3.style.backgroundColor = '#18171F'
        bar3.style.border = '2px solid #E6E5EA '
        bar4.style.backgroundColor = '#18171F'
        bar4.style.border = '2px solid #E6E5EA'
    } else if (waarde === '14' || waarde === '15' || waarde === '16'){
        strengthTitle.innerHTML = 'MEDIUM'
        strengthTitle.style.marginLeft = '136px' 
        bar1.style.backgroundColor = '#F8CD65'
        bar1.style.border = '2px solid #F8CD65'
        bar2.style.backgroundColor = '#F8CD65'
        bar2.style.border = '2px solid #F8CD65'
        bar3.style.backgroundColor = '#F8CD65'
        bar3.style.border = '2px solid #F8CD65'
        bar4.style.backgroundColor = '#18171F'
        bar4.style.border = '2px solid #E6E5EA' 
    } else if (waarde === '17' || waarde === '18' || waarde === '19' || waarde === '20'){
        strengthTitle.innerHTML = 'STRONG'
        strengthTitle.style.marginLeft = '136px' 
        bar1.style.backgroundColor = '#A4FFAF'
        bar1.style.border = '2px solid #A4FFAF'
        bar2.style.backgroundColor = '#A4FFAF'
        bar2.style.border = '2px solid #A4FFAF'
        bar3.style.backgroundColor = '#A4FFAF'
        bar3.style.border = '2px solid #A4FFAF'
        bar4.style.backgroundColor = '#A4FFAF'
        bar4.style.border = '2px solid #A4FFAF'

    }
}



    
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789

/* 1.button event listener, wanneer een van de check boxen true zijn en op de generate knop wordt gedrukt dan komt een random 
   generate button te voorschijn,

    2. value of slider komt op de groene text 

    3. copy to dashboard - eventListener

    4. push to github.
*/
button.addEventListener('click', e => {

// if uppercase = checked
    if(waarde === '10' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false || waarde === '11' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false ||
        waarde === '12' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false || waarde === '13' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false ||
        waarde === '14' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false || waarde === '15' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false ||
        waarde === '16' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false || waarde === '17' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false ||
        waarde === '18' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false || waarde === '19' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false ||
        waarde === '20' && upperCase.checked === true && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === false 
    ){
            function makePw(length) {
                if(upperCase.checked === true){ 
                    let result           = '';
                    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    let charactersLength = characters.length;
                    for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                   }
                   return result;      
                }
                
            } 
            kleurChange()
// if lowercase = checked
    } else if (waarde === '10' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '11' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false ||
                waarde === '12' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '13' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false ||
                waarde === '14' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '15' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false ||
                waarde === '16' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '17' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false ||
                waarde === '18' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '19' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false ||
                waarde === '20' && upperCase.checked === false && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false){
            function makePw(length) {
                if(lowerCase.checked === true ){
                    let result           = '';
                    let characters       = 'abcdefghijklmnopqrstuvwxyz';
                    let charactersLength = characters.length;
                    for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;      
                }
            }
            kleurChange()
// if number = checked
        } else if (waarde === '10' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '11' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false ||
                    waarde === '12' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '13' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false ||
                    waarde === '14' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '15' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false ||
                    waarde === '16' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '17' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false ||
                    waarde === '18' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '19' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false ||
                    waarde === '20' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false){
                function makePw(length) {
                    if(incNumber.checked === true){
                        let result           = '';
                        let characters       = '123456789';
                        let charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                            result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;      
                    }
                }
                kleurChange()
// if symbol is checked
            } else if (waarde === '10' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '11' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true ||
                        waarde === '12' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '13' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true ||
                        waarde === '14' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '15' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true ||
                        waarde === '16' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '17' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true ||
                        waarde === '18' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '19' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true ||
                        waarde === '20' && upperCase.checked === false && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true ){
                    function makePw(length) {
                        if(incSymbol.checked === true){
                            let result           = '';
                            let characters       = '!@#$%&*';
                            let charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;      
                        }
                    }
                    kleurChange()
// if upper & lower = checked
                } else if (waarde === '10' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '11' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '12' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || 
                            waarde === '13' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '14' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '15' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || 
                            waarde === '16' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '17' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '18' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || 
                            waarde === '19' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false || waarde === '20' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === false
                ) {
                    function makePw(length) {
                        if(upperCase.checked === true && lowerCase.checked === true  ){
                            let result           = '';
                            let characters       = 'abcdefghijklmnopPQRSTUVWXYZ';
                            let charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;      
                        }
                    }
                    kleurChange()
// if upper and number = checked 
                }  else if(waarde === '10' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '11' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '12' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '13' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '14' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '15' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '16' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '17' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '18' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '19' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false || waarde === '20' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === false
                ) {
                    function makePw(length) {
                        if(upperCase.checked === true && incNumber.checked === true  ){
                            let result           = '';
                            let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
                            let charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;      
                        }
                    }
                    kleurChange()
// if upper and symbol = checked   
                } else if(waarde === '10' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '11' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '12' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || 
                            waarde === '13' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '14' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '15' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || 
                            waarde === '16' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '17' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '18' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || 
                            waarde === '19' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true || waarde === '20' && upperCase.checked === true  && lowerCase.checked === false && incNumber.checked === false && incSymbol.checked === true
                ) {
                    function makePw(length) {
                        if(upperCase.checked === true && incSymbol.checked === true  ){
                            let result           = '';
                            let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()-+_-';
                            let charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;      
                        }
                    }
                    kleurChange()
// if lower and number = checked 
                }  else if(waarde === '10' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '11' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '12' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '13' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '14' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '15' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '16' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '17' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '18' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '19' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '20' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false
                ) {
                    function makePw(length) {
                        if(lowerCase.checked === true && incNumber.checked === true ){
                            let result           = '';
                            let characters       = 'abcdefghijklmnopqrstuvwxyz123456789';
                            let charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;      
                        }
                    }
                    kleurChange()
// if lower and Symbol = checked
                } else if(waarde === '10' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || waarde === '11' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || waarde === '12' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || 
                            waarde === '13' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || waarde === '14' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || waarde === '15' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || 
                            waarde === '16' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || waarde === '17' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || waarde === '18' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || 
                            waarde === '19' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true || waarde === '20' && upperCase.checked === false  && lowerCase.checked === true && incNumber.checked === false && incSymbol.checked === true
                ) {
                    function makePw(length) {
                        if(lowerCase.checked === true && incSymbol.checked === true ){
                            let result           = '';
                            let characters       = 'abcdefghijklmnopqrstuvwxyz!@#$%&_+*';
                            let charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;      
                        }
                    }
                    kleurChange()
// if number and symbol = checked
                } else if(waarde === '10' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || waarde === '11' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || waarde === '12' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || 
                            waarde === '13' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || waarde === '14' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || waarde === '15' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || 
                            waarde === '16' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || waarde === '17' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || waarde === '18' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || 
                            waarde === '19' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true || waarde === '20' && upperCase.checked === false  && lowerCase.checked === false && incNumber.checked === true && incSymbol.checked === true
                ) {
                    function makePw(length) {
                        if(incNumber.checked === true && incSymbol.checked === true ){
                            let result           = '';
                            let characters       = '123456789!@#$%&*_+-';
                            let charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;      
                        }
                    }
                    kleurChange()
// if upper & lower & number is checked
                } else if(waarde === '10' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '11' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '12' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '13' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '14' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '15' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '16' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '17' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '18' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || 
                            waarde === '19' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false || waarde === '20' && upperCase.checked === true  && lowerCase.checked === true && incNumber.checked === true && incSymbol.checked === false
                ) {
                    function makePw(length) {
                        if(upperCase.checked === true && lowerCase.checked === true && incNumber.checked === true ){
                            let result           = '';
                            let characters       = '123456789abcdefghijklmnOPQRSTUVWXYZ';
                            let charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;      
                        }
                    }
                    kleurChange()
                }
    display.innerHTML = makePw(waarde)
})


// copt text so u can paste it.
copy.addEventListener('click', e => {
    navigator.clipboard.writeText(display.innerHTML);

})



