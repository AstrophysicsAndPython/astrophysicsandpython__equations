function convert()
{
    deg = parseInt($('#deg_input').val());
    min = parseInt($('#min_input').val()) / 60;
    sec = parseInt($('#sec_input').val()) / 3600;

    if (min < 0 || sec < 0)
    {
        $('#dd__round').html('Error');
    } else
    {
        if (deg > 0) {
            ans = deg + min + sec;
        } else {
            ans = deg - min - sec;
        }
        $('#dd__round').html(ans.toFixed(5));
    }
}