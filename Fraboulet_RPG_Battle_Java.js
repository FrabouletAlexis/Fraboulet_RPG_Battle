// -------- Stats perso -------- //
var pv_heros_1 = document.getElementById("pv_heros_1");
var pm_heros_1 = document.getElementById("pm_heros_1");
var def_heros_1= document.getElementById("defence_heros_1");
var atk_heros_1 = 10;

// -------- Stats monstre -------- //
var pv_monstre_1 = document.getElementById("pv_monstre_1");

// -------- Boutons -------- //
var bouton_atk = document.getElementById("atk_heros_1");
var bouton_def = document.getElementById("def_heros_1");
var bouton_spe = document.getElementById("special_heros_1");

// -------- Boite dialogue -------- //
var textAction = document.getElementById("boite_dialogue");

// Caractéristiques Personnage // 
pv_heros_1.value = 100;
pv_heros_1.innerHTML = pv_heros_1.value;

// Caractéristiques monstre //
pv_monstre_1.value = 4800;
pv_monstre_1.innerHTML = pv_monstre_1.value;


function atk(){
		
	if (bouton_atk.disabled == false){
		
		pv_monstre_1.value -= atk_heros_1;
		bouton_atk.style.opacity = "0.5";
		bouton_atk.value = "Indisponible";
		bouton_atk.disabled = true;
		textAction.innerHTML = "Vous avez infligé "+atk_heros_1+" points de dégats";
		
		bouton_def.disabled = true;
		bouton_spe.disabled = true;
		
		bouton_def.style.opacity = "0.5";
		bouton_spe.style.opacity = "0.5";		
	}	
}


function stat_monstre () {

	var stat=document.getElementById("stat_monstre");
	if(stat.style.visibility == "hidden") {
		stat.style.visibility = "visible";
	} else {
		stat.style.visibility = "hedden";
	}
}




bouton_atk.onclick = atk;
