var button = document.querySelector(".button-feedback");
var popup = document.querySelector(".feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".feedback-close");

button.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-show");
	overlay.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
  	popup.classList.remove("popup-show");
  	overlay.classList.remove("popup-show");
});

ymaps.ready(function () {
	var myMap = new ymaps.Map('yandex-map', {
  		center: [59.939621, 30.330832],
  		zoom: 15
	});

	var myMarker = new ymaps.Placemark([59.938615, 30.322947], {}, {
  		iconLayout: 'default#image',
  		iconImageHref: '../img/map-marker.png',
  		iconImageSize: [218, 142],
  		iconImageOffset: [-109, -142]
	});

	myMap.geoObjects.add(myMarker);
});