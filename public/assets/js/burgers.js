// 
$(function() {
    $(".change-side").on("click", function(event) {
        let id = $(this).data("id");
        let newSide = $(this).data("data-news");

        let newSideState = {
            devoured: newSide
        };

        $.ajax("/api/cats/ " + id, {
            type: "PUT",
            data: newSideState
        }).then(function() {
            console.log("changed sleep to", newSide);

            location.reload();
        });
    });

    $("create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#br").val().trim(),
            devoured: $("#[name=burger").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger", id);

            location.reload();
        });
    });

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/api/burger" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted Burger", id);

            location.reload();
        });
    });
});