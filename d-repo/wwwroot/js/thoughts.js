fetch('/js/thoughts.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP chyba: ${response.status}`);
        }

        return response.json();
    })
    .then(thoughts => {
        const thoughtContent = document.querySelector('.thoughts-content');
        const thoughtText = document.querySelector('.thoughts-text');
        const thoughtAuthor = document.querySelector('.thoughts-author');

        if (!thoughtContent || !thoughtText || !thoughts.length) {
            return;
        }

        let initialIndex = 0;
        let lastThoughtIndex = -1;

        function getInitialThought() {
            const thought = thoughts[initialIndex];
            initialIndex++;
            return thought;
        }

        function getRandomThought() {
            let newIndex;

            do {
                newIndex = Math.floor(Math.random() * thoughts.length);
            } while (newIndex === lastThoughtIndex && thoughts.length > 1);

            lastThoughtIndex = newIndex;
            return thoughts[newIndex];
        }

        function renderThought(thought) {
            thoughtText.textContent = thought.text;

            if (thoughtAuthor) {
                thoughtAuthor.textContent = thought.author ? `— ${thought.author}` : '';
            }
        }

        function showThought() {
            const thought =
                initialIndex < Math.min(4, thoughts.length)
                    ? getInitialThought()
                    : getRandomThought();

            thoughtContent.classList.add('is-fading');

            window.setTimeout(() => {
                renderThought(thought);
                thoughtContent.classList.remove('is-fading');
            }, 220);
        }

        renderThought(getInitialThought());
        setInterval(showThought, 10000);
    })
    .catch(error => {
        console.error('Chyba při načítání myšlenek:', error);
    });
