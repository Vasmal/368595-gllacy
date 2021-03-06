var button = document.querySelector(".button-feedback");
var popup = document.querySelector(".feedback");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".feedback-close");

if (button) {
	button.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("popup-show");
		overlay.classList.add("popup-show");
	});
}

if (close) {
	close.addEventListener("click", function(event) {
		event.preventDefault();
	  	popup.classList.remove("popup-show");
	  	overlay.classList.remove("popup-show");
	});
}

if (document.querySelector("#yandex-map")) {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('yandex-map', {
	  		center: [59.939621, 30.330832],
	  		zoom: 15
		});

		var myMarker = new ymaps.Placemark([59.938615, 30.322947], {}, {
	  		iconLayout: 'default#image',
	  		iconImageHref: 'img/map-marker.png',
	  		iconImageSize: [218, 142],
	  		iconImageOffset: [-40, -142]
		});

		myMap.geoObjects.add(myMarker);
	});
}