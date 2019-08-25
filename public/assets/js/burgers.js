// 
$(function() {
    $(".change-side").on("click", function(event) {
        let id = $(this).data("id");
        let newSide = $(this).data("newside");

        let newSideState = {
            devoured: newSide
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newSideState
        }).then(
            function() {
                console.log("changed side to", newSide);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#br").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");

            location.reload();
        });
    });

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted Burger", id);

            location.reload();
        });
    });
});