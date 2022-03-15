Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};

l_ncp = Math.radians(122.9320);
dec_ngp = Math.radians(27.1284);
ra_ngp = Math.radians(192.8595);

function eq_to_gal() {
    ra = document.getElementById("ra1").value;
    dec = document.getElementById("dec1").value;

    if ((ra < 0 || 360 < ra) || (dec < -90 || 90 < dec)) {
        document.getElementById("gal-lat1").value = 'Err; RA/Dec not correct';
        document.getElementById("gal-long1").value = 'Err; RA/Dec not correct';
    } else {
        ra = Math.radians(ra);
        dec = Math.radians(dec);

        f1 = Math.sin(dec_ngp) * Math.sin(dec) + Math.cos(dec_ngp) * Math.cos(dec) * Math.cos(ra - ra_ngp);

        f2 = Math.cos(dec) * Math.sin(ra - ra_ngp);
        f3 = Math.cos(dec_ngp) * Math.sin(dec) - Math.sin(dec_ngp) * Math.cos(dec) * Math.cos(ra - ra_ngp);

        f4 = l_ncp - Math.atan2(f2, f3);

        document.getElementById("gal-lat1").value = Math.degrees(Math.asin(f1));
        document.getElementById("gal-long1").value = Math.degrees(f4);
    }
}

function dd_to_hms() {
    ra = parseFloat(document.getElementById("ra1").value) / 15;

    if (0 <= ra && ra <= 24) {
        _hh = Math.trunc(ra).toString();
        _ra = Math.round((ra - _hh) * 1e6) / 1e6;
        _mm = Math.trunc(_ra * 60).toString();
        _ra = _ra * 60 - _mm;
        _ss = Math.round(_ra * 60, 4).toString();

        if (_hh < 10) {
            _hh = "0" + _hh;
        }
        if (_mm < 10) {
            _mm = "0" + _mm;
        }
        if (_ss < 10) {
            _ss = "0" + _ss;
        }
        document.getElementById("ra-hms1").value = _hh + ":" + _mm + ":" + _ss;
    } else {
        document.getElementById("ra-hms1").value = "Err; RA ∈ [0, 360]";
    }
}

function dd_to_dms() {
    dec = document.getElementById("dec1").value;

    if (-90 <= dec && dec <= 90) {
        _dd = Math.trunc(dec).toString();

        _dec = dec - _dd;

        if (dec < 0) {
            _dec = Math.abs(_dec);
        }

        _mm = Math.trunc(_dec * 60).toString();
        _dec = _dec * 60 - _mm;
        _ss = Math.round(_dec * 60, 4).toString();

        if (0 < _dd && _dd < 10) {
            _dd = "0" + _dd;
        }
        if (-10 < _dd && _dd < 0) {
            _dd = "-0" + Math.abs(_dd);
        }

        if (_mm < 10) {
            _mm = "0" + _mm;
        }
        if (_ss < 10) {
            _ss = "0" + _ss;
        }
        if (_ss === 60) {
            _ss = "00";
            _mm = parseFloat(_mm) + 1;
        }

        document.getElementById("dec-dms1").value = _dd + ":" + _mm + ":" + _ss;
    } else {
        document.getElementById("dec-dms1").value = "Err; Dec ∈ [-90, +90]";
    }
}
