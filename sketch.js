var rat, cat, catImg, bckg, bckgImg;
var ratOver, catOver, ratMov, catMov;

function preload() {
    //loading the images
    ratImg = loadImage("images/jerryTwo.png")
    bckgImg = loadImage("images/garden.png")
    catImg = loadAnimation("images/tomOne.png");
    catMov = loadAnimation("images/tomTwo.png", "images/tomThree.png")
    ratMov = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    catOver = loadAnimation("images/tomFour.png")
    ratOver = loadAnimation("images/jerryFour.png")
}

function setup() {
    createCanvas(800, 660);
    
    //creating the rat, cat and bakground sprites
    cat = createSprite(620, 450, 50, 100);
    cat.addAnimation("cat", catImg);
    cat.addAnimation("running", catMov)
    cat.addAnimation("over", catOver)
    cat.scale = 0.15
    cat.shapeColor = "green";

    rat = createSprite(100, 450, 100, 50);
    rat.shapeColor = "blue";
    rat.addImage(ratImg)
    rat.addAnimation("running", ratMov)
    rat.addAnimation("over2", ratOver)
    rat.scale = 0.1
    
    bckg = createSprite(400, 270, 800, 400)
    bckg.addImage(bckgImg)
    bckg.scale = 1
    bckg.depth = cat.depth - 1
}

function draw() {
    background(0);
    
    //doing it so that when cat touches the mouse, the end images load in
    if (cat.x - rat.x < (cat.width - rat.width) / 2) {
        rat.changeAnimation("over2", ratOver)
        cat.changeAnimation("over", catOver)
        cat.velocityX = 0;
    }

    drawSprites();
}

function keyPressed() {
    
    //doing it so that when left key is pressed, cat moves towards the mouse
    if (keyDown(LEFT_ARROW)) {
        cat.velocityX = -5
        cat.changeAnimation("running", catMov)
        rat.changeAnimation("running", ratMov)
    }
}


