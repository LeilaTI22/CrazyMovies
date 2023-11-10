const input = document.getElementById('foto');
const previewPhoto = () => {
    const file = input.files;
    if (file) {
        const fileReader = new FileReader();
        const preview = document.getElementById('imgFormulario');
            fileReader.onload = function (event) {
            preview.setAttribute('src', event.target.result);
        }
        fileReader.readAsDataURL(file[0]);
    }
}
input.addEventListener("change", previewPhoto);
