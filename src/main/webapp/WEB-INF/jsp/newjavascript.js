/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */







var gender = "";
var dob = "";
if (GetFlowVariable(AF.Lead.v.Gender == 'True')) {
    gender = "M";
}
else if (GetFlowVariable(AF.Lead.v.Gender == 'False')) {
    gender = "F";
}
dob = GetFlowVariable(AF.Lead.v.DobMonth) + "-" + GetFlowVariable(AF.Lead.v.DobDay) + "-" + GetFlowVariable(AF.Lead.v.DobYear);



var extra = "&FirstName=" + GetFlowVariable(AF.Lead.v.FirstName)
        + "&LastName=" + GetFlowVariable(AF.Lead.v.LastName)
        + "&Address=" + GetFlowVariable(AF.Lead.v.Address1)
        + "&City=" + GetFlowVariable(AF.Lead.v.City)
        + "&State=" + GetFlowVariable(AF.Lead.v.State)
        + "&Zip=" + GetFlowVariable(AF.Lead.v.ZipPost)
        + "&PhoneNumber=" + GetFlowVariable(AF.Lead.v.Telephone)
        + "&Gender=" + gender + "&dob=" + dob + "&EmailAddress=" + GetFlowVariable(AF.Lead.v.Email);































var src = '';
$(document).ready(function () {
    if (!jIsEmail(jLead.email)) {
        $('#RPc6078dv').find('[name=email]').val(jGetVid() + '@noemail.com');
    }
    else {
        $('#RPc6078dv').find('[name=email]').val(jLead.email);
    }

    var gender = "";
    var dob = "";
    if (jLead.gender == 'True') {
        gender = "M";
    }
    else if (jLead.gender == 'False') {
        gender = "F";
    }
    dob = jLead.dobmonth + "-" + jLead.dobday + "-" + jLead.dobyear;
    var extra = "&FirstName=" + jLead.firstname
            + "&LastName=" + jLead.lastname
            + "&Address=" + jLead.address1
            + "&City=" + jLead.city
            + "&State=" + jLead.state
            + "&Zip=" + jLead.zippost
            + "&PhoneNumber=" + jLead.phone
            + "&Gender=" + gender + "&dob=" + dob + "&EmailAddress=" + jLead.email;

    var mysubaff = AF.Flow.v.SubAff;

    src = 'http://t.afftrackr.com/?a=137158&oc=7578&c=41807' + AF.System.GetCakeVar() + extra + "&s2=" + mysubaff.split("_")[1];
    if ($('#creativeSettings').data('ctype') == 'iframe') {
        jOfferPreSubmit(6078, 1);
        $('#cUnitFrame').attr('src', src);
    }
});
function cUnit() {
    if ($('#creativeSettings').data('ctype') == 'qiframe') {
        $('#cUnitFrame').attr('src', src);
        jOfferPreSubmit(6078, 1);
        $('#' + $('#creativeSettings').data('hidediv')).hide();
        $('#' + $('#creativeSettings').data('showdiv')).show();
    } else {
        jOfferSubmit(6078, 1);
        window.open(src, '_blank');
    }
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
var extra = "&FirstName=" + jLead.firstname
        + "&LastName=" + jLead.lastname
        + "&Address=" + jLead.address1
        + "&City=" + jLead.city
        + "&State=" + jLead.state
        + "&Zip=" + jLead.zippost
        + "&PhoneNumber=" + jLead.phone
        + "&Gender=" + gender + "&DateOfBirth=" + dob + "&EmailAddress=" + jLead.email;






var extra = "&firstname=" + jLead.firstname + "&lastname=" + jLead.lastname + "&email=" + jLead.email
        + "&address=" + jLead.address1 + "&city=" + jLead.city + "&statecode=" + jLead.state
        + "&zipcode=" + jLead.zippost + "&phone=" + jLead.phone;





var mOList, mHtml = tHtml = "";
$(document).ready(function () {
    if (!jIsEmail(jLead.email)) {
        $("#RPc" + _jCid + "dv").find('[name="email"]').val(jGetVid() + '@noemail.com');
    }
    else {
        $("#RPc" + _jCid + "dv").find('[name="email"]').val(jLead.email);
    }
//momentjs check
    var scriptObjArr = $('body').find('script'),
            momentjsExst = false;
    $.each(scriptObjArr, function (index, value) {
        if (this.src != '' && this.src.indexOf('moment.min.js') > -1) {
            momentjsExst = true;
        }
    }
    );
    if (!momentjsExst) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '../CampImg/3442/js/moment.min.js';
        $("head").append(script);
    }
//offerList generation
    if (!$('#creativeSettings').data("test")) {
        var prepop = "".concat(
                "&gender=", UC(AF.Lead.v.Gender),
                "&age=", getAge(AF.Lead.v.DobYear, AF.Lead.v.DobMonth, AF.Lead.v.DobDay),
                "&state=", UC(AF.Lead.v.State),
                "&email=", UC(AF.Lead.v.Email),
                "&ismobile=", UC(AF.System.v.IsMobile),
                "&browser=", UC(AF.System.v.Browser),
                "&vuagent=", escape(navigator.userAgent),
                "&device=", UC(AF.System.v.Device),
                "&reward=", AF.Campaign.URLparam(unescape(AF.System.v.pubParams).toLowerCase(), "reward"),
                "&subaff=", UC(AF.Flow.v.SubAff),
                "&affiliateid=", UC(AF.Flow.v.AffiliateID),
                "&flowid=", UC(AF.Flow.v.FlowID),
                getSurvey(),
                getRptSurvey());
        $.ajax({
            url: "/Services/lostcpawithfilterparams.ashx?c=" + _jCid + "&cidx=" + _jCidx + prepop,
            dataType: 'json',
            success: function (data) {
                mOList = data;
                renderStacks();
            }
        }
        );
    }
}
);
function renderStacks() {
    var oCnt = 0;
    var filteredCount = mOList.filter(function (el) {
        return el.Filtered == true
    }
    ).length;
    var takeFiltered = 0;
    if (mOList.length > 0) {
        var min = (mOList[0].Min == undefined || mOList[0].Min == null) ? 0 : mOList[0].Min,
                max = (mOList[0].Max == undefined || mOList[0].Max == null) ? 50 : mOList[0].Max;
        if (mOList.length >= min && mOList.length - filteredCount < min) {
            takeFiltered = min - (mOList.length - filteredCount);
        }
        var imgTag = (_jCidx == 5 ? ' class="adimage" ' : '');
        for (var i = 0; i < mOList.length; i++) {
            mOList[i].pp = $.parseJSON(mOList[i].pp);
            if (!mOList[i].Filtered || takeFiltered > 0) {
                if (oCnt >= max) {
                    break;
                }
                oCnt++;
                if (mOList[i].Filtered) {
                    --takeFiltered;
                }
                var rating = parseInt(mOList[i].Rating);
                rating = (isNaN(rating) || !(rating > 0 && rating < 5) ? 5 : rating);
                if (mOList[i].pp != null && mOList[i].pp._featured == "true" && $('#featuredBlck').get(0)) {
                    if ($('#creativeSettings').data('rated')) {
                        $('#featuredBlck').find('.offer_rating').attr('class', $('#featuredBlck').find('.offer_rating').attr('class').replace(/\brating.*?\b/g, 'rating_' + rating));
                    }
                    tHtml += $('#featuredBlck').html();
                    tHtml = tHtml.replace("mmOffTxtmm", mOList[i].txt)
                            .replace(/mmOffIDmm/g, mOList[i].id)
                            .replace("mmOffImgmm", '<img src="' + mOList[i].img + '"' + imgTag + '>');
                }
                else {
                    mHtml += $('#cp_main').html();
                    mHtml = mHtml.replace("mmOffTxtmm", mOList[i].txt)
                            .replace(/mmOffIDmm/g, mOList[i].id)
                            .replace("mmOffImgmm", '<img src="' + mOList[i].img + '"' + imgTag + '>');
                    if (mOList[i].pp != null) {
                        mHtml = mHtml.replace("mmOffh2mm", $.undCheck(mOList[i].pp._h2))
                                .replace("mmOffRPmm", $.undCheck(mOList[i].pp._retailPrice))
                                .replace("mmOffYPmm", $.undCheck(mOList[i].pp._yourPrice))
                                .replace("mmOffPmm", $.undCheck(mOList[i].pp._postage))
                                .replace("mmOffURmm", $.undCheck(mOList[i].pp._unRemain))
                                .replace("mmOffDRmm", $.undCheck(mOList[i].pp._dayRemain))
                                .replace("mmOffLogomm", $.undCheck(mOList[i].pp._logo));
                    }
                }
            }
        }
        $('#cp_main').html(mHtml);
        $('#featuredBlck').html(tHtml);
        $('#cp_main, #featuredBlck').fadeIn(200);
    }
    $(".hideOffer").click(function () {
        $(this).parent().animate({
            height: '0px',
            opacity: 0,
            margin: 0
        }
        , 400);
    }
    );
    $(".mHideOffer").click(function () {
        $(this).animate({
            height: '0px',
            opacity: 0,
            margin: 0,
            padding: 0
        }
        , 400);
    }
    );
    $(".box").click(function () {
        $(this).css('visibility', 'hidden');
    }
    );
    /** HOVER IMAGES OVER BOXES */
    $(".box").hover(function () {
        $(this).siblings().stop().animate({
            opacity: '.4'
        }
        , 500);
    }
    , function () {
        $(this).siblings().stop().animate({
            opacity: '1'
        }
        , 500);
    }
    );
}
$.undCheck = function (obj) {
    return obj == undefined ? "" : obj;
}
function hideOffer(obj) {
    $(obj).parent().animate({
        height: '0px',
        opacity: 0,
        margin: 0
    }
    , 400);
}
function confirm(id, no) {
//begin surveyrewards Address1 Clean
    if (id == 481) {
        jLead.address1 = jLead.address1.split(",")[0];
    }
//end surveyrewards Address1 Clean
    var m = $.grep(mOList, function (n, i) {
        if (n.id == id) {
            mOList[i]["clicked"] = true;
        }
        return n.id == id;
    }
    );
    if (no == undefined) {
        var s1 = "";
        if (id == "1501") {
            if (jFlowCfg.FlowID == "22102" || jFlowCfg.FlowID == "30371") {
                s1 = "21952";
            }
            else {
                s1 = jFlowCfg.FlowID;
            }
        }
        else {
            s1 = jFlowCfg.FlowID;
        }
        var pp = m[0].pp,
                mStatus = (pp != null ? (pp._st ? pp._st : (pp.p == "c" ? 13 : 1)) : 1),
                mWidth = (pp != null && pp._width != undefined ? pp._width : 950),
                mHeight = (pp != null && pp._height != undefined ? pp._height : 500),
                extraparam = "",
                mSubaff = jFlowCfg.SubAff,
                flowid = AF.Flow.v.AffSecID,
                mysubaff = jFlowCfg.SubAff;
//BEGIN NEW S PARAM SCRIPT
        var sFlowID = (AF.Flow.v != undefined) ? AF.Flow.v.FlowID : "";
        var sEntranceVID = (AF.Lead.v != undefined && AF.Lead.v.EntranceVID != undefined) ? AF.Lead.v.EntranceVID : "";
        var MysubaffArr = AF.Flow.v.SubAff.split("_");
        var MySubAff1 = "";
        var MySubAff2 = "";
        if (MysubaffArr[1] == undefined || MysubaffArr[1] == '')
            MySubAff2 = "Unavailable";
        else
            MySubAff2 = MysubaffArr[1];
        if (MysubaffArr[0] == undefined || MysubaffArr[0] == '')
            MySubAff1 = "Unavailable";
        else
            MySubAff1 = MysubaffArr[0];
//Subaff2_Subaff1 testing
        if (MySubAff2 == "199679" || MySubAff2 == "201420") {
            MySubAff2 = MySubAff2 + "_" + MySubAff1;
        }
        var cakeurl = "http://t.afftrackr.com/?a=" + m[0].a + "&oc=" + m[0].oc + "&c=" + m[0].c + "&s1=" + sFlowID + "_" + GetFlowVariable(_jCid) + "_" + GetFlowVariable(_jCidx) + "&s2=" + MySubAff1 + "&s3=" + MySubAff2 + "&s4=" + sEntranceVID + "&s5=" + jGetVid() + "_" + m[0].sCid;
//END NEW S PARAM SCRIPT
        for (var key in pp) {
            if (key.substr(0, 1) != "_") {
                var mValue = "";
                if (typeof pp[key] == "string") {
                    if (pp[key].toLowerCase().indexOf("jlead") > -1) {
                        mValue = $.undCheck(jLead[$.undCheck(pp[key].split('.')[1])]);
                    }
                    else if (pp[key].toLowerCase().indexOf("jlead") < 0 && pp[key].toLowerCase().indexOf("dob") > -1) {
//DOB handler dob^dateFormat
                        var mDob = moment(jLead.dobmonth + "/" + jLead.dobday + "/" + jLead.dobyear, "M/D/YYYY");
                        mValue = (mDob.isValid() && pp[key].split('^')[1] != undefined ? mDob.format(pp[key].split('^')[1]) : "");
                    }
                    else if (pp[key].toLowerCase().indexOf("gender") > -1) {
//Gender handler gender^maleValue|femaleValue
                        mValue = (pp[key].split('^')[1] != undefined ? (jLead.gender == "True" ? $.undCheck(pp[key].split('^')[1].split('|')[0]) : (jLead.gender == "False" ? $.undCheck(pp[key].split('^')[1].split('|')[1]) : "")) : "");
                    }
                    else if (pp[key].toLowerCase().indexOf("flowid") > -1) {
                        mValue = jFlowCfg.FlowID;
                    }
                    else if (pp[key].toLowerCase().indexOf("phonecode") > -1) {
                        mValue = $.undCheck(jLead.phone).substr(0, 3);
                    }
                    else if (pp[key].toLowerCase().indexOf("phoneprefix") > -1) {
                        mValue = $.undCheck(jLead.phone).substr(3, 3);
                    }
                    else if (pp[key].toLowerCase().indexOf("phonesuffix") > -1) {
                        mValue = $.undCheck(jLead.phone).substr(6, 4);
                    }
                    else if (pp[key].toLowerCase().indexOf("phone^") > -1) {
                        var sep = $.undCheck(pp[key].split('^')[1]);
                        mValue = $.undCheck(jLead.phone).substr(0, 3) + sep + $.undCheck(jLead.phone).substr(3, 3) + sep + $.undCheck(jLead.phone).substr(6, 4);
                    }
                    else
                        mValue = pp[key];
                    extraparam += "&" + key + "=" + mValue;
                }
            }
        }
        cakeurl += extraparam;
        if (m[0].sCid != 0) {
            AF.Campaign.CrossCampaignView([m[0].sCid + "," + _jCidx], AF.Campaign.v.CrossSubmitOption.SubmitOnly, null, null, mStatus);
        }
        if ($('#creativeSettings').data('newtab'))
            window.open(cakeurl, "_blank");
        else
            window.open(cakeurl, "_blank", 'scrollbars=yes,width=' + mWidth + ',height=' + mHeight);
    }
    else {
        var Proceed = true;
        $.each(mOList, function () {
            if (!this.clicked)
                Proceed = false;
        }
        );
        if (Proceed)
            setTimeout('jPgNext(1)', 400);
    }
}
function jvalidate() {
    var Proceed = true;
    $.each(mOList, function () {
        if (!this.clicked)
            Proceed = false;
    }
    );
    Proceed ? jPgNext(1) : alert("Please complete the entire survey before you continue!");
}
function getAge(dobyear, dobmonth, dobday) {
    var age = 0;
    if ((dobmonth != undefined) && (dobday != undefined) && (dobyear != undefined)) {
        var bdate = new Date(dobyear, parseInt(dobmonth) - 1, dobday);
        var tdate = new Date();
        age = parseInt(Math.ceil(tdate - bdate) / (1000 * 60 * 60 * 24 * 365));
    }
    if (isNaN(age))
        age = 0;
    return age;
}
function getRptSurvey() {
    var surveyData = "";
    var chkVS = getSurvey();
    for (var key in AF.Lead.v) {
        if (key.length == 3 && key.substring(0, 1) == "v" && chkVS.indexOf(key) < 0) {
            surveyData += "&" + key + "=" + AF.Lead.v[key];
        }
    }
    return surveyData;
}
function getSurvey() {
    var surveyPrm = AF.Flow.GetSurveyParamAsQS();
    if (surveyPrm == "") {
        var params = unescape(GetFlowVariable(AF.System.v.pubParams)).split("&");
        if (params.length > 0) {
            for (var i = 0; i < params.length; i++) {
                var srvParam = params[i].split("=")[0];
                if (srvParam.length == 3 && srvParam.substring(0, 1) == "v") {
                    surveyPrm += "&" + params[i];
                }
            }
        }
    }
    return surveyPrm;
}





















//var dob = "";
//dob = GetFlowVariable(AF.Lead.v.DobMonth) +"-"+ GetFlowVariable(AF.Lead.v.DobDay) +"-"+ GetFlowVariable(AF.Lead.v.DobYear);

var extra = "&first_name=" + GetFlowVariable(AF.Lead.v.FirstName)
        + "&last_name=" + GetFlowVariable(AF.Lead.v.LastName)
        + "&address=" + GetFlowVariable(AF.Lead.v.Address1)
        + "&city=" + GetFlowVariable(AF.Lead.v.City)
        + "&state=" + GetFlowVariable(AF.Lead.v.State)
        + "&zip=" + GetFlowVariable(AF.Lead.v.ZipPost)
        + "&phone=" + GetFlowVariable(AF.Lead.v.Telephone)
        + "&month=" + GetFlowVariable(AF.Lead.v.DobMonth)
        + "&day=" + GetFlowVariable(AF.Lead.v.DobDay)
        + "&year=" + GetFlowVariable(AF.Lead.v.DobYear)
        + "&email=" + GetFlowVariable(AF.Lead.v.Email);









