function convert() {
    hr = parseInt($('#hr_input').val()) * 15.;
    min = parseFloat($('#min_input').val()) * (15 / 60);
    sec = parseFloat($('#sec_input').val()) * (15 / 3600);

    dms = hr + min + sec;

    d = Math.trunc(dms);
    m = (dms - d) * 60;
    m_remain = m - Math.trunc(m);
    s = m_remain * 60;
    if (m < 0) {
        m = -m;
    }
    if (s < 0) {
        s = -s;
    }

    sep = d + "\u00B0 " + Math.trunc(m) + "\u2032 " + s.toFixed(3) + "\u2033";

    $('#dd__value').html(dms);
    $('#hms__value').html(sep);
}