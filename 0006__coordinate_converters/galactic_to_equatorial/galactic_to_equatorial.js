Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

Math.degrees = function(radians) {
    return radians * 180/Math.PI;
}

l_ncp = Math.radians(122.9320)
dec_ngp = Math.radians(27.1284)
ra_ngp = Math.radians(192.8595)

function gal_to_eq(){
    gal_lat = document.getElementById("gal-lat2").value;
    gal_long = document.getElementById("gal-long2").value;

    if ((gal_long < 0 || 360 < gal_long) || (gal_lat < -90 || 90 < gal_lat)) {
        document.getElementById("ra2").value = 'Err; lat/long not correct';
        document.getElementById("dec2").value = 'Err; lat/long not correct';
    } else {
        b = Math.radians(gal_lat);
        l = Math.radians(gal_long);

        f1 = Math.sin(dec_ngp) * Math.sin(b) +  Math.cos(dec_ngp) * Math.cos(b) * Math.cos(l_ncp - l);

        f2 = Math.cos(b) * Math.sin(l_ncp - l);
        f3 = Math.cos(dec_ngp) * Math.sin(b) - Math.sin(dec_ngp) * Math.cos(b) * Math.cos(l_ncp - l);

        f4 = Math.atan2(f3, f4) + ra_ngp;

        document.getElementById("ra2").value = Math.degrees(f4)/15;
        document.getElementById("dec2").value = Math.degrees(Math.asin(f1));
    }
}
