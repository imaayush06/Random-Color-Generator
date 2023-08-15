//random color generator function
const getColor= () => {
    //Hex Code
    const randomNumber = Math.floor(Math.random() *16777215) //we multiply with 16777215 to get a six digit number
    //math.floor  helps us get the value to nearest number in the answer
    const randomCode = "#" + randomNumber.toString(16)//bcoz hexadecimal means 16 and it is base16
    console.log(randomNumber, randomCode)
    document.body.style.backgroundColor = randomCode
    document.getElementById("color_code").innerText = randomCode

    //to copy the color code directly to clipboard
    navigator.clipboard.writeText(randomCode)
} 


//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


//initial call - at opening of the page
getColor()