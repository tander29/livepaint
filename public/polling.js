// Add logic to this script to poll server every second for updated pixels.
function sendUpdates() {

    const postReq = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "clientupdates": bitmap.updates
        })
    }

    fetch('/updates', postReq)
        .then(response => response.json())
        .then(data => {

        })
    bitmap.updates = [];
    console.log(bitmap.updates)
    setTimeout(sendUpdates, 5000)
}
sendUpdates()