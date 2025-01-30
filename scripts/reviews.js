var reviews = [
    {
        label: "reviews.elements.label1",
        author: "reviews.elements.user1",
        position: "reviews.elements.position1",
        image: "../../assets/images/reviews/author.png",
        rate: 4
    },
    {
        label: "reviews.elements.label2",
        author: "reviews.elements.user2",
        position: "reviews.elements.position2",
        image: "../../assets/images/reviews/author.png",
        rate: 5
    },
    {
        label: "reviews.elements.label3",
        author: "reviews.elements.user3",
        position: "reviews.elements.position3",
        image: "../../assets/images/reviews/author.png",
        rate: 2
    },
    {
        label: "reviews.elements.label4",
        author: "reviews.elements.user4",
        position: "reviews.elements.position4",
        image: "../../assets/images/reviews/author.png",
        rate: 4
    },
];

function loadReviews() {
    const swiper = document.getElementById('swiper');

    if(swiper) {
        swiper.innerHTML = reviews.map(el => {
            return `
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <div class="label" data-key="${el.label}"></div>

                            <div class="separator"></div>

                            <div class="bottom-element">
                                <div class="left-child">
                                    <div class="author-image" style="background-image: url('${el.image}')"></div>

                                    <div class="author-info">
                                        <div class="name" data-key="${el.author}"></div>
                                        <div class="position" data-key="${el.position}"></div>
                                    </div>
                                </div>
                                <div class="right-child rate-${el.rate}">
                                    <img src="../../assets/images/reviews/rate.png" />
                                    <img src="../../assets/images/reviews/rate.png" />
                                    <img src="../../assets/images/reviews/rate.png" />
                                    <img src="../../assets/images/reviews/rate.png" />
                                    <img src="../../assets/images/reviews/rate.png" />
                                </div>
                            </div>
                        </div>
                    </div>
            `;
        }).join("");
    }

    new Swiper('.reviews-slider', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        slidesPerView: 2.5,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}

