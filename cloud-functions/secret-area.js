exports.handler = function(event, context, callback) {
    const secretContent =`
    <h3>Welcome To The Secret Area</h3>
    <p>Here we can tell you that the sky is <strong>blue</strong>, and two plus two equals four.</p>
    `
    let body 

    if(event.body) {
        body = JSON.parse(event.body)
    } else {}
    }

    if(body.password == "Pizza") {
        callback(null, {
            statusCode: 200,
        body: secretContent
        })
    

    } else {
        callback(null, {
            statusCode: 401
        })
    

    }
