function toggleDropdown(button) {
    const dropdown = button.querySelector(".dropdown-menu");
    dropdown.classList.toggle("hidden");
}

function previewImage(event) {
  const input = event.target;
  const preview = document.getElementById("imagePreview");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.classList.remove("hidden");
    };

    reader.readAsDataURL(input.files[0]);
  }
}