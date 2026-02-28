function toggleDropdown(button) {
    const dropdown = button.querySelector(".dropdown-menu");
    dropdown.classList.toggle("hidden");
}

function previewImage(event) {
    const input = event.target;
    const preview = document.getElementById("imagePreview");

    if (input.files && input.files[0]) {
        preview.src = URL.createObjectURL(input.files[0]);
    }
}