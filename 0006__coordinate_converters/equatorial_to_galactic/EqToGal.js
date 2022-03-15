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

function to_galactic()
{
    ra = document.getElementById("ra1").value;
    dec = document.getElementById("dec1").value;

    if ((ra < 0 || 360 < ra) || (dec < -90 || dec > 90))
    {
        document.getElementById("gal-lat1").value = "Err; RA/Dec not correct";
        document.getElementById("gal-long1").value = "Err; RA/Dec not correct";
    } else
    {
        ra = to_radians(ra);
        dec = to_radians(dec);

        f1 = Math.sin(dec_ngp) * Math.sin(dec) + Math.cos(dec_ngp) * Math.cos(ra - ra_ngp) * Math.cos(dec);
        f2 = Math.asin(f1);

        f3 = Math.cos(dec) * Math.sin(ra - ra_ngp);
        f4 = Math.cos(dec_ngp) * Math.sin(dec) - Math.sin(dec_ngp) * Math.cos(dec) * Math.cos(ra - ra_ngp);

        f5 = l_ncp - Math.atan2(f3, f4);

        document.getElementById("gal-lat1").value = to_degrees(f2);
        document.getElementById("gal-long1").value = to_degrees(f5);
    }

}