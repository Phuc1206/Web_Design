//truyen vao mot class cua button
function showMoreText(classButton) {
    $(document).ready(function () {
        $(`${classButton}`).click(function () {
            $(this).parent().toggleClass("showContent");
          
            let replaceText = $(this).parent().hasClass("showContent") ? "Ẩn bớt" : "Đọc thêm";
            $(this).text(replaceText);
        });
    });
}

// function scaleImage(classImage) {
//     $(document).ready(function() {
//         $(`${classImage}`).hover(function() {
//             $(this).css({"width": "110%"})
//         });
//     });
// }

showMoreText('.read'); // hoat dong voi ALL element co' class .read

