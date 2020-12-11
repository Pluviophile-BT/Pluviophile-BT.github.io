    var cav = document.getElementById('content');
    var w = window.screen.width;
    var h = window.screen.height;
    var yPositions = Array(300).join(0).split(''); 
    var ctx = cav.getContext('2d');
    var draw = function(){

    ctx.fillStyle = 'rgba(0,0,0,.05)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = 'green';
    ctx.font = '20px';

    yPositions.map(function(y,index){
        text = String(Math.round(Math.random()));
        x = index*10;
        cav.getContext('2d').fillText(text,x,y);
        if(y>Math.random()*1e4){
            yPositions[index]=0;
        }else{
            yPositions[index]=y+10;
        }
    });
    }
    setInterval('draw()',30);

