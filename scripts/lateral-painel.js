document.getElementById('hamburgerMenu').addEventListener('change', function() {
    document.querySelector('.lateral-painel').classList.toggle('open', this.checked);
});