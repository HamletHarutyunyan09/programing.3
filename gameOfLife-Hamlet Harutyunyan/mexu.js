let LivingCreature = require("./LivingCreature")
module.exports = class Mexu extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 22
        this.direction = []

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCoordinates()


        return super.chooseCell(char)

    }
    mul() {

        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)
        if (newCell && this.energy > 5) {
            let newX = newCell[0];
            let newY = newCell[1];

            let ag = new Mexu(newX, newY);
            matrix[newY][newX] = 6;
            mexuArr.push(mex);

            this.energy = 9;
        }

    }
    eat() {
        let emptyCell = this.chooseCell(3);
        let newCell = random(emptyCell)
        console.log(newCell);
        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < mexuArr.length; i++) {
                if (mexuArr[i].x == newX && mexuArr[i].y == newY) {
                    mexuArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 30) {
                this.mul()
            }
        }



        else {
            this.move()
        }
    }


    move() {

        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {

        for (let i = 0; i < mexuArr.length; i++) {
            if (mexuArr[i].x == this.x && mexuArr[i].y == this.y) {
                mexuArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }


}
