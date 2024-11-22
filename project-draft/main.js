import './css/style.css';

console.log('Vite is up and running!');

console.log('Vite is up and running!');

// Update the date in the journal heading
function updateHeadingDate() {
    const heading = document.querySelector('.journal-heading');
    if (heading) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        heading.textContent = `${formattedDate} Keepsake`;
    } else {
        console.error('Element with class "journal-heading" not found.');
    }
}

updateHeadingDate();
