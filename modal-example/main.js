const modal = document.querySelector('.modal');
const buttonOpen = document.querySelector('.modal__open');
const buttonClose = document.querySelector('.modal__close');
const buttonGreen = document.querySelector('.btn--green');
const buttonRed = document.querySelector('.btn--red');

const closeModal = () => modal.classList.remove('modal__visible');

buttonOpen.addEventListener('click', () => {
    modal.classList.add('modal__visible');
    buttonClose.focus();
});

buttonClose.addEventListener('click', closeModal);

buttonGreen.addEventListener('click', closeModal);

buttonRed.addEventListener('click', closeModal);

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}
