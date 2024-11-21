// let input = document.getElementById('inputBox');
// let button = document.querySelectorAll('button');

// let string = "";
// // store result

// let arr = Array.from(button);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })

// Get the input element and all buttons
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.calculator button');

// Initialize the string to store the input
let string = "";

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the clicked button's innerHTML
        let buttonText = e.target.innerHTML;

        // Perform actions based on the button clicked
        switch (buttonText) {
            case 'AC':
                string = "";
                break;
            case 'DEL':
                string = string.slice(0, -1);
                break;
            case '=':
                string = eval(string);
                break;
            default:
                string += buttonText;
                break;
        }

        // Update the input value
        input.value = string;
    });
});
