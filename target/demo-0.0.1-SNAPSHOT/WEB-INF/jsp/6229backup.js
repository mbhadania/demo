var src = '';
$(document).ready(function () { 
    if (!jIsEmail(jLead.email)) {$('#RPc6229dv').find('[name=email]').val(jGetVid() + '@noemail.com');}
    else {$('#RPc6229dv').find('[name=email]').val(jLead.email);}                
    src = 'http://t.afftrackr.com/?a=137158&oc=7730&c=42424&p=c' + AF.System.GetCakeVar();
    if ($('#creativeSettings').data('ctype') == 'iframe') {
    jOfferPreSubmit(6229, 13);
    $('#cUnitFrame').attr('src', src);
}
});
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src',src);
        jOfferPreSubmit(6229, 13);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    } else {
    jOfferSubmit(6229, 13);window.open(src, '_blank');}
}