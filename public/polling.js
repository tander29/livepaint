// Add logic to this script to poll server every second for updated pixels.
let clientUpdateCount = 0;

function sendUpdates() {

    const postReq = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "clientUpdates": bitmap.updates,
            "clientUpdateCount": clientUpdateCount
        })
    }

    fetch('/updates', postReq)
        .then(response => response.json())
        .then(data => {
            console.log(data.globalUpdates.length)
            clientUpdateCount += data.globalUpdates.length;
            data.globalUpdates.forEach(element => {
                let row = element[0];
                let col = element[1];
                let color = element[2];
                bitmap.setColor(row, col, color)
            });

        })
    bitmap.updates = [];
    // console.log(bitmap.updates)
    setTimeout(sendUpdates, 3000)
}
sendUpdates()