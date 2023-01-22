const p = document.querySelector("#joke");
const btn = document.querySelector(".btn");
const API = "https://v2.jokeapi.dev/joke/Dark,Pun,Spooky,Christmas?type=single";

let jokeList = (lists) => { // tanan nga joke data diri makadto
    console.log("OTHER FUNCTION", lists);
    
    p.textContent = `${lists}`;
    
    btn.addEventListener("click", items)
    
    p.classList.add("fade");
    
};

let items = () => {
    p.classList.remove("fade");
    fetch(API).then(res => {
        // console.log(res)
        if (res.ok) {

            let data = res.json(); // need pa a JSON format
           
            data.then(items => {
                jokeList(items.joke) // gng salo sng variable nga 'jokes' ang data
                
            })

        } else {
            console.warn("API Failed")
        }
 
    })
    
}

items();