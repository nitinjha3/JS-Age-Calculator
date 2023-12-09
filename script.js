let userInput=document.getElementById('date')
// console.log(userInput.value);
let result=document.getElementById('result')
function calculateAge(){
    let birthDay=new Date(userInput.value)
    // console.log(birthDay)

    let d1=birthDay.getDate()
    let m1=birthDay.getMonth()+1
    let y1=birthDay.getFullYear()
    // console.log(y1);

    let currDate=new Date()

    let d2=currDate.getDate()
    let m2=currDate.getMonth()
    let y2=currDate.getFullYear()

    let d3,m3,y3

    y3=y2-y1

    if(m2>=m1)
    {
        m3=m2-m1;
    }
    else{
        m3=12+m2-m1
        y3--
    }

    if(d2>=d1)
    {
        d3=d2-d1
    }
    else{
        m3--
        d3=getdaysInmonths(y1,m1)+d2-d1
    }

    if(m3<0)
    {
        m3=11
        y3--
    }

    // console.log(y3,m3,d3)
    result.innerHTML=`You are <span>${y3 }</span> years <span>${3 }</span> months <span>${d3 }</span> days old`
}



function getdaysInmonths(year,month){
    return new Date(year,month,0).getDate();    
}

// calculateAge()

document.getElementById("btn").addEventListener("click",()=>{
    calculateAge()
})