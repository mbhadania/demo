var src = '';
$(document).ready(function () { 
    if (!jIsEmail(jLead.email)) {$('#RPc6254dv').find('[name=email]').val(jGetVid() + '@noemail.com');}
    else {$('#RPc6254dv').find('[name=email]').val(jLead.email);}                
    src = 'http://t.afftrackr.com/?a=137158&oc=7470&c=41302' + AF.System.GetCakeVar();
    if ($('#creativeSettings').data('ctype') == 'iframe') $('#cUnitFrame').attr('src', src);
});
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src',src);
        jOfferPreSubmit(6254, 1);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    } else {
    jOfferSubmit(6254, 1);window.open(src, '_blank');}
}