/**
 * 検索画面で使用するスクリプト
 */
$(".all-button").click(function () {
    var allCheckedFlg = true;
    $(".db_checkbox").each(function () {
        if ($(this)[0].checked == false) {
            allCheckedFlg = false;
            $(this)[0].click();
        }
    });
    if (allCheckedFlg == true) {
        $(".db_checkbox").each(function () {
            if ($(this)[0].checked == true) {
                $(this)[0].click();
            }
        });
    }
});