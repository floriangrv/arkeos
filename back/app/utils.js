exports.firstCharacterUpperCase = (string) => {
    const firstCharacter = string.substr(0, 1).toUpperCase();
    const secondPart = string.substr(1, string.length).toLowerCase();
    const newString = firstCharacter + secondPart;
    return newString;
};