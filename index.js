var img = $("#img");
var btn = $("#btn");

btn.click(function () {
    $.getJSON("https://random.cat/meow", function () {
            console.log("success");
        })
        .done(function (data) {
            img.attr("src", data.file);
        })
        .fail(function () {
            console.log("error");
        })
});