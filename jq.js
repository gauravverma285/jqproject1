

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

        $('main section div h3').each(function (index, value) {

            $("#select3").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            // $(".ram2").append("<section><h1>" + head + "</h1></section>");
            console.log(index, value);

        });
    });

    $("#bt3").click(function () {
        $("#staticBackdrop1").modal('show');
    });

    $("#form3").submit(function (event) {
        event.preventDefault();

        // var type1 = $("#select4 option:selected").val();
        //     //$("option").remove();
        //     $("main section form").append("<input type="+type1+">");
    

        var label = $("#one").val();
        $("main").append("<section><form><label> " + label + "</label></form><section>")
        console.log(label);

        var type1 = $("#select4 option:selected").val();
        var class1 = $("#two").val();
        var value1 = $("#three").val();
        var place1 = $("#four").val();
        $("main section form").append("<input type="+type1+" class="+class1+" value="+value1+" placeholder="+place1+">")

        // var value1 = $("#three").val();
        // $("main section form").append("<input class="+class1+">")

        
        // var placeholder = $("#four").val();
        // $("main section input").append("<input placeholder "+placeholder+">")
        // console.log(placeholder);

    });

    // $("#form3").submit(function (event) {
    //     event.preventDefault();

    //     $('main section h1').each(function (index, value) {

    //         $("#select2").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
    //         console.log(index, value);

    //     });
    // });

});
