// Dummy data until I put together a database
var cards = {
    "name": ["Thailand", "Singapore", "Vietnam", "China"],
    "city": ["Bangkok", "Singapore", "Hanoi", "Shenzen"],
    "image": ["https://dummyimage.com/400x400/000/fff",
        "https://dummyimage.com/400x400/000/fff",
        "https://dummyimage.com/400x400/000/fff",
        "https://dummyimage.com/300x300/000/fff"
    ],
    "text": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ]
}

// Initializes page with country squares
function loadPage() {

    for (let i = 0; i < cards.name.length; i++) {

        console.log(cards.name[i]);
        var tile = $("<div>");
        0
        tile.addClass("card-grid");
        tile.attr("id", "tile_" + cards.name[i]);

        var front = $("<div>");
        front.addClass("front");
        front.attr("id", "front_" + cards.name[i])
        front.text("Front Content");
        front.css("background-image", 'url(' + cards.image[i] + ')');

        var border = $("<div>");
        border.addClass("border");
        front.append(border);

        var back = $("<div>");
        back.addClass("back");
        back.attr("id", "back_" + cards.name[i]);
        back.text(cards.name[i]);

        tile.append(front);

        tile.append(back);

        $(tile).hide().appendTo(".tiles").fadeIn(500);

    }

    // Watches for second click on back tile
    $(".back").click(function () {
        expand($(this).text());
    });

}

// Expands card to full page on click
function expand(name) {
    console.log("Ran expand function for " + name);

    for (let i = 0; i < cards.name.length; i++) {

        if (cards.name[i] != name) {
            var tempName = cards.name[i];
            $("#front_" + tempName).hide();
            $("#back_" + tempName).hide();
            $("#tile_" + tempName).hide();
            // $(".front").hide();
            $("." + tempName).hide();
            console.log("Hiding " + tempName);
        }

    }

    // $(".tiles").remove();
    $(".card-grid").flip(false);


    // When flip is done, indiana jones the element and then animate the new guy
    $("#tile_" + name).on('flip:done', function () {
        $("#tile_" + name).hide();
        console.log("Flip is done");

        var expandDiv = $("<div>");
        expandDiv.addClass("expand-tile");

        var front = $("<div>");
        front.addClass("front");

        var textDiv = $("<div>");
        textDiv.addClass("textDiv");

        for (let i = 0; i < cards.name.length; i++) {
            if (cards.name[i] === name) {
                expandDiv.css("background-image", 'url(' + cards.image[i] + ')');
                textDiv.text(cards.text[i]);
            }
        }

        expandDiv.append(front);
        expandDiv.appendTo(".tiles");

        var newBorder = $("<div>");
        newBorder.addClass("newBorder");
        newBorder.appendTo(".expand-tile");

        // var backButton = $("<div>");
        // backButton.attr("id","backButton");
        // backButton.text("Back");
        // $(backButton).hide().appendTo(".container").fadeIn(500);

        $(".expand-tile").animate({
            opacity: '0.90',
            width: '100%',
        }, function () {
            $(textDiv).hide().appendTo(".container").fadeIn(500);
            
            // scrollTo()
            // Add scrollTo to scroll to blog post.
        });

    });

    

    $(".card-grid").flip({
        axis: 'y',
        trigger: 'hover'
    });

}
loadPage();

// Runs card flip
$(".card-grid").flip({
    axis: 'y',
    trigger: 'hover'
});