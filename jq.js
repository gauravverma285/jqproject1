

$(document).ready(function () {

    // Close modal on button click
    $("#bt1").click(function () {
        $("#exampleModal").modal('hide');
    });

    $("#users").submit(function (event) {
        event.preventDefault();

        var head = $("#heading").val();
        // console.log(head)

        //$("#bt1").click(function () {
        $("main").append("<section><h1> " + head + "</h1></section>");
        //})
        $("option").remove();

        $('main section h1').each(function (index, value) {

            $("#ram1").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            // $(".ram2").append("<section><h1>" + head + "</h1></section>");
            console.log(index, value);

        })

        $('main section h1').each(function (index, value) {

            $("#select2").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            // $(".ram2").append("<section><h1>" + head + "</h1></section>");
            console.log(index, value);

        })

        $('main section div h3').each(function (index, value) {

            $("#select3").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            // $(".ram2").append("<section><h1>" + head + "</h1></section>");
            console.log(index, value);

        })
        
    })

    $("#users1").submit(function (event) {
        event.preventDefault();
        var subheading = $("#heading1").val();
        if (subheading == "") {
            alert("This field is required")
            return false;
        }
        else {
            var head = $("#ram1 option:selected").val();
            //$("option").remove();
            $("main section:nth-child(" + head + ") ").append("<div><h3>" + subheading + "</h3></div>");
            console.log(subheading);
        }
    });

    $("#bt3").click(function () {
        $("#staticBackdrop1").modal('show');
    });

    // $("#form3").submit(function (event) {
    //     event.preventDefault();

    //     $('main section h1').each(function (index, value) {

    //         $("#select2").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
    //         console.log(index, value);

    //     });
    // });

});
