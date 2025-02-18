
async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const result = data.map(function(ele){
       
        // <p>${ele.id}</p>
         return  `
            <div class = "usersCard">
                <div class = "userData"> 
                    <h1 class = "userName"> <i class="fa-solid fa-user icon"></i> ${ele.name} ${ele.username}</h1>
                    <address class = "userAddress"><i class="fa-solid fa-house icon"></i> ${ele.address.street} ${ele.address.suite} ${ele.address.city} ${ele.address.zipcode}</address>
                    <p class = "userAddress"> <i class="fa-solid fa-location-dot icon"></i> ${ele.address.geo.lat} &#124;&#124; <span>${ele.address.geo.lng}</span> </p>
                    <p class ="userPhone"> <i class="fa-solid fa-phone icon"></i> ${ele.phone}</p>
                    <p class="userWebsite"> <i class="fa-solid fa-cloud icon"></i>${ele.website}</p> 
                    <p class="companyName"> <i class="fa-solid fa-briefcase icon"></i> ${ele.company.name}</p>
                    <p class="companyDetails"> <i class="fa-regular fa-star icon"></i>${ele.company.catchPhrase} ${ele.company.bs}</p>
                </div>
            </div>
        `
    }).join(' ');    
    document.querySelector('.row').innerHTML = result;    
}
getUsers();








