document.addEventListener("DOMContentLoaded", postData);

const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get("fname");
const sleep = params.get("sleep")
const moods = params.getAll("moods")
const senses = params.get("senses")
const stress = params.get("stress")
const outside = params.get("outside")
const hk = params.get("hk")
const adj = params.get("adj")


let decision;
let image;

if (moods == "tired" || moods == "sad") {
    decision = "take a nap";
    image = "images/nap.jpg";
    message = "Since you may be feeling down, it is important to give your body some rest. Set a timer for 30 minutes and wake up feeling refreshed. And with glowing skin from your beauty sleep ;)";
} else if (stress == "very" || stress == "super") {
    decision = "workout";
    image = "images/workout.jpg";
    message = "Workout and release that stress of yours. You will have a clearer mind after.";
}  else if ((sleep >=7 ) && (senses == "smell" || senses == "taste")) {
    decision = "bake";
    image = "images/bake.jpg";   
    message = "Since you slept enough last night, you have enough energy to bake something nice. Be sure to smell all of the nice aromas from your ingredients as you bake and enjoy eating your sweet creation :)";
} else if (hk == "no" || senses == "sight") {
    decision = "watch some Hello Kitty";
    image = "images/watchtv.jpg";
    message = "Sit down and enjoy. This children's show is very relaxing and peaceful.";
} else if (outside == "longer") {
    decision = "take a walk";
    image = "images/walk.jpeg";
    message = "You need to take a walk outside. Take deep breaths. Try to be mindful of what you see in nature, you might find some beautiful sights :)";
} else if (senses == "hearing" || adj == "exciteable") {
    decision = "listen to music";
    image = "images/music.png";
    message = "Go lie on your bed and listen to some soothing and relaxing music. Or something fun and energetic! It's up to you.";
} else {
    decision = "take a nice warm shower";
    image = "images/shower.jpg";
    message = "We all shower. (hope so) As you take your relaxing steamy shower, feel each drop of water hit your body. Try to be mindful and aware of the water sounds, and smell the soap scents.";
}

if (hk == "stupid") {
    message += " BTW, I saw how you called my question stupid back there..."
}
if (hk == "no") {
    message += " You'll change your mind about Hello Kitty."
} 
if (adj == "bored") {
    message += " And, you should check that attitude of yours (this quiz is far from boring)"
}


//writing html code
function postData() {
    const container = document.getElementById("results");
    container.innerHTML = `<h1>Hi ${name}! You should ${decision}!</h1>
                            <img src="${image}"></img>
                            <p>${message}</p>`}


