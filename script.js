    // let a = document.getElementById('bid');

    // async function fetchQuotes(count) {
    //     let quotes = [];
    //     for (let i = 0; i < count; i++) {
    //         try {
    //             let response = await fetch('https://dummyjson.com/quotes/random');
    //             let quote = await response.json();
    //             quotes.push(quote);
    //         } catch (error) {
    //             console.error('Error fetching quote:', error);
    //         }
    //     }   
    //     return quotes;
    // }

    // function func2(quotes) {
    //     quotes.forEach(quote => {
    //         console.log(quote);
    //     });
    // }

    // function func1() {
    //     a.addEventListener('click', async () => {
    //         const quotes = await fetchQuotes(6);
    //         func2(quotes);
    //     });
    // }

    // func1();

    let a=document.getElementById('bid');

    async function randomquotes() {
        let quotes=[];
            for (let i=0;i<6;i++) {
                try {
                    let response=await fetch('https://dummyjson.com/quotes/random');
                    let quote=await response.json();
                    quotes.push(quote);
                } catch(error) {
                    console.error('Your Error', error);
                }
            }   
        return quotes;
        }

    function func2(a) {
        for(let i=0;i<6;i++){
            let b=document.getElementById(`d${i+1}`);
            if(b){
                let x=document.createElement('p');
                x.textContent=a[i].content;
                b.appendChild(x);
            }
        }
        console.log(a);
     }
     


    async function func1() {
        a.addEventListener('click',async () =>{
            let a=await randomquotes();
            func2(a);
        })
    }

    func1();
