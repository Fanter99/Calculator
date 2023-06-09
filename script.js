const elements = document.querySelectorAll('.board div');
const output = document.querySelector('p');

for (let i of elements){
    i.style.gridArea = i.classList[0]
}

const buttons = document.querySelectorAll('button');

function button_operation_press(i){
    i.target.parentElement.style.boxShadow = "inset 3px -1px 5px red"
    
};

function button_leave(i){
    i.target.parentElement.style.boxShadow = "none"
    
};

function operate(a,b, operation){
    switch (operation){
        case 'add':
            return a + b;
            break
        case 'sub':
            return a - b;
            break;
        case 'divide':
            return a/b;
            break;
        case 'mult':
            return a * b;
            break;            
    }
}
let point_flag = false;
let empty_flag = true;
let num_flag = false;

let number1 = NaN;
let number2 = NaN;
console.log(number1, number2);
let func = NaN;

function button_press(i){
    if (i.target.parentElement.classList.contains('color')){
        button_operation_press(i)
    }

    const element = i.target.parentElement.classList[0];
    switch (element){
        case 'AC':
            output.textContent="0";
            point_flag = false;
            empty_flag = true;
            break;
        case 'Backspace':
            if (output.textContent[output.textContent.length-1] = "."){
                point_flag = false;
            }

            const lastchar = output.textContent.length;
            output.textContent = output.textContent.substring(0, output.textContent.length -1);

            if (lastchar === 1){
                output.textContent="0";
                empty_flag = true;
            };
            break;
        case 'add':
        case 'sub':
        case 'mult':
        case 'divide':  
            if (empty_flag !== true){
                if (isNaN(number1)){
                    console.log(number1);
                    number1 = Number(output.textContent);

                }
                else{
                    number2 = Number(output.textContent);
                    let res = operate(number1, number2, func);
                    output.textContent = res;
                    number1 = res;
                    number2 = NaN;
                }
                func = element;
                num_flag = true;
            }     
            break;
        case 'gleich':
            console.log(num_flag, number1);
            if (num_flag == false && !isNaN(number1)){
                console.log(output.textContent);
                console.log(number2);
                number2 = Number(output.textContent);

                console.log(number2);
                output.textContent = operate(number1, number2, func);
                number1 = NaN;
                number2 = NaN;
                func = NaN;
                num_flag = true;
            }
            break;         
        default:
            if (num_flag == true){
                output.textContent = '';
                num_flag = false;
            }
            if (output.textContent.length <= 14){
            switch (element) {   
                case 'seven':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("7");
                    empty_flag = false;
                    break;
                case 'eight':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("8");
                    empty_flag = false;
                    break;
                
                case 'nine':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("9");
                    empty_flag = false;
                    break;  
                    
                case 'one':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("1");
                    empty_flag = false;
                    break; 
                                    
                case 'two':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("2");
                    empty_flag = false;
                    break;
                case 'three':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("3");
                    empty_flag = false;
                    break;
                
                case 'four':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("4");
                    empty_flag = false;
                    break;  
                    
                case 'five':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("5");
                    empty_flag = false;
                    break;
                                
                case 'six':
                    if (empty_flag == true){
                        output.textContent = '';
                    }
                    output.append("6");
                    empty_flag = false;
                    break;
                case 'zero':
                    if (empty_flag !== true){
                        output.append("0");
                        
                    }                    
                    break;
                
                case 'comma':
                    if (point_flag === false){
                        output.append(".");
                        point_flag = true;
                        empty_flag = false;
                    }
                    break;           
            }  
        }
        
        break;    
    }
}

for (let button of buttons){

    button.addEventListener("mousedown", i => button_press(i));
    button.addEventListener("mouseup", i => button_leave(i));
};

