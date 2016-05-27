


<script type = "text/javascript" >


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
        if (pubsrc != null && pubsrc != undefined && pubsrc != "") {
pub_params += pubsrc;
        }
var tempgender = GetFlowVariable((jLead.gender == "True" ? "M" : (jLead.gender == "False" ? "F" : "")));
        history.replaceState({
        }
        , "BackMagic", "/reredirect.aspx?" + escape("./default.aspx?Flow=928B01DC-0073-8659-7F7F-EE6E396A7F8B49971003"

                + "&firstname=" +
                GetFlowVariable(jLead.firstname) + "&lastname=" +
                GetFlowVariable(jLead.lastname) + "&email=" +
                GetFlowVariable(jLead.email) + "&address=" +
                GetFlowVariable(jLead.address1) + "&city=" +
                GetFlowVariable(jLead.city) + "&state=" +
                GetFlowVariable(jLead.state) + "&zippost=" +
                GetFlowVariable(AF.Lead.v.ZipPost) + "&gender=" +
                tempgender + "&phone=" +
                GetFlowVariable(jLead.phone) + "&dobday=" +
                GetFlowVariable(jLead.dobday) + "&dobmonth=" +
                GetFlowVariable(jLead.dobmonth) + "&dobyear=" +
                GetFlowVariable(jLead.dobyear) + "&affsecid=" +
                GetFlowVariable(jFlowCfg.FlowID) + "&EntranceVID=" +
                AF.Lead.v.EntranceVID + "&subaff=" +
                GetFlowVariable(AF.Flow.v.SubAff)
                + "&" + pub_params

                ));
        history.pushState({
        }
        , document.title, loc);
        }
}
/* end backMgc */
</script>