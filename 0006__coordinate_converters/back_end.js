Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

Math.degrees = function(radians) {
    return radians * 180/Math.PI;
}

l_ncp = Math.radians(122.9320)
dec_ngp = Math.radians(27.1284)
ra_ngp = Math.radians(192.8595)

function eq_to_gal(){
    ra = Math.radians(document.getElementById("ra1").value);
    dec = Math.radians(document.getElementById("dec1").value);

    f1 = Math.sin(dec_ngp) * Math.sin(dec);
    f2 = Math.cos(dec_ngp) * Math.cos(dec) * Math.cos(ra - ra_ngp)

    f3 = Math.cos(dec) * Math.sin(ra - ra_ngp)
    f4 = Math.sin(dec) * Math.cos(dec_ngp) - Math.cos(dec) * Math.sin(dec_ngp) * Math.cos(ra - ra_ngp)

    f7 = l_ncp - Math.atan(f3/f4)

    document.getElementById("gal-lat1").value = Math.degrees(Math.asin(f1+f2));
    document.getElementById("gal-long1").value = Math.degrees(f7);
}
