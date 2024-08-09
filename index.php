<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu à la carte</title>
    <link rel="stylesheet" href="index.css">

    <script src="sonclick.js"></script>

   

    


</head>
<body>
<header>

<!--<img src="images/titreanime.gif" alt="logo sciences">-->
  <a href="#"><i class="fa-solid fa-utensils"></i></a>
<h1>Menu à la carte.</h1>

<img src="images/logoheader.png" alt="logo sciences">


</header>
  <p class="bonjour">Bonjour,  nous sommes le 
        
        <?php echo date('d/m/Y'); ?>.
        </p>
        <script language="javascript">

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

<div id="box">



        <div class="dossier loupe">
           

                <p><a href="pages/LaLoupe/index.html" onclick="beep()"><img src="images/loupeterre.png" alt="logo sciences"></a></p>

                 <p class="soustitre">sciences</p>

        </div>


        <div class="dossier animaux">

           
            <p><a href="pages/animalphabet/animalphabet.html" onclick="beep()"><img src="images/animalphabet.png" alt="logo sciences-junior"></a></p>

             <p class="soustitre">animalphabet</p>

        </div>
        


        <div class="dossier vocabulaire">

           
           
            <p><a href="pages/vocabulaire/index.html" onclick="beep()"><img src="images/vocabulaire.png" alt="logo vocabulaire"></a></p>

             <p class="soustitre">vocabulaire</p>

        </div>


        <div class="dossier mathematiques">
            
           
            <p><a href="pages/mathematiques/classeur/menu.html" onclick="beep()"><img src="images/mathematique.png" alt="logo mathématiques"></a></p>

                 <p class="soustitre">mathematiques</p>
        </div>


        <!--<div class="dossier psychoblog">
            <p><a  href="pages/psychoblog/index.html">Psychologie du travail</a></p>
        </div>-->

       <div class="dossier anglais">

                <p><a href="pages/initiationGB/visuels.html" onclick="beep()"><img src="images/bigben4.png" alt="logo GB"></a></p>

                <p class="soustitre">anglais</p>

        </div>

        <div class="dossier litterature">

            <p><a href="pages/lafontaine/lafontaine.html" onclick="beep()"><img src="images/lafontaine4.png" alt="logo littérature"></a></p>

            <p class="soustitre">littérature</p>

    </div>

    <div class="dossier loupejunior">
        <p><a href="pages/LoupeJunior/index.html" onclick="beep()"><img class="loupejuniorlogo" src="images/sciencesjunior.png" alt="logo sciences-junior"></a></p>

        <p class="soustitre">sciences-junior</p>

    </div>

        <div class="dossier origamis">
            <p><a href="pages/origamis/origamis.html" onclick="beep()"><img src="images/origami.png" alt="logo animaux"></a></p>

            <p class="soustitre">origamis</p>
        </div>


            <script src="js/jquery.js"></script>
            <script src="js/script.js"></script>

     

</div>
<footer>

    <i class="fa-solid fa-user-pen"></i>

    <p><a href="mailto:sdelattre1@orange.fr">Contact</a></p> 
    <a class="compteur" href="http://www.mon-compteur.fr"><img src="http://www.mon-compteur.fr/html_c01genv2-238767-5" alt="compteur"></a>

           
    <i class="fa-solid fa-magnifying-glass"></i>
        
            <p>Copyright &copy;    2023    S.Delattre     Tous Droits Réservés. <a href=""></a></p></footer>
             <script src="https://kit.fontawesome.com/50786edb2e.js" crossorigin="anonymous"></script>
        
        </body>
        </html>