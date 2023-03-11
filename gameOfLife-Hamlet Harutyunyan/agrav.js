class Agrav {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 20
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
        let found = [];

        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }


        }

        return found

    }
    mul() {

        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)
        if (newCell && this.energy > 5) {
            let newX = newCell[0];
            let newY = newCell[1];

            let ag = new Agrav(newX, newY);
            matrix[newY][newX] = 5;
            agravArr.push(ag);

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

            for (let i = 0; i < mrjyunArr.length; i++) {
                if (mrjyunArr[i].x == newX && mrjyunArr[i].y == newY) {
                    mrjyunArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 5;
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

            matrix[newY][newX] = 5;
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

        for (let i = 0; i < agravArr.length; i++) {
            if (agravArr[i].x == this.x && agravArr[i].y == this.y) {
                agravArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }


}
