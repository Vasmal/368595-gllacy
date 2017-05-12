	
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