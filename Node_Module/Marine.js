class Marine {
    constructor(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

     Attack(attacked) {
        attacked.hp -= this.attack;
        console.log(this.name + "이 " + attacked.name+"을 공격했습니다.");
        console.log(attacked.name+"의 hp가 "+(attacked.hp+20)+"에서 "+attacked.hp+"가 되었습니다.");
        console.log();

        if (attacked.hp <= 0) {
            console.log(attacked.name+"이 죽었습니다.");
            console.log(this.name+"이 이겼습니다.")
        }
    }

};

module.exports = Marine;