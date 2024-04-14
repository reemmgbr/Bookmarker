var SiteName = document.getElementById("siteName");
var websiteUrl = document.getElementById("websiteUrl");

var siteArray = [];
if (JSON.parse(localStorage.getItem("dataLocal") == null)) {
  siteArray = [];
} else {
  siteArray = JSON.parse(localStorage.getItem("dataLocal"));
  displayData();
}
// add data
function addData() {
  if (vaildationWebsiteUrl() == true) {
    dataObject = {
      name: SiteName.value,
      web: websiteUrl.value,
    };
    siteArray.push(dataObject);
    console.log(siteArray);
    localStorage.setItem("dataLocal", JSON.stringify(siteArray));

    clearData();
    displayData();
  } else {
  }
}
// clear data
function clearData() {
  SiteName.value = "";
  websiteUrl.value = "";
}

//  display data
function displayData() {
  var cartona = "";
  for (var i = 0; i < siteArray.length; i++) {
    cartona += `      <tr>
                    <td>${i}</td>
                    <td>${siteArray[i].name}</td>
                    
                    <td>
                      <button class="btn btn-dark" type="button" >
                      <a class='text-decoration-none text-white' target="_blank"  href="${siteArray[i].web}"
                      >
                        <i class="fa-solid fa-eye"></i>   
                        visit
                    </a>
                      </button>
                    </td>
                    <td>
                      <button class="btn btn-danger" type="button"onclick="deleteData(${i})">
                      
                        <i class="fa-solid fa-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
    `;
  }
  document.getElementById("tBody").innerHTML = cartona;
}
// loscal storage
// delete
function deleteData(index) {
  siteArray.splice(index, 1);
  localStorage.setItem("dataLocal", JSON.stringify(siteArray));
  displayData();
}
function vaildationWebsiteUrl() {
  var regex =
    /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;
  return regex.test(websiteUrl.value);
}
vaildationWebsiteUrl();
