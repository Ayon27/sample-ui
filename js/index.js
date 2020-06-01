$(document).ready(function () {
    // $("#clgResultTable").hide();
    $("#clgResultTable").css("display", "none");
});

var hiddenDiv;

function replaceResult() {
    hiddenDiv = document.getElementById('boardResult').innerHTML;
    document.getElementById('boardResult').innerHTML = document.getElementById('clgResultTable').innerHTML;
}

function closeResult() {
    document.getElementById('boardResult').innerHTML = hiddenDiv;
}