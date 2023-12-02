
const URL = "https://ciromirkin.github.io/toasterCatalog_API/toasterCatalog.txt";
fetch(URL)
    .then(res => res.json()).then(res => {
        const catalog = res;
        showCatalog(shuffleList(catalog))
})

const shuffleList = (list) => list.sort(() => Math.random() - 0.5);

const showCatalog = (catalog) => {
    const catalogElement = document.getElementById("list")
    catalogElement.innerHTML = catalog.map(toaster => `
        <li class="toaster">
            <main>
                <div class="toaster__logo">
                    <img src="${toaster.logoUrl}" class="toaster__logo-logo">
                </div>
                <h3>${toaster.name}</h3>
            </main>
            <footer class="info">
                <a href="${toaster.website}" target="_blank">Sitio web</a>
                <a href="${toaster.instagram}" target="_blank">Instagram</a>
            </footer>
        </li>
    `).join("")
    
}