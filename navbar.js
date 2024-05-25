function init (){ /* denna funktion innehåller all JS kod */
	const body = document.querySelector("body"); /* Detta kallar body elementet */
	const menu = document.querySelector(".menu-icon"); /* Detta kallar meny ikonen */

	menu.addEventListener("click", () => { /* Detta skapar en eventlistener på meny ikonen när användaren klickar på knappen */
		toggleNav(); /* Kallar togleNav() funktionen */
	});

	const toggleNav = () => { 
		/* Denna lägger till, alternativt tar bort klassen "nav-active"  från bodyn 
			vilket tillåter mig att huvudsakligen använda css för navigationen*/
		if (body.classList.contains("nav-active")) body.classList.remove("nav-active"); /* Lägger till klassen om klassen inte redan finns, annars tar den bort den */
		else body.classList.add("nav-active");
	};
};

document.addEventListener("DOMContentLoaded", init); /* Detta kallar funktionen init() när sidan laddas */
