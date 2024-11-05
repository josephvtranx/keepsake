const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        const overlay = document.getElementById('overlay');

        // Toggle Menu and Overlay
function toggleMenu() {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
}

        // Add event listeners
hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


const dropArea = document.getElementById('drop-area');
const pictureBox = document.getElementById('picture-box')
const fileElem = document.getElementById('fileElem');
const previewContainer = document.createElement('div'); // Container for image previews
dropArea.appendChild(previewContainer); // Add preview container to the drop area


// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight the drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

// Remove highlighting when item is dragged away
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

// Trigger file input when clicking anywhere in the drop area
pictureBox.addEventListener('click', () => {
    fileElem.click();
});

// Prevent default behaviors
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight the drop area
function highlight() {
    dropArea.classList.add('highlight');
}

// Remove highlighting
function unhighlight() {
    dropArea.classList.remove('highlight');
}

// Handle the dropped files
function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

// Handle input change (when files are selected via the dialog)
fileElem.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
});

// Handle files
function handleFiles(files) {
    for (const file of files) {
        if (file && file.type.startsWith('image/')) { // Check if the file is an image
            const img = document.createElement('img'); // Create an img element
            img.src = URL.createObjectURL(file); // Create a URL for the image file
            img.style.maxWidth = '100%'; // Make sure the image fits within the box
            img.style.maxHeight = '100%'; // Maintain aspect ratio
            img.onload = function() {
                URL.revokeObjectURL(img.src); // Free memory
            };
            previewContainer.innerHTML = ''; // Clear previous images
            previewContainer.appendChild(img); // Append the new image
        }
    }
}


// Process files and show image preview
function handleFiles(files) {
    for (const file of files) {
        if (file && file.type.startsWith('image/')) {
            // Hide the label and instructions
            fileLabel.style.display = 'none';
            uploadInstructions.style.display = 'none';
            img.style.maxWidth = '100%'; // Make sure the image fits within the box
            img.style.maxHeight = '100%'; 

            // Create an img element for preview
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.onload = function() {
                URL.revokeObjectURL(img.src); // Free memory
            };

            // Clear any previous images and add the new image
            dropArea.innerHTML = '';
            dropArea.appendChild(img);
        }
    }
}