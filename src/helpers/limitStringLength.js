function limitStringLength(string) {
    if (string && string.length > 99) {
        return string.substring(0, 100) + "..."
    }
    else {
        return string
    }

}

export default limitStringLength;