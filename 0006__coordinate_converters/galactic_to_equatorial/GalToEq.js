function to_radians(degrees)
{
    return degrees * (Math.PI / 180);
}

function to_degrees(radians)
{
    return radians * (180 / Math.PI);
}

l_ncp = to_radians(122.9320);
ra_ngp = to_radians(192.8595);
dec_ngp = to_radians(27.1284);

function to_equatorial()
{
    b = document.getElementById("gal-lat1").value;
    l = document.getElementById("gal-long1").value;

    if ((l < 0 || 360 < l) || (b < -90 || b > 90))
    {
        document.getElementById("ra1").value = "Err; Lat/Long not correct";
        document.getElementById("dec1").value = "Err; Lat/Long not correct";
    } else
    {
        b = to_radians(b);
        l = to_radians(l);

        f1 = Math.sin(dec_ngp) * Math.sin(b) + Math.cos(dec_ngp) * Math.cos(b) * Math.cos(l_ncp - l);
        f2 = Math.asin(f1);

        f3 = Math.cos(b) * Math.sin(l_ncp - l);
        f4 = Math.cos(dec_ngp) * Math.sin(b) - Math.sin(dec_ngp) * Math.cos(b) * Math.cos(l_ncp - l);

        f5 = Math.atan2(f3, f4) + ra_ngp;

        document.getElementById("ra1").value = to_degrees(f5)/15;
        document.getElementById("dec1").value = to_degrees(f2);
    }

}

function to_hms()
{
    ra = parseFloat(document.getElementById("ra1").value)*15;

    if (0 <= ra && ra <= 360){
        _hh = Math.trunc(ra).toString();
        _ra = Math.round((ra - _hh)*1e6)/1e6;
        _mm = Math.trunc(_ra * 60).toString()
        _ra = _ra*60 - _mm
        _ss = (_ra * 60).toFixed(4).toString();

        if (_hh < 10){
            _hh = "0"+_hh
        }
        if (_mm < 10){
            _mm = "0"+_mm
        }
        if (_ss < 10){
            _ss = "0"+_ss
        }

        document.getElementById("ra-hms").value = _hh + ":" + _mm + ":" + _ss;
    } else {
        document.getElementById("ra-hms").value = "Err; RA ∈ [0, 360]";
    }
}

function to_dms()
{
    dec = document.getElementById("dec1").value;

    if (-90 <= dec && dec <= 90){
        _dd = Math.trunc(dec).toString();

        _dec = dec - _dd;

        if (dec < 0) {
            _dec = Math.abs(_dec);
        }

        _mm = Math.trunc(_dec*60).toString()
        _dec = _dec*60 - _mm
        _ss = (_dec * 60).toFixed(4).toString();

        if (0 < _dd && _dd < 10){
            _dd = "0"+_dd;
        }
        if (-10 < _dd && _dd < 0){
            _dd = "-0"+Math.abs(_dd)
        }

        if (_mm < 10){
            _mm = "0"+_mm;
        }
        if (_ss < 10){
            _ss = "0" + _ss;
        }
        if (_ss == 60){
            _ss = "00";
            _mm = parseFloat(_mm) + 1
        }

        document.getElementById("dec-dms").value = _dd + ":" + _mm + ":" + _ss;
    } else
    {
        document.getElementById("dec-dms").value = "Err; Dec ∈ [-90, +90]";
    }
}