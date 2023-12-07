var buttons = document.getElementsByClassName("buttons");

function showContent(content, id) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "rgba(10, 20, 150, 0.8)";
    }
    document.getElementById("details").style.display = "block";
    document.getElementById("details").style.opacity = "1";
    let contentElement = document.getElementById("content");
    contentElement.innerHTML = content;
    document.getElementById(id).style.backgroundColor = "rgba(10, 20, 190, 1)";
}

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");

let P1_Content = "In 2013, an outbreak of a mutant Cordyceps fungus ravages the United States, transforming its human hosts into aggressive creatures. In the suburbs of Austin, Texas, Joel flees the chaos with his brother, Tommy, and daughter, Sarah. As they flee, Sarah is shot by a soldier and dies in Joel's arms.";
let P2_Content = "Twenty years later, civilization has been decimated by the infection. Joel works as a smuggler with his partner, Tess, in a quarantine zone in Boston, Massachusetts. They hunt down Robert, a black-market dealer, to recover a stolen weapons cache. Before Tess kills him, Robert reveals he traded the cache with the Fireflies, a rebel militia opposing the quarantine zone authorities. The Fireflies' leader, Marlene, promises to double their cache in return for smuggling a teenage girl, Ellie, to Fireflies hiding in the Massachusetts State House. While sneaking out at night, Joel and Tess discover Ellie is infected; she claims she is immune and may lead to a cure. At the State House, the trio discover the Fireflies have been killed and Tess reveals she has been infected. Believing in Ellie's importance, she sacrifices herself against pursuing soldiers so Joel and Ellie can escape. Joel decides to find Tommy, a former Firefly, in the hope that he can locate others.";
let P3_Content = "With the help of Bill, a smuggler and survivalist in Lincoln, Massachusetts, Joel and Ellie acquire a working vehicle. Driving into Pittsburgh, Pennsylvania, Joel and Ellie are ambushed by bandits and their car is wrecked. They ally with two brothers, Henry and Sam. After they escape the city, Sam is bitten but hides it from the group. As his infection takes hold, Sam attacks Ellie, but Henry shoots him dead before taking his own life.";
let P4_Content = "In the fall, Joel and Ellie find Tommy in Jackson, Wyoming, where he has assembled a fortified settlement near a hydroelectric dam with his wife, Maria. Joel leaves Ellie with Tommy, but after she confronts him about Sarah, he lets her stay. Tommy directs them to a Firefly enclave at the University of Eastern Colorado. They find the university abandoned but learn the Fireflies have moved to a hospital in Salt Lake City, Utah. The two are attacked by bandits and Joel is severely wounded while escaping.";
let P5_Content = "During the winter, Ellie and Joel shelter in the mountains. Joel is on the brink of death and relies on Ellie to care for him. Hunting for food, Ellie encounters David and James, scavengers willing to trade medicine for food. After David reveals the university bandits were part of his group, Ellie becomes hostile. She leads David's group away from Joel but is captured; David intends to recruit her into his cannibal group. Ellie escapes after killing James, but David corners her in a burning restaurant. Meanwhile, Joel recovers from his wounds and sets out to find Ellie. He reaches her just as she kills David with a machete, an act that traumatizes her, and Joel comforts her before they flee.";
let P6_Content = "In the spring, Joel and Ellie arrive in Salt Lake City. Ellie is rendered unconscious after almost drowning before they are captured by a Firefly patrol. In the hospital, Marlene tells Joel that Ellie is being prepared for surgery: in hopes of producing a vaccine for the infection, the Fireflies must remove the infected portion of Ellie's brain, which will kill her. Unwilling to let Ellie die, Joel battles his way to the operating room, kills the lead surgeon, and carries the unconscious Ellie to the parking garage. He is confronted by Marlene, whom he shoots and kills to prevent the Fireflies from pursuing them. On the drive out of the city, when Ellie wakes up, Joel lies and tells her that the Fireflies had found other immune people but were unable to create a cure and have stopped trying. On the outskirts of Tommy's settlement, Ellie expresses her survivor guilt. At her insistence, Joel swears his story about the Fireflies is true.";

p1.addEventListener('click', () => {
    showContent(P1_Content, id="p1");
    
});

p2.addEventListener('click', () => {
    showContent(P2_Content, id="p2");
}
);

p3.addEventListener('click', () => {   
    showContent(P3_Content, id="p3");
}
);

p4.addEventListener('click', () => {
    showContent(P4_Content, id="p4");
}
);

p5.addEventListener('click', () => {
    showContent(P5_Content, id="p5");
}
);

p6.addEventListener('click', () => {
    showContent(P6_Content, id="p6");
}
);


document.getElementById("button_joel").addEventListener("click", function() {
    document.getElementById("joel").style.display = "None";
    document.getElementById("button_joel").style.display = "None";
    document.getElementById("des_joel").style.display = "block";
    document.getElementById("des_joel").style.opacity = "1";
    document.getElementById("des_joel").style.overflow = "auto";
});

document.getElementById("button_ellie").addEventListener("click", function() {
    document.getElementById("ellie").style.display = "None";
    document.getElementById("button_ellie").style.display = "None";
    document.getElementById("des_ellie").style.display = "block";
    document.getElementById("des_ellie").style.opacity = "1";
    document.getElementById("des_ellie").style.overflow = "auto";
});

document.getElementById("button_tommy").addEventListener("click", function() {
    document.getElementById("tommy").style.display = "None";
    document.getElementById("button_tommy").style.display = "None";
    document.getElementById("des_tommy").style.display = "block";
    document.getElementById("des_tommy").style.opacity = "1";
    document.getElementById("des_tommy").style.overflow = "auto";
});

document.getElementById("button_marlene").addEventListener("click", function() {
    document.getElementById("marlene").style.display = "None";
    document.getElementById("button_marlene").style.display = "None";
    document.getElementById("des_marlene").style.display = "block";
    document.getElementById("des_marlene").style.opacity = "1";
    document.getElementById("des_marlene").style.overflow = "auto";
});

document.getElementById("button_tess").addEventListener("click", function() {
    document.getElementById("tess").style.display = "None";
    document.getElementById("button_tess").style.display = "None";
    document.getElementById("des_tess").style.display = "block";
    document.getElementById("des_tess").style.opacity = "1";
    document.getElementById("des_tess").style.overflow = "auto";
});

document.getElementById("button_bill").addEventListener("click", function() {
    document.getElementById("bill").style.display = "None";
    document.getElementById("button_bill").style.display = "None";
    document.getElementById("des_bill").style.display = "block";
    document.getElementById("des_bill").style.opacity = "1";
    document.getElementById("des_bill").style.overflow = "auto";
});

