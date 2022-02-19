c = 299792458;
function lc__mps(that) {
    _beta = 1 - (that.value/c)**2
    $("#lc").val($("#len").val()*_beta**0.5)
}
function lc__c(that) {
    _beta = 1 - that.value**2
    $("#lc").val($("#len").val()*_beta**0.5)
}
function select__LC(that) {
    if (that.value == 'LC__mps') {
        $('#LC__div__mps').show()
        $('#LC__div__c').hide()
        $('#LC__speed__c').val('')
    } else if (that.value == 'LC__c') {
        $('#LC__div__mps').hide()
        $('#LC__div__c').show()
        $('#LC__speed__mps').val('')
    }
}
function r1() {
    // taken from https://stackoverflow.com/a/13070851
    $('.LC').val('')
    // taken from https://stackoverflow.com/a/3582629
    $('#LC__div__mps, #LC__div__c').hide()
    // taken from https://stackoverflow.com/a/3100696/3212945
    $('#LC__ss').prop('selectedIndex', 0)
}
function me__mps(that) {
    _beta = 1 - (that.value/c)**2
    $("#me").val($("#mass").val()/_beta**0.5)
}
function me__c(that) {
    _beta = 1 - that.value**2
    $("#me").val($("#mass").val()/_beta**0.5)
}
function select__ME(that) {
    if (that.value == 'ME__mps') {
        $('#ME__div__mps').show()
        $('#ME__div__c').hide()
        $('#ME__speed__c').val('')
    } else if (that.value == 'ME__c') {
        $('#ME__div__mps').hide()
        $('#ME__div__c').show()
        $('#ME__speed__mps').val('')
    }
}
function r2() {
    $('.ME').val('')
    $('#ME__div__mps, #ME__div__c').hide()
    $('#ME__ss').prop('selectedIndex', 0)
}
function td__mps(that) {
    _beta = 1 - (that.value/c)**2
    $("#td").val($("#time").val()/_beta**0.5)
}
function td__c(that) {
    _beta = 1 - that.value**2
    $("#td").val($("#time").val()/_beta**0.5)
}
function select__TD(that) {
    if (that.value == 'TD__mps') {
        $('#TD__div__mps').show()
        $('#TD__div__c').hide()
        $('#TD__speed__c').val('')
    } else if (that.value == 'TD__c') {
        $('#TD__div__mps').hide()
        $('#TD__div__c').show()
        $('#TD__speed__mps').val('')
    }
}
function r3() {
    $('.TD').val('')
    $('#TD__div__mps, #TD__div__c').hide()
    $('#TD__ss').prop('selectedIndex', 0)
}
