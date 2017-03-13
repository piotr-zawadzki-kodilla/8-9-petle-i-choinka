function rysujChoinke(wys) {
	for (var n = 1; n <= wys; n++) {
		star = "";
		for (var i = wys; i > n; i--) {
			star += " ";
		}
		for (i = 1; i <= n * 2 - 1; i++) {
			star += "*";
		}
		console.log(star);
	}
}

rysujChoinke(10);
