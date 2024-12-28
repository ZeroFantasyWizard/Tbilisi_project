//function for smooth scrolling
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

//function for expanding an image
$(document).ready(function () {
  $(".landmark .landmark-image").click(function () {
    $(this).toggleClass("expanded");
  });
});

//using keyboard event
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");

  nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let value = nameInput.value;

      if (value.length > 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }

      nameInput.value = value;
    }
  });
});

//example of class
class Attraction {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }

  render() {
    const container = document.createElement("div");
    container.classList.add("attraction");

    const img = document.createElement("img");
    img.src = this.image;
    img.alt = this.name;

    const title = document.createElement("h3");
    title.textContent = this.name;

    const desc = document.createElement("p");
    desc.textContent = this.description;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(desc);

    return container;
  }
}
//example of prototype
Attraction.prototype.showDetails = function () {
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  const title = document.createElement("h2");
  title.textContent = this.name;

  const desc = document.createElement("p");
  desc.textContent = this.description;

  const img = document.createElement("img");
  img.src = this.image;
  img.alt = this.name;

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    detailsContainer.remove();
  });

  detailsContainer.appendChild(title);
  detailsContainer.appendChild(img);
  detailsContainer.appendChild(desc);
  detailsContainer.appendChild(closeButton);

  document.body.appendChild(detailsContainer);
};

document.addEventListener("DOMContentLoaded", () => {
  const attractions = [
    new Attraction(
      "ნარიყალა",
      "უძველესი ციხე თბილისის გულში",
      "images/ნარიყალა"
    ),
    new Attraction(
      "მშვიდობის ხიდი",
      "თანამედროვე შუშიანი ხიდი",
      "images/მშვიდობის ხიდი"
    ),
    new Attraction(
      "მთაწმინდა",
      "ბორცვი პანორამული ხედებით ქალაქზე.",
      "images/მთაწმინდა"
    ),
    new Attraction(
      "ბოტანიკური ბაღი",
      "ულამაზესი ბაღი მრავალი მცენარითა და ყვავილით.",
      "images/ბოტანიკური ბაღი"
    ),
    new Attraction(
      "თბილისის თეატრი",
      "ულამაზესი შენობა, სადაც იმართება სპექტაკლები და კონცერტები.",
      "images/თეატრი"
    ),
    new Attraction(
      "მეტეხის ტაძარი",
      "უძველესი ტაძარი მდინარე მტკვრის ნაპირებზე.",
      "images/მეტეხის ტაძარი"
    ),
  ];

  const attractionsContainer = document.querySelector("#attractions-container");
  attractions.forEach((attraction) => {
    const element = attraction.render();
    element.addEventListener("click", () => attraction.showDetails());
    attractionsContainer.appendChild(element);
  });
});

//using async code with fetch to send form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch("/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("ფორმა წარმატებით იქნა გაგზავნილი:", result);
        alert("შეტყობინება გაგზავნილია");
      } else {
        console.error("შეცდომა ფორმის გაგზავნისას:", response.status);
        alert("ფორმის გაგზავნისას მოხდა შეცდომა. გთხოვთ, სცადოთ ხელახლა.");
      }
    } catch (error) {
      console.error("ქსელის შეცდომა ან სხვა პრობლემები:", error);
      alert("ფორმის გაგზავნისას მოხდა შეცდომა. გთხოვთ, სცადოთ ხელახლა.");
    }
  });
});
