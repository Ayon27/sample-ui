$(document).ready(function () {
    // $("#clgResultTable").hide();
    $("#clgResultTable").css("display", "none");
});

var hiddenDiv;

function replaceResult(hide, show) {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";

}

function closeResult() {
    document.getElementById('boardResult').style.display = "block";
    document.getElementById('clgResultTable').style.display = "none";
}