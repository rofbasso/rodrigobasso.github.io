window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = ["#60d394","#d36060","#c060d3","#d3d160","#6860d3", "#60b2d3"];
    const keySound = [115, 101, 102, 106, 105, 108];

    //Lets get goin with the sound here
    pads.forEach((pad, index) =>{        
        pad.innerHTML = String.fromCharCode(keySound[index]);
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            creatBubbles(index);
        });      
    });

    function keyPlay(event){
        keySound.forEach((key, index) => {
            if(event.keyCode == key || event.which == key){
                sounds[index].currentTime = 0;
                sounds[index].play();
                creatBubbles(index);
            }            
        })
    }
    
    document.addEventListener("keypress", keyPlay);

    //Create a function tha makes bubbles
    const creatBubbles = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});

