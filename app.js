const shareButtons = document.querySelectorAll('.tile-share-button')
const headerShareButton = document.querySelectorAll('.share-button')

async function copyText(e) {
// prevent new go
    e.preventDefault()
    const link = this.getAttribute('link')

    try {
       await navigator.clipboard.writeText(link)
       alert("Link Copied To Clipboard: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click', copyText))

headerShareButton.forEach(headerShareButton => 
    headerShareButton.addEventListener('click', copyText))