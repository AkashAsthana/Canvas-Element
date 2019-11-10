var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var mouse={
    x:undefined,
    y:undefined
}
var maxRadius = 40;
var minRadius = 3;

var colorArray = [
    "#234D51",
    "#9DD3D9",
    "#59C6D1",
    "#3B4F51",
    "#FF513F"
]

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    
});
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2,false);     
        c.fillStyle = this.color;
        c.fill();
        
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius <0 ){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity with mouseover

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&mouse.y - this.y < 50 && mouse.y - this.y >-50){
            if(this.radius < maxRadius){
                this.radius += 3;
            }
            
        }else if(this.radius > minRadius){
            this.radius -= 3;
        }

        this.draw();
    }
}

var circleArray = [];
for(var i=0;i<500;i++){
    var x = Math.random()*(window.innerWidth-(radius*2))+radius;
    var y = Math.random()*(window.innerHeight-(radius*2))+radius;
    var dy = (Math.random()-0.5)*10;
    var dx = (Math.random()-0.5)*10;
    var radius = Math.random()*4 + 1;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}



function init(){
    circleArray = [];
        for(var i=0;i<500;i++){
        var x = Math.random()*(window.innerWidth-(radius*2))+radius;
        var y = Math.random()*(window.innerHeight-(radius*2))+radius;
        var dy = (Math.random()-0.5)*10;
        var dx = (Math.random()-0.5)*10;
        var radius = Math.random()*4 + 1;
        circleArray.push(new Circle(x,y,dx,dy,radius));
    
}};

 function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0 ,window.innerWidth, window.innerHeight);
    
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }

}
animate();














