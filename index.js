
function textToConsole()
{
    let x = document.getElementById("haiku-editor");
    console.log("ez a szoveg benne")
    console.log(x.value);
    document.getElementById("number-of-characters").innerHTML = x.value.length;

    let text = x.value;
    let lines = text.split(/\r|\r\n|\n/);
    let count = lines.length;
    document.getElementById("number-of-rows").innerHTML = count;


    let vowels = "aáeéiíoóöőuúüű";
    let cnt=0;
    let firstRow = lines[0];

    for(let i=0; i<firstRow.length; ++i)
    {
        for(let j=0; j<vowels.length; ++j)
        {
            if(firstRow[i] === vowels[j])
            {
                cnt++;
            }  
        }
    }
    console.log("Első sorban található magánhangzók száma:")
    console.log(cnt);


    let cnt2 = 0;
    let countA = [];
    let aLine;

    for(let i=0; i<lines.length; ++i)
    {
        aLine = lines[i];
        for(let j=0; j<aLine.length; ++j)
        {
            for(let k=0; k<vowels.length; ++k)
            {
                console.log("ez a aLine");
                console.log(i);
                console.log(aLine);
                if(aLine[j] === vowels[k])
                {
                    countA[i] = ++cnt2;
                }
            }
              
        }
        cnt2=0;
    }

    console.log(countA);

    let vowelsList = document.getElementById("vowels-per-row");

    function genList()
    {
        return countA.map(szam=>`<li>${szam}</li> `).join(' ')
    }
    vowelsList.innerHTML=genList();

    let doboz = document.getElementById("haiku");
    if(count===3 && countA[0]===5 && countA[1]===7 && countA[2]===5)
    {
        
        doboz.classList.add('haiku');
    }
    else{
        doboz.classList.remove('haiku');
    }

    


    //let li = document.createElement('li');
    /*let listaIdk=[];
    for(let i=0; i<countA.length; i++)
    {


            //li.innerHTML = countA[i];
            //vowelsList.innerHTML = '<li>'+countA[i]+'</li>';
            listaIdk[i] = '<li>'+countA[i]+'</li>';
        
        
        //li.innerHTML = countA[i];
        //vowelsList.innerHTML = countA[i];
        //vowelsList.appendChild(li);
        
    }
    listaIdk.join(' ');
    vowelsList.innerHTML = listaIdk;*/
    

}

let addHaiku = document.getElementById("btn-copy-haiku");
addHaiku.addEventListener('click', newHaiku);

function newHaiku()
{
    let place = document.getElementById("haikus");
    let x2 = document.getElementById("haiku-editor")
    place.innerHTML += (`<pre>${x2.value}</pre> `)
}