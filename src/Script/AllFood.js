var RandomData = JSON.parse(localStorage.getItem("AllFoodBanna"));
var data = JSON.parse(localStorage.getItem("data"));
var Elem = document.getElementById("BannaerContainer");
var allFoodCard = document.getElementById("allFoodCard");

// Function to select random data
function getRandomData() {
  const Data = RandomData[Math.floor(Math.random() * RandomData.length)];
  Elem.innerHTML = `
  <div class="coverImg" style="  background-image: url(${Data.BackgroundImg});"></div>
<div class="profile-container">
  <div class="profile-container_image-Con">
      <img src="${Data.Image}" alt="">
  </div>
</div>
`;
}

function getAllData() {
  console.log(data);
  data &&
    data.map((d) => {
      console.log(d);
      const div = document.createElement("div");
      div.innerHTML = `                    
                 <div class="box">
                    <a href="./food-details.html" onclick="HandleRoute(${d._id})">
                 <div class="box-img">
                         <img src="${d.Image}" alt="">
                     </div>
                     <h3>${d.FoodName}</h3>
                     <!-- <h4>Tasty Food</h4> -->
                     <span>Appetizing Snacks</span>
                    </a>
                 </div>
      `;
      allFoodCard.appendChild(div);
    });
}
// Call function on page load
window.onload = function () {
  getRandomData();
  getAllData();
};
