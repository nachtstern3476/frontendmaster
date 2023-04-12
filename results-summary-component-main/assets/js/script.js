window.addEventListener('DOMContentLoaded', async (e) => {
    const data = await fetch('assets/js/data.json').then(res => res.json());
    const cardContainer = document.querySelector('.cards-container');

    data.forEach(item => {
        const card = document.createElement('div');
        const template = `
            <div class="summary-type">
                <img src="${item.icon}" alt="summary type icon">
                <p>${item.category}</p>
            </div>
            <div class="summary-result">
                <p><span>${item.score}</span> / 100</p>
            </div>
        `;

        card.className = `card ${item.category.toLowerCase()}`;
        card.innerHTML = template;
        cardContainer.append(card);
    });
});