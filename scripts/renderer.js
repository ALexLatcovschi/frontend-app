async function loadComponent(targetId, filePath) {
    try {
        const response = await fetch(filePath);

        if (response.ok) {
            const content = await response.text();
            document.getElementById(targetId).innerHTML = content;
        } else {
            console.error('A intervenit o eroare!')
        }
    } catch {
        console.error('A intervenit o eroare pentru await!')
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('main', '../../components/main.html');

    await loadComponent('header', '../../components/header.html');
    await loadComponent('top-screen', '../../components/top-screen.html');

    await loadComponent('footer', '../../components/footer.html');
    document.getElementById('year').textContent = new Date().getFullYear();

    await loadComponent('characteristics', '../../components/characteristics.html');
    await loadComponent('expertise', '../../components/expertise.html');
    
    await loadComponent('reviews', '../../components/reviews.html');
    loadReviews();

    await loadComponent('banner', '../../components/banner.html');

    await loadComponent('contacts', '../../components/contacts.html');

    await loadComponent('map', '../../components/map.html');
    loadMap();

    await initTranslation();
})