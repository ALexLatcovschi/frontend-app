var faqData = [
    {
        label: "faq.label1",
        answer: "faq.answer1"
    },
    {
        label: "faq.label2",
        answer: "faq.answer2"
    },
    {
        label: "faq.label3",
        answer: "faq.answer3"
    },
    {
        label: "faq.label4",
        answer: "faq.answer4"
    },
    {
        label: "faq.label5",
        answer: "faq.answer5"
    },
    {
        label: "faq.label6",
        answer: "faq.answer6"
    }
];

function loadFAQ() {
    const faqEl = document.getElementById('faq-elements');

    if(faqEl) {
        faqEl.innerHTML = faqData.map(el => {
            return `
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <div class="accordion-title" data-key="${el.label}"></div>

                            <div class="closed"><img src="../../assets/images/accordion/plus.png"/></div>
                            <div class="opened"><img src="../../assets/images/accordion/minus.png"/></div>
                        </div>
                        <div class="accordion-content" data-key="${el.answer}"></div>
                    </div>
            `;
        }).join("");
    }

    triggerAccordionOpen();
}

function triggerAccordionOpen() {
    document.querySelectorAll('.accordion-item').forEach(el => {
        el.addEventListener('click', (clickedEl) => {
            const activeElements = document.querySelectorAll('.accordion-item.active');

            activeElements.forEach((activeElement) => activeElement.classList.remove('active'))

            el.classList.add('active');
        })
    })
}