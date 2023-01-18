let share = document.getElementById('share_btn')
let shareGroup = document.querySelector('.share_group')
let profile = document.querySelector('.profile')

shareGroup.style.display = 'none'

share.addEventListener("click", ()=>{
    if(shareGroup.style.display === 'block'){
        shareGroup.style.display = 'none'
        share.classList.remove('active')
    }else{
        shareGroup.style.display = 'block'
        share.classList.add('active')
    }
    
})

function myFunction(x) {
    if (x.matches) { 
      profile.classList.remove('relative')
    } else{
      profile.classList.add('relative')
    }
  }
  
  var x = window.matchMedia("(max-width: 795px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 