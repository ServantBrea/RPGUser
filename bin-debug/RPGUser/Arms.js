var Arms = (function () {
    function Arms(name, self_durability) {
        this.name = "";
        this.self_durability = 0;
        this.plus_durability = 0;
        this.jewelList = new Array();
        this.name = name;
        this.self_durability = self_durability;
        this.updateData();
    }
    var d = __define,c=Arms,p=c.prototype;
    p.updateData = function () {
        if (this.jewelList.length > 0) {
            this.plus_durability = 0;
            for (var i = 0; i < this.jewelList.length; i++) {
                this.plus_durability += this.jewelList[i].durabilityAdded;
            }
        }
    };
    d(p, "attack"
        ,function () {
            return 20 * (this.self_durability + this.plus_durability);
        }
    );
    d(p, "defense"
        ,function () {
            return 15 * (this.self_durability + this.plus_durability);
        }
    );
    p.addJewel = function (jewel) {
        this.jewelList.push(jewel);
        this.updateData();
    };
    return Arms;
}());
egret.registerClass(Arms,'Arms');
//# sourceMappingURL=Arms.js.map