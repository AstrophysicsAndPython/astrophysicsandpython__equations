function convert() {
    dd = $('#dd_input').val();
    d = Math.trunc(dd);
    m = (dd - d) * 60;
    m_remain = m - Math.trunc(m);
    s = m_remain * 60;
    if (m < 0){
        m = -m;
    }
    if (s < 0){
        s = -s;
    }
    $('#dms__value').html(d + "\u00B0 " + Math.trunc(m) + "\u2032 " + s.toFixed(3) + "\u2033");
}
