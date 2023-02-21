
const btn = document.getElementById('callme')

btn.addEventListener('click', function (){

    const url = 'http://localhost/index.php';

    dataLoad(url)
})


async function dataLoad(url){
    await fetch(url).then(resp => resp.json()).then(names => {
        for (const name of names) {
            console.log(name)
        }
    })
}