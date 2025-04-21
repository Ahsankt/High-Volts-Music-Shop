


function sendReq(btn){
  const container= btn.closest(".product");
  const name=container.querySelector(".name").innerText;
  const price=container.querySelector(".price").innerText;
  const qty=parseInt(container.querySelector(".input-value").value);
  if(qty>0){
  console.log(name,price,qty);


  fetch("/create",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      name,price,qty  
    })
  })
 
  alert (`added ${qty} of  ${name}  to cart !!`)
  }
  else{
    alert ("cant add 0 qty DUMB !!")
  }
}

