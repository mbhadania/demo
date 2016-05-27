var src = '';
$(document).ready(function () {
if (!jIsEmail(jLead.email)) {
$('#RPc4863dv').find('[name=email]').val(jGetVid() + '@noemail.com');
}
else {
$('#RPc4863dv').find('[name=email]').val(jLead.email);
}
var gender = "";
var dob = "";
if (jLead.gender == true) {
gender = "M";
}
else if (jLead.gender == false) {
gender = "F";
}
dob = jLead.dobmonth + "-" + jLead.dobday + "-" + jLead.dobyear;
var extra = "&FirstName=" + jLead.firstname + "&LastName=" + jLead.lastname + "&Address="
+ jLead.address1 + "&City=" + jLead.city + "&State=" + jLead.state + "&Zip=" + jLead.zippost
+ "&PhoneNumber=" + jLead.phone + "&Gender=" + gender + "&DateOfBirth=" + dob + "&EmailAddress=" + jLead.email;
src = 'http://t.afftrackr.com/?a=137158&oc=6000&c=35834&p=c' + AF.System.GetCakeVar() + extra;
if ($('#creativeSettings').data('ctype') == 'iframe') $('#cUnitFrame').attr('src', src);
}
);
function cUnit() {
if ($('#creativeSettings').data('ctype') == 'qiframe') {
$('#cUnitFrame').attr('src',src);
jOfferPreSubmit(4863, 13);
$('#' + $('#creativeSettings').data('hidediv')).hide();
$('#' + $('#creativeSettings').data('showdiv')).show();
}
else {
jOfferSubmit(4863, 13);
window.open(src, '_blank');
}
}
