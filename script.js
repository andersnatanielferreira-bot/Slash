// Parallax background effect
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
        const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
        blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Section transitions (Swipe simulation)
let currentSectionIndex = 0;
const sections = document.querySelectorAll('.transition-section');

function slideNext() {
    if (currentSectionIndex < sections.length - 1) {
        sections[currentSectionIndex].classList.remove('active');
        sections[currentSectionIndex].classList.add('prev');
        currentSectionIndex++;
        sections[currentSectionIndex].classList.add('active');
        sections[currentSectionIndex].classList.remove('prev');
        window.scrollTo(0,0);
    }
}

function slidePrev() {
    if (currentSectionIndex > 0) {
        sections[currentSectionIndex].classList.remove('active');
        currentSectionIndex--;
        sections[currentSectionIndex].classList.add('active');
        sections[currentSectionIndex].classList.remove('prev');
        window.scrollTo(0,0);
    }
}

// Phone Specs Popup logic
function togglePopup(element) {
    // If it's already open, close it
    if (element.classList.contains('show-specs')) {
        element.classList.remove('show-specs');
    } else {
        // Close others
        document.querySelectorAll('.product-card').forEach(card => card.classList.remove('show-specs'));
        // Open clicked
        element.classList.add('show-specs');
    }
}
