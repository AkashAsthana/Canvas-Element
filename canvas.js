var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//*************/youtube playlist by 'chris courses' on canvas element************//

/* c.fillStyle = 'rgba(200,200,200,0.5)';
c.fillRect(100,100,100,100);
c.fillRect(400,100,200,300);
c.fillStyle = 'rgba(100,200,100,0.5)';
c.fillRect(700,200,200,300);
c.fillRect(50,50,10,10);

c.beginPath();
c.moveTo(100,200);
c.lineTo(200,300);
c.lineTo(50,40);
c.strokeStyle = "black";
c.stroke();


for(var i=0;i<10;i++)
{
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
    var color = "rgb("+r+", "+g+", "+b+")";
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerWidth;
    c.beginPath();
    c.arc(x, y, 40, 0, Math.PI*2, false);
    c.strokeStyle = color;
    c.stroke();
} */
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














