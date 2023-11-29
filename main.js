
const URL = "https://ciromirkin.github.io/toasterCatalog_API/toasterCatalog.txt";
fetch(URL)
    .then(res => res.json()).then(res => {
        const catalog = res;
        showCatalog(catalog)
})

const showCatalog = (catalog) => {
    const catalogElement = document.getElementById("list")
    catalogElement.innerHTML = catalog.map(toaster => `
        <li class="toaster">
            <div class="logo-container">
                <img src="${toaster.logoUrl}" class="logo-container__logo">
            </div>
            <div class="info">
                <h3 class="name">${toaster.name}</h3>
                <a href="${toaster.website}">Sitio web</a>
            </div>
        </li>
    `).join("")
    
}