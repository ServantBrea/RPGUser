var User = (function () {
    function User(account, password, name) {
        this.account = "";
        this.password = "";
        this.name = "";
        this.heroList = new Array();
        this.account = account;
        this.password = password;
        this.name = name;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "fightingCapacity"
        ,function () {
            if (this.heroList.length > 0) {
                var sum = 0;
                for (var i = 0; i < this.heroList.length; i++) {
                    sum += this.heroList[i].fightingCapacity;
                }
            }
            return sum;
        }
    );
    p.addHeros = function (hero) {
        this.heroList.push(hero);
    };
    p.display = function () {
        console.log("总战斗力：" + this.fightingCapacity);
    };
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map