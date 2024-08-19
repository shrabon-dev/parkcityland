const videoElement = document.getElementById('myVideo');

// Array of video sources
const videos = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
];

let currentVideoIndex = 0;

videoElement.addEventListener('ended', function() {
    // Increment the index to the next video
    currentVideoIndex++;
    
    // If the index is out of bounds, reset it to the first video
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }

    // Change the video source
    videoElement.src = videos[currentVideoIndex];
    
    // Load the new video
    videoElement.load();
    
    // Optionally play the new video automatically
    videoElement.play();
});