const commonHeaders = {}


const GET = async (/** @type {String} */ url) => {
    
    const response = await fetch(url, {
        headers: {
            ...commonHeaders
        }
    })

    return response.json()
}

const POST = async (/** @type {String} */ url, body) => {
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...commonHeaders
        },
        body: JSON.stringify(body)
    })

    return response.json()
}

const PUT = async (/** @type {String} */ url, body) => {
    
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...commonHeaders
        },
        body: JSON.stringify(body)
    })

    return response.json()
}

const DELETE = async (/** @type {String} */ url) => {

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            ...commonHeaders
        }
    })

    return response.json()
}

export { GET, POST, PUT, DELETE }