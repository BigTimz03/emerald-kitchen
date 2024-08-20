var data = JSON.parse(localStorage.getItem("data"));
var DetailsCon = document.getElementById("DetailsCon");
var valueToShow = 200;
var VendorElem = document.getElementById("Vendors");

ID = parseInt(localStorage.getItem("ID"));
console.log( typeof ID);
// var idToFind = ID ? ID : 1; // Replace with the ID you're searching for
var idToFind = ID; // Replace with the ID you're searching for

function SearchById(id) {
  return data.find((item) => item._id === id);
}

// ShowMore()
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + " . . . . " : str;
}
function ShowMore() {
  valueToShow = valueToShow === 200 ? 1000 : 200;
  console.log(valueToShow);
}

var foundData = SearchById(idToFind);
if (foundData) {
  // console.log(foundData.Vendors[0].VendorName);
  DetailsCon.innerHTML = `
            <div class="coverImg" style="  background-image: url(${
              foundData.BackgroundImg
                ? foundData.BackgroundImg
                : "../constant/assets/jollof1.jpeg"
            });"></div>
            <div class="profile-container">
                <div class="profile-container_image-Con">
                    <img src="${
                      foundData.Image
                        ? foundData.Image
                        : "../images/img-20231222T113024Z-001/img/food1.png"
                    }" alt="">
                </div>


            <div>

                <h1>${
                  foundData.FoodName ? foundData.FoodName : "Rice et Ewa"
                }</h1>

                <p>
${
  foundData.FoodDescription
    ? truncate(foundData.FoodDescription, valueToShow)
    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tenetur at doloribus facilis!Amet quibusdam id doloremque, fugit facilis pariatur odio, minus in asperiores consequatur distinctio doloribus voluptatum...."
}
                    <span onclick="ShowMore()" id=("LoadMore")> more</span>

                </p>

                <div>
                    <h2 class="History">
                        Food History
                    </h2>


                <p>
${
  foundData.FoodHistory
    ? truncate(foundData.FoodHistory, valueToShow)
    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tenetur at doloribus facilis!Amet quibusdam id doloremque, fugit facilis pariatur odio, minus in asperiores consequatur distinctio doloribus voluptatum...."
}
                    <span onclick="ShowMore()" id=("LoadMore")> more</span>

                </p>

                </div>
                <div class="nutrient">
                <table class="table" border="1">
                <h2 scope="col">Food Nutrition Table</h2>
        
                        <thead class="thead">
                           <tr>
                          <th scope="row">
                          Nutrients
                          </th>
                
                           ${
                             foundData.NutritionalDetails &&
                             foundData.NutritionalDetails.map((d) => {
                               return `
                                 <th scope="row">
${d.Nutrient}
                                 </th>
                                 
                                 `;
                             })
                           }
                           
                                </tr>                                 
                        </thead>
                        <tbody >

                            <tr>
                                <td class="text-center">
                                    <span class="whish-list-price">
                                    Amount
                                    </span>
                                </td>
                           ${
                             foundData.NutritionalDetails &&
                             foundData.NutritionalDetails.map((d) => {
                               return `
                                 <td scope="row">
${d.Amount}
                                 </td>
                                 
                                 `;
                             })
                           }


                            </tr>
                            <tr>
                                <td class="text-center">
                                    <span class="whish-list-price">
                                    Price
                                    </span>
                                </td>
                           ${`
                                 <td scope="row">
                                 $
                                    ${
                                      foundData.FoodAmount
                                        ? foundData.FoodAmount
                                        : "90"
                                    }
                                 </td>
                                 `}
                           



                        </tbody>
                    
                    </table>
                </div>

            </div>
  
  
  `;

  // Relative vendor secion

  VendorElem.innerHTML = `
                         ${
                           foundData.Vendors &&
                           foundData.Vendors.map((d) => {
                             return `
                             <div class="each-vendor">
                    <img src="${d.VendorLogo}" alt="vendor logo">
                    <div>
                        <h3>${d.VendorName}</h3>
                        <ul>
                        
                        ${`
                        <li><a href="${d.VendorLinks[0].VendoeWhartsapp}"><i class=" social-links fa-brands fa-whatsapp"></i></a></li>
                        <li><a href="${d.VendorLinks[0].VendorFb}"><i class=" social-links fa-brands fa-instagram"></i></a></li>
                        `}
                        </ul>
                    </div>
                </div>   `;
                           })
                         }      
                      
  
`;
} else {
  console.log(`No data found with ID ${idToFind}`);
}
