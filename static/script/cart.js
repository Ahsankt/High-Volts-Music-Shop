// retrieval cart detail from filesystem
document.addEventListener("DOMContentLoaded",()=>{
    retrievalData();
})

//dynamically updates this 
function retrievalData(){
    const insertElement=document.getElementsByClassName("data-insert")[0];
    const totaldiv=document.getElementById("totalPrice");
    fetch("/cartRetrieval",{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    }).then(response=>response.json())
    .then(data=>{
        try{
            let total=0;
            console.log(data);
            insertElement.innerHTML="";
            data.carts.forEach(cart => {
                total+=parseInt(cart.price.split("$")[1])*parseInt(cart.qty);
                //console.log(typeof(cart.price.split("$")[1]))
                insertElement.innerHTML+=`
                <tr class="product">
                <th class="name">${cart.name}</th>
                <th>${cart.qty}</th>
                <th>${cart.price}</th>
                <th id="plusminus">
                <button type="button" class="plus-btn">+</button>
                <input type="text" value="${cart.qty}" class="input-value"></input>
                <button class="minus-btn">-</button>
            
                <button onclick="Update(this)">Update</button>
                </th>
                <th><button onclick="Delete(this)">DELETE</button></th>
                </tr>`
                
            });
            totaldiv.innerText="TOTAL: "+total;

            console.log(total)
        }
        catch(err){
            console.error(err);
        }
    })
}

function Update(btn){
    const product=btn.closest(".product");
   // console.log(product)
    const name=product.querySelector(".name").innerText;
    const qty=product.querySelector(".input-value").value;
  //  console.log(name,qty)
  fetch("/cartUpdate",{
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({qty,name})
  }).then(response=>{
    if(response.status==200){
        alert("updated!!")
        retrievalData()
    }

  })
  .error(err=>{
    console.error(err)
  })

}

//delete 
function Delete(btn){
    const product=btn.closest(".product");
    const name=product.querySelector(".name").innerText;
    fetch("/cartDelete",{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name})
    }).then(response=>{
        if(response.status==200){
            alert("deleted")
            retrievalData()
        }
        else{
            console.log("error Occured")
        }
    })
    .error(err=>{console.error(err)})
}