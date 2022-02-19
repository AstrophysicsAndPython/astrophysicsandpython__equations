function t_or_a(that){
    if (
        // https://stackoverflow.com/a/29321711
        that.value=="t1"
    ) {
        document.getElementById("a_value_div1").style.display = "none";
        document.getElementById("t_value_div1").style.display = "block";

        document.getElementById("output_div__a1").style.display = "block";
        document.getElementById("output_div__t1").style.display = "none";
    } else if (that.value=="a1") {
        document.getElementById("a_value_div1").style.display = "block";
        document.getElementById("t_value_div1").style.display = "none";

        document.getElementById("output_div__t1").style.display = "block";
        document.getElementById("output_div__a1").style.display = "none";
    }
}
function reset1(){
    // https://stackoverflow.com/a/24769365
    document.getElementById("select_option1").selectedIndex = 0;
    document.getElementById("mass").value = "";
    document.getElementById("a_value_div1").style.display = "none";
    document.getElementById("t_value_div1").style.display = "none";
    document.getElementById("output_div__a1").style.display = "none";
    document.getElementById("output_div__t1").style.display = "none";
}
function reset2(){
    document.getElementById("a_value_input1").value = "";
    document.getElementById("t_value_input1").value = "";
    document.getElementById("output_input__t1").value = "";
    document.getElementById("output_input__a1").value = "";
}
function calculate_time1(){
    G = 6.67408e-11;
    m = parseFloat(document.getElementById("mass").value);
    a = parseFloat(document.getElementById("a_value_input1").value);
    out = (4*Math.pow(Math.PI, 2)*Math.pow(a, 3))/(G*m);
    document.getElementById("output_input__t1").value = Math.sqrt(out);
}
function calculate_semimajoraxis1(){
    G = 6.67408e-11;
    m = parseFloat(document.getElementById("mass").value);
    t = parseFloat(document.getElementById("t_value_input1").value);
    out = (G*m*Math.pow(t, 2))/(4*Math.pow(Math.PI, 2));
    document.getElementById("output_input__a1").value = Math.pow(out, 1/3);
}
