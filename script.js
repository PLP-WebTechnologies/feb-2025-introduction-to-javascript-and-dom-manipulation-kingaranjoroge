// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const styleBox = document.getElementById('style-box');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const elementContainer = document.getElementById('element-container');
    const toggleElementBtn = document.getElementById('toggle-element-btn');

    // Text content manipulation
    let isTextChanged = false;
    changeTextBtn.addEventListener('click', () => {
        if (!isTextChanged) {
            dynamicText.textContent = 'The text has been changed successfully!';
            dynamicText.style.color = '#4CAF50';
        } else {
            dynamicText.textContent = 'This text will change when you click the button below.';
            dynamicText.style.color = 'initial';
        }
        isTextChanged = !isTextChanged;
    });

    // Style manipulation
    let isStyleChanged = false;
    changeStyleBtn.addEventListener('click', () => {
        if (!isStyleChanged) {
            styleBox.style.backgroundColor = '#e3f2fd';
            styleBox.style.border = '2px solid #2196F3';
            styleBox.style.transform = 'scale(1.05)';
            styleBox.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        } else {
            styleBox.style.backgroundColor = 'white';
            styleBox.style.border = '1px solid #ddd';
            styleBox.style.transform = 'scale(1)';
            styleBox.style.boxShadow = 'none';
        }
        isStyleChanged = !isStyleChanged;
    });

    // Element manipulation
    let isElementAdded = false;
    toggleElementBtn.addEventListener('click', () => {
        if (!isElementAdded) {
            const newElement = document.createElement('div');
            newElement.className = 'box';
            newElement.innerHTML = '<p>This is a new element that was added dynamically!</p>';
            elementContainer.appendChild(newElement);
        } else {
            const lastElement = elementContainer.lastElementChild;
            if (lastElement && lastElement.className === 'box') {
                elementContainer.removeChild(lastElement);
            }
        }
        isElementAdded = !isElementAdded;
    });
}); 