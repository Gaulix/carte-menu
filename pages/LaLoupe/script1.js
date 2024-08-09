

navvers = navigator.appVersion.substring(0,1);

if (navvers > 3)

	navok = true;

else

	navok = false;



today = new Date;

jour = today.getDay();

numero = today.getDate();



if (numero<10)

	numero = "0"+numero;



mois = today.getMonth();



if (navok)

	annee = today.getFullYear();

else

	annee = today.getYear();



TabJour = new Array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");

TabMois = new Array("janvier","f&eacute;vrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","d&eacute;cembre");



messageDate = TabJour[jour] + " " + numero + " " + TabMois[mois] + " " + annee;



</script>