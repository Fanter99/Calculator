//alert("test")
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
let point_flag = false;

function button_press(i){
    if (i.target.parentElement.classList.contains('color')){
        button_operation_press(i)
    }

    const element = i.target.parentElement.classList[0];
    switch (element){
        case 'AC':
            output.textContent="";
            point_flag = false;
            break;
        case 'Backspace':
            if (output.textContent[output.textContent.length-1] = "."){
                point_flag = false;
            }
            output.textContent = output.textContent.substring(0, output.textContent.length -1);
            break;
        default:
            if (output.textContent.length <= 16){
            switch (element) {   
                case 'seven':
                    output.append("7");
                    break;
                case 'eight':
                    output.append("8");
                    break;
                
                case 'nine':
                    output.append("9");
                    break;  
                    
                case 'one':
                    output.append("1");
                    break; 
                                    
                case 'two':
                    output.append("2");
                    break;
                case 'three':
                    output.append("3");
                    break;
                
                case 'four':
                    output.append("4");
                    break;  
                    
                case 'five':
                    output.append("5");
                    break;
                                
                case 'six':
                    output.append("6");
                    break;
                case 'zero':
                    output.append("0");
                    break;
                
                case 'comma':
                    if (point_flag === false){
                        output.append(".");
                        point_flag = true;
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

