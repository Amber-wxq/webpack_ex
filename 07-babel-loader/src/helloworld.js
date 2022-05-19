
function getString() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('hello world')
        }, 2000)
    })
}

async function helloworld() {
    let string = await getString()
    console.log(string)
}

export default helloworld