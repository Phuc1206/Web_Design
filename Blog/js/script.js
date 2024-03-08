let click_state = 0;
$(document).ready(function () {
    $("svg").click(function () {
        if (click_state === 0) {
            $(this).css("color", "blue");
            click_state = 1;
        }
        //
        else {
            $(this).css("color", "black");
            click_state = 0;
        }
    });
});
