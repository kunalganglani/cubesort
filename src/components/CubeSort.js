import './cubesort.scss';

class CubeSort {
    cards = [];
    constructor(cards, componentContainer) {
        this.cards = cards;
        this.componentContainer = componentContainer;
    }
    init = () => {
        this.cardCointainer = document.createElement('div');
        this.buttonContainer = document.createElement('div');
        this.component = document.createElement('div');
        this.cardCointainer.className = 'cardContainer';
        this.buttonContainer.className = 'buttonContainer';
        this.component.className='component';
        this.addButtons();
        this.render();
    }
    addButtons = () => {
        const shuffleButton = document.createElement('button');
        const sortButton = document.createElement('button');
        shuffleButton.onclick = this.shuffle;
        sortButton.onclick = this.sort;
        shuffleButton.textContent = "SHUFFLE";
        sortButton.textContent = "SORT";
        this.buttonContainer.appendChild(shuffleButton);
        this.buttonContainer.appendChild(sortButton);
        this.component.appendChild(this.buttonContainer);
    }
    render = () => {
        let cardsHTML = "";
        for (let card of this.cards) {
            cardsHTML += `<div class="card ${card.background}">${card.id + 1}</div>`
        }
        this.cardCointainer.innerHTML = cardsHTML;
        this.component.appendChild(this.cardCointainer);
        this.componentContainer.appendChild(this.component);
    };
    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    rearrange = () => {
        for(let i =0; i< this.cards.length; i+=1) {
            document.getElementsByClassName('card')[i].innerText = this.cards[i].id + 1;
            document.getElementsByClassName('card')[i].className = "card " + this.cards[i].background;
        }
    }
    shuffle = () => {
        this.shuffleArray(this.cards);
        this.rearrange();
    }
    sort = () => {
        this.cards.sort((a,b)=> {
            return a.id - b.id;
        });
        this.rearrange();
    }
}
export default CubeSort;