const main = document.querySelector(".main__section")

let data = [
    { label: "product1", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product2", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product3", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product4", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product5", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product6", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product7", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product8", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product9", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },
    { label: "product10", url: "http://myshop.com", pictureUrl: 'https://placehold.co/400x400/png' },

]


const renderProducts = () => {
    main.innerHTML = data.map(({ label, url, pictureUrl }) => `
        <div class="product">
            <a href="${url}" target="_blank">
                <img src="${pictureUrl}" alt="${label}" />
                <p>${label}</p>
            </a>
        </div>
    `).join("");
};

document.addEventListener("DOMContentLoaded", renderProducts);
