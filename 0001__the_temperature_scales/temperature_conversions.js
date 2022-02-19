// functions for celcius to other conversions

function c_to_f(){
    C = document.getElementById('degC1').value;
    if (C >= -273.15) {
        document.getElementById('degF1').value = 1.8*C + 32;    
    } else {
        document.getElementById('degF1').value = 'Not a physical value';
    }
    
}
function c_to_k(){
    C = document.getElementById('degC1').value;
    if (C >= -273.15){
        document.getElementById('degK1').value = 1*C + 273.15;
    } else {
        document.getElementById('degK1').value = 'Not a physical value';
    }
}
function c_to_r(){ 
    C = document.getElementById('degC1').value;
    if (C >= -273.15){
        document.getElementById('degR1').value = 1.8*C + 491.67
    } else {
        document.getElementById('degR1').value = 'Not a physical value';
    }
}
function reset1(){
    document.getElementById('degC1').value='';
    document.getElementById('degF1').value='';
    document.getElementById('degK1').value='';
    document.getElementById('degR1').value='';
  }

//  functions for fahrenheit to other conversions

function f_to_c(){
    F = document.getElementById('degF2').value;
    if (F >= -459.67){
        document.getElementById('degC2').value = (F - 32)*(5/9)
    } else {
        document.getElementById('degC2').value = 'Not a physical value';
    }
}
function f_to_k(){
    F = document.getElementById('degF2').value;
    if (F >= -459.67){
        document.getElementById('degK2').value = (F - 32)*(5/9) + 273.15;
    } else {
        document.getElementById('degK2').value = 'Not a physical value';
    }
}
function f_to_r(){
    F = document.getElementById('degF2').value;
    if (F >= -459.67){
        document.getElementById('degR2').value = 1*F + 459.67;
    } else {
        document.getElementById('degR2').value = 'Not a physical value';
    }
}
function reset2(){
    document.getElementById('degC2').value='';
    document.getElementById('degF2').value='';
    document.getElementById('degK2').value='';
    document.getElementById('degR2').value='';
}

// functions for kelvin to other conversions
function k_to_c(){
    K = document.getElementById('degK3').value;
    if (K >= 0){
        document.getElementById('degC3').value = 1*K - 273.15;
    } else {
        document.getElementById('degC3').value = 'Not a physical value';
    }
}
function k_to_f(){
    K = document.getElementById('degK3').value;
    if (K >= 0){
        document.getElementById('degF3').value = (K - 273.15)*1.8 + 32
    } else {
        document.getElementById('degF3').value = 'Not a physical value';
    }
}
function k_to_r(){
    K = document.getElementById('degK3').value;
    if (K >= 0){
        document.getElementById('degR3').value = K*1.8
    } else {
        document.getElementById('degR3').value = 'Not a physical value';
    }    
}
function reset3(){
    document.getElementById('degC3').value='';
    document.getElementById('degF3').value='';
    document.getElementById('degK3').value='';
    document.getElementById('degR3').value='';
}

// functions for rankine to other conversions
function r_to_c(){
    R = document.getElementById('degR4').value;
    if (R >= 0){
        document.getElementById('degC4').value = (R - 491.67)*(5/9)
    } else {
        document.getElementById('degC4').value = 'Not a physical value';
    }
}
function r_to_k(){
    R = document.getElementById('degR4').value;
    if (R >= 0){
        document.getElementById('degK4').value = R*(5/9)
    } else {
        document.getElementById('degK4').value = 'Not a physical value';
    }
}
function r_to_f(){
    R = document.getElementById('degR4').value;
    if (R >= 0){
        document.getElementById('degF4').value = R - 459.67
    } else {
        document.getElementById('degF4').value = 'Not a physical value';
    }
}
function reset4(){
    document.getElementById('degC4').value='';
    document.getElementById('degF4').value='';
    document.getElementById('degK4').value='';
    document.getElementById('degR4').value='';
}
