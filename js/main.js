var MapSite = document.querySelector('.map');
MapSite.classList.remove('map--faded');

var mapElement = document.querySelector('.map');
var cardTemplate = document.querySelector('#card')
.content
.querySelector('article');

for (var i = 0; i < adsDescription.length; i++) {
  var cardElement = cardTemplate.cloneNode(true);

  mapElement.appendChild(cardElement);
}

var ads = [1, 2, 3, 4, 5, 6, 7, 8];
var adsDescription = [];

for(var i = 0; i < 8; i++) {
  var House = ['palace', 'flat', 'house', 'bungalo'];
  var TypeHouse = House[Math.floor(Math.random() * House.length)];
  var Time = ['12.00', '13.00', '14.00'];
  var TimeCheck = Time[Math.floor(Math.random() * Time.length)];
  var Feature = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var Photo = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

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
      X: Math.floor(Math.random() * (1275 - 75) ) + 75,
      Y: Math.floor(Math.random() * (630 - 130) + 130,
    },
  })
}


