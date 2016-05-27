var clickcount = 0;
var app;
var FeedQueue = [];
var Listings = [];
var Feeds = [];
var isPreview = AF.Campaign.URLparam(window.location.href, "isPreview");
var FeedObjs = [
{
"name": "Fluent API", "id": "1084", "pass": "W9U0kuz0Qo40H7Fr", "cid": "4896"
}
,
{
"name": "Fluent_RegPath", "id": "1148", "pass": "DFTg2TnXvAwtVCjL", "cid": "5032"
}
,
{
"name": "Fluent_Featured", "id": "1207", "pass": "kB9rTZRMf7M0QJ3H", "cid": "5489"
}
,
{
"name": "Fluent_API_Truck", "id": "1437", "pass": "qDsSXhesAa0JGPMT", "cid": "5410"
}
,
{
"name": "Fluent_API_Nurse", "id": "1438", "pass": "giMidCKuFH8vUjbB", "cid": "5411"
}
,
{
"name": "Fluent_API_Sales", "id": "1439", "pass": "con2B3UxWNgzyWE6", "cid": "5412"
}
,
{
"name": "Fluent_API_IT", "id": "1440", "pass": "OVNTuobnWwj1odrV", "cid": "5414"
}
];
function initAfterFlowJS() {
    
    if(AF.Campaign.v.cIdx == "4" || AF.Campaign.v.cIdx == "14"){
        BackMagic();     
    }
    
    
if (!jIsEmail(AF.Lead.v.Email)) {
$("#RPc" + AF.Campaign.v.CampaignID + "dv").find('[name="email"]').val(jGetVid() + '@noemail.com');
}
else {
$("#RPc" + AF.Campaign.v.CampaignID + "dv").find('[name="email"]').val(AF.Lead.v.Email);
}
app = new JobsApp();
app.init();
if (isPreview && app.SearchTerm == undefined && app.Zip == undefined) {
alert('need pubsrc2 and zip');
}
}
var JobsApp = function () {
this.SearchTerm = "";
this.Zip = "";
this.assignSearchTerm = function (term) {
this.SearchTerm = this.checkSearchTerm(term);
}
this.assignZip = function (zip) {
this.Zip = zip;
}
this.checkSearchTerm = function (term) {
term = term.toLowerCase();
var badTerms = ["assignment", "career", "place", "position", "job", "post", "assignments", "careers", "places", "positions", "jobs", "posts"];
var lastTerm = term.split(" ")[term.split(" ").length - 1].trim();
for (var i = 0; i < badTerms.length; i++) {
if (badTerms[i].trim().toLowerCase() == lastTerm) {
term = term.replace(lastTerm, "");
}
}
term = myTrim(term) + " jobs";
return term;
}
this.init = function () {
if (isPreview) creativeElementsCheck();
var searchterm;
var zip = $('.zipbox').val() == "" ? GetFlowVariable(AF.Lead.v.ZipPost) : $('.zipbox').val();
if($('[name="ipage"]').length > 0 && $('[name="ipage"]').val().length > 0 && AF.Campaign.URLparam(unescape($('[name="ipage"]').val()).toLowerCase(), "pubsrc2").length >0){
searchterm = AF.Campaign.URLparam(unescape($('[name="ipage"]').val()).toLowerCase(), "pubsrc2");
}
else{
searchterm = $('.searchbox').val() == "" ? AF.Campaign.URLparam(unescape(AF.System.v.pubParams).toLowerCase(), "pubsrc2") : $('.searchbox').val();
}
j2c_t1 = GetFlowVariable(AF.Flow.v.FlowID);
j2c_t2 = searchterm;
this.assignSearchTerm(searchterm);
this.assignZip(zip);
if (this.SearchTerm != undefined && this.SearchTerm != "") {
initFeeds();
initExtras();
$('#buttons').length == 0 ? $('#buttonswrapper').append(GetButtons()) : null;
$('.searchbox').val(this.SearchTerm);
$('.DynDivCont2').html(this.SearchTerm);
$('.zipbox').val(this.Zip);
}
$('.page-btn.selected').removeClass('selected');
$('.page-btn').eq(1).addClass('selected');
if (isPreview && $("#errorDiv").html().length > 0) {
alert("There are errors in the creative. Please check #errorDiv for details.")
}
$('.pubsrc2').html(searchterm);
$('.state').html(AF.Lead.v.State);
window.scrollTo(0, 0);
}
}
var Feed = function (submitCid, destinationId, templateId, name, id, pass, parseDate, style, truncateDescription, take) {
this.submitCid = submitCid;
this.destinationId = destinationId;
this.templateId = templateId;
this.name = name;
this.id = id;
this.pass = pass;
this.parseDate = parseDate;
this.truncateDescription = truncateDescription;
this.style = style;
this.pageNumber = 0;
this.url = "";
this.take = take;
this.handleJobData = function (data) {
if (data.length > 0) {
var json = $.parseJSON(data);
//json.start;
//json.count;
$("#numJobs").html(json.total);
var result = json.jobs;
if (result.length > 0) {
GlobalFeed.addListingsToDOM(result);
}
}
}
this.addListingsToDOM = function (result) {
//feedqueue array used to prevent callback overloaded.
//globalfeed had to be used because "this" as callback from jsqrt was window, not Feed object.
var t = GlobalFeed;
$(t.destinationId).empty();
if (t.take == 0) t.take = 10;
for (i = 0; (i < result.length && i < t.take) ; i++) {
var content = $(t.templateId).html();
if (t.style == "1") {
content = CreateImage(GetFlowVariable(result[i].company)) + content;
}
content = content.replace("{{linkout}}", "Linkout(" + i + ", " + t.submitCid + ", '" + result[i].url + "');");
content = content.replace("{{redirect}}", "GoToFullListing(" + t.submitCid + ", '" + result[i].id + "');");
content = content.replace("{{onclick}}", GetFlowVariable(result[i].onclick));
content = content.replace("{{link}}", result[i].url);
content = content.replace("{{title}}", GetFlowVariable(result[i].title));
content = content.replace("{{company}}", GetFlowVariable(result[i].company));
content = content.replace("{{city}}", GetFlowVariable(result[i].city));
content = content.replace("{{description}}", GetFlowVariable(t.truncateDescription == true ? result[i].description : truncateText(result[i].description)));
content = content.replace("{{date}}", t.dateFix(result[i].date));
content = content.replace("{{industry0}}", GetFlowVariable(result[i].industry0));
content = content.replace("{{industry1}}", GetFlowVariable(result[i].industry1));
content = content.replace("{{id}}", "listing_" + t.id + "_" + GetFlowVariable(result[i].id));
content = content.replace("{{dataid}}", GetFlowVariable(result[i].id));
content = content.replace("{{favorite}}", "ToggleFavorites(" + result[i].id + ", " + t.id + ")");
var list = $.grep(Listings, function (e) {
return e.id == result[i].id
}
);
if (list.length == 0) {
Listings.push(result[i]);
}
$(t.destinationId).append(content);
}
FeedQueue.splice(0, 1);
if (FeedQueue.length > 0) {
return FeedQueue[0].getJobListings();
}
GetFavorites();
window.scrollTo(0, 0);
}
this.updateUrl = function () {
var userAgent = navigator.userAgent ? navigator.userAgent : "";
//todo: see if link=1 screws up passing j2c variables.
this.url = "SQ=0&param=" + escape("CID=" + _jCid + "&SQ=0&searchTerm=" + app.SearchTerm + "&zip=" + app.Zip + "&clientIp=" + GetFlowVariable(AF.Lead.v.ClientIP) + "&userAgent=" + escape(userAgent) + "&mobileOptimized=" + AF.System.v.IsMobile + "&passId=" + this.pass + "&urlId=" + this.id + "&submitCID=" + this.submitCid + "&PageNumber=" + this.pageNumber + "&limit=" + this.take + "&link=1");
}
this.dateFix = function (date) {
if (date == undefined) return "";
var dateArr = date.split("-");
var today = new Date();
var postedDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
var timeDiff = Math.abs(today.getTime() - postedDate.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
if (this.parseDate) {
return dateArr[1] + "/" + dateArr[2].split("T")[0] + "/" + dateArr[0];
}
else {
return dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0];
}
}
this.getJobListings = function () {
if (this.pageNumber != 0) this.updateUrl();
GlobalFeed = this;
jSQRT(_jCid, 0, this.url, this.handleJobData);
}
this.init = function () {
this.updateUrl();
}
this.init();
}
function doJobSearch() {
if (validateJobSearch()) {
app = new JobsApp();
app.init();
$('#sterm').html(app.SearchTerm);
$('#vloc').html(app.Zip);
$('.page-btn.selected').removeClass('selected');
$('.page-btn').eq(1).addClass('selected');
}
}
function validateJobSearch() {
var errMessage = "";
var isValid = false;
if ($('.searchbox').val().length == 0) {
errMessage += "Please enter a keyword.\n";
}
else if ($('.zipbox').val().length == 0) {
errMessage += "Please enter zip code.\n";
}
else if ($('.zipbox').val().length != 5) {
errMessage += "Please enter a five digit zip code.\n";
}
else {
isValid = true;
}
if (!isValid) {
alert(errMessage);
return;
}
else {
return true;
}
}
function Linkout(num, submitCid, url) {
$("#RPc" + AF.Campaign.v.CampaignID + "dv").find('[name="fda"]').val(num);
jOfferPreSubmit(_jCid, 1);
if(submitCid == '4896')
{
clickcount++;
}
jOfferCrossSubmitWithStatusCPC(submitCid, 0, 43);
if(clickcount == 1)
{
$("#RPc5458dv").append('<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/969683741/?label=td-XCMCDlWIQneawzgM&amp;guid=ON&amp;script=0"/>');
}
if(clickcount > 2 && AF.Flow.v.FlowID == '36231')
{
$("#RPc5458dv").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/969683741/?value=1.00&amp;currency_code=USD&amp;label=tzgwCM2Mg2IQneawzgM&amp;guid=ON&amp;script=0"/>');
}
if (url != undefined && url != "undefined") {
window.open(url + "&t1=" + GetFlowVariable(AF.Flow.v.FlowID) + "&t2=" + app.SearchTerm, "_blank");
}
}
function GoToFullListing(submitCid, id) {
jOfferPreSubmit(_jCid, 1);
var targetflow = "45D98237-3BE3-2554-B2AD-85CFA17676D64CAADF99";
window.open("http://" + location.hostname + "/default.aspx?Flow=" + targetflow + getUrlParams() + "&jobId="+ id + "&submitCid=" + submitCid, "_blank");
}
function getUrlParams() {
var pub_params = unescape(GetFlowVariable($("#FlowSQForm").find('[name="pubparams"]').val()));
if (pub_params.length > 0) pub_params = "&" + pub_params;
var tempgender = GetFlowVariable((jLead.gender == "True" ? "M" : (jLead.gender == "False" ? "F" : "")));
return "&1=1&firstname=" +
GetFlowVariable(AF.Lead.v.FirstName) + "&lastname=" +
GetFlowVariable(AF.Lead.v.LastName) + "&email=" +
GetFlowVariable(AF.Lead.v.Email) + "&address=" +
GetFlowVariable(AF.Lead.v.Address1) + "&city=" +
GetFlowVariable(AF.Lead.v.City) + "&state=" +
GetFlowVariable(AF.Lead.v.State) + "&zippost=" +
GetFlowVariable(AF.Lead.v.ZipPost) + "&gender=" +
tempgender + "&phone=" +
GetFlowVariable(jLead.phone) + "&dobday=" +
GetFlowVariable(jLead.dobday) + "&dobmonth=" +
GetFlowVariable(jLead.dobmonth) + "&dobyear=" +
GetFlowVariable(jLead.dobyear) + "&affsecid=" +
GetFlowVariable(jFlowCfg.FlowID) + "&EntranceVID=" +
AF.Lead.v.EntranceVID + "&subaff=" +
GetFlowVariable(AF.Flow.v.SubAff);
// + pub_params;
}
function CreateImage(text) {
var colorArray = ["#2288d9", "#f23646", "#ffcc4d", "#424a4f", "#eb68a2", "#90d667", "#00c097", "#9c76d7", "#399cea", "#00b1d8"];
var randomColor = colorArray[Math.floor(Math.random() * (colorArray.length - 1)) + 1];
return "<div class='job-search-image style='background-color:" + randomColor + "'>" + text.charAt(0) + "</div>";
}
function truncateText(text) {
var len = 140;
var trunc = text;
if (trunc.length > len) {
trunc = trunc.substring(0, len);
trunc = trunc.replace(/\w+$/, '');
trunc += "&hellip;";
return trunc;
}
}
function initFeeds() {
Feeds = [];
$('.template').each(function () {
var cid = GetFlowVariable($(this).data().cid).toString();
if (isPreview && cid == "") document.getElementById("errorDiv").innerHTML += 'Template ' + $(this).attr('id') + ' is missing a cid.<br>';
var destination = GetFlowVariable($(this).data().destination);
var parseDate = GetFlowVariable($(this).data().parsedate) == "" ? false : true;
var style = GetFlowVariable($(this).data().style)
var truncateDescription = GetFlowVariable($(this).data().truncatedescription) == "" ? false : true;
var take = GetFlowVariable($(this).data().take) == "" ? 0 : $(this).data().take;
var divid = '#' + $(this).attr('id');
if (isPreview && divid == "#") document.getElementById("errorDiv").innerHTML += 'Template is missing an id.<br>';
var cidFound = false;
$(FeedObjs).each(function () {
if (this.cid == cid) {
cidFound = true;
var feed = new Feed(this.cid, destination, divid, this.name, this.id, this.pass, parseDate, style, truncateDescription, take);
Feeds.push(feed);
FeedQueue.push(feed);
}
}
);
if (cid == "favorites") {
cidFound = true;
var feed = new Feed(cid, destination, divid, "favorites", null, null, parseDate, style, truncateDescription, take);
Feeds.push(feed);
}
if (isPreview && !cidFound) document.getElementById("errorDiv").innerHTML += 'Feed either has no cid or was not found in the list of acceptable feeds.<br>';
FeedQueue[0].getJobListings();
}
);
}
function initExtras() {
var data = $('#creativeSettings').data();
for (var i in data) {
switch (i) {
case "lycos":
if (data[i] == "1") {
initLycosFeed();
}
break;
case "medianet":
if (data[i] == "1") {
initMediaNetTags();
}
break;
}
}
}
function initLycosFeed() {
if (isPreview && $("#lycosFrame").length == 0) {
document.getElementById("errorDiv").innerHTML += "Lycos is enabled but document is missing iframe with id of lycosFrame<br>";
}
var ps2 = app.SearchTerm.toLowerCase();
var pm = "";
if (ps2.indexOf("warehouse") > -1)
pm = "64D8CE85-12AC-6AFC-0599-7E42A7CB5771EEABD91D";
else if (ps2.indexOf("walmart") > -1)
pm = "EA52D419-6921-F4F2-2E65-75B647E3EC20F3A7B82E";
else if (ps2.indexOf("costco") > -1)
pm = "AF3CA4EC-870B-CA66-7AC1-D05EB04C350971A86FAB";
else if (ps2.indexOf("cashier") > -1)
pm = "AABF2EF4-D529-1E5F-8C70-2E349516A0B2C74399BD";
else if (ps2.indexOf("mcdonalds") > -1)
pm = "BD90406A-5EAF-C0C7-987B-EC4A559E938E1D4F1B71";
else
pm = "5751BF5A-8BD9-3E34-6145-112AB6B9BF4777CD7245";
var srctemp = "http://search.finddreamjobs.com/campaign.aspx?campaign=" + pm + "&myflowid=" + AF.Flow.v.FlowID + "&mysubaff=" + AF.Flow.v.SubAff + "&AffiliateID=" + AF.Flow.v.AffiliateID + "&kwd=" + app.SearchTerm;
$("#lycosFrame").prop("src", srctemp);
}
function initMediaNetTags() {
return;
}
function creativeElementsCheck() {
if ($('#errorDiv').length == 0) {
var div = document.createElement("div");
div.id = "errorDiv";
div.style.color = "red";
$('div').first().before(div);
}
var errorMsg = "";
if ($("#buttonswrapper").length == 0) {
errorMsg += "Document must have at least one button wrapper (id #buttonswrapper) <br>";
}
if ($("input.searchbox").length == 0) {
errorMsg += "Document must have at least one search box input (class .searchbox) <br>";
}
if ($("input.zipbox").length == 0) {
errorMsg += "Document must have at least one zip searchbox input (class .zipbox) <br>";
}
if ($("input.zipbox").length == 0) {
errorMsg += "Document must have at least one search button element (class .searchbutton) <br>";
}
if ($(".template").length == 0) {
errorMsg += "Document must have at least one template div (class .template) <br>";
}
else {
var idstring = "";
$('.template').each(function () {
if ($(this).attr("data-cid") == "") errorMsg += "Template " + $(this).attr('id') + " is missing a cid! <br>";
if ($(this).attr("data-destination") == "") errorMsg += 'Template ' + $(this).attr('id') + ' is missing a destination.<br>';
if ($(this).attr("data-destination") != "" && $($(this).attr("data-destination")).length == 0) errorMsg += $(this).attr('data-destination') + ' Destination not found! <br>';
if ($(this).attr("id") == "") errorMsg += 'Template is missing an id. <br>';
var id = $(this).attr("id");
if (id.length == 0) errorMsg += "Template missing id attribute. <br>";
if (idstring.indexOf(id) != -1) errorMsg += "All templates must have unique ids. <br>";
idstring += $(this).attr("id") + ", ";
}
);
}
if (errorMsg != "") document.getElementById("errorDiv").innerHTML += errorMsg;
}
function GetButtons() {
var maxLength = 6;
var wrapper = document.createElement("div");
wrapper.className = "buttons";
wrapper.id = "buttons";
for (var i = 0; i < maxLength + 1; i++) {
var button = document.createElement("span");
button.className = "page-btn";
if (i == 0) {
button.innerHTML = "«";
button.setAttribute("data-value", "--");
}
else if (i == maxLength) {
button.innerHTML = "»"
button.setAttribute("data-value", "++");
}
else {
button.innerHTML = i;
button.setAttribute("data-value", i - 1);
}
button.onclick = function () {
var t = $(this);
var val = $(this).attr("data-value");
$.each(Feeds, function () {
switch (val) {
case "++":
if (this.pageNumber + 1 <= maxLength - 2) {
this.pageNumber += 1;
$('.page-btn.selected').removeClass('selected');
$('.page-btn').eq(this.pageNumber + 1).addClass('selected');
}
break;
case "--":
if (this.pageNumber - 1 >= 0) {
this.pageNumber -= 1;
$('.page-btn.selected').removeClass('selected');
$('.page-btn').eq(this.pageNumber + 1).addClass('selected');
}
break;
default:
this.pageNumber = parseInt(val);
$('.page-btn.selected').removeClass('selected');
t.addClass('selected');
break;
}
if (this.name != "favorites") {
FeedQueue.push(this);
}
}
);
FeedQueue[0].getJobListings();
}
wrapper.appendChild(button);
}
return wrapper;
}
function ToggleFavorites(id, feedId) {
$.each(Listings, function () {
if (id == this.id) {
var count = parseInt($('#favoriteCount').html());
if (!this.hasOwnProperty("favorite")) {
this.favorite = true;
$("[data-id='" + this.id + "']").addClass('favorite');
$('#favoriteCount').html(count + 1);
}
else {
if (this.favorite == true) {
this.favorite = false;
$("[data-id='" + this.id + "']").removeClass('favorite');
$('#favoriteCount').html(count - 1);
}
else {
this.favorite = true;
$("[data-id='" + this.id + "']").addClass('favorite');
$('#favoriteCount').html(count + 1);
}
}
}
}
);
}
function GetFavorites() {
var result = $.grep(Listings, function (e) {
return e.favorite == true
}
);
$('#favoriteCount').html(result.length);
$.each(result, function () {
$("[data-id='" + this.id + "']").addClass('favorite');
}
);
}
function DisplayFavorites() {
$('#feed').hide();
$('#favorites').show();
var result = $.grep(Listings, function (e) {
return e.favorite == true
}
);
$.each(Feeds, function () {
if (this.name == "favorites") {
GlobalFeed = this;
this.take = result.length;
this.addListingsToDOM(result);
}
}
);
}
$('.searchbutton').click(function () {
doJobSearch();
var zipc = $("#zipc").val();
if (_jCidx == 14 && AF.Lead.v.ZipPost != zipc) {
if (zipc.length == 5) {
$.get('/svcg.aspx?SvcTP=3&apikey=6C0E62C4-FB5C-42A5-9D3B-10457F314A81&pID=4&params=zip%3D' + zipc + '%26apikey%3D50479670-5D5C-48FA-8384-98A28758BFA4', function (data) {
var array = data.split('"');
$('.state').html(array[7]);
});
}
}
});
$('.searchbox').keyup(function () {
$(".searchbox").not(this).val($(this).val());
}
);
$('.zipbox').keyup(function () {
$(".zipbox").not(this).val($(this).val());
}
);
jEnterKeyFunc = function () {
doJobSearch();
}
function myTrim(x) {
return x.replace(/^\s+|\s+$/gm, '');
}
