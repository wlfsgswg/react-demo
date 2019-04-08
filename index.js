console.log(1234);

function jk() {
    new Promise((resolve, reject) => {
        console.log(1)
        resolve(5647)
    }).then(name => {
        console.log(name)
    })
}
jk()

const jk2 = async () => {
    await setTimeout(() => {
        console.log('await 在行动')
    }, 8000);
    console.log('你大爷的等待')
}
jk2();