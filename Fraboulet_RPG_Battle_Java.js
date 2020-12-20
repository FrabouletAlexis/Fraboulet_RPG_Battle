// ----------------------------------------- Boutons ----------------------------------------- //
var bouton_atk_heros_1 = document.getElementById("atk_heros_1");
var bouton_def_heros_1 = document.getElementById("def_heros_1");
var bouton_soin = document.getElementById("special_heros_1");

var bouton_atk_heros_2 = document.getElementById("atk_heros_2");
var bouton_def_heros_2 = document.getElementById("def_heros_2");
var bouton_balayage = document.getElementById("special_heros_2");

var bouton_atk_heros_3 = document.getElementById("atk_heros_3");
var bouton_def_heros_3 = document.getElementById("def_heros_3");
var bouton_poison = document.getElementById("special_heros_3");

var bouton_atk_heros_4 = document.getElementById("atk_heros_4");
var bouton_def_heros_4 = document.getElementById("def_heros_4");
var bouton_tir_charge = document.getElementById("special_heros_4");

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
var atk_monstre_1 = 50;
var pv_monstre_1 = document.getElementById("pv_monstre_1");
pv_monstre_1.value = 4800;
pv_monstre_1.innerHTML = pv_monstre_1.value;

// Monstre 3 //
var pv_monstre_3 = document.getElementById("pv_monstre_3");
var monstre_3= document.getElementById("monstre_3");
var nom_monstre_3 = document.getElementById("nom_monstre_3");
pv_monstre_3.value = 360;
pv_monstre_3.innerHTML = pv_monstre_3.value;


function nb_alea(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function attaque_heros_1(){
		
	if (bouton_atk_heros_1.disabled == false){
		
		pv_monstre_1.value -= atk_heros_1.value;
		pv_monstre_1.innerHTML = pv_monstre_1.value;
		bouton_atk_heros_1.style.opacity = "0.5";
		
		bouton_atk_heros_1.disabled = true;
		textAction.innerHTML = "Vous avez infligé "+atk_heros_1.value+" points de dégats.";
	}	
}

function defence_heros_1(){
	if (bouton_def_heros_1.disabled == false){
		def_valeur_heros_1= def_heros_1.value;
		bouton_def_heros_1.style.opacity = "0.5";

		bouton_def_heros_1.disabled = true;
		textAction.innerHTML = "Vous résistérez à "+def_heros_1.value+" points de dégats si vous été attaqué."
	}
}

function soin(){
	if (bouton_soin.disabled == false){
		if (pm_heros_1.value > mana_soin){
			if(pv_heros_1.value < pv_heros_2.value ){
				if (pv_heros_1.value < pv_max_heros_1){
					pv_heros_1.value = pv_heros_1.value + pv_soin;
					pm_heros_1.value = pm_heros_1.value - mana_soin;
					textAction.innerHTML = "Kearia regagne"+pv_soin+" points de vie.";
					if (pv_heros_1.value > pv_max_heros_1){
						pv_heros_1 = pv_max_heros_1;
					}
					bouton_atk_heros_1.style.opacity = "0.5";
					bouton_atk_heros_1.disabled = true;
				}
			}
		}
	}
}

function balayage (){}

function poison (){}

function tir_charge () {}
 
function attaque_monstre_1(){
	if (pv_monstre_1 > 0) {
		var heros_en_vie = 0;
		if (pv_heros_1 > 0){
			heros_en_vie = heros_en_vie +1;
		}

		var cible_monstre_1 = nb_alea(1,heros_en_vie);
			if (cible_monstre_1 == 1) {
				pv_heros_1.value = pv_heros_1 -(atk_monstre_1-def_valeur_heros_1);
				textAction.innerHTML = "Vous subissez "+atk_monstre_1+" points de dégats.";
				if (pv_heros_1.value == 0){
					textAction.innerHTML = "Vous avez sucombez"
				}
			}
	} 
}



attaque_monstre_1();
bouton_atk_heros_1.onclick = attaque_heros_1;
bouton_def_heros_1.onclick = defence_heros_1;
bouton_soin.onclick = soin;