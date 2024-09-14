document.getElementById('passwordForm').onsubmit = function(e) {
    e.preventDefault();
    const site = document.getElementById('site').value;
    const password = document.getElementById('password').value;
    const row = `<tr><td>${site}</td><td>${password}</td></tr>`;
    document.getElementById('passwordTable').innerHTML += row;
    this.reset();  // Para limpar o formulário
};

