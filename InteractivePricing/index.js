var range = document.querySelector('.range')
var amount = document.querySelector('.amount')
var ageView = document.querySelector('.ageView')
var checkbox = document.querySelector('.checkbox')

range.addEventListener('input',function(){

  // console.log(range.value)
  if(range.value == 1) {
      amount.textContent = '$8.00'
      ageView.textContent = '10k ageviews'
      // console.log("aqui es 1")
  }else if(range.value == 2){
      amount.textContent = '$12.00'
      ageView.textContent = '50k ageviews'
      // console.log("aqui es 2")
  }
  else if(range.value == 3){
       amount.textContent = '$16.00'
       ageView.textContent = '100k ageviews'
      // console.log("aqui es 3")
  }
  else if(range.value == 4){
       amount.textContent = '$24.00'
       ageView.textContent = '500k ageviews'
      // console.log("aqui es 4")
  }
  else if(range.value == 5){
       amount.textContent = '$36.00'
       ageView.textContent = '1M ageviews'
      // console.log("aqui es 5")
  }
})

checkbox.addEventListener('input',function (){
  if (checkbox.checked) {
    if (range.value==1) {
      amount.textContent = '$6.00'
    } else if(range.value==2){
      amount.textContent = '$9.00'
    } else if(range.value==3){
      amount.textContent = '$12.00'
    }else if(range.value==4){
      amount.textContent = '$18.00'
    }else if(range.value==5){
      amount.textContent = '$27.00'
    }
    range.addEventListener('input',function(){
      // console.log(range.value)
      if(range.value == 1) {
          amount.textContent = '$6.00'
          ageView.textContent = '10k ageviews'
          // console.log("aqui es 1")
      }else if(range.value == 2){
          amount.textContent = '$9.00'
          ageView.textContent = '50k ageviews'
          // console.log("aqui es 2")
      }
      else if(range.value == 3){
           amount.textContent = '$12.00'
           ageView.textContent = '100k ageviews'
          // console.log("aqui es 3")
      }
      else if(range.value == 4){
           amount.textContent = '$18.00'
           ageView.textContent = '500k ageviews'
          // console.log("aqui es 4")
      }
      else if(range.value == 5){
           amount.textContent = '$27.00'
           ageView.textContent = '1M ageviews'
          // console.log("aqui es 5")
      }
    })
    console.log('true')
    
  }else {
    if (range.value==1) {
      amount.textContent = '$8.00'
    } else if(range.value==2){
      amount.textContent = '$12.00'
    } else if(range.value==3){
      amount.textContent = '$16.00'
    }else if(range.value==4){
      amount.textContent = '$24.00'
    }else if(range.value==5){
      amount.textContent = '$36.00'
    }
    console.log('false')
    range.addEventListener('input',function(){
      
      // console.log(range.value)
      if(range.value == 1) {
          amount.textContent = '$8.00'
          ageView.textContent = '10k ageviews'
          // console.log("aqui es 1")
      }else if(range.value == 2){
          amount.textContent = '$12.00'
          ageView.textContent = '50k ageviews'
          // console.log("aqui es 2")
      }
      else if(range.value == 3){
           amount.textContent = '$16.00'
           ageView.textContent = '100k ageviews'
          // console.log("aqui es 3")
      }
      else if(range.value == 4){
           amount.textContent = '$24.00'
           ageView.textContent = '500k ageviews'
          // console.log("aqui es 4")
      }
      else if(range.value == 5){
           amount.textContent = '$36.00'
           ageView.textContent = '1M ageviews'
          // console.log("aqui es 5")
      }
  })
  }
})



