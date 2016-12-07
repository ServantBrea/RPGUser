var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    };
    return desc;
};
var Hero = (function () {
    function Hero(name, level, strength, physique) {
        this.name = "";
        this.level = 1;
        this.strength = 1;
        this.physique = 1;
        this.plus_attack = 0;
        this.plus_defense = 0;
        this.armsList = new Array();
        this.name = name;
        this.level = level;
        this.strength = strength;
        this.physique = physique;
        this.updateData();
    }
    var d = __define,c=Hero,p=c.prototype;
    p.updateData = function () {
        if (this.armsList.length > 0) {
            this.plus_attack = 0;
            this.plus_defense = 0;
            for (var i = 0; i < this.armsList.length; i++) {
                this.plus_attack += this.armsList[i].attack;
                this.plus_defense += this.armsList[i].defense;
            }
        }
    };
    d(p, "life"
        ,function () {
            return (this.level * 0.1 + 1) * this.physique * 50;
        }
    );
    d(p, "attack"
        ,function () {
            return (this.level * 0.08 + 1) * this.strength * 40 + this.plus_attack;
        }
    );
    d(p, "defense"
        ,function () {
            return (this.level * 0.05 + 1) * this.physique * 30 + this.plus_defense;
        }
    );
    d(p, "fightingCapacity"
        ,function () {
            return (this.level * 0.2 + 1) * (this.life * 0.2 + this.defense * 0.3 + this.attack * 0.5);
        }
    );
    p.addArms = function (arm) {
        this.armsList.push(arm);
        this.updateData();
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map