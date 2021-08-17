import {randomInteger} from './helpers.js';

let mapPins = [];
let houses = ["palace", "flat", "house", "bungalo"];
let featuresHouse = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
let checkinsTimes = ["12:00","13:00", "4:00"];
let checkoutsTimes =  ["12:00","13:00", "4:00"];

for(let i = 0; i < 8; i++)
{
    let pin = {
        "author": {
            "avatar": "img/avatars/user01.png"
        },
        "offer": {
            "title": "Гостинная",
            "address": `{{location.x}, {{location.y}}`,
            "price": `{price}`,
            "type": `{houses}`, //palace, flat, house или bungalo
            "rooms": `{rooms}`,
            "guests": `{guests}`,
            "checkin": `{checkinsTimes}`,//строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
            "checkout": `{checkoutsTimes}`,//строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
            "features": `{featuresHouse}`,//массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
            "description": "some text", //строка с описанием,
        },
        "location": {
            "x": `{location.x}`,//случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
            "y": `{location.y}`,//случайное число, координата y метки на карте от 130 до 630.
        }
    };
    pin.author.avatar = "img/avatars/user0" + randomInteger(1,8) + ".png";
    pin.offer.type = houses[randomInteger(0, houses.length-1)];
    pin.offer.features = featuresHouse[randomInteger(0, featuresHouse.length-1)];
    pin.offer.checkin = checkinsTimes[randomInteger(0, checkinsTimes.length-1)];
    pin.offer.checkout = checkoutsTimes[randomInteger(0, checkoutsTimes.length-1)];
    pin.offer.price = randomInteger(800, 3100);
    pin.offer.rooms = randomInteger(1,5);
    pin.offer.guests = randomInteger(1,5);
    pin.location.x = randomInteger(0,1200);
    pin.location.y = randomInteger(130,630);
    mapPins.push(pin);
    
}
console.log(mapPins);
// console.log(mapPins);

export const data = mapPins;