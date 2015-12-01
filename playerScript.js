﻿#pragma strict

import System.Collections.Generic;

private var health:float = 100;
//var fire = GameObject.FindGameObjectWithTag("Player").GetComponent(FireScript);

var inventory = new Dictionary.<String,int>();
inventory["wood"] = 0;
inventory["wire"] = 0;
inventory["hammer"] = 0;
inventory["hacksaw"] = 0;
inventory["axe"] = 0;
inventory["nails"] = 0;
inventory["total"] = 0;

InvokeRepeating("reduceHealth",120,120);

function Update() {
	// If Health is 0, Game Over
	if(health == 0){
		Application.LoadLevel("GameOver");
	}
	
	// If Player Collects all 6 Items, you win!
	if(inventory["total"] == 6){
		Application.LoadLevel("Finish");
	}
	
	//if(Input.GetKeyDown(KeyCode.LeftShift)){;
        //fire.BeginEffect();
    //}
}

function reduceHealth(){
	health--;
}

function getHealth(){
	return health;
}

// Pick Up Items
function OnTriggerEnter(other:Collider) {

	// wood
	if(other.tag == "wood") {
		inventory["wood"] += 1;
		inventory["total"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("wood_ui").GetComponent(UI.RawImage).texture = Resources.Load("Wood_E", typeof(Texture)) as Texture;
	}
	
	// axe
	if(other.tag == "axe") {
		inventory["axe"] += 1;
		inventory["total"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("axe_ui").GetComponent(UI.RawImage).texture = Resources.Load("Axe_E", typeof(Texture)) as Texture;
	}
	
	// Barbed Wire
	if(other.tag == "wire") {
		inventory["wire"] += 1;
		inventory["total"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("wire_ui").GetComponent(UI.RawImage).texture = Resources.Load("Wire_E", typeof(Texture)) as Texture;
	}

	// Nail
	if(other.tag == "nail") {
		inventory["nails"] += 1;
		inventory["total"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("nails_ui").GetComponent(UI.RawImage).texture = Resources.Load("Bolt_E", typeof(Texture)) as Texture;
	}

	// Hacksaw
	if(other.tag == "hacksaw") {
		inventory["hacksaw"] += 1;
		inventory["total"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("hacksaw_ui").GetComponent(UI.RawImage).texture = Resources.Load("HackSaw_E", typeof(Texture)) as Texture;
	}	

	// hammer
	if(other.tag == "hammer") {
		inventory["hammer"] += 1;
		inventory["total"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("hammer_ui").GetComponent(UI.RawImage).texture = Resources.Load("Hammer_E", typeof(Texture)) as Texture;
	}
}