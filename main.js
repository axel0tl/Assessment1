document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carouselItem");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carouselButton"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carouselNavigation">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carouselButton");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carouselItem-selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carouselButton-selected")
      );

      items[i].classList.add("carouselItem-selected");
      button.classList.add("carouselButton-selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carouselItem-selected");
  buttons[0].classList.add("carouselButton-selected");
});



fetch('skin.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      appendData(data.products);
  })
  .catch(function (err) {
      console.log('error: ' + err);
  });

function appendData(productsList) {
  var mainContainer = document.getElementById("productContainer");

  for (var i = 0; i < productsList.length; i++) {

    var productCard = document.createElement("div");
    productCard.className = "productCard";

  // console.log(productsList[i]);

    var productIcon = document.createElement("img");
    productIcon.className = "productIcon";
    productIcon.src = 'images/' + productsList[i].name + '.jpg';

    productCard.appendChild(productIcon);

    var productInfo = document.createElement("div");
    productInfo.className = "productInfo";
    productInfo.innerHTML = '<h5>' + productsList[i].name + '</h5><h6>' + productsList[i].price + ' VP</h6>';
    
    productCard.appendChild(productInfo);

    var productButton = document.createElement("button");
    productButton.Id = 'order' + productsList[i].name;
    productButton.className = 'productButton';
    productButton.innerHTML = 'Order';

    productCard.appendChild(productButton);


    mainContainer.appendChild(productCard);
  }
}
