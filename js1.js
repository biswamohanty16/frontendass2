document.querySelectorAll('.edit-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        input.removeAttribute('readonly');
        input.focus();
    });
});