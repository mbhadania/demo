function initAfterFlowJS() {
    BackMagic();
}
/* backMgc */
window.onpopstate = function (event) {
    if (event.state) {
        location.reload();
    }
};
function supports_history_api() {
    return !!(window.history && history.pushState);
}
function BackMagic() {
    if (supports_history_api()) {
        var loc = location.href;
//var pub_params = unescape(GetFlowVariable($("#FlowSQForm").find('[name="pubparams"]').val()));
        var pub_params = unescape(GetFlowVariable(AF.System.v.pubParams));
        var pubsrc = unescape($('input[name="iPage"]').val());
        var myPhone = "" + GetFlowVariable(AF.Lead.v.PhoneCode) + GetFlowVariable(AF.Lead.v.PhonePrefix) + GetFlowVariable(AF.Lead.v.PhoneSuffix);
        if (pubsrc != null && pubsrc != undefined && pubsrc != "") {
            pub_params += pubsrc;
        }
        var tempgender = GetFlowVariable((AF.Lead.v.Gender == "True" ? "M" : (AF.Lead.v.Gender == "False" ? "F" : "")));
        history.replaceState({
        }
        , "BackMagic", "/reredirect.aspx?" + escape("./default.aspx?Flow=1712A228-BC90-2C30-F10A-8EE4905B2DE9E3EF2033" +
                "&firstname=" + GetFlowVariable(AF.Lead.v.FirstName) +
                "&lastname=" + GetFlowVariable(AF.Lead.v.LastName) +
                "&email=" + GetFlowVariable(AF.Lead.v.Email) +
                "&address=" + GetFlowVariable(AF.Lead.v.Address1) +
                "&city=" + GetFlowVariable(AF.Lead.v.City) +
                "&state=" + GetFlowVariable(AF.Lead.v.State) +
                "&zippost=" + GetFlowVariable(AF.Lead.v.ZipPost) +
                "&gender=" + tempgender +
                "&phone=" + myPhone +
                "&dobday=" + GetFlowVariable(AF.Lead.v.DobDay) +
                "&dobmonth=" + GetFlowVariable(AF.Lead.v.DobMonth) +
                "&dobyear=" + GetFlowVariable(AF.Lead.v.DobYear) +
                "&affsecid=" + GetFlowVariable(AF.Flow.v.FlowID) +
                "&EntranceVID=" + GetFlowVariable(AF.Lead.v.EntranceVID) +
                "&subaff=" + GetFlowVariable(AF.Flow.v.SubAff) +
                "&" + pub_params

                ));
        history.pushState({
        }
        , document.title, loc);
    }
}
/* end backMgc */
