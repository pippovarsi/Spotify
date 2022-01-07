/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ SETTING MENU $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "20%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ BUTTON LIKE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/



const musicPlayerButton = document.querySelector(".start-stop");
const likeButton = musicPlayerButton.nextElementSibling;
const downloadButton = likeButton.nextElementSibling;

downloadButton.addEventListener("click", () => (alert("Downloading")));
likeButton.addEventListener("click", likeOn_Off);


function likeOn_Off() {

    //likeButton.classList.remove("heart-icon");
    //likeButton.classList.add("heart-icon-replace");

    let condition;

    if (likeButton.classList.contains("heart-icon")) {

        likeButton.classList.remove("heart-icon");
        likeButton.classList.add("heart-icon-replace");

        alert("Elemento salvato in La Tua Libreria");

        condition = true;

        addPlaylistLiked(condition);

    } else if (likeButton.classList.contains("heart-icon-replace")) {

        likeButton.classList.remove("heart-icon-replace");
        likeButton.classList.add("heart-icon");

        alert("Elemento eleminato da La Tua Libreria");

        condition = false;

        addPlaylistLiked(condition);

    }

}

function addPlaylistLiked(condition) {

    const ul = document.querySelector(".playlist");

    const li = document.createElement("li");
    const playlistName = document.createElement("span");
    const likeElement = document.createElement("span");

    playlistName.textContent = "Emily In Paris (SoundTrack)";

    li.classList.add("mouseover", "delate");
    likeElement.classList.add("icon", "playingtime-icon");

    if (condition === true) {

        ul.append(li);
        li.append(playlistName);
        li.append(likeElement);


    } else if (condition === false) {

        /* MODO ALTERNATIVO DI ELMINARE L'ULTIMO ELEMENTO DELLA LISTA
        const parent = ul;
        const children = Array.from(parent.querySelectorAll(".mouseover"));

        console.log(children[children.length-1])

        children[children.length-1].remove();
        */

        const delateElement = document.querySelector(".delate");
        delateElement.remove();


    }

}

/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ MUSIC PLAYER $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// LIST OF SRC'S SONG (10 Track)

const srcTrack = new Array(
    "audio/Zaz - Je veux (Studio version, HD).mp3", // track01 src
    "audio/Zaz - Les Passants (Studio version, HD).mp3", // track02 src
    "audio/Ashley Park - Mon Soleil (Lyrics) ( From Emily in Paris soundtrack).mp3", //track03 src
    "audio/HIT SALE - Therapie TAXI  ft. RomÃ©o Elvis PAROLES.mp3", //track04 src
    "audio/ThÃ©rapie Taxi - EtÃ© 90 (Paroles).mp3", //track05 src
    "audio/Falling Slowly.mp3", //track06 src
    "audio/Just One Dance.mp3", //track07 src
    "audio/MaÃ®tre Gims - La MÃªme ft Vianney (Lyrics).mp3", //track08 src
    "audio/Stromae - Alors On Danse (Lyrics).mp3", //track09 src
    "audio/AngÃ¨le -  balance ton quoi (LYRICS).mp3", //track010 src
)


const button1 = document.querySelector(".btn-track1");
const button2 = document.querySelector(".btn-track2");
const button3 = document.querySelector(".btn-track3");
const button4 = document.querySelector(".btn-track4");
const button5 = document.querySelector(".btn-track5");
const button6 = document.querySelector(".btn-track6");
const button7 = document.querySelector(".btn-track7");
const button8 = document.querySelector(".btn-track8");
const button9 = document.querySelector(".btn-track9");
const button10 = document.querySelector(".btn-track10");

const div = document.querySelector(".musicplayer-container")


button1.addEventListener("click", createAudioElement1);
button2.addEventListener("click", createAudioElement2);
button3.addEventListener("click", createAudioElement3);
button4.addEventListener("click", createAudioElement4);
button5.addEventListener("click", createAudioElement5);
button6.addEventListener("click", createAudioElement6);
button7.addEventListener("click", createAudioElement7);
button8.addEventListener("click", createAudioElement8);
button9.addEventListener("click", createAudioElement9);
button10.addEventListener("click", createAudioElement10);


// button3.addEventListener('click', createAudioElement.bind(srcTrack[2], srcTrack); // does't work

//button3.addEventListener("click", createAudioElement(srcTrack[2], srcTrack)); // track number 3

function createAudioElement1() {


    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/Zaz - Je veux (Studio version, HD).mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();


    }


    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement2() {
    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/Zaz - Les Passants (Studio version, HD).mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();
    }

    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement3() {


    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/Ashley Park - Mon Soleil (Lyrics) ( From Emily in Paris soundtrack).mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();


    }


    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement4() {
    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/HIT SALE - Therapie TAXI  ft. RomÃ©o Elvis PAROLES.mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();
    }

    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement5() {


    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/ThÃ©rapie Taxi - EtÃ© 90 (Paroles).mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();


    }


    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement6() {
    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/Falling Slowly.mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();
    }

    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement7() {


    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/Just One Dance.mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();


    }


    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement8() {
    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/MaÃ®tre Gims - La MÃªme ft Vianney (Lyrics).mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();
    }

    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement9() {


    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/Stromae - Alors On Danse (Lyrics).mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();


    }


    //controlMusicPlayerTrack(audio_src_value);
}

function createAudioElement10() {
    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", "audio/AngÃ¨le -  balance ton quoi (LYRICS).mp3");

        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();


    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(".firstTrack");

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();
    }

    //controlMusicPlayerTrack(audio_src_value);
}

function shadowFakeMusicPlayer() {
    const shadowFakePlayer = Array.from(document.querySelectorAll(".mp3-player-item"));

    shadowFakePlayer[0].classList.remove("mp3-player-item-left");
    shadowFakePlayer[1].classList.remove("mp3-player-item-middle");
    shadowFakePlayer[2].classList.remove("mp3-player-item-right");
}

function showFakeMusicPlayer() {
    const shadowFakePlayer = Array.from(document.querySelectorAll(".mp3-player-item"));

    shadowFakePlayer[0].classList.add("mp3-player-item-left");
    shadowFakePlayer[1].classList.add("mp3-player-item-middle");
    shadowFakePlayer[2].classList.add("mp3-player-item-right");
}


/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ TEST $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
/*
const buttoni-esimo = document.querySelector(".btn-tracki-esima");

buttoni-esimo.addEventListener("click", createAudioElement(src-i-esimo, srcTrack));

// button3.addEventListener('click', createAudioElement.bind(srcTrack[2], srcTrack); // does't work

function createAudioElement(src, array) {

    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", src);

        // in order to create a class considering the different  parametres for every button that I'll create
        //const track = 'track';
        //const className = track.concat((array.indexOf(src) + 1)); // track3 -->(indiceSrc + 1)
        //audio.classList.add(className);
        audio.classList.add("firstTrack");

        div.append(audio);

        musicPlayerDisplay.classList.remove("display");
        musicPlayerDisplay.classList.add("shadow");

        //let audio_src_value = audio.getAttribute("src");

        // SHADOW THE FAKE PLAYER

        shadowFakeMusicPlayer();

    } else if (musicPlayerDisplay.classList.contains("shadow")) {
        // DELATE AUDIO ELEMENT

        const audioElementInPlay = document.querySelector(className);

        audioElementInPlay.remove();

        musicPlayerDisplay.classList.remove("shadow");
        musicPlayerDisplay.classList.add("display");

        // SHOW THE FAKE PLAYER

        showFakeMusicPlayer();

        //let audio_src_value = audio.getAttribute("src");


    }
}
*/