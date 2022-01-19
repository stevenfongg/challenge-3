# Password Generator Starter Code
This weeks challenge was to refractor some supplied code and turn it into a working password generator. 

#What I will be using for this Challenge 
I will be using mainly Javascript for this challenge as the CSS and HTML files were already provided for me.

#What is broken?
At the start of this challenge, I saw that the HTML and CSS files were all filled out so the website looked fine, but the function did not work as intended. When a user clicked on the "Generate Password" button, nothing would generate.

#Acceptance Criteria 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

#How I fixed the code into a functional Password Generator
I saw that im the script.js file that was given, there was already a function called writePassword already created. This function takes a randomly generated passwoed and writes it to the #password input. This means that wheneve a password is generated, it will show up in its respective place on the webpage (will replace "your secure password" in the web page box)
This function called another function called generatePassword but there was no function declaration to be found on script.js. This is where I began the challenge from. I created a function declaration for generatePassword. The next step was to think about what variables I would need to complete this web page. I would need to create a variable that holds the password length and one for each criteria chosen by the user. I put these variable declarations at the top of the script.js and went back down to generatePassword to go on to the next step.
The next step was to prompt the user so we could get values into the variables that were just declared. For password length I prompted the user to enter a password length from 8-128. If they didn't enter a correct value they would be alerted so and would have to restart the process. If they entered the correct value, then the user would confirm which criteria would be needed for the password that they want to generate.
The next step for me was to group up all the possible character values that can be used in the password based off of the user input. The variables for each criteria are stored in arrays labled respectively. I then created a new variable that would store information from multiple criteria all int one array. The variable criteria will store values from arrays that were chosen by the user. For example if the user chose only uppercase and numeric values, the criteria array will store all values in upperAlpha and numbers.
Last step was to actually generate a random password created from values stored in criteria. To do thism I created a new array called password to store the generated password. Then I made a for loop that would iterate for however long the user inputed. Then i created a new variable called randomVariable which is the one random character that would be selected from the criteria array. I used Math.random to select a random value out of criteria to be stored in randomVariable. After this I put return password and tried out my generator. After doing this I saw that there were commas inbetween each value in the password so I had to change something. I looked around online for help and saw that I had to use the .join function. I created a new variable called psString and stored password.join in it. Then I finally returned psString.
