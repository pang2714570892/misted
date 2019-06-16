var images = [];
images.push('images/left_top_01.png');
images.push('images/left_top_02.png');
images.push('images/bottom_01.png');
images.push('images/text_01.png');
images.push('images/text_02.png');
images.push('images/center_01.png');
images.push('images/logo.png');
images.push('images/decorate_01.png');
images.push('images/decorate_02.png');
images.push('images/decorate_03.png');
images.push('images/decorate_04.png');
displayHideUI('#page_01');
displayHideUI('#page_02');
imgLoader(images, function (percentage) {
    var percentT = percentage * 100;
    $('#loader__info').html('Loading ' + (parseInt(percentT)) + '%');
    $('#loader__progress')[0].style.width = percentT + '%';
    if (percentage == 1) {
        $('#loader').remove();
        displayShowUI("#page_01");
    }
});

function displayHideUI(id) {
    $(id).css("display", "none");
}
function displayShowUI(id) {
    $(id).css("display", "block");
}

$("#door").click(function() {
    $("#page_01").fadeOut(1000, function(){
        displayHideUI("#page_01");
        displayShowUI("#page_02");
    });
});