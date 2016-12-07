class RPGUser {
	constructor() {
		var user = new User("account","password","Player");
		var hero1 = new Hero("战士",10,32,18)
		var hero2 = new Hero("骑士",6,15,35) 
		var arm1 = new Arms("斧头",30)
		var arm2 = new Arms("骑士剑",45)
		var jewel1 = new Jewel("水晶",10)
		var jewel2 = new Jewel("宝石",20)
		var jewel3 = new Jewel("钻石",30)
		arm1.addJewel(jewel1);
		arm1.addJewel(jewel2);
        arm2.addJewel(jewel3);
		hero1.addArms(arm1);
		hero2.addArms(arm2);
		user.addHeros(hero1);
		user.addHeros(hero2);
		user.display();
	}
}