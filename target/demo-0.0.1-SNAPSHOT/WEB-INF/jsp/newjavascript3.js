/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function CustomGetCakeVar () {
    var sFlowID = (AF.Flow.v != undefined) ? AF.Flow.v.FlowID : "";
    var sEntranceVID = (AF.Lead.v != undefined && AF.Lead.v.EntranceVID != undefined) ? AF.Lead.v.EntranceVID : "";
    var sCampaignID = (typeof (AF.Campaign.v.CampaignID) != "undefined") ? AF.Campaign.v.CampaignID : "0";
    return ("").concat("&s1=", sFlowID+"_"+sCampaignID, "&s4=", sEntranceVID, "&s5=", jGetVid(), "_", sCampaignID);
}

var src = '';
$(document).ready(function () { 
    if (!jIsEmail(jLead.email)) {$('#RPc6007dv').find('[name=email]').val(jGetVid() + '@noemail.com');}
    else {$('#RPc6007dv').find('[name=email]').val(jLead.email);}                
    src = 'http://t.afftrackr.com/?a=137158&oc=7529&c=41603&p=c' + CustomGetCakeVar();
    if ($('#creativeSettings').data('ctype') == 'iframe') {
    jOfferPreSubmit(6007, 13);
    $('#cUnitFrame').attr('src', src);
}
});
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src',src);
        jOfferPreSubmit(6007, 13);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    } else {
    jOfferSubmit(6007, 13);window.open(src, '_blank');}
}




















var src = '';
$(document).ready(function () { 
    if (!jIsEmail(jLead.email)) {$('#RPc6144dv').find('[name=email]').val(jGetVid() + '@noemail.com');}
    else {$('#RPc6144dv').find('[name=email]').val(jLead.email);}                
    src = 'http://t.afftrackr.com/?a=201480&oc=7648&c=42120&p=c' + AF.System.GetCakeVar();
    if ($('#creativeSettings').data('ctype') == 'iframe') {
    jOfferPreSubmit(6144, 13);
    $('#cUnitFrame').attr('src', src);
}
});
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src',src);
        jOfferPreSubmit(6144, 13);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    } else {
    jOfferSubmit(6144, 13);window.open(src, '_blank');}
}


var src = '';
$(document).ready(function () { 
    if (!jIsEmail(jLead.email)) {$('#RPc6007dv').find('[name=email]').val(jGetVid() + '@noemail.com');}
    else {$('#RPc6007dv').find('[name=email]').val(jLead.email);}                
    src = 'http://t.afftrackr.com/?a=137158&oc=7529&c=41603&p=c' + AF.System.GetCakeVar();
    if ($('#creativeSettings').data('ctype') == 'iframe') {
    jOfferPreSubmit(6007, 13);
    $('#cUnitFrame').attr('src', src);
}
});
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src',src);
        jOfferPreSubmit(6007, 13);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    } else {
    jOfferSubmit(6007, 13);window.open(src, '_blank');}
}


var src = '';
$(document).ready(function () { 
    if (!jIsEmail(jLead.email)) {$('#RPc5428dv').find('[name=email]').val(jGetVid() + '@noemail.com');}
    else {$('#RPc5428dv').find('[name=email]').val(jLead.email);}                
    src = 'http://t.afftrackr.com/?a=137158&oc=6812&c=38321' + CustomGetCakeVar();
    if ($('#creativeSettings').data('ctype') == 'iframe') $('#cUnitFrame').attr('src', src);
});
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src',src);
        jOfferPreSubmit(5428, 1);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    } else {
    jOfferSubmit(5428, 1);window.open(src, '_blank');}
}
function CustomGetCakeVar () {
    var sFlowID = (AF.Flow.v != undefined) ? AF.Flow.v.FlowID : "";
    var sSubaff = (AF.Flow.v != undefined) ? AF.Flow.v.SubAff : "";
    var sSubaff2= sSubaff.split("_")[1];
    sSubaff2 = (sSubaff2 != undefined) ? sSubaff2 : "";
    var sEntranceVID = (AF.Lead.v != undefined && AF.Lead.v.EntranceVID != undefined) ? AF.Lead.v.EntranceVID : "";
    var sCampaignID = (typeof (AF.Campaign.v.CampaignID) != "undefined") ? AF.Campaign.v.CampaignID : "0";
    return ("").concat("&s1=", sFlowID+"_"+sSubaff2, "&s4=", sEntranceVID, "&s5=", jGetVid(), "_", sCampaignID);
}
