function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++){
        line += "#";
    }
    return line;
}

function makeSquare(size){
    let square = "";
    square = makeRectangle(size, size);
    return square;
}

function makeRectangle(width, height){
    let rectangle = "";
    for (let i = 0; i < height; i++){
        rectangle += makeLine(width + "\n");
    }
    return rectangle;
}

function makeDownwardStairs (height){
    let stairs = "";
    for (let i = 0; i < height; i++){
        stairs += "\n" + makeLine(i+1);
    }
    return stairs.slice(0, -1);;
}

function makeSpaceLine (numSpaces, numChars){
    let line = "";
    for (let i = 0; i < numChars; i++){
        line += "#";
    }
    for (let i = 0; i < numSpaces; i++){
        line = " " + line + " ";
    }
    return line;
}

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height){
    let diamond = " "
    diamond = makeIsoscelesTriangle(height) + "\n" + reverse(makeIsoscelesTriangle(height));
    return diamond;
}

console.log(makeDiamond(5));