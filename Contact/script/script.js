function replySubmit() {
    let popup = document.getElementById("pop-up");
    popup.style.visibility = "visible";

    $(document).ready(function () {
        $("#pop-button").click(function () {
            // $("#pop-up").hide();
            $("#pop-up").css("visibility", "hidden");
        });
    });
}
