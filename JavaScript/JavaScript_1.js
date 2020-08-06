function Music_Function() {                                                                                                     //Defining the functions name.
    var Music_Output;                                                                                                           //Defining the variable but assigning no value to it at this point.
    var Music = document.getElementById("Music_Genre").value;                                                                   //Defining the variable that will change depending on the input from the HTML input field.
    var Music_String = " is a great choice!"                                                                                    //Defining a variable that can be added onto the output to add a bit of flavor.
    switch(Music) {                                                                                                             //Utilizing the "Switch" command.
        case "Rock":                                                                                                            //Building the "Rock" case.
            Music_Output = "Rock" + Music_String;
        break;
        case "Blues":                                                                                                           //Building the "Blues" case.
            Music_Output = "Blues" + Music_String
        break;
        case "Classical":                                                                                                       //Building the "Classical" case.
            Music_Output = "Classical" + Music_String
        break;
        case "Hip Hop":                                                                                                         //Building the "Hip Hop" case.
            Music_Output + "Hip Hop" + Music_String
        break;
        case "Country":                                                                                                         //Building the "Country" case.
            Music_Output = "Country" + Music_String
        break;
        default:                                                                                                                //The default acts like an else statement. If none of the case options are chosen, this is the string that will be output.
            Music_Output = "Please choose to choose from the list provided and ensure that you spell your choice correctly."
    }
    document.getElementById("Result").innerHTML = Music_Output                                                                  //Putting the output into the HTML.
}

function Change_Text() {                                                                                                        //Defining function name.
    var text = document.getElementsByClassName("Text");                                                                         //Defining variable "text" to be equal to the Class Name "Text" in the linked html file.
    text[0].innerHTML = "To be or not to be that is the question";                                                              //Because we are using class and not an id we have to set an indext number of which item in that class name we want to change.
}

function Fill_Canvas() {                                                                                                        //Defining function name.
    var canvas = document.getElementById("Canvas");                                                                             //Defining variable "canvas" to equal the Id "Canvas" in the linked HTML file.
    var cont = canvas.getContext("2d");                                                                                         
    cont.font = "25px sans-serif";                                                                                              //Changing the font in the "cont" variable to be a size of 25 pixels and to be sans-serif font type.
    cont.fillText("Testing 123", 25, 50);                                                                                       //Adding the string "Testing 123" to the canvas witht he padding of 25 pixels from the left side and 50 pixels from the top.
}

function Filling_Canvas() {                                                                                                     //Defining function name.
    var c = document.getElementById("myCanvas");                                                                                //Defining variable "c" to equal the Id "myCanvas" in the linked HTML file.
    var ctx = c.getContext("2d");
    var my_gradient = ctx.createLinearGradient(0, 0, 0, 130);                                                                   //Defining variable "my_gradient" to set the gradient level in the variable "ctx".
    my_gradient.addColorStop(0, "black");                                                                                       //Setting the color at the top of the background to be black.
    my_gradient.addColorStop(1, "red");                                                                                         //Setting the color at the bottom of the background to be red.
    ctx.fillStyle = my_gradient;                                                                                                //Filling the canvas with the value of the variable "my_gradient"
    ctx.fillRect(20, 20, 250, 250);
}