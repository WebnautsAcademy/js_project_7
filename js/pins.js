
const pinTemplate = document.querySelector('#pin').content.querySelector('button');
const mapPinsElement = document.querySelector('.map__pins');

export function getData(data){
    data.forEach((elem, index, arr)=>{
        const pinElement = `  <button type="button" class="map__pin" style="left: ${elem.location.x}px; top:  ${elem.location.y}px">
        <img  src="${elem.author.avatar}" width="40" height="40" draggable="false" alt="Метка объявления"
        />
      </button>`
        // const pinElement = pinTemplate.cloneNode(true);
        // const img = pinElement.querySelector('img');
        // img.src = elem.author.avatar;
       
        // pinElement.style.left = elem.location.x + 'px';
        // pinElement.style.top = elem.location.y + 'px';

        mapPinsElement.insertAdjacentHTML('beforeend',pinElement);//appendChild
        console.log(pinElement);
    })
}