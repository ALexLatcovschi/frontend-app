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

function hideLoader() {
    const main = document.getElementById('main-container');
    const loader = document.getElementById('loader');

    if (main) {
        main.classList.add('visible');

        if (loader) {
            loader.classList.add('hidden');
        }
    }
}

function toggleHamburgerMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const button = document.getElementById('hamburger-button');

    if (mobileMenu) {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active')
        } else {
            mobileMenu.classList.add('active')
        }
    }

    if (button) {
        if (button.classList.contains('active')) {
            button.classList.remove('active')
        } else {
            button.classList.add('active')
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('main', '../../components/main.html');

    await loadComponent('header', '../../components/header.html');
    // await loadComponent('top-screen', '../../components/top-screen.html');

    // await loadComponent('footer', '../../components/footer.html');
    // document.getElementById('year').textContent = new Date().getFullYear();

    // await loadComponent('characteristics', '../../components/characteristics.html');
    // await loadComponent('expertise', '../../components/expertise.html');

    // await loadComponent('reviews', '../../components/reviews.html');
    // loadReviews();

    // await loadComponent('banner', '../../components/banner.html');
    // await loadComponent('faq', '../../components/faq.html');
    // loadFAQ();

    // await loadComponent('contacts', '../../components/contacts.html');
    // await loadComponent('contact-form', '../../components/form.html');
    // initForm();

    // await loadComponent('map', '../../components/map.html');

    await initTranslation();

    setTimeout(() => {
        hideLoader();

        //     loadMap();
    }, 1000);
})