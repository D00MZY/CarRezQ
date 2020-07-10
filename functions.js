
// Navbar change color on scroll
    var myNav = document.getElementById("nav");
    window.onscroll = function() {
      "use strict";
      if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("scroll");
      } else {
        myNav.classList.remove("scroll");
      }
    };

function scrollfun(id) {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({
    block: "start",
    behavior: "smooth"
});
}

function totalSingleProductPrice(e , a){
  var price = e.childNodes;
  var newPrice = a.childNodes;
  price[6].textContent = newPrice[2].value * 10;
  price[2].textContent = newPrice[2].value;
}

function editBtn(e) {
  var x =  e.parentNode.childNodes;
  if (x[3].style.display === "none") {
    x[3].style.display = "block";
    x[5].classList.remove("d-block");
    x[5].classList.add("d-none");
    e.textContent ="Edit";
    totalSingleProductPrice(x[3] , x[5]);
  } else {
    x[3].style.display = "none";
    x[5].classList.add("d-block");
    e.textContent ="Save";
  }
}

function delete_Parent(e)
{
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}

            function calcTotalPrice(){
              var temp , parseNum;
              var p = document.getElementsByClassName("productPrice");
              var totpr = document.getElementById("totPrice");
              for(i=0 ;i<p.length ; i++){
                console.log(p[i].textContent);
                parseNum = parseInt(p[i].textContent);/* not working yet*/
                temp += parseNum;
              }
              totpr.textContent = temp;
            }

            function collapseBtn(e){
              var content = document.getElementById("collapseElement");
              if (content.style.height === "32rem") {
                content.style.height = "0.5rem";
                e.textContent = "See Filters";
              }
              else{
                content.style.height = "32rem";
                e.textContent = "Collapse";
              }

            }

            function onlyNumberKey(evt) { 
          
                var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
                if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
                    return false; 
                return true; 
            } 