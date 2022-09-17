let a=document.getElementsByClassName("bt");
a[0].addEventListener('mouseenter',func1);
a[0].addEventListener('mouseleave',func2);
function func1(e)
{
    e.target.style.backgroundColor='greenyellow';
}
function func2(e)
{
    e.target.style.backgroundColor='white';
}
function validate()
{
    let count=0;
    let name=document.form.name2.value;
    let reg=document.form.reg1.value;
    let phn=document.form.phn1.value;
    let mail=document.form.mail1.value;
    let zipcode=document.form.zip.value;
    let pwd=document.form.passs.value;
    let cpwd=document.form.passs1.value;
    if(name==""){
    document.getElementById("p1").innerHTML="*Enter valid name";
    }
    else if(name.length<6)
    {
        document.getElementById("p1").innerHTML="*Username should be atleast 6 Characters";
    }
    else if(name!="" && name.length>=6){
        count++;
        document.getElementById("p1").innerHTML="";
    }
    if(reg==""){
        document.getElementById("p2").innerHTML="*Enter Valid Reg.no";
    }
    else if(reg!=""){
        document.getElementById("p2").innerHTML="";
        count++;
    }
    let rx1=/^[6-9][0-9]{9}$/;
    if(!rx1.test(phn)){
       document.getElementById("p3").innerHTML="*Enter Valid Phone Number";
    }else if(rx1.test(phn)){
        document.getElementById("p3").innerHTML="";
        count++;
    }
    let rx2=/[a-zA-Z0-9]{1,30}@vitstudent.ac.in$/;
    if(rx2.test(mail)){
        document.getElementById("p4").innerHTML="";
        count++;
    }
    else if(!rx2.test(mail))
    {
        document.getElementById("p4").innerHTML="*Enter Valid Mail";
    }
    let rx3=/^[1-9]{1}[0-9]{4}$/;
    if(!rx3.test(zipcode))
    {
        document.getElementById("p5").innerHTML="*Enter Valid ZipCode";
    }
    else if(rx3.test(zipcode))
    {
        document.getElementById("p5").innerHTML="";
        count++;
    }
    let rx4=/^[a-zA-Z0-9!@#$%^&*]{10,100}$/;
    if(!rx4.test(pwd)){
        document.getElementById("p6").innerHTML="*Enter Valid Password";
    }
    else if(rx4.test(pwd)){
        document.getElementById("p6").innerHTML="";
        count++;
    }
    if(pwd!=cpwd)
    {
        document.getElementById("p7").innerHTML="*Password Mismatch"
    }
    else if(pwd==cpwd)
    {
        document.getElementById("p7").innerHTML="";
        count++;
    }
    let a=document.getElementById("sel1");
    let selectedValue = a.options[a.selectedIndex].value;
    if(selectedValue=="none"){
       document.getElementById("p8").innerHTML="*Please Select An Event";
    }
    else if(selectedValue!="none"){
    document.getElementById("p8").innerHTML="";
    count++;
    }
    let check=document.getElementById("check");
    if(check.checked){
    document.getElementById("p9").innerHTML="";
    count++;
    }
    else if(!check.checked)
    document.getElementById("p9").innerHTML="*Please Agree to T&C's";
    if(count==9)
    return true;
    else return false;
}