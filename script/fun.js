function dis(i){
    document.getElementById("fenlei").style.display="none"
    document.getElementById("free").style.display="none"
    document.getElementById("comm").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById(i).style.display="block"
}

function movin(i){
    document.getElementById(i).style.color="rgb(255, 255, 255)";
    document.getElementById(i).style.backgroundColor="rgba(0, 255, 0, 1)";
}

function movout(i){
    document.getElementById(i).style.color="rgb(0, 255, 0)";
    document.getElementById(i).style.backgroundColor="rgba(0, 255, 0, 0)";
}