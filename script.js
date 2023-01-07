function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "block";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "block";
    }
  }


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}





const scriptURL = 'https://script.google.com/macros/s/AKfycbxVBR0vX4llKZfBmM8QXWX7z8aX21sEoxe4lMhRvKUQTbiXl4QMkGoTFeU_6NqEVEh3uw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="succeseed !!!"
        setTimeout(function(){
            msg.innerHTML = ""

        },1000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



  



