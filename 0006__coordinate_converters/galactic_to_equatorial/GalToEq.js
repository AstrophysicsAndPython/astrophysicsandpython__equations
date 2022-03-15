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
