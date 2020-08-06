function showDetails(person) {
    var caffine_type = person.getAttribute("data-caffine-type");
    alert(person.innerHTML + "'s prefered method of caffine consumption is " + caffine_type + ".");
}