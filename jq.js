

$(document).ready(function () {

 
    $("#bt1").click(function () {
        $("#exampleModal").modal('hide');
    });

    $("#users").submit(function (event) {
        event.preventDefault();

        var head = $("#heading").val();
        

        $("main").append("<section><h1> " + head + "</h1></section>");
        
        // $("option").remove();

        $('main section h1').each(function (index, value) {

            $("#ram1").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            console.log(index, value);

        })

        $('main section h1').each(function (index, value) {

            $("#select2").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
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
          
            $("main section:nth-child(" + head + ") ").append("<div><h3>" + subheading + "</h3></div>");
            console.log(subheading);
        }

        $('main section div h3').each(function (index, value) {

            $("#select3").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
            
            console.log(index, value);

        });
    });

    $("#bt3").click(function () {
        $("#staticBackdrop1").modal('show');
    });

    $("#form3").submit(function (event) {
        event.preventDefault();

    

        var label = $("#one").val();
        $("main").append("<section><form><label> " + label + "</label></form><section>")
        console.log(label);

        var type1 = $("#select4 option:selected").val();
        var class1 = $("#two").val();
        var value1 = $("#three").val();
        var place1 = $("#four").val();
        $("main section form").append("<input type="+type1+" class="+class1+" value="+value1+" placeholder="+place1+">")

       

    });

    

});
