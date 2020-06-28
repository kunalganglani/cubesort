export async function getCards() {
    const PRODURL = 'https://cubesort-cd4be.firebaseio.com/obj.json';
    const DEVURL = 'http://localhost:3000/obj'
    let APIURL;
    if (process.env.NODE_ENV === 'development') {
        APIURL = DEVURL;
    } else {
        APIURL = PRODURL;
    }
    const response = await fetch(APIURL);
    const json = await response.json();
    return json;
}