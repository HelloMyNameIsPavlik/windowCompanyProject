
const modal = () => {

    function bindModals(triggerSelector, modalSelector, closeSelector) {
        const modal = document.querySelector(modalSelector),
            closeButton = modal.querySelector(closeSelector),
            trigger = document.querySelectorAll(triggerSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            })
        })

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })

    }

    function modalTimmer() {
        setTimeout(() => {
            document.querySelector('.popup').style.display = 'block';
            document.querySelector('.popup').style.overflow = 'hidden';
        }, 3000);
    }

    modalTimmer()
    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModals('.phone_link', '.popup', '.popup_close');

}


export default modal;