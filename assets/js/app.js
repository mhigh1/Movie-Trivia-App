// Reset the Modal Content on Close
const resetModal = function() {
    $('#modalTitle').empty();
    $('.modal-body').empty();
}

// CALLBACK FUNCTIONS //
$('.modal-dialog .close').on('click', resetModal);