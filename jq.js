

$(document).ready(function () {

    $(".bt1").click(function () {
        $("#exampleModal").modal('hide');
    });

    $(".form1").submit(function (event) {
        event.preventDefault();

        var head = $(".heading").val();
        
        $("main").append("<section><h1> " + head + "</h1></section>");
        // $("option").remove();
        $('#select1 option').remove();
        $('#select1').append('<option>-----Select Heading-----</option>');

        $('#select2 option').remove();
        $('#select2').append('<option>-----Select Heading-----</option>');

        $('main section h1').each(function (index, value) {

            $("#select1").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            console.log(index, value);

        })

        $('main section h1').each(function (index, value) {

            $("#select2").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            console.log(index, value);

        })
        $('.form1').trigger("reset");
    })

    $(".form2").submit(function (event) {
        event.preventDefault();
        var subheading = $(".subheading").val();
        if (subheading == "") {
            alert("This field is required")
            return false;
        }
        else {
            var head = $("#select1 option:selected").val();
          
            $("main section:nth-child(" + head + ") ").append("<div><h3>" + subheading + "</h3></div>");
            console.log(subheading);

        }

        $('main section div h3').each(function (index, value) {

            $("#select3").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            
            console.log(index, value);

        });
        $('.form2').trigger("reset");
    });

    $("#bt3").click(function () {
        $("#staticBackdrop1").modal('show');
    });

    $(".form3").submit(function (event) {
        event.preventDefault();

        var label = $(".one").val();
        $("main").append("<section><form><label> " + label + "</label></form><section>")
        console.log(label);

        var type1 = $("#select4 option:selected").val();
        var class1 = $(".two").val();
        var value1 = $(".three").val();
        var place1 = $(".four").val();
        $("main section form").append("<input type="+type1+" class="+class1+" value="+value1+" placeholder="+place1+">")

        $('.form3').trigger("reset");
    });
});

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };
// localStorage.setItem('testObject', JSON.stringify(testObject));
// var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
// console.log('retrievedObject: ', retrievedObject);