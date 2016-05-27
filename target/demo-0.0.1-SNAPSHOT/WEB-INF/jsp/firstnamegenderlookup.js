RG.genderLookUp = function (firstname) {
var fn = (firstname ? firstname : $('input[name=firstname]').val());
if (fn.length > 0) {
$.get('/svcg.aspx?SvcTP=3&apikey=6C0E62C4-FB5C-42A5-9D3B-10457F314A81&pID=9&params=FName%3D' + fn + '%26apikey%3DCA5E311B-DC48-43B3-8E89-972B38E64910', function (data) {
if (isNaN(data)) {
$('[name="gender"][type="hidden"]').val(data);
$('[name="gender"][value="' + UC(data.toLowerCase()) + '"]').prop("checked", true).change();
}
}
);
}
};



//case "firstname":
//if ($('[name="firstname"]').attr('data-genderlookup') != "false") RG.genderLookUp($('[name="firstname"]').val());
//break;


function GenderLookUp() {
var fn = "";

//fn = AF.Lead.v.FirstName;

fn = $('input[name=firstname]').val();

$.get('/svcg.aspx?SvcTP=3&apikey=6C0E62C4-FB5C-42A5-9D3B-10457F314A81&pID=9&params=FName%3D' + fn + '%26apikey%3DCA5E311B-DC48-43B3-8E89-972B38E64910', function (data) {
if (isNaN(data)) {
$("#RPc1719dv").find('[name="gender"]').val(data);
}
}
);
}


function GenderLookUp() {
//var fn = jLead.firstname;
var fn = $('input[name=firstname]').val();
$.get('/svcg.aspx?SvcTP=3&apikey=6C0E62C4-FB5C-42A5-9D3B-10457F314A81&pID=9&params=FName%3D' + fn + '%26apikey%3DCA5E311B-DC48-43B3-8E89-972B38E64910', function (data) {
if (isNaN(data)) {
$("#RPc3869dv").find('[name="gender"]').val(data);
if (data == 'M') {
$('#female').removeClass('btnselected');
$('#male').addClass('btnselected');
}
else {
$('#male').removeClass('btnselected');
$('#female').addClass('btnselected');
}
}
}
);
}