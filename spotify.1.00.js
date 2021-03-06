var listOfSongs = [];

class TrackSong {
    constructor(trackNumber, trackTitle, trackAlbum, trackDateOfRealesed, trackTime, trackSrc, buttonId) {

        this.trackNumber = trackNumber;
        this.trackTitle = trackTitle;
        this.trackAlbum = trackAlbum;
        this.trackDateOfRealesed = trackDateOfRealesed;
        this.trackTime = trackTime;
        this.trackSrc = trackSrc;
        this.buttonId = buttonId;
    }
}


listOfSongs.push(

    new TrackSong(1, "Je veux", "This is Zaz", "Realesed 11 days ago", "3:39", "audio/Zaz - Je veux (Studio version, HD).mp3", ".btn-track1"),
    new TrackSong(2, "Les Passants", "This is Zaz", "Realesed 11 days ago", "3:33", "audio/Zaz - Les Passants (Studio version, HD).mp3", ".btn-track2"),
    new TrackSong(3, "Mon Soleil", "Emily in Paris(SoundTrack)", "Realesed 11 days ago", "3:23", "audio/Ashley Park - Mon Soleil (Lyrics) ( From Emily in Paris soundtrack).mp3",".btn-track3"),
    new TrackSong(4, "Hit Sale", "Hits Sales Extra Cheese", "Realesed 11 days ago", "3:39", "audio/HIT SALE - Therapie TAXI  ft. RomÃ©o Elvis PAROLES.mp3", ".btn-track4"),
    new TrackSong(5, "Eté 90", "Rapture 2 merde", "Realesed 11 days ago", "3:39", "audio/ThÃ©rapie Taxi - EtÃ© 90 (Paroles).mp3", ".btn-track5"),
    new TrackSong(6, "Je veux", "Nature", "Realesed 11 days ago", "3:39","audio/Falling Slowly.mp3", ".btn-track6"),
    new TrackSong(7, "Je veux", "Revolution", "Realesed 11 days ago", "3:39","audio/Just One Dance.mp3", ".btn-track7"),
    new TrackSong(8, "Je veux", "Meme", "Realesed 11 days ago", "3:39","audio/MaÃ®tre Gims - La MÃªme ft Vianney (Lyrics).mp3", ".btn-track8"),
    new TrackSong(9, "Je veux", "Danse", "Realesed 11 days ago", "3:39","audio/Stromae - Alors On Danse (Lyrics).mp3", ".btn-track9"),
    new TrackSong(10, "Je veux", "This is Clere", "Realesed 11 days ago", "3:39", "audio/AngÃ¨le -  balance ton quoi (LYRICS).mp3", ".btn-track10"),
    
    )

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

//controlMusicPlayerTrack(audio_src_value);


//const button1 = document.querySelector(".btn-track1");
//button1.addEventListener("click", createAudioElement1);
/*function createAudioElement1() {


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
*/



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

const div = document.querySelector(".musicplayer-container");

button1.addEventListener("click", () => createAudioElement("audio/Zaz - Je veux (Studio version, HD).mp3"));
button2.addEventListener("click", () => createAudioElement("audio/Zaz - Les Passants (Studio version, HD).mp3"));
button3.addEventListener("click", () => createAudioElement("audio/Ashley Park - Mon Soleil (Lyrics) ( From Emily in Paris soundtrack).mp3"));
button4.addEventListener("click", () => createAudioElement("audio/HIT SALE - Therapie TAXI  ft. RomÃ©o Elvis PAROLES.mp3"));
button5.addEventListener("click", () => createAudioElement("audio/ThÃ©rapie Taxi - EtÃ© 90 (Paroles).mp3"));
button6.addEventListener("click", () => createAudioElement("audio/Falling Slowly.mp3"));
button7.addEventListener("click", () => createAudioElement("audio/Just One Dance.mp3"));
button8.addEventListener("click", () => createAudioElement("audio/MaÃ®tre Gims - La MÃªme ft Vianney (Lyrics).mp3"));
button9.addEventListener("click", () => createAudioElement("audio/Stromae - Alors On Danse (Lyrics).mp3"));
button10.addEventListener("click", () => createAudioElement("audio/AngÃ¨le -  balance ton quoi (LYRICS).mp3"));

function createAudioElement(trackPath) {


    const musicPlayerDisplay = document.querySelector(".musicplayer-container");

    if (musicPlayerDisplay.classList.contains("display")) {

        // CREATE AUDIO ELEMENT
        const audio = document.createElement("audio");

        audio.setAttribute("controls", "");
        audio.setAttribute("autoplay", "");
        audio.setAttribute("src", trackPath);

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


/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ CHANGE ORDER OF THE COLUMN $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

class List {
    constructor(listOfTrackNumber, listOfTitle, listOfAlbum, listOfDateOfReleased, listOfTime) {

        this.listOfTrackNumber = listOfTrackNumber;
        this.listOfTime = listOfTitle;
        this.listOfAlbum = listOfAlbum;
        this.listOfDateOfReleased = listOfDateOfReleased;
        this.listOfTime = listOfTime;

    }

    setValuesOfLists(classOfTrackColumn, classOfTitleColumn, classOfAlbumColumn, classOfReleasedColumn, classOfTimeColumn) {

        sort.listOfTrackNumber = Array.from(document.querySelectorAll(classOfTrackColumn));
        sort.listOfTitle = Array.from(document.querySelectorAll(classOfTitleColumn));
        sort.listOfAlbum = Array.from(document.querySelectorAll(classOfAlbumColumn));
        sort.listOfDateOfReleased = Array.from(document.querySelectorAll(classOfReleasedColumn));
        sort.listOfTime = Array.from(document.querySelectorAll(classOfTimeColumn));


    }

    getValuesOfLists(classOfTrackColumnValues, classOfTitleColumnValues, classOfAlbumColumnValues,
        classOfReleasedColumnValues, classOfTimeColumnValues) {

        console.log(classOfTrackColumnValues);
        console.log(classOfTitleColumnValues);
        console.log(classOfAlbumColumnValues);
        console.log(classOfReleasedColumnValues);
        console.log(classOfTimeColumnValues);

    }

}

const sort = new List();

sort.setValuesOfLists(".flex-item-0", ".flex-item-1", ".flex-item-2", ".flex-item-3", ".flex-item-4");
// sort.getValuesOfLists(sort.listOfTrackNumber, sort.listOfTitle, sort.listOfAlbum, sort.listOfDateOfReleased, sort.listOfTime);

// sorting album column
const dropdownAlbum = document.querySelector(".album-order");

dropdownAlbum.addEventListener("click", columnOrderByAlbum);

function columnOrderByAlbum() {

    positioning("1", "5", "2", "3", "4");

    for (let i = 0; i < 61; i++) {

        sort.listOfTrackNumber[i].style.order = "1";
        sort.listOfAlbum[i].style.order = "2";
        sort.listOfDateOfReleased[i].style.order = "3";
        sort.listOfTime[i].style.order = "4";
        sort.listOfTitle[i].style.order = "5";
    }

}

// sorting date of released column
const dropdownDateOfReleased = document.querySelector(".realesed-order");

dropdownDateOfReleased.addEventListener("click", () => columnOrderByDateOfReleased());

function columnOrderByDateOfReleased() {

    positioning("1", "5", "2", "3", "4");

}

// sorting time column
const dropdownTime = document.querySelector(".time-order");

dropdownTime.addEventListener("click", () => columnOrderByTime());

function columnOrderByTime() {

    positioning("1", "3", "4", "5", "2");

}

// sorting title,artist and ordinamento personalizzato column, click on them and default position will be the activate

const dropdownOrdinamentoPersonalizzato = document.querySelector(".default-order");

dropdownOrdinamentoPersonalizzato.addEventListener("click", () => columnOrderByDefault());

const dropdownTitle = document.querySelector(".title-order");

dropdownTitle.addEventListener("click", () => columnOrderByDefault());

const dropdownArtist = document.querySelector(".artist-order");

dropdownArtist.addEventListener("click", () => columnOrderByDefault());

function columnOrderByDefault() {

    positioning("1", "2", "3", "4", "5");

}

function positioning(position1, position2, position3, position4, position5) {
    for (let i = 0; i < 61; i++) {

        sort.listOfTrackNumber[i].style.order = position1;
        sort.listOfTitle[i].style.order = position2;
        sort.listOfAlbum[i].style.order = position3;
        sort.listOfDateOfReleased[i].style.order = position4;
        sort.listOfTime[i].style.order = position5;

    }
}