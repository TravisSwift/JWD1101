const openModalBtn = document.querySelector('#modal-btn');
const cancelBtn = document.querySelector('#close-btn');
const subscribeBtn = document.querySelector('#subscribe');
const modal = document.querySelector('.modal-container');



openModalBtn.addEventListener('click', function () {
    modal.classList.add('open-modal')
})
cancelBtn.addEventListener('click', function () {
    modal.classList.remove('open-modal')
})
subscribeBtn.addEventListener('click', function () {
    modal.classList.remove('open-modal')
})