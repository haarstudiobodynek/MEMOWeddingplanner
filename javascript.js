
   {     let animationStarted = false;

        // Funktion zum Starten der Animation
        function startAnimation() {
            // Deaktiviere den normalen Scrollmechanismus
            window.removeEventListener('scroll', onScroll);
            animationStarted = true;
            // Rufe die Funktion auf, um die einzelnen Listenelemente zu animieren
            animateListItems();
        }

        // Funktion zum Animieren der Listenelemente
        function animateListItems() {
            const listItems = document.querySelectorAll('.services li');
            let delay = 0;

            // Führe für jedes Listenelement eine Animation aus
            listItems.forEach((item) => {
                item.style.opacity = 0;
                item.style.transform = 'translateY(-500px)';
                item.style.transition = 'opacity 0s ease-out, transform 2.5s ease-out';
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.style.transform = 'translateY(0)';
                }, delay);
                delay += 300; // Ändere den Wert, um das Intervall zwischen den Animationen anzupassen
            });

            // Aktiviere den Event-Listener für das Scrollen während der Animation
            window.addEventListener('scroll', onScrollDuringAnimation);
        }

        // Funktion, die überprüft, ob der Nutzer zu dem gewünschten Abschnitt (class="services") gescrollt ist
        function onScroll() {
            const servicesSection = document.querySelector('.services');
            const rect = servicesSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5 && !animationStarted) {
                // Starte die Animation, wenn der Abschnitt im sichtbaren Bereich ist und die Animation noch nicht gestartet wurde
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
        window.addEventListener('scroll', onScroll);}



