document.addEventListener('keydown', function(event) {
	$(`#${event.code}`).addClass("red")
	function remove() {
		$(`#${event.code}`).removeClass("red")
	}
	setTimeout(remove, 2000)
  });