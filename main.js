//Functions
const randomIndex = (len) => {
    return Math.floor(Math.random() * len)
}


//Main function
let randomText = "This rule is triggered when more than one space is used to separate the heading text from the hash characters in a closed atx style heading"

let randomWords = randomText.split(' ').filter(word => word.length > 1).map(word => word.toLowerCase())

const message = `${randomWords[randomIndex(randomWords.length)]} ${randomWords[randomIndex(randomWords.length)]} ${randomWords[randomIndex(randomWords.length)]}`
console.log(message)


