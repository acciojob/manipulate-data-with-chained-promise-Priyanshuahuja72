//your JS code here. If required.
function oddNumber(arr)
{
 let odd = arr.filter((num) => num%2 == 1)
return odd;
}
function evenNumber(arr)
{
  let even = arr.filter((num) => num%2 == 0);
  let product = 1;
  for (let i = 0; i < even.length; i++) {
    product *= even[i];
  }
  return product;
}
function promise1(arr)
{
  return new Promise((resolve , reject) => {
    setTimeout(() => {
    resolve(
    document.getElementById('output').innerHTML = `${oddNumber(arr)}`
    );
    },1000)
  })
}
function promise2(arr)
{
  return new Promise((resolve , reject) => {
    setTimeout(() => {
     resolve(
     document.getElementById('output').innerHTML = `${evenNumber(arr)}`
     );
    },2000)
  })
}
let button = document.getElementById("sub");
button.addEventListener("click" , () => {
    let aval = document.getElementById("input-val").value;
    let arr = aval.split(',');
    Promise.all([promise1(arr) , promise2(arr)])
})