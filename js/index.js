var images = [];
images.push('images/left_top_01.png');
images.push('images/bottom_01.png');
images.push('images/text_01.png');
images.push('images/text_02.png');
images.push('images/center_01.png');
displayHideUI('#page_01');
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