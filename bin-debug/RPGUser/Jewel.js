var Jewel = (function () {
    function Jewel(name, quality) {
        this.name = "";
        this.quality = 0;
        this.durabilityAdded = 0;
        this.name = name;
        this.quality = quality;
        this.durabilityAdded = 5 * this.quality;
    }
    var d = __define,c=Jewel,p=c.prototype;
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map