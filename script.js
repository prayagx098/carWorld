function recordDetails(){

    carDetails={
        brand:brand.value,
        price:price.value,
        key:key.value
    }


    if(carDetails.brand == "" || carDetails.price == "" || carDetails.key == ""){
        alert("enter all values");
    }else{
        if(carDetails.key in localStorage){
            alert("the key already present");
        }else{
            localStorage.setItem(carDetails.key,JSON.stringify(carDetails));
            alert("Car Details Added Successfuly");
        }
    }
}


// REtruve REcords

function RetriveRecord(){

    let key = searchKey.value;

    console.log(key);

    let carDetails;



    if(carDetails === 'null' || key === ''){
        alert("Enter Valid key");
    }else{
        carDetails = JSON.parse(localStorage.getItem(key))
        result.innerHTML=`
        <div class="card" style="width: 18rem;">
            <div class="card-header text-center">
                CAR DETAILS
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID - ${carDetails.brand}</li>
                <li class="list-group-item">NAME - ${carDetails.price}</li>
            </ul>
        </div>`
    }
}

// function to delete 

function DeleteRecord() {
    let key = delKey.value;
    
    let carDetails = localStorage.getItem(key);

    if (carDetails === null || key === '') {
        alert("Enter Valid key");
    } else {
        localStorage.removeItem(key);

    }
}


// Function to clear all the stored value
function clearAll(){
    confirm("Are you sure you want to clear?");
    localStorage.clear();
    alert("all the details are cleared");
}