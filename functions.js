
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
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("active");
});

// Collapse
$(document).on("click", ".toggle-extra-button", function() {
// Check if text is more or less
  if ($(this).text() == "Read More") {
    $(this).text("Read Less");
    $(this).parent().children(".toggle-extra").slideDown(); 
  } 
  else {
    $(this).text("Read More");
    $(this).parent().children(".toggle-extra").slideUp();
  }
});

//checkboxes
    $(document).ready(function(){
    var mastercheck = false;
    // Checkboxes array:
    var checks = [false, false, false, false];
    $('#master').click(function(){
        mastercheck = !mastercheck;
        for(var i = 0; i<checks.length; i++){
            checks[i] = mastercheck;
        }
        updateCheckboxes();
    });
    $('.check').click(function(){
        var pos = $(this).attr('id').replace('chk-','');
        checks[pos] = !checks[pos];
        updateCheckboxes();
    });

    function updateCheckboxes() {
        var count = 0;
        for(var i = 0; i<checks.length; i++){
            if (checks[i]) {
                count++;
                $('#chk-'+i).find('i').removeClass('fa-square');
                $('#chk-'+i).find('i').addClass('fa-check-square');
            }else {
                $('#chk-'+i).find('i').removeClass('fa-check-square');
                $('#chk-'+i).find('i').addClass('fa-square');    
            }
        }
        // Tri-state
        if(count === checks.length){
            mastercheck = true;
            $('#master').find('i').removeClass('fa-square');
            $('#master').find('i').removeClass('fa-minus-square');
            $('#master').find('i').addClass('fa-check-square');
        }else if (count > 0) {
            mastercheck = false;
            $('#master').find('i').removeClass('fa-square');
            $('#master').find('i').removeClass('fa-check-square');
            $('#master').find('i').addClass('fa-minus-square');
        }else {
            mastercheck = false;
            $('#master').find('i').removeClass('fa-minus-square');
            $('#master').find('i').removeClass('fa-check-square');
            $('#master').find('i').addClass('fa-square');
        }
    }
});

function ReservEdit(e){
        const status = e.parentNode.parentNode.childNodes;
        const cost =status[11].childNodes;
        switch(e.textContent){
          case "Cancel" :
            if(status[9].textContent === "Done"){
              alert("the Maintenance is already done!");
            }
            else{
            status[9].textContent="Canceled";
            status[9].style.color="red";
            cost[1].classList.add("d-block");
            cost[1].classList.remove("d-none");
            cost[3].classList.add("d-none");
            cost[1].textContent="-";
          }
            break;
          case "Done" :
            if(status[9].textContent==="In progress"){
              if(cost[3].value.length==0){
                alert("Please Add the Maintenance Cost");
              }else{
                status[9].textContent="Done";
                status[9].style.color="green";
                cost[1].classList.add("d-block");
                cost[1].classList.remove("d-none");
                cost[3].classList.add("d-none");
                cost[1].textContent = cost[3].value + "$";
              }}
              else
            break;
          
          case "Accepted" :
            while(status[9].textContent==="UpComing"){
              status[9].textContent="In progress";
              status[9].style.color="Gray";
              cost[1].classList.add("d-none");
              cost[1].classList.remove("d-block");
              cost[3].classList.remove("d-none");
            }
            break;
          
          default:
            break;
        }

      }

function userReqest(e){
  const status = e.parentNode;
  const newStatus = document.createElement("p");
  if (e.textContent === "Accept") {
    newStatus.textContent = "Accepted";
    newStatus.style.color="green";
  }
  else{
    newStatus.textContent = "Rejected";
    newStatus.style.color="red";
  }
  status.textContent="";
  status.appendChild(newStatus);
  }

  function cancelRequest(e){
        const appointStatus = e.parentNode.childNodes;
        appointStatus[1].textContent="Waiting for Admin Approval"
        appointStatus[1].style.color="red";
      }