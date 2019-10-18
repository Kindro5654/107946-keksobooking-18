var MapSite = document.querySelector('.map');
MapSite.classList.remove('map--faded');

var adsDescription = [];

var House = ['palace', 'flat', 'house', 'bungalo'];
var TypeHouse = House[Math.floor(Math.random() * House.length)];
var Time = ['12.00', '13.00', '14.00'];
var TimeCheck = Time[Math.floor(Math.random() * Time.length)];
var Feature = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var Photo = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

for (var i = 0; i < 8; i++) {

  adsDescription.push({
    author: {
      avatar: 'img/avatars/user0' + i + '.png',
    },
    offer: {
      title: 'Обьявление',
      address: '600, 350',
      price: 3000,
      type: TypeHouse,
      rooms: 4,
      guests: 10,
      checkin: TimeCheck,
      checkout: TimeCheck,
      features: Features,
      description: 'description',
      photos: Photo,
    },
    location: {
      x: Math.floor(Math.random() * (1275 - 75) ) + 75,
      y: Math.floor(Math.random() * (630 - 130) + 130,
    }
  })
}

var mapElement = document.querySelector('.map__pin');
var cardTemplate = document.querySelector('#card')
.content
.querySelector('article');
var fragment = document.createDocumentFragment();

for (var i = 0; i < adsDescription.length; i++) {
  var cardElement = cardTemplate.cloneNode(true);
  var styleString = 'left: ' + advCard.location.x + ';' + 'top: ' + advCard.location.y;
  var advCard = adsDescription[i];

  cardElement.querySelector('.popup__avatar').src = advCard.author.avatar;
  cardElement.querySelector('.popup__avatar').style = styleString;
  cardElement.querySelector('.popup__title').src = advCard.offer.title;
  cardElement.querySelector('.popup__text--address').src = advCard.offer.address;
  cardElement.querySelector('.popup__text--price').src = advCard.offer.price;
  cardElement.querySelector('.popup__type').src = advCard.offer.type;
  cardElement.querySelector('.popup__text--capacity').src = advCard.offer.rooms;
  cardElement.querySelector('.popup__text--capacity').src = advCard.offer.guests;
  cardElement.querySelector('.popup__text--time').src = advCard.offer.checkin;
  cardElement.querySelector('.popup__text--time').src = advCard.offer.checkout;
  cardElement.querySelector('.popup__features').src = advCard.offer.features;
  cardElement.querySelector('.popup__description').src = advCard.offer.description;
  cardElement.querySelector('.popup__photos').src = advCard.offer.photos;

  fragment.appendChild(cardElement);
}

mapElement.appendChild(fragment);
