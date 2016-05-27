
var src = '';
$(document).ready(function () {
    if (!jIsEmail(jLead.email)) {
        $('#RPc4864dv').find('[name=email]').val(jGetVid() + '@noemail.com');
    }
    else {
        $('#RPc4864dv').find('[name=email]').val(jLead.email);
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
    src = 'http://t.afftrackr.com/?a=137158&oc=5999&c=35835&p=c' + CustomGetCakeVar() + extra;
    if ($('#creativeSettings').data('ctype') == 'iframe')
        $('#cUnitFrame').attr('src', src);
}
);
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src', src);
        jOfferPreSubmit(4864, 13);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    }
    else {
        jOfferSubmit(4864, 13);
        window.open(src, '_blank');
    }
}

function CustomGetCakeVar() {

    var sFlowID = (AF.Flow.v != undefined) ? AF.Flow.v.FlowID : "";
    var sSubaff2 = "";
    //sFlowID = (sFlowID == "22102") ? "42402" : sFlowID;
    if (sFlowID == "22102") {
        sFlowID = "42402";
        var sSubaff = (AF.Flow.v != undefined) ? AF.Flow.v.SubAff : "";
        sSubaff2 = sSubaff.split("_")[1];
        sSubaff2 = (sSubaff2 != undefined) ? sSubaff2 : "";
    }
    var sEntranceVID = (AF.Lead.v != undefined && AF.Lead.v.EntranceVID != undefined) ? AF.Lead.v.EntranceVID : "";
    var sCampaignID = (typeof (AF.Campaign.v.CampaignID) != "undefined") ? AF.Campaign.v.CampaignID : "0";
    return ("").concat("&s1=", sFlowID, "&s2=", sSubaff2, "&s4=", sEntranceVID, "&s5=", jGetVid(), "_", sCampaignID);


}