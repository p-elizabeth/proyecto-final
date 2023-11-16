
const myVideo = document.querySelector(".myVideo");
console.dir(myVideo);

window.addEventListener('load', () => {
    console.log(myVideo.play)
});

const playVideo = () => {
    myVideo.play();
};

const pauseVideo = () => {
    myVideo.pause();
};


const muted = () => {
    myVideo.muted = true;
};

const unmute = () => {
    myVideo.muted = false;
};

/*
window.addEventListener('load', () => {
    let myVideo = document.querySelector(".myVideo");
    let duracion = parseFloat("myVideo.duration");
    let minutos = 0;
    let segundos = 0;
    const cargaVideo = () => {
        minutos = parseInt(duracion / 60)
        segundos = parseInt(duracion / 60)
        console.log(segundos)
    }
    //carga myVideo()
    let textoMinutos = document.querySelector('#minutos')
    textoMinutos.textContent = minutos;
    let textoSegundos = document.querySelector("#segundos");
    textoSegundos.textContent = segundos;
})
*/
//puzzle piece 3//
let piece3 = document.querySelector("#piece3");
console.dir(piece3);

piece3.addEventListener('dragstart', (evento) => {

    evento.dataTransfer.setData("Text", "./imagenes/Rompe3.png");
    console.log(evento.dataTransfer);
});

const dropZone3 = document.querySelector("#drop3");
console.dir(dropZone3);


dropZone3.addEventListener('dragover', (evento) => {
    evento.preventDefault();
});

dropZone3.addEventListener('drop', (evento) => {
    console.log("drop triggered");
    let infoImg3 = evento.dataTransfer.getData("Text");

    dropZone3.innerHTML = `<img src="${infoImg3}"/>`
    piece3.style.display = "none";

});

//puzzple piece 1//
let piece1 = document.querySelector("#piece1");
console.dir(piece1);

piece1.addEventListener('dragstart', (evento) => {

    evento.dataTransfer.setData("Text", "./imagenes/Rompe1.png");
    console.log(evento.dataTransfer);
});

const dropZone1 = document.querySelector("#drop1");
console.dir(dropZone1);


dropZone1.addEventListener('dragover', (evento) => {
    evento.preventDefault();
});


dropZone1.addEventListener('drop', (evento) => {
    console.log("drop triggered");
    let infoImg1 = evento.dataTransfer.getData("Text");
    dropZone1.innerHTML = `<img src="${infoImg1}"/>`
    piece1.style.display = "none";
});

//puzzle piece 2//
let piece2 = document.querySelector("#piece2");
console.dir(piece2);

piece2.addEventListener('dragstart', (evento) => {

    evento.dataTransfer.setData("Text", "./imagenes/Rompe2.png");
    console.log(evento.dataTransfer);
});

const dropZone2 = document.querySelector("#drop2");
console.dir(dropZone2);



dropZone2.addEventListener('dragover', (evento) => {
    evento.preventDefault();
});


dropZone2.addEventListener('drop', (evento) => {
    console.log("drop triggered");
    let infoImg2 = evento.dataTransfer.getData("Text");
    dropZone2.innerHTML = `<img src="${infoImg2}"/>`
    piece2.style.display = "none";
});

const eventoDragEnter = () => {
    console.log('Enter');
};

const eventoDragLeave = () => {
    console.log("Leaving");
};

const eventoDragOver = () => {
    console.log("over");
};
const eventoDrop = () => {
    console.log("drop");
};


const reinicio = () => {
    dropZone1.innerText = "";
    dropZone2.innerText = "";
    dropZone3.innerText = "";
    window.Location.reload();
};
//////////////








