// date-feild

const calculate=()=>{
    let date = document.getElementById('date-feild').value;
    let month = document.getElementById('month-feild').value;
    let year = document.getElementById('year-feild').value;

    if(date>=32){
        alert("Invalid Date");
        return;
    }
    
    let dob=new Date(`${date} ${month} ${year}`);
    let now = new Date();
    // console.log(now);
    // console.log(dob);
    let difference= now-dob;
    // console.log(difference);
    // parse
    let days=Math.round((difference)/(1000*60*60*24));
    //console.log(days);
    let h4Days=document.getElementById("days");
    h4Days.innerHTML=days;
    let years=Math.round((days)/(365));
    let h4Years=document.getElementById('years');
   // console.log(years);
   h4Years.innerHTML=years;

   
    

}