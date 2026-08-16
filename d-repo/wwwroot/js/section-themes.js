(() => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        section.classList.remove('section-odd', 'section-even');
        section.classList.add(
            index % 2 === 0 ? 'section-odd' : 'section-even'
        );
    });
})();