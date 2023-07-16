let formAges = document.querySelector("#userForm");
formAges.addEventListener('submit' , formSubmit)


function calculateAge(birthMonth, birthDay, birthYear)
{

  todayDate = new Date();
  todayYear = todayDate.getFullYear();
  todayMonth = todayDate.getMonth();
  todayDay = todayDate.getDate();
  age = todayYear - birthYear;
 
  if (todayMonth < birthMonth - 1)
  {
    age--;
  }
 
  if (birthMonth - 1 == todayMonth && todayDay < birthDay)
  {
    age--;
  }
  return age;
}


function formSubmit(e) {
  e.preventDefault()
  let userD = document.querySelector("#ageDDUser")
  let userM = document.querySelector("#ageMMUser")
  let userY = document.querySelector("#ageYUser")
 let newDD=parseInt(userD.value)
 let newMM=parseInt(userM.value)
 let newYY=parseInt(userY.value)

 let div = document.querySelector("#result");
 div.innerHTML= "<h1>Bugün itibariyle " +calculateAge(newDD,newMM,newYY)+ " yaşındasın</h1>"
 console.log(div)
 div.classList.add("text-5xl" ,  "relative", "font-extralight","text-center", "text-yellow-50");
}

