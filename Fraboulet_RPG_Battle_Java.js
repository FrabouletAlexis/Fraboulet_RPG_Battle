// ----------------------------------------- Boutons ----------------------------------------- //
var bouton_atk_heros_1 = document.getElementById("atk_heros_1");
var bouton_def_heros_1 = document.getElementById("def_heros_1");
var bouton_sepcial_heros_1 = document.getElementById("sepcial_heros_1");

var bouton_atk_heros_2 = document.getElementById("atk_heros_2");
var bouton_def_heros_2 = document.getElementById("def_heros_2");
var bouton_sepcial_heros_2 = document.getElementById("special_heros_2");

var bouton_atk_heros_3 = document.getElementById("atk_heros_3");
var bouton_def_heros_3 = document.getElementById("def_heros_3");
var bouton_sepcial_heros_3 = document.getElementById("special_heros_3");

var bouton_atk_heros_4 = document.getElementById("atk_heros_4");
var bouton_def_heros_4 = document.getElementById("def_heros_4");
var bouton_sepcial_heros_4 = document.getElementById("special_heros_4");

var bouton_fin_de_tour = document.getElementById("fin_de_tour");

// ----------------------------------------- Boite dialogue ----------------------------------------- //

var textAction = document.getElementById("boite_dialogue");

// ----------------------------------------- Caractéristiques Personnage ----------------------------------------- // 
// Hero 1 - KEARIA - Soigneur//
var pv_max_heros_1 = 100;
var pv_heros_1 = document.getElementById("pv_heros_1");
pv_heros_1.value = 100;
pv_heros_1.innerHTML = pv_heros_1.value;

var pm_heros_1 = document.getElementById("pm_heros_1");
pm_heros_1.value = 100;
pm_heros_1.innerHTML = pm_heros_1.value;

var atk_heros_1 = document.getElementById("attaque_heros_1");
atk_heros_1.value = 80;
atk_heros_1.innerHTML = atk_heros_1.value;

var def_valeur_heros_1 = 0;
var def_heros_1 = document.getElementById("defence_heros_1");
def_heros_1.value = 20;
def_heros_1.innerHTML = def_heros_1.value;

var mana_soin = 15;
var pv_soin = 30;

// Hero 2 - BARRIS -Tank//
var pv_max_heros_2 = 120;
var pv_heros_2 = document.getElementById("pv_heros_2");
pv_heros_2.value = 120;
pv_heros_2.innerHTML = pv_heros_2.value;

var pm_heros_2 = document.getElementById("pm_heros_2");
pm_heros_2.value = 100;
pm_heros_2.innerHTML = pm_heros_2.value;

var atk_heros_2 = document.getElementById("attaque_heros_2");
atk_heros_2.value = 130;
atk_heros_2.innerHTML = atk_heros_2.value;
var degat_balayage = (atk_heros_2.value/2);
var mana_balayage = 20;

var def_valeur_heros_2 = 0;
var def_heros_2 = document.getElementById("defence_heros_2");
def_heros_2.value = 30;
def_heros_2.innerHTML = def_heros_2.value;

// Hero 3 - PEGRIM - Shaman//
var pv_max_heros_3 = 80;
var pv_heros_3 = document.getElementById("pv_heros_3");
pv_heros_3.value = 80;
pv_heros_3.innerHTML = pv_heros_3.value;

var pm_heros_3 = document.getElementById("pm_heros_3");
pm_heros_3.value = 120;
pm_heros_3.innerHTML = pm_heros_3.value;

var atk_heros_3 = document.getElementById("attaque_heros_3");
atk_heros_3.value = 80;
atk_heros_3.innerHTML = atk_heros_3.value;
var degat_poison = 10;
var mana_poison = 50;

var def_valeur_heros_3 = 0;
var def_heros_3 = document.getElementById("defence_heros_3");
def_heros_3.value = 10;
def_heros_3.innerHTML = def_heros_3.value;

// Hero 4 - LUSSAN - Archer//
var pv_max_heros_4 = 100;
var pv_heros_4 = document.getElementById("pv_heros_4");
pv_heros_4.value = 100;
pv_heros_4.innerHTML = pv_heros_4.value;

var pm_heros_4 = document.getElementById("pm_heros_4");
pm_heros_4.value = 70;
pm_heros_4.innerHTML = pm_heros_4.value;

var atk_heros_4 = document.getElementById("attaque_heros_4");
atk_heros_4.value = 100;
atk_heros_4.innerHTML = atk_heros_4.value;
var tir_charge = 150;
var mana_tir_charge = 30;

var def_valeur_heros_4 = 0;
var def_heros_4 = document.getElementById("defence_heros_4");
def_heros_4.value = 10;
def_heros_4.innerHTML = def_heros_4.value;

// ----------------------------------------- Caractéristiques monstre ----------------------------------------- //
// Monstre 1 //
var atk_monstre_1 = 80;
var pv_monstre_1 = document.getElementById("pv_monstre_1");
pv_monstre_1.value = 100;
pv_monstre_1.innerHTML = pv_monstre_1.value;
// Monstre 2 //
var atk_monstre_2 = 40;
var pv_monstre_2 = document.getElementById("pv_monstre_2");
pv_monstre_2.value = 130;
pv_monstre_2.innerHTML = pv_monstre_2.value;
// Monstre 3 //
var atk_monstre_3 = 20
var pv_monstre_3 = document.getElementById("pv_monstre_3");
pv_monstre_3.value = 100;
pv_monstre_3.innerHTML = pv_monstre_3.value;


function nb_alea(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function teste_victoire(){
	if (pv_monstre_1.value <= 0 && pv_monstre_2.value <= 0 && pv_monstre_3.value <= 0){
		textAction.innerHTML = "!!! Félicitation vous avez gagnié !!!";
	}
}



function attaque_heros_1(){
		
	if (bouton_atk_heros_1.disabled == false){
		var choix_joueur = prompt("Quel monstre souhaitez-vous attaquer ? 1 - Sheld Sheepman 2 - Blue Sheepman 3 - Armored Sheepman");
		if (choix_joueur == 1){
			pv_monstre_1.value -= atk_heros_1.value;
			pv_monstre_1.innerHTML = pv_monstre_1.value;

			bouton_atk_heros_1.style.opacity = "0.5";
			bouton_atk_heros_1.disabled = true;
			bouton_def_heros_1.style.opacity = "0.5";
			bouton_def_heros_1.disabled = true;
			bouton_sepcial_heros_1.style.opacity = "0.5";
			bouton_sepcial_heros_1.disabled = true;
			textAction.innerHTML = "Kearia inflige "+atk_heros_1.value+" points de dégats au Sheld Sheepman.";
			if (pv_monstre_1.value < 0){
				function mort_monstre_1(){
					pv_monstre_1.innerHTML = 0;
					textAction.innerHTML = "Kearia a vaincu le Sheld Sheepman."
				}
				setTimeout(mort_monstre_1, 1000);
			}
		}

		if (choix_joueur == 2){
			pv_monstre_2.value -= atk_heros_1.value;
			pv_monstre_2.innerHTML = pv_monstre_2.value;

			bouton_atk_heros_1.style.opacity = "0.5";
			bouton_atk_heros_1.disabled = true;
			bouton_def_heros_1.style.opacity = "0.5";
			bouton_def_heros_1.disabled = true;
			bouton_sepcial_heros_1.style.opacity = "0.5";
			bouton_sepcial_heros_1.disabled = true;
			textAction.innerHTML = "Kearia inflige "+atk_heros_1.value+" points de dégats au Blue Sheepman.";
			if (pv_monstre_2.value < 0){
				function mort_monstre_2(){
					pv_monstre_2.innerHTML = 0;
					textAction.innerHTML = "Kearia a vaincu le Blue Sheepman."
				}
				setTimeout(mort_monstre_2, 1000);
			}
		}

		if (choix_joueur == 3){
			pv_monstre_3.value -= atk_heros_1.value;
			pv_monstre_3.innerHTML = pv_monstre_3.value;

			bouton_atk_heros_1.style.opacity = "0.5";
			bouton_atk_heros_1.disabled = true;
			bouton_def_heros_1.style.opacity = "0.5";
			bouton_def_heros_1.disabled = true;
			bouton_sepcial_heros_1.style.opacity = "0.5";
			bouton_sepcial_heros_1.disabled = true;
			textAction.innerHTML = "Kearia inflige "+atk_heros_1.value+" points de dégats au Armored Sheepman.";
			if (pv_monstre_3.value < 0){
				function mort_monstre_3(){
					pv_monstre_3.innerHTML = 0;
					textAction.innerHTML = "Kearia a vaincu l'Armored Sheepman."
				}
				setTimeout(mort_monstre_3, 1000);
			}
		}
		setTimeout(teste_victoire, 1000);
	}	
}

function attaque_heros_2(){
		
	if (bouton_atk_heros_2.disabled == false){
		var choix_joueur = prompt("Quel monstre souhaitez-vous attaquer ? 1 - Sheld Sheepman 2 - Blue Sheepman 3 - Armored Sheepman");
		if (choix_joueur == 1){
			pv_monstre_1.value -= atk_heros_2.value;
			pv_monstre_1.innerHTML = pv_monstre_1.value;

			bouton_atk_heros_2.style.opacity = "0.5";
			bouton_atk_heros_2.disabled = true;
			bouton_def_heros_2.style.opacity = "0.5";
			bouton_def_heros_2.disabled = true;
			bouton_sepcial_heros_2.style.opacity = "0.5";
			bouton_sepcial_heros_2.disabled = true;
			textAction.innerHTML = "Barris inflige "+atk_heros_2.value+" points de dégats au Sheld Sheepman.";
			if (pv_monstre_1.value < 0){
				function mort_monstre_1(){
					pv_monstre_1.innerHTML = 0;
					textAction.innerHTML = "Barris a vaincu le Sheld Sheepman."
				}
				setTimeout(mort_monstre_1, 1000);
			}
		}

		if (choix_joueur == 2){
			pv_monstre_2.value -= atk_heros_2.value;
			pv_monstre_2.innerHTML = pv_monstre_2.value;

			bouton_atk_heros_2.style.opacity = "0.5";
			bouton_atk_heros_2.disabled = true;
			bouton_def_heros_2.style.opacity = "0.5";
			bouton_def_heros_2.disabled = true;
			bouton_sepcial_heros_2.style.opacity = "0.5";
			bouton_sepcial_heros_2.disabled = true;
			textAction.innerHTML = "Barris inflige "+atk_heros_2.value+" points de dégats au Blue Sheepman.";
			if (pv_monstre_2.value < 0){
				function mort_monstre_1(){
					pv_monstre_1.innerHTML = 0;
					textAction.innerHTML = "Barris a vaincu le Blue Sheepman."
				}
				setTimeout(mort_monstre_1, 1000);
			}
		}

		if (choix_joueur == 3){
			pv_monstre_3.value -= atk_heros_2.value;
			pv_monstre_3.innerHTML = pv_monstre_3.value;

			bouton_atk_heros_2.style.opacity = "0.5";
			bouton_atk_heros_2.disabled = true;
			bouton_def_heros_2.style.opacity = "0.5";
			bouton_def_heros_2.disabled = true;
			bouton_sepcial_heros_2.style.opacity = "0.5";
			bouton_sepcial_heros_2.disabled = true;
			textAction.innerHTML = "Barris inflige "+atk_heros_1.value+" points de dégats au Armored Sheepman.";
			if (pv_monstre_3.value < 0){
				function mort_monstre_3(){
					pv_monstre_3.innerHTML = 0;
					textAction.innerHTML = "Barris a vaincu l'Armored Sheepman."
				}
				setTimeout(mort_monstre_3, 1000);
			}
		}
		setTimeout(teste_victoire, 1000);
	}	
}

function defence_heros_1(){
	if (bouton_def_heros_1.disabled == false){
		def_valeur_heros_1= def_heros_1.value;
		bouton_def_heros_1.style.opacity = "0.5";

		bouton_def_heros_1.disabled = true;
		textAction.innerHTML = "Kearia augmente sa défense de "+def_heros_1.value+" points pendant ce tour."
	}
}

/*function soin (){
	var heros_en_vie = 0;
	if (pv_heros_1.value>0){
		heros_en_vie += 1;
	}
	if (pv_heros_2.value>0){
		heros_en_vie += 1;
	}
	if (pv_heros_3.value>0){
		heros_en_vie += 1;
	}
	if (pv_heros_4.value>0){
		heros_en_vie += 1;
	}

	for (i=heros_en_vie){

	}
}*/
function soin(){
		
	if (bouton_sepcial_heros_1.disabled == false){
		if (pm_heros_1.value > mana_soin){

			
			if(pv_heros_1.value > 0 && pv_heros_1.value < pv_heros_2.value) {
				if (pv_heros_1.value < pv_max_heros_1){
					pv_heros_1.value = pv_heros_1.value+ pv_soin;
					pv_heros_1.innerHTML = pv_heros_1.value;
					pm_heros_1.value = pm_heros_1.value - mana_soin;
					pm_heros_1.innerHTML = pm_heros_1.value;
					textAction.innerHTML = "Kearia regagne "+pv_soin+" points de vie.";
					bouton_sepcial_heros_1.style.opacity = "0.5";
					bouton_sepcial_heros_1.disabled = true;
					if (pv_heros_1.value > pv_max_heros_1){
						pv_heros_1.value = pv_max_heros_1;
						pv_heros_1.innerHTML = pv_heros_1.value;
					}
				}
	
			}else if (pv_heros_2.value > 0 && pv_heros_2.value < pv_heros_1.value){

				if (pv_heros_2.value < pv_max_heros_2){
					pv_heros_2.value = pv_heros_2.value + pv_soin;
					pv_heros_2.innerHTML = pv_heros_2.value;
					pm_heros_1.value = pm_heros_1.value - mana_soin;
					pm_heros_1.innerHTML = pm_heros_1.value;
					textAction.innerHTML = "Barris regagne "+pv_soin+" points de vie.";
					bouton_sepcial_heros_1.style.opacity = "0.5";
					bouton_sepcial_heros_1.disabled = true;
					if (pv_heros_2.value > pv_max_heros_2){
						pv_heros_2.value = pv_max_heros_2;
						pv_heros_2.innerHTML = pv_heros_2.value;
					}
				}
			} else if (pv_heros_2.value == pv_max_heros_2||pv_heros_2.value<=0) {
				textAction.innerHTML = "Il n'y a personne a soigné.";
			}

		} else {
			textAction.innerHTML = "Kearia n'a plus assez de mana.";
		}
	}
}
function balayage (){}

function poison (){}

function tir_charge () {}
 

function fin_de_tour(){
	var heros_en_vie = 0;
	if (pv_heros_1.value > 0){
		heros_en_vie += 1;
	}

	/*if (pv_heros_2.value > 0){
		heros_en_vie += 1;
	}*/
	function attaque_monstre_1(){
		if (pv_monstre_1.value > 0){
			var cible_monstre = nb_alea(1,heros_en_vie);
			if (cible_monstre == 1){
				pv_heros_1.value = (pv_heros_1.value + def_valeur_heros_1) -  atk_monstre_1;
				pv_heros_1.innerHTML = pv_heros_1.value;
				textAction.innerHTML = "Sheld Sheepman inflige "+atk_monstre_1+" points de dégats à Kearia.";
				if (pv_heros_1.value < 0){
					function mort_kearia (){
						textAction.innerHTML = "Kearia a succombé.";
					}
					setTimeout(mort_kearia, 1000);
					pv_heros_1.innerHTML = "DEAD";
					pm_heros_1.innerHTML = 0;
					atk_heros_1.innerHTML = 0;
					def_heros_1.innerHTML = 0;
					bouton_atk_heros_1.style.opacity = "0.5";
					bouton_atk_heros_1.disabled = true;
					bouton_def_heros_1.style.opacity = "0.5";
					bouton_def_heros_1.disabled = true;
					bouton_sepcial_heros_1.style.opacity = "0.5";
					bouton_sepcial_heros_1.disabled = true;
				}
			}
			/*if (cible_monstre == 2){
				pv_heros_2.value -= atk_monstre_1;
				pv_heros_2.innerHTML = pv_heros_2.value;
				textAction.innerHTML = "Sheld Sheepman inflige "+atk_monstre_1+" points de dégats a Barris.";
			}*/
		}
	}
	
	function reactivation_bouton (){
		if (pv_heros_1.value > 0){
			if (bouton_atk_heros_1.disabled == true){
				bouton_atk_heros_1.style.opacity = "1.5";
				bouton_atk_heros_1.disabled = false;
			}
			if (bouton_def_heros_1.disabled == true){
				bouton_def_heros_1.style.opacity = "1.5";
				bouton_def_heros_1.disabled = false;
			}
			if (bouton_sepcial_heros_1.disabled == true){
				bouton_sepcial_heros_1.style.opacity = "1.5";
				bouton_sepcial_heros_1.disabled = false;
			}
		}
	}
	
	setTimeout(attaque_monstre_1, 500);

	var defaite = function(){
		if (pv_heros_1.value <= 0 && pv_heros_2<= 0 && pv_heros_3.value <=0 && pv_heros_4.value <=0 ){
			textAction.innerHTML = " Vous avez tous péri ";
		} else {
			return false;
		}
	}
	if (defaite == false){
		setTimeout(reactivation_bouton, 500);
	}

}




bouton_atk_heros_1.onclick = attaque_heros_1;
bouton_atk_heros_2.onclick = attaque_heros_2;
bouton_def_heros_1.onclick = defence_heros_1;
bouton_sepcial_heros_1.onclick = soin;
bouton_fin_de_tour.onclick = fin_de_tour;
