function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let Owners = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(Owners.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
