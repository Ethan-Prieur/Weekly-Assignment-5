document.getElementById('btn1').addEventListener('click', myFunction1)
function myFunction1 () {
  let p = 3.14
  let r = document.getElementById('box1').value
  r = parseInt(r)
  let answer = (r * r * p)
  alert(answer)
}

document.getElementById('btn2').addEventListener('click', myFunction2)
function myFunction2 () {
  let r = document.getElementById('box2').value
  r = parseInt(r)
  p = 3.14
  let answer = (r * p * 2)
  alert(answer)
}
