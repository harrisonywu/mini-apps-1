// insert clickHandlers that will listen for submit button press
// currently, opening index.html loads up index.html and app.js




// reset the event default behavior
var submitForm = function () {
    document.getElementById("submission").addEventListener("click", function(event){
    event.preventDefault();
  });
}