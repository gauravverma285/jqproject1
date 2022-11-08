

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
            console.log(`${this.index} : ${this.value}`);

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
                $("main section:nth-child(" + head + ") ").append("<div><h3>" + subheading + "</h3></div>");
                console.log(subheading);
            }
        })
            // Create New Option.
            // var newOption = $('<option>');
            // newOption.attr('value', head).text(head);

            // // Append that to the DropDownList.
            // $('#ram1').append(newOption);

            // // Select the Option.
            // $("#ram1 > [value=" + head + "]").attr("selected", "true");

            // $("#users1").submit(function (event) {
            //     event.preventDefault();

            //     var sub1 = $("#heading1").val();

            //     var head = $("#ram1 option:selected").val();
            //     //$("#bt2").click(function () {
            //     $("main section h1").append("<div><h5> " + sub1 + "</h5></div>");
            //     //})

            // })



        })
        // $("#bt1").click(function () {
        //     $("#users").modal('reset');
        // });

    })