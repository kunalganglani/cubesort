import 'main.scss';
import CubeSort from './components/CubeSort';
import { getCards } from './api';

const main = async () => {
    const cards =  await getCards();
    let cubeContainer = document.createElement('div');
    document.body.appendChild(cubeContainer);
    let cube = new CubeSort(cards, cubeContainer);
    cube.init();
    
    let credits = document.createElement('div');
    credits.textContent= `Shuffle and sort by Kunal Ganglani`;
    credits.className = 'creditsContainer';
    document.body.appendChild(credits);
}

main().then(() => console.log('Started'));
let metaTag=document.createElement('meta');
metaTag.name = "viewport"
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
document.getElementsByTagName('head')[0].appendChild(metaTag);