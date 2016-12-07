class Arms {

    private name = "";
	private self_durability = 0;
	private plus_durability = 0;
	private jewelList:Jewel[] = new Array(); 

	constructor(name:string,self_durability:number) {
		this.name = name;
		this.self_durability = self_durability;
		this.updateData();
	}

	private updateData() {
        if(this.jewelList.length > 0) {
			this.plus_durability = 0;
			for(var i = 0;i < this.jewelList.length;i++) {
				this.plus_durability += this.jewelList[i].durabilityAdded;
			}
		}
	}

	get attack() {
		return 20 * (this.self_durability + this.plus_durability);
	}

	get defense() {
		return 15 * (this.self_durability + this.plus_durability);
	}

	addJewel(jewel:Jewel) {
		this.jewelList.push(jewel);
		this.updateData();
	}
}