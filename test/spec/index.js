module("Integration Tests", {
    setup: function() {
        FinanceRegister.reset();
    }
});

// test("number of .well elements on root", function(){
//     visit("/");
//     andThen(function() {
//         equal(find(".well").length, 1, ".well elements number = 1");
//     });
// });