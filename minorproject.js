// generate cv
function generatecv()
{
document.getElementById("namet").innerHTML=document.getElementById("namefield").value;
document.getElementById("addresst").innerHTML=document.getElementById("addressfield").value;
document.getElementById("mobilet").innerHTML=document.getElementById("mobilefield").value;
document.getElementById("emailt").innerHTML=document.getElementById("emailfield").value;
document.getElementById("careert").innerHTML=document.getElementById("careerfield").value;
document.getElementById("aqt1").innerHTML=document.getElementById("aq1field").value;
document.getElementById("aqt2").innerHTML=document.getElementById("aq2field").value;
document.getElementById("aqt3").innerHTML=document.getElementById("aq3field").value;
document.getElementById("aqt4").innerHTML=document.getElementById("aq4field").value;
document.getElementById("pqt1").innerHTML=document.getElementById("pq1field").value;
document.getElementById("pqt2").innerHTML=document.getElementById("pq2field").value;
document.getElementById("pqt3").innerHTML=document.getElementById("pq3field").value;
document.getElementById("pqt4").innerHTML=document.getElementById("pq4field").value;
document.getElementById("wet").innerHTML=document.getElementById("wefield").value;
document.getElementById("dobt").innerHTML=document.getElementById("dobfield").value;
document.getElementById("fnt").innerHTML=document.getElementById("fatherfield").value;
document.getElementById("mnt").innerHTML=document.getElementById("motherfield").value;
document.getElementById("gendert").innerHTML=document.getElementById("genderfield").value;
document.getElementById("marritalt").innerHTML=document.getElementById("marriedfield").value;
document.getElementById("hobbyt").innerHTML=document.getElementById("hobbyfield").value;
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate2").style.display='none';
document.getElementById("cvformtemplate").style.display='block';

}

function generatecv2()
{
document.getElementById("namet2").innerHTML=document.getElementById("namefield").value;
document.getElementById("addresst2").innerHTML=document.getElementById("addressfield").value;
document.getElementById("mobilet2").innerHTML=document.getElementById("mobilefield").value;
document.getElementById("emailt2").innerHTML=document.getElementById("emailfield").value;
document.getElementById("careert2").innerHTML=document.getElementById("careerfield").value;
document.getElementById("aq1t2").innerHTML=document.getElementById("aq1field").value;
document.getElementById("aq2t2").innerHTML=document.getElementById("aq2field").value;
document.getElementById("aq3t2").innerHTML=document.getElementById("aq3field").value;
document.getElementById("aq4t2").innerHTML=document.getElementById("aq4field").value;
document.getElementById("pq1t2").innerHTML=document.getElementById("pq1field").value;
document.getElementById("pq2t2").innerHTML=document.getElementById("pq2field").value;
document.getElementById("pq3t2").innerHTML=document.getElementById("pq3field").value;
document.getElementById("pq4t2").innerHTML=document.getElementById("pq4field").value;
document.getElementById("wet2").innerHTML=document.getElementById("wefield").value;
document.getElementById("dobt2").innerHTML=document.getElementById("dobfield").value;
document.getElementById("fathert2").innerHTML=document.getElementById("fatherfield").value;
document.getElementById("mothert2").innerHTML=document.getElementById("motherfield").value;
document.getElementById("gendert2").innerHTML=document.getElementById("genderfield").value;
document.getElementById("marriedt2").innerHTML=document.getElementById("marriedfield").value;
document.getElementById("hobbyt2").innerHTML=document.getElementById("hobbyfield").value;
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate").style.display='none';
document.getElementById("cvformtemplate2").style.display='block';


}
function printcv(){
    window.print()
}

