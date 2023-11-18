function cambiarColor(index, containerId) {
    var huellas = document.querySelectorAll('#' + containerId + ' .image');

    // Remover la clase 'selected' de todas las huellas
    for (var i = 0; i < huellas.length; i++) {
        huellas[i].classList.remove('selected');
    }

    // Agregar la clase 'selected' a las huellas seleccionadas
    for (var i = 0; i <= index; i++) {
        huellas[i].classList.add('selected');
    }
}