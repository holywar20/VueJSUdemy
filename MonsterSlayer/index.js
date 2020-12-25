new Vue({
	el: "#app",
	data : {
		state : {
			gameStarted : false
		},
		attackHistory : [],
		youHP : 100,
		monsterHP : 100
	},
	computed : {
	
	},
	methods : {
		newGame(){ 
			this.state.gameStarted = true;
			this.monsterHP = 100;
			this.youHP = 100;
		},
		attack(){ console.log('a thing was done!')
			let dmg = 20 + Math.round( ( Math.random() * 6 ) );
			this.attackHistory.push( { 'attacker' : "Player" , 'text' : `Player dealt ${dmg} to the monster` } )
			this.monsterHP = this.monsterHP - dmg;

			if( this.checkWin() ){ return null; }
			this.monsterAttack();
			if( this.checkLose() ){ return null; }
		},
		spec(){ console.log('a thing was done!')
			let dmg = 30 + Math.round( ( Math.random() * 6 ) );
			this.attackHistory.push( {'attacker' : "Player" , 'text' :`Badass Roundhouse Kick`})
			this.monsterHP = this.monsterHP - dmg;
			
			if( this.checkWin() ){ return null; }
			this.monsterAttack();
			if( this.checkLose() ){ return null; }
		},
		heal(){ console.log('a thing was done!')
			let heal = 15 + Math.round( ( Math.random() * 4 ) );
			this.attackHistory.push({'attacker' : "Player" , 'text' : `Plaher healed for ${heal} HP`});
			this.youHP = this.youHP + heal;

			if( this.checkWin() ){ return null; }
			this.monsterAttack();
			if( this.checkLose() ){ return null; }
		},
		giveUp(){ console.log('a thing was done!')
			this.attackHistory = [];
			this.state.gameStarted = false;
		},

		monsterAttack(){
			let monsterDmg = 10 + Math.round( ( Math.random() * 6 ) );
			this.attackHistory.push({'attacker' : "Monster" , "text" : `Monster dealt ${monsterDmg} to the player.` });
			this.youHP = this.youHP - monsterDmg;
		},
		checkWin(){
			let win = (this.monsterHP <= 0);

			if( win ){
				this.state.gameStarted = false;
			}

			return win;
		},
		checkLose(){
			let lose = (this.youHP <= 0);

			if( lose ){
				this.state.gameStarted = false;
			}

			return lose;
		}
	},
});