const style = `
<style>
    #offers {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    #offers .offer {
        padding: 20px;
        border: 1px solid #ccc;
        margin: 0px 10px 20px 10px;
    }
</style>
`;

class Offers extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.offers = [
            {
                title: 'Flat 30% OFF',
                description: 'On purchase of minimum 3000/-.',
                image: 'https://firebasestorage.googleapis.com/v0/b/products-catalog-657ee.appspot.com/o/30%25_off.png?alt=media&token=4d6dfc4d-2061-496b-9c96-3edb5041d34f'
            },
            {
                title: 'Flat 20% OFF',
                description: 'On purchase of minimum 2000/-.',
                image: 'https://firebasestorage.googleapis.com/v0/b/products-catalog-657ee.appspot.com/o/20%25_off.png?alt=media&token=88520611-476b-44fa-be97-375ae1da7c6c'
            },
            {
                title: 'Flat 15% OFF',
                description: 'On purchase of minimum 1000/-.',
                image: 'https://firebasestorage.googleapis.com/v0/b/products-catalog-657ee.appspot.com/o/15%25_off.png?alt=media&token=5d7cd5a5-206e-4a1e-ab86-340704812592'
            },
        ];
    }

    connectedCallback(){
        this.render();
    }

    disconnectedCallback() {

    }

    render(){
        const { shadowRoot } = this;
        const container = document.createElement('div');
        let offersListContainer = '<div id="offers">';
        offersListContainer = offersListContainer + style;
        this.offers.forEach(offer => {
            offersListContainer = offersListContainer + (`<div class="offer">
                <h4>${offer.title}</h4>
                <p>${offer.description}</p>
                <div class="image">
                    <img height=200 src=${offer.image || ''} />
                </div>
            </div>`);
        });
        offersListContainer = offersListContainer + '</div>'
        container.innerHTML = offersListContainer;
        shadowRoot.appendChild(container);
    }
}

customElements.define('offers-list', Offers);
