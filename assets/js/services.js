const premiumServices = [
  {
    name: "Luxor Tours 🏛️ – Walk Through Ancient History",
    description: "Explore the treasures of Luxor, the world’s greatest open-air museum. Our guided tours take you through:",
    highlights: [
      "✔ The Valley of the Kings – Discover the tombs of legendary pharaohs.",
      "✔ Karnak Temple – Witness the grandeur of Egypt’s largest temple complex.",
      "✔ Luxor Temple – An architectural masterpiece glowing at sunset.",
      "✔ Hatshepsut Temple – A stunning mortuary temple of Egypt’s most powerful queen."
    ],
    image: "assets/images/services/Luxor Tours.png",
    url: "#",
    cta: "Experience history like never before!"
  },
  {
    name: "Cairo Tours 🏙️ – Discover the Heart of Egypt",
    description: "The vibrant capital, Cairo, is home to breathtaking sites and rich history. Our Cairo tour includes:",
    highlights: [
      "✔ The Great Pyramids of Giza & Sphinx – Stand before the last wonder of the ancient world.",
      "✔ Egyptian Museum – Marvel at the treasures of King Tutankhamun.",
      "✔ Old Cairo & Khan El Khalili Bazaar – Dive into Egypt’s bustling markets and culture.",
      "✔ Nile Dinner Cruise – Enjoy a luxurious dinner with live entertainment."
    ],
    image: "assets/images/services/Cairo Tours.png",
    url: "#",
    cta: "Uncover the wonders of Egypt’s capital!"
  },
  {
    name: "Nile Cruise 🚢 – Sail Through Egypt’s Beauty",
    description: "A journey on the Nile is a must for any traveler! Our luxurious Nile Cruise offers:",
    highlights: [
      "✔ Breathtaking views of Egypt’s landscapes",
      "✔ Visits to temples in Luxor, Edfu, Kom Ombo & Aswan",
      "✔ Onboard entertainment and fine dining",
      "✔ Comfortable and stylish accommodations"
    ],
    image: "assets/images/services/Nile Cruise .png",
    url: "#",
    cta: "Enjoy the perfect mix of relaxation and exploration!"
  },
  {
    name: "Private Transfers 🚖 – Comfortable & Hassle-Free Travel",
    description: "We offer reliable and comfortable private transfers to make your journey smooth:",
    highlights: [
      "✔ Airport pick-up & drop-off",
      "✔ Hotel & city transfers",
      "✔ Luxor to Cairo & other major destinations"
    ],
    image: "assets/images/services/Private Transfers.png",
    url: "#",
    cta: "Travel stress-free with our professional service!"
  },
  {
    name: "Scuba Diving 🤿 – Dive into the Red Sea’s Wonders",
    description: "Experience the thrill of scuba diving in Egypt’s crystal-clear waters:",
    highlights: [
      "✔ Explore colorful coral reefs & marine life",
      "✔ Diving spots in Hurghada, Sharm El Sheikh & Marsa Alam",
      "✔ Certified instructors & beginner-friendly options"
    ],
    image: "assets/images/services/Scuba Diving.png",
    url: "#",
    cta: "Uncover the underwater magic of the Red Sea!"
  },
  {
    name: "Dolphin House Excursion 🐬 – Swim with Dolphins",
    description: "One of the most exciting activities in Egypt! This trip includes:",
    highlights: [
      "✔ Swimming with wild dolphins in their natural habitat",
      "✔ Snorkeling in vibrant coral reefs",
      "✔ A relaxing boat trip with onboard lunch"
    ],
    image: "assets/images/services/Dolphin House Excursion .png",
    url: "#",
    cta: "An unforgettable experience for nature lovers!"
  },
  {
    name: "Super Safari 🏜️ – An Adventure in the Desert",
    description: "Embark on a thrilling desert safari and explore the golden sands of Egypt:",
    highlights: [
      "✔ Quad biking & dune bashing",
      "✔ Camel rides & Bedouin village visit",
      "✔ Traditional Egyptian dinner & entertainment"
    ],
    image: "assets/images/services/Super Safari .png",
    url: "#",
    cta: "Feel the adrenaline rush in Egypt’s vast deserts!"
  },
  {
    name: "Hot Air Balloon Ride 🎈 – Fly Over Luxor",
    description: "See Egypt from a different perspective with a sunrise balloon ride over Luxor:",
    highlights: [
      "✔ Breathtaking aerial views of temples & valleys",
      "✔ A peaceful, once-in-a-lifetime experience",
      "✔ Professional pilots for a safe and smooth flight"
    ],
    image: "assets/images/services/Hot Air Balloon Ride .png",
    url: "#",
    cta: "Capture the magic of Egypt from above!"
  },
  {
    name: "Relaxing Massage Therapy 💆‍♂️ – Rejuvenate Your Senses",
    description: "Unwind after a day of adventure with our professional massage services:",
    highlights: [
      "✔ Traditional Egyptian & modern spa treatments",
      "✔ Aromatherapy & deep tissue massage",
      "✔ Luxury spa experiences for complete relaxation"
    ],
    image: "assets/images/services/Relaxing Massage Therapy .png",
    url: "#",
    cta: "Relax, refresh, and recharge!"
  }
];

const servicesContainer = document.querySelector('#services-tiles-container');

if (servicesContainer) {
  premiumServices.forEach(service => {
    const serviceHTML = `
      <div class="group rounded-md shadow dark:shadow-gray-700">
          <div class="md:flex md:items-center">
              <div class="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow dark:shadow-gray-700 md:m-3 mx-3 mt-3">
                  <img src="${service.image}" class="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt="${service.name}">
              </div>
              
              <div class="p-4 w-full">
                  <p class="flex items-center text-slate-400 font-medium mb-2">
                      <i data-feather="map-pin" class="text-red-500 size-4 me-1"></i> Egypt
                  </p>
                  <a href="${service.url}" class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">${service.name}</a>

                  <div class="mt-2">
                      <p>${service.description}</p>
                      <ul>
                          ${service.highlights.map(highlight => `<li>${highlight}</li>`).join("")}
                      </ul>
                  </div>
                  
                  <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      <a href="${service.url}" class="text-slate-400">${service.cta}</a>
                  </div>
              </div>
          </div>
      </div>
    `;

    servicesContainer.innerHTML += serviceHTML;
  });

  if (typeof feather !== "undefined") {
    feather.replace();
  }
}
