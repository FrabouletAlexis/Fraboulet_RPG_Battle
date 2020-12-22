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
atk_heros_1.value = 30;
atk_heros_1.innerHTML = atk_heros_1.value;

var def_valeur_heros_1 = 0;
var def_heros_1 = document.getElementById("defence_heros_1");
def_heros_1.value = 10;
def_heros_1.innerHTML = def_heros_1.value;

var mana_soin = 30;
var pv_soin = 20;

// Hero 2 - BARRIS -Tank//
var pv_max_heros_2 = 120;
var pv_heros_2 = document.getElementById("pv_heros_2");
pv_heros_2.value = 120;
pv_heros_2.innerHTML = pv_heros_2.value;

var pm_heros_2 = document.getElementById("pm_heros_2");
pm_heros_2.value = 60;
pm_heros_2.innerHTML = pm_heros_2.value;

var atk_heros_2 = document.getElementById("attaque_heros_2");
atk_heros_2.value = 70;
atk_heros_2.innerHTML = atk_heros_2.value;
var degat_balayage = (atk_heros_2.value/2);
var mana_balayage = 20;

var def_valeur_heros_2 = 0;
var def_heros_2 = document.getElementById("defence_heros_2");
def_heros_2.value = 30;
def_heros_2.innerHTML = def_heros_2.value;

// Hero 3 - PEGRIM - Shaman//
var pv_max_heros_3 = 100;
var pv_heros_3 = document.getElementById("pv_heros_3");
pv_heros_3.value = 100;
pv_heros_3.innerHTML = pv_heros_3.value;

var pm_heros_3 = document.getElementById("pm_heros_3");
pm_heros_3.value = 80;
pm_heros_3.innerHTML = pm_heros_3.value;

var atk_heros_3 = document.getElementById("attaque_heros_3");
atk_heros_3.value = 40;
atk_heros_3.innerHTML = atk_heros_3.value;
var degat_explosion = 40;
var mana_explosion = 25;

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
pm_heros_4.value = 50;
pm_heros_4.innerHTML = pm_heros_4.value;

var atk_heros_4 = document.getElementById("attaque_heros_4");
atk_heros_4.value = 50;
atk_heros_4.innerHTML = atk_heros_4.value;
var degat_tir_charge = 150;
var mana_tir_charge = 30;

var def_valeur_heros_4 = 0;
var def_heros_4 = document.getElementById("defence_heros_4");
def_heros_4.value = 15;
def_heros_4.innerHTML = def_heros_4.value;

// ----------------------------------------- Caractéristiques monstre ----------------------------------------- //
// Monstre 1 //
var monstre_1 = document.getElementById("monstre_1");
var atk_monstre_1 = 35;
var pv_monstre_1 = document.getElementById("pv_monstre_1");
pv_monstre_1.value = 230;
pv_monstre_1.innerHTML = pv_monstre_1.value;
// Monstre 2 //
var monstre_2 = document.getElementById("monstre_2");
var atk_monstre_2 = 60;
var pv_monstre_2 = document.getElementById("pv_monstre_2");
pv_monstre_2.value = 200;
pv_monstre_2.innerHTML = pv_monstre_2.value;
// Monstre 3 //
var monstre_3 = document.getElementById("monstre_3");
var atk_monstre_3 = 35;
var pv_monstre_3 = document.getElementById("pv_monstre_3");
pv_monstre_3.value = 150;
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
			if (pv_monstre_1.value > 0){
				pv_monstre_1.value -= atk_heros_1.value;
				pv_monstre_1.innerHTML = pv_monstre_1.value;

				bouton_atk_heros_1.style.opacity = "0.5";
				bouton_atk_heros_1.disabled = true;
				bouton_def_heros_1.style.opacity = "0.5";
				bouton_def_heros_1.disabled = true;
				bouton_sepcial_heros_1.style.opacity = "0.5";
				bouton_sepcial_heros_1.disabled = true;
				textAction.innerHTML = "Kearia inflige "+atk_heros_1.value+" points de dégats au Sheld Sheepman.";
				if (pv_monstre_1.value <= 0){
					function mort_monstre_1(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Kearia a vaincu le Sheld Sheepman."
						monstre_1.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_1, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}	
		}

		if (choix_joueur == 2){
			if (pv_monstre_2.value > 0){
				pv_monstre_2.value -= atk_heros_1.value;
				pv_monstre_2.innerHTML = pv_monstre_2.value;

				bouton_atk_heros_1.style.opacity = "0.5";
				bouton_atk_heros_1.disabled = true;
				bouton_def_heros_1.style.opacity = "0.5";
				bouton_def_heros_1.disabled = true;
				bouton_sepcial_heros_1.style.opacity = "0.5";
				bouton_sepcial_heros_1.disabled = true;
				textAction.innerHTML = "Kearia inflige "+atk_heros_1.value+" points de dégats au Blue Sheepman.";
				if (pv_monstre_2.value <= 0){
					function mort_monstre_2(){
						pv_monstre_2.innerHTML = 0;
						textAction.innerHTML = "Kearia a vaincu le Blue Sheepman."
						monstre_2.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_2, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}			
		}

		if (choix_joueur == 3){
			if (pv_monstre_3.value > 0 ){
				pv_monstre_3.value -= atk_heros_1.value;
				pv_monstre_3.innerHTML = pv_monstre_3.value;

				bouton_atk_heros_1.style.opacity = "0.5";
				bouton_atk_heros_1.disabled = true;
				bouton_def_heros_1.style.opacity = "0.5";
				bouton_def_heros_1.disabled = true;
				bouton_sepcial_heros_1.style.opacity = "0.5";
				bouton_sepcial_heros_1.disabled = true;
				textAction.innerHTML = "Kearia inflige "+atk_heros_1.value+" points de dégats au Armored Sheepman.";
				if (pv_monstre_3.value <= 0){
					function mort_monstre_3(){
						pv_monstre_3.innerHTML = 0;
						textAction.innerHTML = "Kearia a vaincu l'Armored Sheepman."
						monstre_3.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_3, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}	
		}
		setTimeout(teste_victoire, 1000);
	}	
}

function attaque_heros_2(){
		
	if (bouton_atk_heros_2.disabled == false){
		var choix_joueur = prompt("Quel monstre souhaitez-vous attaquer ? 1 - Sheld Sheepman 2 - Blue Sheepman 3 - Armored Sheepman");
		if (choix_joueur == 1){
			if ( pv_monstre_1.value > 0){
				pv_monstre_1.value -= atk_heros_2.value;
				pv_monstre_1.innerHTML = pv_monstre_1.value;

				bouton_atk_heros_2.style.opacity = "0.5";
				bouton_atk_heros_2.disabled = true;
				bouton_def_heros_2.style.opacity = "0.5";
				bouton_def_heros_2.disabled = true;
				bouton_sepcial_heros_2.style.opacity = "0.5";
				bouton_sepcial_heros_2.disabled = true;
				textAction.innerHTML = "Barris inflige "+atk_heros_2.value+" points de dégats au Sheld Sheepman.";
				if (pv_monstre_1.value <= 0){
					function mort_monstre_1(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Barris a vaincu le Sheld Sheepman."
						monstre_1.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_1, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}
			
		}

		if (choix_joueur == 2){
			if (pv_monstre_2.value > 0){
				pv_monstre_2.value -= atk_heros_2.value;
				pv_monstre_2.innerHTML = pv_monstre_2.value;

				bouton_atk_heros_2.style.opacity = "0.5";
				bouton_atk_heros_2.disabled = true;
				bouton_def_heros_2.style.opacity = "0.5";
				bouton_def_heros_2.disabled = true;
				bouton_sepcial_heros_2.style.opacity = "0.5";
				bouton_sepcial_heros_2.disabled = true;
				textAction.innerHTML = "Barris inflige "+atk_heros_2.value+" points de dégats au Blue Sheepman.";
				if (pv_monstre_2.value <= 0){
					function mort_monstre_2(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Barris a vaincu le Blue Sheepman."
						monstre_2.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_2, 1000);
				}
			}  else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}
			
		}

		if (choix_joueur == 3){
			if (pv_monstre_3.value > 0){
				pv_monstre_3.value -= atk_heros_2.value;
				pv_monstre_3.innerHTML = pv_monstre_3.value;

				bouton_atk_heros_2.style.opacity = "0.5";
				bouton_atk_heros_2.disabled = true;
				bouton_def_heros_2.style.opacity = "0.5";
				bouton_def_heros_2.disabled = true;
				bouton_sepcial_heros_2.style.opacity = "0.5";
				bouton_sepcial_heros_2.disabled = true;
				textAction.innerHTML = "Barris inflige "+atk_heros_2.value+" points de dégats au Armored Sheepman.";
				if (pv_monstre_3.value <= 0){
					function mort_monstre_3(){
						pv_monstre_3.innerHTML = 0;
						textAction.innerHTML = "Barris a vaincu l'Armored Sheepman."
						monstre_3.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_3, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}
			
		}
		setTimeout(teste_victoire, 1000);
	}	
}

function attaque_heros_3(){
		
	if (bouton_atk_heros_3.disabled == false){
		var choix_joueur = prompt("Quel monstre souhaitez-vous attaquer ? 1 - Sheld Sheepman 2 - Blue Sheepman 3 - Armored Sheepman");
		if (choix_joueur == 1){
			if(pv_monstre_1.value > 0){
				pv_monstre_1.value -= atk_heros_3.value;
				pv_monstre_1.innerHTML = pv_monstre_1.value;

				bouton_atk_heros_3.style.opacity = "0.5";
				bouton_atk_heros_3.disabled = true;
				bouton_def_heros_3.style.opacity = "0.5";
				bouton_def_heros_3.disabled = true;
				bouton_sepcial_heros_3.style.opacity = "0.5";
				bouton_sepcial_heros_3.disabled = true;
				textAction.innerHTML = "Pegrim inflige "+atk_heros_3.value+" points de dégats au Sheld Sheepman.";
				if (pv_monstre_1.value <= 0){
					function mort_monstre_1(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Pargrim a vaincu le Sheld Sheepman."
						monstre_1.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_1, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}
			
		}

		if (choix_joueur == 2){
			if (pv_monstre_2.value >0){
				pv_monstre_2.value -= atk_heros_3.value;
				pv_monstre_2.innerHTML = pv_monstre_2.value;

				bouton_atk_heros_3.style.opacity = "0.5";
				bouton_atk_heros_3.disabled = true;
				bouton_def_heros_3.style.opacity = "0.5";
				bouton_def_heros_3.disabled = true;
				bouton_sepcial_heros_3.style.opacity = "0.5";
				bouton_sepcial_heros_3.disabled = true;
				textAction.innerHTML = "Pegrim inflige "+atk_heros_3.value+" points de dégats au Blue Sheepman.";
				if (pv_monstre_2.value <= 0){
					function mort_monstre_2(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Pegrim a vaincu le Blue Sheepman."
						monstre_2.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_2, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}
			
		}

		if (choix_joueur == 3){
			if (pv_monstre_3.value > 0){
				pv_monstre_3.value -= atk_heros_3.value;
				pv_monstre_3.innerHTML = pv_monstre_3.value;

				bouton_atk_heros_3.style.opacity = "0.5";
				bouton_atk_heros_3.disabled = true;
				bouton_def_heros_3.style.opacity = "0.5";
				bouton_def_heros_3.disabled = true;
				bouton_sepcial_heros_3.style.opacity = "0.5";
				bouton_sepcial_heros_3.disabled = true;
				textAction.innerHTML = "Pegrim inflige "+atk_heros_3.value+" points de dégats au Armored Sheepman.";
				if (pv_monstre_3.value <= 0){
					function mort_monstre_3(){
						pv_monstre_3.innerHTML = 0;
						textAction.innerHTML = "Pegrim a vaincu l'Armored Sheepman."
						monstre_3.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_3, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}
			
		}
		setTimeout(teste_victoire, 1000);
	}	
}

function attaque_heros_4(){
		
	if (bouton_atk_heros_4.disabled == false){
		var choix_joueur = prompt("Quel monstre souhaitez-vous attaquer ? 1 - Sheld Sheepman 2 - Blue Sheepman 3 - Armored Sheepman");
		if (choix_joueur == 1){
			if (pv_monstre_1.value > 0){
				pv_monstre_1.value -= atk_heros_4.value;
				pv_monstre_1.innerHTML = pv_monstre_1.value;

				bouton_atk_heros_4.style.opacity = "0.5";
				bouton_atk_heros_4.disabled = true;
				bouton_def_heros_4.style.opacity = "0.5";
				bouton_def_heros_4.disabled = true;
				bouton_sepcial_heros_4.style.opacity = "0.5";
				bouton_sepcial_heros_4.disabled = true;
				textAction.innerHTML = "Lussan inflige "+atk_heros_4.value+" points de dégats au Sheld Sheepman.";
				if (pv_monstre_1.value <= 0){
					function mort_monstre_1(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Lussan a vaincu le Sheld Sheepman."
						monstre_1.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_1, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}	
		}

		if (choix_joueur == 2){
			if (pv_monstre_2.value>0){
				pv_monstre_2.value -= atk_heros_4.value;
				pv_monstre_2.innerHTML = pv_monstre_2.value;

				bouton_atk_heros_4.style.opacity = "0.5";
				bouton_atk_heros_4.disabled = true;
				bouton_def_heros_4.style.opacity = "0.5";
				bouton_def_heros_4.disabled = true;
				bouton_sepcial_heros_4.style.opacity = "0.5";
				bouton_sepcial_heros_4.disabled = true;
				textAction.innerHTML = "Lussan inflige "+atk_heros_4.value+" points de dégats au Blue Sheepman.";
				if (pv_monstre_2.value <= 0){
					function mort_monstre_2(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Lussan a vaincu le Blue Sheepman."
						monstre_2.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_2, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}	
		}

		if (choix_joueur == 3){
			if (pv_monstre_3.value > 0) {
				pv_monstre_3.value -= atk_heros_4.value;
				pv_monstre_3.innerHTML = pv_monstre_3.value;

				bouton_atk_heros_4.style.opacity = "0.5";
				bouton_atk_heros_4.disabled = true;
				bouton_def_heros_4.style.opacity = "0.5";
				bouton_def_heros_4.disabled = true;
				bouton_sepcial_heros_4.style.opacity = "0.5";
				bouton_sepcial_heros_4.disabled = true;
				textAction.innerHTML = "Lussan inflige "+atk_heros_4.value+" points de dégats au Armored Sheepman.";
				if (pv_monstre_3.value <= 0){
					function mort_monstre_3(){
						pv_monstre_3.innerHTML = 0;
						textAction.innerHTML = "Lussan a vaincu l'Armored Sheepman."
						monstre_3.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_3, 1000);
				}
			} else {
				textAction.innerHTML = "Le monstre est déjà mort"
			}	
		}
		setTimeout(teste_victoire, 1000);
	}	
}

function defence_heros_1(){
	if (bouton_def_heros_1.disabled == false){
		def_valeur_heros_1= def_heros_1.value;

		textAction.innerHTML = "Kearia augmente sa défense de "+def_heros_1.value+" points pendant ce tour."
		bouton_atk_heros_1.style.opacity = "0.5";
		bouton_atk_heros_1.disabled = true;
		bouton_def_heros_1.style.opacity = "0.5";
		bouton_def_heros_1.disabled = true;
		bouton_sepcial_heros_1.style.opacity = "0.5";
		bouton_sepcial_heros_1.disabled = true;
	}
}
function defence_heros_2(){
	if (bouton_def_heros_2.disabled == false){
		def_valeur_heros_2= def_heros_2.value;

		textAction.innerHTML = "Barris augmente sa défense de "+def_heros_2.value+" points pendant ce tour."
		bouton_atk_heros_2.style.opacity = "0.5";
		bouton_atk_heros_2.disabled = true;
		bouton_def_heros_2.style.opacity = "0.5";
		bouton_def_heros_2.disabled = true;
		bouton_sepcial_heros_2.style.opacity = "0.5";
		bouton_sepcial_heros_2.disabled = true;
	}
}
function defence_heros_3(){
	if (bouton_def_heros_3.disabled == false){
		def_valeur_heros_3= def_heros_3.value;

		textAction.innerHTML = "Pegrim augmente sa défense de "+def_heros_3.value+" points pendant ce tour."
		bouton_atk_heros_3.style.opacity = "0.5";
		bouton_atk_heros_3.disabled = true;
		bouton_def_heros_3.style.opacity = "0.5";
		bouton_def_heros_3.disabled = true;
		bouton_sepcial_heros_3.style.opacity = "0.5";
		bouton_sepcial_heros_3.disabled = true;
	}
}
function defence_heros_4(){
	if (bouton_def_heros_4.disabled == false){
		def_valeur_heros_4= def_heros_4.value;

		textAction.innerHTML = "Lussan augmente sa défense de "+def_heros_4.value+" points pendant ce tour."
		bouton_atk_heros_4.style.opacity = "0.5";
		bouton_atk_heros_4.disabled = true;
		bouton_def_heros_4.style.opacity = "0.5";
		bouton_def_heros_4.disabled = true;
		bouton_sepcial_heros_4.style.opacity = "0.5";
		bouton_sepcial_heros_4.disabled = true;
	}
}


function soin(){
		
	if (bouton_sepcial_heros_1.disabled == false){
		if (pm_heros_1.value > mana_soin){

			
			if(pv_heros_1.value > 0 && pv_heros_1.value < pv_max_heros_1 && pv_heros_1.value < pv_heros_2.value && pv_heros_1.value < pv_heros_3.value && pv_heros_1.value < pv_heros_4.value) {
				pv_heros_1.value = pv_heros_1.value+ pv_soin;
				pv_heros_1.innerHTML = pv_heros_1.value;
				pm_heros_1.value = pm_heros_1.value - mana_soin;
				pm_heros_1.innerHTML = pm_heros_1.value;
				textAction.innerHTML = "Kearia regagne "+pv_soin+" points de vie.";

				bouton_atk_heros_1.style.opacity = "0.5";
				bouton_atk_heros_1.disabled = true;
				bouton_def_heros_1.style.opacity = "0.5";
				bouton_def_heros_1.disabled = true;
				bouton_sepcial_heros_1.style.opacity = "0.5";
				bouton_sepcial_heros_1.disabled = true;

				if (pv_heros_1.value > pv_max_heros_1){
					pv_heros_1.value = pv_max_heros_1;
					pv_heros_1.innerHTML = pv_heros_1.value;
				}
				
	
			}else if (pv_heros_1.value > 0 && pv_heros_1.value < pv_max_heros_1 && pv_heros_2.value ==0 && pv_heros_3.value == 0 && pv_heros_4.value == 0){
				pv_heros_1.value = pv_heros_1.value+ pv_soin;
				pv_heros_1.innerHTML = pv_heros_1.value;
				pm_heros_1.value = pm_heros_1.value - mana_soin;
				pm_heros_1.innerHTML = pm_heros_1.value;
				textAction.innerHTML = "Kearia regagne "+pv_soin+" points de vie.";

				bouton_atk_heros_1.style.opacity = "0.5";
				bouton_atk_heros_1.disabled = true;
				bouton_def_heros_1.style.opacity = "0.5";
				bouton_def_heros_1.disabled = true;
				bouton_sepcial_heros_1.style.opacity = "0.5";
				bouton_sepcial_heros_1.disabled = true;

				if (pv_heros_1.value > pv_max_heros_1){
					pv_heros_1.value = pv_max_heros_1;
					pv_heros_1.innerHTML = pv_heros_1.value;
				}
				
			}else if (pv_heros_2.value > 0 && pv_heros_2.value < pv_max_heros_2 && pv_heros_2.value < pv_heros_1.value && pv_heros_2.value < pv_heros_3.value && pv_heros_2.value < pv_heros_4.value){
				pv_heros_2.value = pv_heros_2.value + pv_soin;
				pv_heros_2.innerHTML = pv_heros_2.value;
				pm_heros_1.value = pm_heros_1.value - mana_soin;
				pm_heros_1.innerHTML = pm_heros_1.value;
				textAction.innerHTML = "Barris regagne "+pv_soin+" points de vie.";

				bouton_atk_heros_1.style.opacity = "0.5";
				bouton_atk_heros_1.disabled = true;
				bouton_def_heros_1.style.opacity = "0.5";
				bouton_def_heros_1.disabled = true;
				bouton_sepcial_heros_1.style.opacity = "0.5";
				bouton_sepcial_heros_1.disabled = true;

				if (pv_heros_2.value > pv_max_heros_2){
					pv_heros_2.value = pv_max_heros_2;
					pv_heros_2.innerHTML = pv_heros_2.value;
				}
			}else if (pv_heros_3.value > 0 && pv_heros_3.value < pv_max_heros_3 && pv_heros_3.value < pv_heros_1.value && pv_heros_3.value < pv_heros_2.value && pv_heros_3.value < pv_heros_4.value){
				pv_heros_3.value = pv_heros_3.value + pv_soin;
				pv_heros_3.innerHTML = pv_heros_3.value;
				pm_heros_1.value = pm_heros_1.value - mana_soin;
				pm_heros_1.innerHTML = pm_heros_1.value;
				textAction.innerHTML = "Pegrim regagne "+pv_soin+" points de vie.";

				bouton_atk_heros_1.style.opacity = "0.5";
				bouton_atk_heros_1.disabled = true;
				bouton_def_heros_1.style.opacity = "0.5";
				bouton_def_heros_1.disabled = true;
				bouton_sepcial_heros_1.style.opacity = "0.5";
				bouton_sepcial_heros_1.disabled = true;

				if (pv_heros_3.value > pv_max_heros_3){
					pv_heros_3.value = pv_max_heros_3;
					pv_heros_3.innerHTML = pv_heros_3.value;
				}
			}else if (pv_heros_4.value > 0 && pv_heros_4.value < pv_max_heros_4 && pv_heros_4.value < pv_heros_1.value && pv_heros_4.value < pv_heros_2.value && pv_heros_4.value < pv_heros_3.value){
				pv_heros_4.value = pv_heros_4.value + pv_soin;
				pv_heros_4.innerHTML = pv_heros_4.value;
				pm_heros_1.value = pm_heros_1.value - mana_soin;
				pm_heros_1.innerHTML = pm_heros_1.value;
				textAction.innerHTML = "Lussan regagne "+pv_soin+" points de vie.";

				bouton_atk_heros_1.style.opacity = "0.5";
				bouton_atk_heros_1.disabled = true;
				bouton_def_heros_1.style.opacity = "0.5";
				bouton_def_heros_1.disabled = true;
				bouton_sepcial_heros_1.style.opacity = "0.5";
				bouton_sepcial_heros_1.disabled = true;

				if (pv_heros_4.value > pv_max_heros_4){
					pv_heros_4.value = pv_max_heros_4;
					pv_heros_4.innerHTML = pv_heros_4.value;
				}
			
			}else {
				textAction.innerHTML = "Il n'y a personne a soigné.";
			}

		} else {
			textAction.innerHTML = "Kearia n'a plus assez de mana.";
		}
	}
}
function balayage (){
	if (bouton_sepcial_heros_2.disabled == false){
		if ( pm_heros_2.value >= mana_balayage) {
			textAction.innerHTML = "Barris inflige "+degat_balayage+" points de dégâts à tous les ennemis encore en vie.";
			bouton_atk_heros_2.style.opacity = "0.5";
			bouton_atk_heros_2.disabled = true;
			bouton_def_heros_2.style.opacity = "0.5";
			bouton_def_heros_2.disabled = true;
			bouton_sepcial_heros_2.style.opacity = "0.5";
			bouton_sepcial_heros_2.disabled = true;
			pm_heros_2.value -= mana_balayage;
			pm_heros_2.innerHTML = pm_heros_2.value;
			if (pv_monstre_1.value > 0){
				pv_monstre_1.value -= degat_balayage;
				pv_monstre_1.innerHTML = pv_monstre_1.value;
				if (pv_monstre_1.value <= 0){
					function mort_monstre_1(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Barris a vaincu le Sheld Sheepman."
						monstre_1.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_1, 1000);
				}
			}
			if (pv_monstre_2.value > 0){
				pv_monstre_2.value -= degat_balayage;
				pv_monstre_2.innerHTML = pv_monstre_2.value;
				if (pv_monstre_2.value <= 0){
					function mort_monstre_2(){
						pv_monstre_2.innerHTML = 0;
						textAction.innerHTML = "Barris a vaincu le Blue Sheepman."
						monstre_2.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_2, 1000);
				}
			}
			if (pv_monstre_3.value > 0){
				pv_monstre_3.value -= degat_balayage;
				pv_monstre_3.innerHTML = pv_monstre_3.value;
				if (pv_monstre_3.value <= 0){
					function mort_monstre_3(){
						pv_monstre_3.innerHTML = 0;
						textAction.innerHTML = "Barris a vaincu l'Armored Sheepman."
						monstre_3.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_3, 1000);
				}
			}
			setTimeout(teste_victoire, 1000);
		} else {
			textAction.innerHTML = "Barris n'a plus assez de mana pour balayer l'ennemi.";
		}
		
		
	}
}

function explosion (){
	if (bouton_sepcial_heros_3.disabled == false){
		if ( pm_heros_3.value >= mana_explosion) {
			textAction.innerHTML = "Pagrim inflige "+degat_explosion+" points de dégâts à tous les ennemis encore vivant.";
			bouton_atk_heros_3.style.opacity = "0.5";
			bouton_atk_heros_3.disabled = true;
			bouton_def_heros_3.style.opacity = "0.5";
			bouton_def_heros_3.disabled = true;
			bouton_sepcial_heros_3.style.opacity = "0.5";
			bouton_sepcial_heros_3.disabled = true;

			pm_heros_3.value -= mana_explosion;
			pm_heros_3.innerHTML = pm_heros_3.value;

			if (pv_monstre_1.value > 0){
				pv_monstre_1.value -= degat_explosion;
				pv_monstre_1.innerHTML = pv_monstre_1.value;
				if (pv_monstre_1.value <= 0){
					function mort_monstre_1(){
						pv_monstre_1.innerHTML = 0;
						textAction.innerHTML = "Pagrim a vaincu le Sheld Sheepman."
						monstre_1.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_1, 1000);
				}
			}
			if (pv_monstre_2.value > 0){
				pv_monstre_2.value -= degat_explosion;
				pv_monstre_2.innerHTML = pv_monstre_2.value;
				if (pv_monstre_2.value <= 0){
					function mort_monstre_2(){
						pv_monstre_2.innerHTML = 0;
						textAction.innerHTML = "Pagrim a vaincu le Blue Sheepman."
						monstre_2.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_2, 1000);
				}
			}
			if (pv_monstre_3.value > 0){
				pv_monstre_3.value -= degat_explosion;
				pv_monstre_3.innerHTML = pv_monstre_3.value;
				if (pv_monstre_3.value <= 0){
					function mort_monstre_3(){
						pv_monstre_3.innerHTML = 0;
						textAction.innerHTML = "Pagrim a vaincu l'Armored Sheepman."
						monstre_3.style.backgroundImage="url()";
					}
					setTimeout(mort_monstre_3, 1000);
				}
			}
			setTimeout(teste_victoire, 1000);
		} else {
			textAction.innerHTML = "Pagrim n'a plus assez de mana pour faire exploser l'adversaire.";
		}
	}
}

function tir_charge () {
	if (bouton_sepcial_heros_4.disabled == false){
		if ( pm_heros_4.value >= mana_tir_charge){
			var choix_joueur = prompt("Quel monstre souhaitez-vous attaquer ? 1 - Sheld Sheepman 2 - Blue Sheepman 3 - Armored Sheepman");
			if (choix_joueur == 1){
				if (pv_monstre_1.value > 0){
					pv_monstre_1.value -= degat_tir_charge;
					pv_monstre_1.innerHTML = pv_monstre_1.value;
					pm_heros_4.value -= mana_tir_charge;
					pm_heros_4.innerHTML = pm_heros_4.value;

					bouton_atk_heros_4.style.opacity = "0.5";
					bouton_atk_heros_4.disabled = true;
					bouton_def_heros_4.style.opacity = "0.5";
					bouton_def_heros_4.disabled = true;
					bouton_sepcial_heros_4.style.opacity = "0.5";
					bouton_sepcial_heros_4.disabled = true;
					textAction.innerHTML = "Lussan inflige "+degat_tir_charge+" points de dégats au Sheld Sheepman.";
					if (pv_monstre_1.value <= 0){
						function mort_monstre_1(){
							pv_monstre_1.innerHTML = 0;
							textAction.innerHTML = "Lussan a vaincu le Sheld Sheepman."
							monstre_1.style.backgroundImage="url()";
						}
						setTimeout(mort_monstre_1, 1000);
					}
				} else {
					textAction.innerHTML = "Le monstre est déjà mort"
				}	
			}

			if (choix_joueur == 2){
				if (pv_monstre_2.value>0){
					pv_monstre_2.value -= degat_tir_charge;
					pv_monstre_2.innerHTML = pv_monstre_2.value;
					pm_heros_4.value -= mana_tir_charge;
					pm_heros_4.innerHTML = pm_heros_4.value;

					bouton_atk_heros_4.style.opacity = "0.5";
					bouton_atk_heros_4.disabled = true;
					bouton_def_heros_4.style.opacity = "0.5";
					bouton_def_heros_4.disabled = true;
					bouton_sepcial_heros_4.style.opacity = "0.5";
					bouton_sepcial_heros_4.disabled = true;
					textAction.innerHTML = "Lussan inflige "+degat_tir_charge+" points de dégats au Blue Sheepman.";
					if (pv_monstre_2.value <= 0){
						function mort_monstre_2(){
							pv_monstre_1.innerHTML = 0;
							textAction.innerHTML = "Lussan a vaincu le Blue Sheepman."
							monstre_2.style.backgroundImage="url()";
						}
						setTimeout(mort_monstre_2, 1000);
					}
				} else {
					textAction.innerHTML = "Le monstre est déjà mort"
				}	
			}

			if (choix_joueur == 3){
				if (pv_monstre_3.value > 0) {
					pv_monstre_3.value -= degat_tir_charge;
					pv_monstre_3.innerHTML = pv_monstre_3.value;
					pm_heros_4.value -= mana_tir_charge;
					pm_heros_4.innerHTML = pm_heros_4.value;

					bouton_atk_heros_4.style.opacity = "0.5";
					bouton_atk_heros_4.disabled = true;
					bouton_def_heros_4.style.opacity = "0.5";
					bouton_def_heros_4.disabled = true;
					bouton_sepcial_heros_4.style.opacity = "0.5";
					bouton_sepcial_heros_4.disabled = true;
					textAction.innerHTML = "Lussan inflige "+degat_tir_charge+" points de dégats au Armored Sheepman.";
					if (pv_monstre_3.value <= 0){
						function mort_monstre_3(){
							pv_monstre_3.innerHTML = 0;
							textAction.innerHTML = "Lussan a vaincu l'Armored Sheepman."
							monstre_3.style.backgroundImage="url()";
						}
						setTimeout(mort_monstre_3, 1000);
					}
				} else {
					textAction.innerHTML = "Le monstre est déjà mort"
				}	
			}
			setTimeout(teste_victoire, 1000);

		} else {
			textAction.innerHTML = "Lussan n'a plus assez de mana pour un tir chargé.";
		}
	}
		
}
 

function fin_de_tour(){


	function attaque_monstre_1(){
		if (pv_monstre_1.value > 0){
			/*var heros_en_vie = 0;
			if (pv_heros_1.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_2.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_3.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_4.value > 0){
				heros_en_vie += 1;
			}
			var cible_monstre = nb_alea(1,heros_en_vie);*/
			var cible_monstre = nb_alea(1,4);
			if (cible_monstre == 1 && pv_heros_1.value > 0){
				pv_heros_1.value = (pv_heros_1.value + def_valeur_heros_1) - atk_monstre_1;
				pv_heros_1.innerHTML = pv_heros_1.value;
				function texte_degat (){
					textAction.innerHTML = "Sheld Sheepman inflige "+atk_monstre_1+" points de dégats à Kearia.";
					if (pv_heros_1.value <= 0){
						function mort_kearia (){
							textAction.innerHTML = "Kearia a succombé.";
						}
						setTimeout(mort_kearia, 1000);
						pv_heros_1.innerHTML = 0;
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
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 2 && pv_heros_2.value > 0){
				pv_heros_2.value = (pv_heros_2.value + def_valeur_heros_2) - atk_monstre_1;
				pv_heros_2.innerHTML = pv_heros_2.value;
				function texte_degat (){
					textAction.innerHTML = "Sheld Sheepman inflige "+atk_monstre_1+" points de dégats à Barris.";
					if (pv_heros_2.value <= 0){
						function mort_barris (){
							textAction.innerHTML = "Barris a succombé.";
						}
						setTimeout(mort_barris, 1000);
						pv_heros_2.innerHTML = 0;
						pm_heros_2.innerHTML = 0;
						atk_heros_2.innerHTML = 0;
						def_heros_2.innerHTML = 0;
						bouton_atk_heros_2.style.opacity = "0.5";
						bouton_atk_heros_2.disabled = true;
						bouton_def_heros_2.style.opacity = "0.5";
						bouton_def_heros_2.disabled = true;
						bouton_sepcial_heros_2.style.opacity = "0.5";
						bouton_sepcial_heros_2.disabled = true;
					}	
				}
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 3 && pv_heros_3.value > 0){
				pv_heros_3.value = (pv_heros_3.value + def_valeur_heros_3) -  atk_monstre_1;
				pv_heros_3.innerHTML = pv_heros_3.value;
				function texte_degat (){
					textAction.innerHTML = "Sheld Sheepman inflige "+atk_monstre_1+" points de dégats à Pegrim.";
					if (pv_heros_3.value <= 0){
						function mort_pegrim (){
							textAction.innerHTML = "Pegrim a succombé.";
						}
						setTimeout(mort_pegrim, 1000);
						pv_heros_3.innerHTML = 0;
						pm_heros_3.innerHTML = 0;
						atk_heros_3.innerHTML = 0;
						def_heros_3.innerHTML = 0;
						bouton_atk_heros_3.style.opacity = "0.5";
						bouton_atk_heros_3.disabled = true;
						bouton_def_heros_3.style.opacity = "0.5";
						bouton_def_heros_3.disabled = true;
						bouton_sepcial_heros_3.style.opacity = "0.5";
						bouton_sepcial_heros_3.disabled = true;
					}
				}
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 4 && pv_heros_4.value > 0){
				pv_heros_4.value = (pv_heros_4.value + def_valeur_heros_4) -  atk_monstre_1;
				pv_heros_4.innerHTML = pv_heros_4.value;
				function texte_degat (){
					textAction.innerHTML = "Sheld Sheepman inflige "+atk_monstre_1+" points de dégats à Lussan.";
					if (pv_heros_4.value <= 0){
						function mort_lussan (){
							textAction.innerHTML = "Lussan a succombé.";
						}
						setTimeout(mort_lussan, 1000);
						pv_heros_4.innerHTML = 0;
						pm_heros_4.innerHTML = 0;
						atk_heros_4.innerHTML = 0;
						def_heros_4.innerHTML = 0;
						bouton_atk_heros_4.style.opacity = "0.5";
						bouton_atk_heros_4.disabled = true;
						bouton_def_heros_4.style.opacity = "0.5";
						bouton_def_heros_4.disabled = true;
						bouton_sepcial_heros_4.style.opacity = "0.5";
						bouton_sepcial_heros_4.disabled = true;
					}
				}
				setTimeout(texte_degat, 1000);
			}
		}
	}

	function attaque_monstre_2(){
		if (pv_monstre_2.value > 0){
			/*var heros_en_vie = 0
			if (pv_heros_1.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_2.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_3.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_4.value > 0){
				heros_en_vie += 1;
			}
			var cible_monstre = nb_alea(1,heros_en_vie);*/
			var cible_monstre = nb_alea(1,4);
			if (cible_monstre == 1 && pv_heros_1.value > 0){
				pv_heros_1.value = (pv_heros_1.value + def_valeur_heros_1) -  atk_monstre_2;
				pv_heros_1.innerHTML = pv_heros_1.value;
				function texte_degat (){
					textAction.innerHTML = "Blue Sheepman inflige "+atk_monstre_2+" points de dégats à Kearia.";
					if (pv_heros_1.value <= 0){
						function mort_kearia (){
							textAction.innerHTML = "Kearia a succombé.";
						}
						setTimeout(mort_kearia, 1000);
						pv_heros_1.innerHTML = 0;
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
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 2 && pv_heros_2.value > 0){
				pv_heros_2.value = (pv_heros_2.value + def_valeur_heros_2) - atk_monstre_2;
				pv_heros_2.innerHTML = pv_heros_2.value;
				function texte_degat (){
					textAction.innerHTML = "Blue Sheepman inflige "+atk_monstre_2+" points de dégats à Barris.";
					if (pv_heros_2.value <= 0){
						function mort_barris (){
							textAction.innerHTML = "Barris a succombé.";
						}
						setTimeout(mort_barris, 1000);
						pv_heros_2.innerHTML = 0;
						pm_heros_2.innerHTML = 0;
						atk_heros_2.innerHTML = 0;
						def_heros_2.innerHTML = 0;
						bouton_atk_heros_2.style.opacity = "0.5";
						bouton_atk_heros_2.disabled = true;
						bouton_def_heros_2.style.opacity = "0.5";
						bouton_def_heros_2.disabled = true;
						bouton_sepcial_heros_2.style.opacity = "0.5";
						bouton_sepcial_heros_2.disabled = true;
					}	
				}
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 3 && pv_heros_3.value > 0){
				pv_heros_3.value = (pv_heros_3.value + def_valeur_heros_3) -  atk_monstre_2;
				pv_heros_3.innerHTML = pv_heros_3.value;
				function texte_degat (){
					textAction.innerHTML = "Blue Sheepman inflige "+atk_monstre_2+" points de dégats à Pegrim.";
					if (pv_heros_3.value <= 0){
						function mort_pegrim (){
							textAction.innerHTML = "Pegrim a succombé.";
						}
						setTimeout(mort_pegrim, 1000);
						pv_heros_3.innerHTML = 0;
						pm_heros_3.innerHTML = 0;
						atk_heros_3.innerHTML = 0;
						def_heros_3.innerHTML = 0;
						bouton_atk_heros_3.style.opacity = "0.5";
						bouton_atk_heros_3.disabled = true;
						bouton_def_heros_3.style.opacity = "0.5";
						bouton_def_heros_3.disabled = true;
						bouton_sepcial_heros_3.style.opacity = "0.5";
						bouton_sepcial_heros_3.disabled = true;
					}
				}
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 4 && pv_heros_4.value > 0){
				pv_heros_4.value = (pv_heros_4.value + def_valeur_heros_4) -  atk_monstre_2;
				pv_heros_4.innerHTML = pv_heros_4.value;
				function texte_degat (){
					textAction.innerHTML = "Blue Sheepman inflige "+atk_monstre_2+" points de dégats à Lussan.";
					if (pv_heros_4.value <= 0){
						function mort_lussan (){
							textAction.innerHTML = "Lussan a succombé.";
						}
						setTimeout(mort_lussan, 1000);
						pv_heros_4.innerHTML = 0;
						pm_heros_4.innerHTML = 0;
						atk_heros_4.innerHTML = 0;
						def_heros_4.innerHTML = 0;
						bouton_atk_heros_4.style.opacity = "0.5";
						bouton_atk_heros_4.disabled = true;
						bouton_def_heros_4.style.opacity = "0.5";
						bouton_def_heros_4.disabled = true;
						bouton_sepcial_heros_4.style.opacity = "0.5";
						bouton_sepcial_heros_4.disabled = true;
					}
				}
				setTimeout(texte_degat, 1000);
			}
		}
	}

	function attaque_monstre_3(){
		if (pv_monstre_3.value > 0){
			/*var heros_en_vie = 0
			if (pv_heros_1.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_2.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_3.value > 0){
				heros_en_vie += 1;
			}
			if (pv_heros_4.value > 0){
				heros_en_vie += 1;
			}
			var cible_monstre = nb_alea(1,heros_en_vie);*/
			var cible_monstre = nb_alea(1,4);
			if (cible_monstre == 1 && pv_heros_1.value > 0){
				pv_heros_1.value = (pv_heros_1.value + def_valeur_heros_1) -  atk_monstre_3;
				pv_heros_1.innerHTML = pv_heros_1.value;
				function texte_degat (){
					textAction.innerHTML = "Armored Sheepman inflige "+atk_monstre_3+" points de dégats à Kearia.";
					if (pv_heros_1.value <= 0){
						function mort_kearia (){
							textAction.innerHTML = "Kearia a succombé.";
						}
						setTimeout(mort_kearia, 1000);
						pv_heros_1.innerHTML = 0;
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
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 2 && pv_heros_2.value > 0){
				pv_heros_2.value = (pv_heros_2.value + def_valeur_heros_2) - atk_monstre_3;
				pv_heros_2.innerHTML = pv_heros_2.value;
				function texte_degat (){
					textAction.innerHTML = "Armored Sheepman inflige "+atk_monstre_3+" points de dégats à Barris.";
					if (pv_heros_2.value <= 0){
						function mort_barris (){
							textAction.innerHTML = "Barris a succombé.";
						}
						setTimeout(mort_barris, 1000);
						pv_heros_2.innerHTML = 0;
						pm_heros_2.innerHTML = 0;
						atk_heros_2.innerHTML = 0;
						def_heros_2.innerHTML = 0;
						bouton_atk_heros_2.style.opacity = "0.5";
						bouton_atk_heros_2.disabled = true;
						bouton_def_heros_2.style.opacity = "0.5";
						bouton_def_heros_2.disabled = true;
						bouton_sepcial_heros_2.style.opacity = "0.5";
						bouton_sepcial_heros_2.disabled = true;
					}	
				}
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 3 && pv_heros_3.value > 0){
				pv_heros_3.value = (pv_heros_3.value + def_valeur_heros_3) -  atk_monstre_3;
				pv_heros_3.innerHTML = pv_heros_3.value;
				function texte_degat (){
					textAction.innerHTML = "Armored Sheepman inflige "+atk_monstre_3+" points de dégats à Pegrim.";
					if (pv_heros_3.value <= 0){
						function mort_pegrim (){
							textAction.innerHTML = "Pegrim a succombé.";
						}
						setTimeout(mort_pegrim, 1000);
						pv_heros_3.innerHTML = 0;
						pm_heros_3.innerHTML = 0;
						atk_heros_3.innerHTML = 0;
						def_heros_3.innerHTML = 0;
						bouton_atk_heros_3.style.opacity = "0.5";
						bouton_atk_heros_3.disabled = true;
						bouton_def_heros_3.style.opacity = "0.5";
						bouton_def_heros_3.disabled = true;
						bouton_sepcial_heros_3.style.opacity = "0.5";
						bouton_sepcial_heros_3.disabled = true;
					}
				}
				setTimeout(texte_degat, 1000);
			}
			if (cible_monstre == 4 && pv_heros_4.value > 0){
				pv_heros_4.value = (pv_heros_4.value + def_valeur_heros_4) -  atk_monstre_3;
				pv_heros_4.innerHTML = pv_heros_4.value;
				function texte_degat (){
					textAction.innerHTML = "Armored Sheepman inflige "+atk_monstre_3+" points de dégats à Lussan.";
					if (pv_heros_4.value <= 0){
						function mort_lussan (){
							textAction.innerHTML = "Lussan a succombé.";
						}
						setTimeout(mort_lussan, 1000);
						pv_heros_4.innerHTML = 0;
						pm_heros_4.innerHTML = 0;
						atk_heros_4.innerHTML = 0;
						def_heros_4.innerHTML = 0;
						bouton_atk_heros_4.style.opacity = "0.5";
						bouton_atk_heros_4.disabled = true;
						bouton_def_heros_4.style.opacity = "0.5";
						bouton_def_heros_4.disabled = true;
						bouton_sepcial_heros_4.style.opacity = "0.5";
						bouton_sepcial_heros_4.disabled = true;
					}
				}
				setTimeout(texte_degat, 1000);
			}
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
		if (pv_heros_2.value > 0){
			if (bouton_atk_heros_2.disabled == true){
				bouton_atk_heros_2.style.opacity = "1.5";
				bouton_atk_heros_2.disabled = false;
			}
			if (bouton_def_heros_2.disabled == true){
				bouton_def_heros_2.style.opacity = "1.5";
				bouton_def_heros_2.disabled = false;
			}
			if (bouton_sepcial_heros_2.disabled == true){
				bouton_sepcial_heros_2.style.opacity = "1.5";
				bouton_sepcial_heros_2.disabled = false;
			}
		}
		if (pv_heros_3.value > 0){
			if (bouton_atk_heros_3.disabled == true){
				bouton_atk_heros_3.style.opacity = "1.5";
				bouton_atk_heros_3.disabled = false;
			}
			if (bouton_def_heros_3.disabled == true){
				bouton_def_heros_3.style.opacity = "1.5";
				bouton_def_heros_3.disabled = false;
			}
			if (bouton_sepcial_heros_3.disabled == true){
				bouton_sepcial_heros_3.style.opacity = "1.5";
				bouton_sepcial_heros_3.disabled = false;
			}
		}
		if (pv_heros_4.value > 0){
			if (bouton_atk_heros_4.disabled == true){
				bouton_atk_heros_4.style.opacity = "1.5";
				bouton_atk_heros_4.disabled = false;
			}
			if (bouton_def_heros_4.disabled == true){
				bouton_def_heros_4.style.opacity = "1.5";
				bouton_def_heros_4.disabled = false;
			}
			if (bouton_sepcial_heros_4.disabled == true){
				bouton_sepcial_heros_4.style.opacity = "1.5";
				bouton_sepcial_heros_4.disabled = false;
			}
		}
	}
	function tour (){
		textAction.innerHTML = "A votre tour"
	}

	function teste_defaite (){
		if (pv_heros_1.value <=0 && pv_heros_2.value <=0 && pv_heros_3.value <=0 && pv_heros_4.value <=0){
			textAction.innerHTML = "!!!! Vous avez tous péri !!!! ";
		}
	}
	setTimeout(attaque_monstre_1, 1000);
	setTimeout(attaque_monstre_2, 3000);
	setTimeout(attaque_monstre_3, 5000);
	setTimeout(reactivation_bouton, 6000);
	setTimeout(tour, 6500);
	setTimeout(teste_defaite, 6500);
	

	def_valeur_heros_1.value=0;
	def_valeur_heros_2.value=0;
	def_valeur_heros_3.value=0;
	def_valeur_heros_4.value=0;
	/*var defaite = function(){
		if (pv_heros_1.value <= 0 && pv_heros_2<= 0 && pv_heros_3.value <=0 && pv_heros_4.value <=0 ){
			textAction.innerHTML = " Vous avez tous péri ";
		} else {
			return false;
		}
	}
	if (defaite == false){
		setTimeout(reactivation_bouton, 500);
	}*/

}




bouton_atk_heros_1.onclick = attaque_heros_1;
bouton_atk_heros_2.onclick = attaque_heros_2;
bouton_atk_heros_3.onclick = attaque_heros_3;
bouton_atk_heros_4.onclick = attaque_heros_4;


bouton_def_heros_1.onclick = defence_heros_1;
bouton_def_heros_2.onclick = defence_heros_2;
bouton_def_heros_3.onclick = defence_heros_3;
bouton_def_heros_4.onclick = defence_heros_4;

bouton_sepcial_heros_1.onclick = soin;
bouton_sepcial_heros_2.onclick = balayage;
bouton_sepcial_heros_3.onclick = explosion;
bouton_sepcial_heros_4.onclick = tir_charge;

bouton_fin_de_tour.onclick = fin_de_tour;
