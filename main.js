var timer = 0


function updateElements(){
    document.getElementById("timer").innerHTML = timer.toLocaleString("en-UK")
}



window.setInterval(function(){
	timer++
    updateElements()
}, 1000);