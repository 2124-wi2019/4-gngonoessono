/*Gertrude Vanessa Ngono Essono
ngonoessono_a04b.js
INFO2124
Thoendel
01/12/2020*/

const firstName = "Gertrude";
let myWeight = '160.0';
let myHeight = 69.0 ;
let myAge = "27";
const marsGravity = 0.38;
const inchesToMeters = 2.54;


let myHeightInMetric= myHeight*inchesToMeters;// convert the height from inch to cm

let myAgeInDays = Number(myAge) * 365; //calculate how many days old I am

let myAgeInMars = myAgeInDays/687;//calculate my age on Mars

let myWeightOnMars = parseFloat(myWeight)*marsGravity; //it was impossible to multiply a string(myWeight) with a decimal number so I had to convert myWeight from string to float using parseFloat();

console.log(`Hello there, ${firstName}! On earth you weigh ${parseFloat(myWeight)} pounds.
But, since gravity is weaker on the Mars, you would only weight ${String(myWeightOnMars)} pounds there!\n\n
Neat huh? Want to know what else is neat?\n\n
Mars takes long to rotate around the Sun than does Earth. THis means the Mars year is actually
longer than our "terran" year. So although you are ${Number(myAge)} years old on Earth, you're
only ${parseInt(myAgeInMars)} years old on Mars.\n\n
DId you Know, the European Space Agency requires potential astronauts to measure between 
153 and 190 cm? Just in case you ever decide to move to Europe and want to be 
an astronaut, your height in metric is ${myHeightInMetric} cm.`);





