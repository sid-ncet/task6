// var header=document.querySelector("#main-header")
// console.log(header)
// header.style.borderBottom='solid 4px #ccc'
// var input=document.querySelector('input')
// input.value='type the text'

// var submit=document.querySelector('input[type=submit]')//submit button ki value to send sa replace krenge
// submit.value='Send'

// var item=document.querySelector('.list-group-item')
// console.log(item)
// item.style.color='red'

// var lastChild=document.querySelector('.list-group-item:last-child')
// lastChild.style.color='blue'

// var secondChild=document.querySelector('.list-group-item:nth-child(2)')
// console.log(secondChild)
// secondChild.style.backgroundColor='green'
// var thirdChild=document.querySelector('.list-group-item:nth-child(3)')
// console.log(thirdChild)
// thirdChild.style.color='white'

var titles=document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent='hello'

var list=document.querySelectorAll('li:nth-child(odd)')
var list2=document.querySelectorAll('li:nth-child(even)')
for(var i=0;i<list.length;i++){
    list[i].style.backgroundColor='green'
    list2[i].style.color='green'

}
