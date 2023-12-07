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

let P1_Content = "Geralt and his mentor Vesemir arrive at the town of White Orchard after receiving a letter from Geralt's long-lost lover Yennefer. After defeating a griffin for the local Nilfgaardian garrison, Geralt accompanies Yennefer to the city of Vizima, where they meet with Emperor Emhyr. Emhyr orders Geralt to find Ciri, who is Emhyr's biological, and Geralt's adopted daughter. Ciri is a Child of the Elder Blood, the last heir to an ancient Elven bloodline that grants her the power to manipulate time and space, and is being relentlessly stalked by the enigmatic Wild Hunt. Geralt learns of three places Ciri was recently seen: the war-ravaged swamp province of Velen, the free city-state of Novigrad, and the Skellige Isles.";
let P2_Content = "In Velen, Geralt tracks Ciri to the fortress of the Bloody Baron, a warlord who recently took over the province. The Baron demands that Geralt find his missing wife and daughter in exchange for information about Ciri. Geralt learns that the Baron drove his own family away with his drunken rages; while his daughter fled to Oxenfurt, his wife Anna became a servant of the Crones, three malicious witches that watch over Velen. He also discovers that Ciri was briefly captured by the Crones, but escaped to the Baron's stronghold before continuing on to Novigrad.";
let P3_Content = "At Novigrad, Geralt reunites with his former lover Triss Merigold, who has gone underground to escape persecution by the Church of the Eternal Fire. He learns that Ciri and his old friend Dandelion ran afoul of Novigrad's powerful crime bosses while seeking to break a curse related to a mysterious phylactery. With the help of Triss and several old acquaintances, Geralt rescues Dandelion, who tells him that Ciri teleported away to escape pursuit by guards.";
let P4_Content = "Geralt sails to Skellige and reunites with Yennefer, who is investigating a magical explosion near where Ciri was last seen. They discover that Ciri visited the island of Lofoten, but when the Wild Hunt attacked again, fled in a boat with an unidentified elf. When the boat returned to shore, its only occupant was Uma, a deformed creature Geralt previously saw living with the Bloody Baron. Deducing that Uma was the victim of the curse Ciri tried to lift in Novigrad, Geralt collects Uma in Velen and takes him to the nearly abandoned witcher school at Kaer Morhen. Working with Yennefer and his fellow witchers, Geralt breaks the curse and restores Uma's true identity: Avallac'h, Ciri's teacher and the elf seen with her on her travels. Avallac'h tells Geralt that he placed Ciri in an enchanted sleep on the Isle of Mists to keep her temporarily safe from the Wild Hunt.";
let P5_Content = "Geralt finds Ciri on the Isle of Mists and learns from her that Eredin, the leader of the Wild Hunt, wants her Elder Blood powers to save his homeworld from a catastrophe known as the White Frost. They return to Kaer Morhen and fortify it against the inevitable arrival of the Hunt. In the battle that ensues, Vesemir is killed, causing Ciri to unleash her uncontrolled power and temporarily send the Hunt into retreat."
let P6_Content = "Realizing that the Hunt will never stop, Ciri and Geralt decide to fight Eredin at a time and place of their choosing. While Triss and Yennefer reform the Lodge of Sorceresses to aid in the fight, Geralt recovers the Sunstone, an artifact that can communicate between worlds. Using the Sunstone, Avallac'h lures Eredin to Skellige, where Geralt defeats him in combat. As he dies, Eredin tells Geralt that Avallac'h has betrayed him, and plans to use Ciri's power for his own ends.";

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


document.getElementById("button_geralt").addEventListener("click", function() {
    document.getElementById("geralt").style.display = "None";
    document.getElementById("button_geralt").style.display = "None";
    document.getElementById("des_geralt").style.display = "block";
    document.getElementById("des_geralt").style.opacity = "1";
    document.getElementById("des_geralt").style.overflow = "auto";
});

document.getElementById("button_ciri").addEventListener("click", function() {
    document.getElementById("ciri").style.display = "None";
    document.getElementById("button_ciri").style.display = "None";
    document.getElementById("des_ciri").style.display = "block";
    document.getElementById("des_ciri").style.opacity = "1";
    document.getElementById("des_ciri").style.overflow = "auto";
});

document.getElementById("button_yennefer").addEventListener("click", function() {
    document.getElementById("yennefer").style.display = "None";
    document.getElementById("button_yennefer").style.display = "None";
    document.getElementById("des_yennefer").style.display = "block";
    document.getElementById("des_yennefer").style.opacity = "1";
    document.getElementById("des_yennefer").style.overflow = "auto";
});

document.getElementById("button_triss").addEventListener("click", function() {
    document.getElementById("triss").style.display = "None";
    document.getElementById("button_triss").style.display = "None";
    document.getElementById("des_triss").style.display = "block";
    document.getElementById("des_triss").style.opacity = "1";
    document.getElementById("des_triss").style.overflow = "auto";
});

document.getElementById("button_vesemir").addEventListener("click", function() {
    document.getElementById("vesemir").style.display = "None";
    document.getElementById("button_vesemir").style.display = "None";
    document.getElementById("des_vesemir").style.display = "block";
    document.getElementById("des_vesemir").style.opacity = "1";
    document.getElementById("des_vesemir").style.overflow = "auto";
});

document.getElementById("button_caranthir").addEventListener("click", function() {
    document.getElementById("caranthir").style.display = "None";
    document.getElementById("button_caranthir").style.display = "None";
    document.getElementById("des_caranthir").style.display = "block";
    document.getElementById("des_caranthir").style.opacity = "1";
    document.getElementById("des_caranthir").style.overflow = "auto";
});

