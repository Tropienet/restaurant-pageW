function clearDisplay(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

export default clearDisplay;