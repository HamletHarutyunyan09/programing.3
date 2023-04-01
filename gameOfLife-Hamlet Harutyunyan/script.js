// function matrixGenerator(matrixSize, grass, grassEater, predator, mrjyun, agrav, mexu) {
//     var matrix = []

//     for (let i = 0; i < matrixSize; i++) {
//         matrix.push([])
//         for (let j = 0; j < matrixSize; j++) {
//             matrix[i].push(0)

//         }
//     }


//     for (let i = 0; i < grass; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 1

//     }

//     for (let i = 0; i < grassEater; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2

//     }



//     for (let i = 0; i < predator; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3


//     }

//     for (let i = 0; i < mrjyun; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4
//     }

//     for (let i = 0; i < agrav; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 5

//     }
//     for (let i = 0; i < mexu; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 6

//     return matrix

//     }



//}
/////
// var matrix = matrixGenerator(30, 40, 15, 5, 6,8,10)
const socket = io()
var side = 25
//
// var grassArr = []
// var grassEaterArr = []
// var predatorArr = []
// var mrjyunArr = []
// var agravArr = []
// var mexuArr = []


////////
function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side, matrix.length * side)

   // for (let y = 0; y < matrix.length; y++) {
       // for (let x = 0; x < matrix[y].length; x++) {

    //         if (matrix[y][x] == 1) {
    //             var gr = new Grass(x, y)
    //             grassArr.push(gr)
    //         } else if (matrix[y][x] == 2) {
    //             var grEat = new GrassEater(x, y)
    //             grassEaterArr.push(grEat)
    //         } else if (matrix[y][x] == 3) {
    //             var pred = new Predator(x, y)
    //             predatorArr.push(pred)
    //         } else if (matrix[y][x] == 4) {
    //             var mrj = new Mrjyun(x, y)
    //             mrjyunArr.push(mrj)
    //         } else if (matrix[y][x] == 5) {
    //             var ag = new Agrav(x, y)
    //             agravArr.push(ag)
    //         }else if (matrix[y][x] == 6){
    //             var mex = new Mexu(x,y)
    //             mexuArr.push(mex)
    //         }
           
    //     }

    // }
}
////
function changeColor(matrix){

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("brown")
            } else if (matrix[y][x] == 5) {
                fill("black")
            } else if (matrix[y][x] == 6) {
                fill("orange")
            }else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }

    }
    socket.on("send matrix",changeColor)

//     for (let i in grassArr) {
//         grassArr[i].mul()
//     }

//     for (let i in grassEaterArr) {
//         grassEaterArr[i].eat()

//     }



//     for (let i in predatorArr) {
//         predatorArr[i].eat()
//     }
//     for (let i in mrjyunArr) {
//         mrjyunArr[i].eat()
//     }
//     for (let i in agravArr) {
//         agravArr[i].eat()
        
//     }
//     for (let i in mexuArr) {
//         mexuArr[i].eat()

// }
//}
socket.on("send matrix",changeColor)
}
