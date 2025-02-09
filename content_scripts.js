console.log("test - 1 line")
const observer = new MutationObserver(() => {
    const videos = document.querySelectorAll('.style-scope.ytd-rich-item-renderer')
    if (videos.length >= 20) {
        console.log('Found first 20 videos:')

        // Only loop through first 20
        for (let i = 0; i < 20; i++) {
            console.log(`Video ${i + 1}:`, videos[i])
        }
        observer.disconnect()
    }
})

observer.observe(document.body, {
    childList: true,
    subtree: true
})