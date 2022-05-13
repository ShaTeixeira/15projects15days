const sounds = ['applause', 'boo', 'victory', 'wrong'];

sounds.forEach(sound => {

    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();

    });

    document.getElementById('buttonsSounds').appendChild(btn);

});

function stopSongs() {
    sounds.forEach(sound => {

        const songs = document.getElementById(sound);

        songs.pause();
        songs.currentTime = 0;

    });
}