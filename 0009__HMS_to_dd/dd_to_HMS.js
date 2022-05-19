function convert() {
    dd = $('#dd_input').val() / 15;
    if (dd > 24) {
        $('#hms__value').html("Error, dd cannot be greater than 24.");
        $('#frac__value').html("Error, dd cannot be greater than 24.");
    } else if (dd < 0) {
        $('#hms__value').html("Error, dd cannot be less than 0.");
        $('#frac__value').html("Error, dd cannot be less than 0.");
    } else {
        d = Math.trunc(dd);
        m = (dd - d) * 60;
        s = ((m - Math.trunc(m)) * 60).toFixed(4)
        $('#hms__value').html(d + 'h ' + Math.trunc(m) + 'm ' + s + 's');
        $('#frac__value').html(dd.toFixed(4));
    }
}