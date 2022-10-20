$(function(){

    var slideCount = $(".slide").length
    var currentslide = 1

    setInterval(function(){
        if(currentslide == slideCount){
            $(".sliderwrapper").animate({"margin-left": "0px"}, 1000)    
            currentslide = 1;
        }
        else{
        $(".sliderwrapper").animate({"margin-left": "-=800px"}, 1000)
            currentslide++;
    }
    }, 2000)
})

// validasi form
function validateform(){  
    var name=document.myform.name.value;  
    var phonenumber=document.myform.phonenumber.value;  
    var date=document.myform.date.value;
    var time=document.myform.time.value;
    var cc=document.myform.cc.value;  

    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(phonenumber.length<6){  
      alert("Phone number must be at least 6 characters long.");  
      return false;  
      }else if(date==null||date ==""){
      alert("Date must be filled");
      return false;
      }else if(time==null || time ==""){
        alert("Masa waktu ngak diisi");
        return false;
      }else if(cc=="4B4B421"||cc=="T4KE21"||cc=="R5VP21"||cc=="S4l321"){
          return true;}
         else{ 
        alert("Coupon Code kosong/Salah");
        return false;
          }
      }