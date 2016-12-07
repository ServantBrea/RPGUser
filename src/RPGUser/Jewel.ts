class Jewel {
	
	private name = "";
	private quality = 0;
	durabilityAdded = 0;

	constructor(name:string,quality:number) {
		this.name = name;
		this.quality = quality;
		this.durabilityAdded = 5 * this.quality; 
	}
}