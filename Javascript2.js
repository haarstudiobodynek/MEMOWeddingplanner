(function() {
let animationStarted = false;

// Funktion zum Starten der Animation
function startAnimation() {
    // Deaktiviere den normalen Scrollmechanismus
    window.removeEventListener('scroll', onScroll);
    animationStarted = true;
    // Rufe die Funktion auf, um die Elemente zu animieren
    animateElements();
}

// Funktion zum Animieren der Elemente
function animateElements() {
    const ueberUnsSection = document.querySelector('.ueber-uns');
    const image = ueberUnsSection.querySelector('img');
    const description = ueberUnsSection.querySelector('.description');

    // Führe Animation für das Bild aus
    image.style.opacity = 1;
    image.style.transform = 'translateY(0)';

    // Führe Animation für den Text aus, nachdem das Bild fertig animiert wurde
    setTimeout(() => {
        description.style.opacity = 1;
        description.style.transform = 'translateY(0)';
    }, 800); // Ändere den Wert, um das Intervall zwischen den Animationen anzupassen
}

// Funktion, die überprüft, ob der Nutzer zu der gewünschten Section (class="ueber-uns") gescrollt ist
function onScroll() {
    const ueberUnsSection = document.querySelector('.ueber-uns');
    const rect = ueberUnsSection.getBoundingClientRect();
    const middleOfScreen = window.innerHeight / 1.4;

    if (rect.top <= middleOfScreen && !animationStarted) {
        // Starte die Animation, wenn der Container in der Mitte des Bildschirms ist und die Animation noch nicht gestartet wurde
        startAnimation();
    }
}

// Funktion, die die Animation stoppt, wenn der Benutzer während der Animation scrollt
function onScrollDuringAnimation() {
    // Entferne den Event-Listener für das Scrollen, wenn die Animation gestartet wurde
    window.removeEventListener('scroll', onScrollDuringAnimation);
    // Führe hier ggf. weitere Aktionen durch, wenn der Benutzer während der Animation scrollt
}

// Füge den Event-Listener für das erste Scrollen hinzu
window.addEventListener('scroll', onScroll);
})();
