const lojaslist = document.getElementById('lojaslist');
const searchBar = document.getElementById('searchbar');
let lojas = [];
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredlojas = lojaslist.filter((loja) => {
        return (
            loja.name.toLowerCase().includes(searchString)
        );
    });
    displaylojas(filteredlojas);
});
const loadlojas = async () => {
    try {
        const res = await fetch('LINK API HEROKU');
        lojas = await res.json();
        displaylojas(lojas);
    } catch (err) {
        console.error(err);
    }
};
const displaylojas = (lojas) => {
    const htmlString = lojas
        .map((loja) => {
            return `
            <li class="loja">
                <h2>${loja.nome}</h2>
                <p>Comentários: ${loja.comentario}</p>
                <img src="${loja.image}"></img>
            </li>
        `;
    })
    .join('');
lojaslist.innerHTML = htmlString;
};

loadlojas();