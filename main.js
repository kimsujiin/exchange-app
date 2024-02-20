let currencyRatio = {
  USD :{
    KRW: 1338.39,
    USD: 1,
    VND: 24533.50,
    unit:'달러'
  },
  KRW :{
    KRW: 1,
    USD: 0.00075,
    VND: 18.33,
    unit:'원'
  },
  VND :{
    VND: 1,
    KRW: 0.055,
    USD: 0.000041,
    unit:'동'
    
  }
}
// console.log(currencyRatio['VND']['unit'])

let fromCurrency ='USD'
let toCurrency = 'USD'

document.querySelectorAll('#from-currency-list a')
.forEach((menu)=>{
  menu.addEventListener('click',function(){
    //1. 버튼을 가져온다.
    //2. 버튼에 값을 바꾼다
  document.getElementById('from-button').textContent= this.textContent


  //3. 선택된 Currency값을 변수에 저장해준다
  fromCurrency = this.textContent;
    convert()
  }) 
})

document.querySelectorAll('#to-currency-list a').forEach((menu)=>{
    menu.addEventListener('click',function(){
       //1. 버튼을 가져온다.
      //2. 버튼에 값을 바꾼다
      document.getElementById('to-button').textContent=this.textContent
    
    //3. 선택된 Currency값을 변수에 저장해준다
      toCurrency = this.textContent
      convert()
    })
})

// 1. 키를 입력하는 순간
// 2. 환전이돼서
// 3. 환전된값이 보인다

function convert(){
  // 돈 * 환전금액
  let amount = document.getElementById('from-input').value
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]

  document.getElementById('to-input').value = convertedAmount

  

}  

