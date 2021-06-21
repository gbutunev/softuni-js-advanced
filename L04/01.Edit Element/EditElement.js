function editElement(element, placeholder, newString) {
    element.textContent = element.textContent.replace(new RegExp(placeholder, 'g'), newString);
}