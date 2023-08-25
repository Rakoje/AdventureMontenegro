const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

function canyon_hover(){
    document.getElementById('canyon-title').style.transform = "scale(1.5)";
}
function canyon_over(){
    document.getElementById('canyon-title').style.transform = "";
}

function hike_hover(){
    document.getElementById('hike-title').style.transform = "scale(1.5)";
}
function hike_over(){
    document.getElementById('hike-title').style.transform = "";
}

document.querySelector('a[href^="#"]').addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});

