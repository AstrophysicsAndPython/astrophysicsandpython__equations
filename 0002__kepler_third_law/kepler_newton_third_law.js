function t_or_a2(that){
    if (
        // https://stackoverflow.com/a/29321711
        that.value=="t2"
    ) {
        document.getElementById("a_value_div2").style.display = "none";
        document.getElementById("t_value_div2").style.display = "block";

        document.getElementById("output_div__t2").style.display = "none";
        document.getElementById("output_div__a2").style.display = "block";
    } else if (that.value=="a2") {
        document.getElementById("a_value_div2").style.display = "block";
        document.getElementById("t_value_div2").style.display = "none";

        document.getElementById("output_div__t2").style.display = "block";
        document.getElementById("output_div__a2").style.display = "none";
    }
}
function reset3(){
    // https://stackoverflow.com/a/24769365
    document.getElementById("select_option2").selectedIndex = 0;
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";

    document.getElementById("a_value_div2").style.display = "none";
    document.getElementById("t_value_div2").style.display = "none";
    document.getElementById("output_div__a2").style.display = "none";
    document.getElementById("output_div__t2").style.display = "none";
}
function reset4(){
    document.getElementById("a_value_input2").value = "";
    document.getElementById("t_value_input2").value = "";
    document.getElementById("output_input__t2").value = "";
    document.getElementById("output_input__a2").value = "";
}
function calculate_time2(){
    G = 6.67408e-11;
    m1 = parseFloat(document.getElementById("m1").value);
    m2 = parseFloat(document.getElementById("m2").value);
    a = parseFloat(document.getElementById("a_value_input2").value);
    document.getElementById("output_input__t2").value = Math.sqrt((4*Math.pow(Math.PI, 2)*Math.pow(a, 3))/(G*(m1+m2)));
}
function calculate_semimajoraxis2(){
    G = 6.67408e-11;
    m1 = parseFloat(document.getElementById("m1").value);
    m2 = parseFloat(document.getElementById("m2").value);
    t = parseFloat(document.getElementById("t_value_input2").value);
    document.getElementById("output_input__a2").value = Math.pow(G*(m1+m2)*Math.pow(t, 2)/(4*Math.pow(Math.PI, 2)), 1/3);
}
