function ziplookup() {
    var zip = $("#RPc6329dv").find('[name="zippost"]').val();
    if (zip != undefined) {
        if (zip.length == 5) {
            $.get('/svcg.aspx?SvcTP=3&apikey=6C0E62C4-FB5C-42A5-9D3B-10457F314A81&pID=4&params=zip%3D' + zip + '%26apikey%3D50479670-5D5C-48FA-8384-98A28758BFA4', function (data) {
                var array = data.split('"')
                $("#RPc6329dv").find('[name="city"]').val(array[3]);
                $("#RPc6329dv").find('[name="state"]').val(array[7]);
            });
        }
    }
}
