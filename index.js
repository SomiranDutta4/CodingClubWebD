const API="https://coding-week-2024-api.onrender.com/api/data";

let fetchedarray;
const newsbar=document.querySelector("#sidesub2");
let newsheadlines;
const body=document.querySelector('#main');
let clickedheadline=-1;
let closebutton;
let popupwindow=document.querySelector("#popupwindow")
const sidesub2=document.querySelector("#sidesub2");

const containers=document.querySelectorAll(".containers");
const type1=document.querySelector(".firsttags");
const type2=document.querySelectorAll(".tags");
const datediv1=document.querySelectorAll(".calendericon");
const themeofdiv2=document.querySelectorAll(".themeofdiv");
const themeofdiv1=document.querySelector("#paragraph1");
const headline1=document.querySelector("#c2sub2");
const headline2=document.querySelectorAll(".ssubdivs1");



async function showheadlines(){
    const response=await fetch(API);
    fetchedarray=await response.json();

    for(let i=4;i<fetchedarray.length;i++){
        let newsheadlineDiv=document.createElement('div');
        newsheadlineDiv.setAttribute('class','newsheadlines');
        let newsimagediv=document.createElement('div');
        newsimagediv.setAttribute('class','newsimagediv');
        let newsimages=document.createElement('img');
        newsimages.setAttribute('class','newsimages');
        newsimages.src=fetchedarray[i].image;

        newsimagediv.appendChild(newsimages);
        newsheadlineDiv.appendChild(newsimagediv);
    
        let newsfromAPI=document.createElement('div');
        newsfromAPI.setAttribute('class','newsfromAPI');
        let headline=document.createElement('div');
        headline.setAttribute('class','headline');
        headline.innerText=fetchedarray[i].headline;
        

        newsfromAPI.appendChild(headline);
    
        let datediv=document.createElement('div');
        datediv.setAttribute('class','datediv');
        datediv.innerText=fetchedarray[i].date;
        

        newsfromAPI.appendChild(datediv);
    
        //in here check for the date and headline and image src
    
        newsheadlineDiv.appendChild(newsfromAPI);
        sidesub2.appendChild(newsheadlineDiv);

    }
    for(let i=0;i<4;i++){
        containers[i].style.backgroundImage=`url(${fetchedarray[i].image})`;
        if(i==0){
            type1.innerText=fetchedarray[i].type;
            headline1.innerText=fetchedarray[i].headline;
            themeofdiv1.innerText=fetchedarray[i].author;
        }else{
            type2[i-1].innerText=fetchedarray[i].type;
            headline2[i-1].innerText=fetchedarray[i].headline;
            themeofdiv2[i-1].innerText=fetchedarray[i].author;
        }
        
        datediv1.innerText=fetchedarray[i].date;
    }

    newsheadlines=document.querySelectorAll(".newsheadlines");
    popupfunction();}


  

window.onload=showheadlines;

let showpopup=()=>{
    popupwindow.setAttribute('class','showpopupdiv');

    let headlineType=document.createElement('div');
    headlineType.setAttribute('class','headlineType');
    headlineType.innerText=fetchedarray[clickedheadline].type;
    // headlineType.innerText=fetchedarray[clickedheadline].name;

    let headlineHeadline=document.createElement('div');
    headlineHeadline.setAttribute('class','headlineHeadline');
    headlineHeadline.innerText=fetchedarray[clickedheadline].headline;
    //headlineHeadline.innerText=fetchedarray[clickedheadline].name;

    let headlineImg=document.createElement('img');
    headlineImg.setAttribute('class','headlineImage');
    headlineImg.src=fetchedarray[clickedheadline].image;
    //headlineImg.src='https://cdn.pixabay.com/photo/2023/03/28/18/28/hieroglyph-7883891_1280.jpg';

    let headlineContent=document.createElement('div');
    headlineContent.setAttribute('class','headlineContent');
    headlineContent.innerText=fetchedarray[clickedheadline].content;

    let headlineAuthor=document.createElement('div');
    headlineAuthor.setAttribute('class','headlineAuthor');
    headlineAuthor.innerText=`- ${fetchedarray[clickedheadline].author}`;

    let headlineDate=document.createElement('div');
    headlineDate.setAttribute('class','headlineDate');
    headlineDate.innerText=fetchedarray[clickedheadline].date;

    let closebutt=document.createElement('button');
    closebutt.setAttribute('class','closebutt');
    closebutt.innerText="×";
    // closebutton=document.querySelector('.closebutt');

    let popupcontainer=document.createElement('div');
    popupcontainer.setAttribute('class','popupcontainer')

    popupcontainer.appendChild(headlineType);
    popupcontainer.appendChild(headlineHeadline);
    popupcontainer.appendChild(headlineImg);
    popupcontainer.appendChild(headlineContent);
    popupcontainer.appendChild(headlineDate);
    popupcontainer.appendChild(headlineAuthor);

    popupwindow.appendChild(popupcontainer);
    popupwindow.appendChild(closebutt);
    closefunction(closebutt);

}
let blurout=()=>{
    body.style.filter='blur(5px)';
    body.style.transition='filter 0ms linear 0ms';
}
let bluroff=()=>{
    body.style.filter='none';
    body.style.backgroundColor='white';
}

let popupfunction=()=>{
   for(let i=0;i<4;i++){
    containers[i].addEventListener("click",()=>{
        clickedheadline=i;
        console.log(clickedheadline);
        blurout();
        showpopup();
    })
   }

for(let i=0;i<fetchedarray.length-4;i++){
    newsheadlines[i].addEventListener("click",()=>{
        clickedheadline=i+4;
        console.log(clickedheadline);
        blurout();
        showpopup();
        })
    }
}


let closefunction=(closeswitch)=>{ closeswitch.addEventListener("click",()=>{
    clickedheadline=-1;
    closeswitch.remove();
    popupwindow.innerHTML="";
    popupwindow.setAttribute('class','');
    bluroff();
})}

