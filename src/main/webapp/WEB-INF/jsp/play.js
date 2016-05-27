var src = '';
$(document).ready(function() {
    if (!jIsEmail(jLead.email)) {
        $('#RPc6415dv').find('[name=email]').val(jGetVid() + '@noemail.com');
    } else {
        $('#RPc6415dv').find('[name=email]').val(jLead.email);
    }
    var myPhone = "" + GetFlowVariable(AF.Lead.v.PhoneCode) + GetFlowVariable(AF.Lead.v.PhonePrefix) + GetFlowVariable(AF.Lead.v.PhoneSuffix);
    var tempgender = GetFlowVariable((AF.Lead.v.Gender == "True" ? "M" : (AF.Lead.v.Gender == "False" ? "F" : "")));
    var prepop = "&subscriber_firstname=" + GetFlowVariable(AF.Lead.v.FirstName) +
        "&subscriber_lastname=" + GetFlowVariable(AF.Lead.v.LastName) +
        "&subscriber_email=" + GetFlowVariable(AF.Lead.v.Email) +
        "&custom_Address=" + GetFlowVariable(AF.Lead.v.Address1) +
        "&custom_City=" + GetFlowVariable(AF.Lead.v.City) +
        "&custom_State=" + GetFlowVariable(AF.Lead.v.State) +
        "&custom_ZipCode=" + GetFlowVariable(AF.Lead.v.ZipPost) +
        "&gender=" + tempgender +
        "&custom_Phone=" + myPhone +
        "&dobd=" + GetFlowVariable(AF.Lead.v.DobDay) +
        "&dobm=" + GetFlowVariable(AF.Lead.v.DobMonth) +
        "&doby=" + GetFlowVariable(AF.Lead.v.DobYear);
    src = 'http://t.afftrackr.com/?a=137158&oc=7920&c=43246&p=c' + CustomGetCakeVar () + prepop;
    if ($('#creativeSettings').data('ctype') == 'iframe') {
        jOfferPreSubmit(6415, 1);
        $('#cUnitFrame').attr('src', src);
    }
});
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src', src);
        jOfferPreSubmit(6415, 1);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    } else {
        jOfferSubmit(6415, 1);
        window.open(src, '_blank');
    }
}
function CustomGetCakeVar() {
    var sFlowID = (AF.Flow.v != undefined) ? AF.Flow.v.FlowID : "";
    var sSubaff = (AF.Flow.v != undefined) ? AF.Flow.v.SubAff : "";
    var sSubaff2 = sSubaff.split("_")[1];
    sSubaff2 = (sSubaff2 != undefined) ? sSubaff2 : "";
    var sEntranceVID = (AF.Lead.v != undefined && AF.Lead.v.EntranceVID != undefined) ? AF.Lead.v.EntranceVID : "";
    var sCampaignID = (typeof (AF.Campaign.v.CampaignID) != "undefined") ? AF.Campaign.v.CampaignID : "0";
    return ("").concat("&s1=", sFlowID, "_", sSubaff2, "&s4=", sEntranceVID, "&s5=", jGetVid(), "_", sCampaignID);
}
