$(document).ready(function () {
    $(".back").hide();

    $("#name").keyup(function () {
        var name = $("#name").val();
        $(".credit-author").text(name);
    });
    $("#cvv").focus(function () {
        $(".front").hide();
        $(".back").show();
    });
    $("#cvv").focusout(function () {
        $(".front").show();
        $(".back").hide();
    });
    $("#sktarih-ay").keyup(function () {
        var sktAy = $("#sktarih-ay").val();
        $(".skt-ay").text(sktAy);
    });
    $("#cvv").keyup(function () {
        var cvvCode = $("#cvv").val();
        if (cvvCode.length <= 3)
            $(".cvv").text(cvvCode);
    });
    $("#sktarih-yil").keyup(function () {
        var sktYil = $("#sktarih-yil").val();
        $(".skt-yil").text(sktYil);
    });
    $("#card-number").keyup(function () {
        var cardNumber = $("#card-number");
        var cardNumberVal = cardNumber.val();

        if (cardNumberVal.length > 16) {
            console.log('burda data: ' + cardNumberVal.slice(0, 16));
            cardNumber.val(cardNumberVal.slice(0, 16));
        } else {
            var newCardNumber = cardNumberVal.slice(0, 4) + " ";
            newCardNumber = newCardNumber + cardNumberVal.slice(4, 8) + " ";
            newCardNumber = newCardNumber + cardNumberVal.slice(8, 12) + " ";
            newCardNumber = newCardNumber + cardNumberVal.slice(12, 16);
            $(".credit-card-number").text(newCardNumber);
        }



    });
    $("#card-number").keyup(function () {
        var cardNumber = $("#card-number").val();
        var firstNum = cardNumber.slice(0, 1)
        $("#brand").removeClass();
        if (firstNum == '5') {
            $("#brand").addClass("fa-brands fa-3x fa-cc-mastercard");
            $("#bank").text("MasterCard");
        } else if (firstNum == '4') {
            $("#brand").addClass("fa-brands fa-3x fa-cc-visa");
            $("#bank").text("Visa");
        } else {
            $("#brand").addClass("fa-brands fa-3x fa-paypal");
            $("#bank").text("PayPal");
        }
    });
});