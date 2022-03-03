function calc_scr(){
    c2 = Math.pow(299792458, 2);
    G = 2*6.67408e-11;
    m = parseFloat(document.getElementById("mass1").value);
    document.getElementById("rs1").value = (G*m)/c2;
}

function calc_mass(){
    c2 = Math.pow(299792458, 2);
    G = 2*6.67408e-11;
    rs = parseFloat(document.getElementById("rs2").value);
    document.getElementById("mass2").value = (rs*c2)/G
}


