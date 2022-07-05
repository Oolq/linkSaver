const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitbutton");

let linkCategories = [];

linkCategory.addEventListener('keydown', function (event) {

    if (event.keyCode === 188) {
        event.preventDefault();

        linkCategories.push(linkCategory.value);

        linkCategory.value = '';

        displayLinkCategories();
    }
})

function displayLinkCategories() {
    console.log("Displaying link Categories");
}


console.log(this);

submitButton.addEventListener('click', function (event){
    console.log("Submit pressed");

    console.log(this);

    event.preventDefault();
});


