const tourPackages = [
  {
    id: 1,
    name: "Nile Cruise – 3 Nights / 4 Days",
    category: "Nile Cruise",
    location: "Luxor to Aswan",
    price: "$400",
    rating: 4.8,
    reviews: 25,
    image: "assets/images/packages/Nile Cruise.png",
    details: "Embark on a breathtaking 3-night journey along the Nile River from Luxor to Aswan. This luxury cruise offers guided visits to ancient temples, including Karnak, Luxor, Edfu, and Kom Ombo. Experience fine dining, onboard entertainment, and stunning views of Egypt’s timeless landscapes while sailing in comfort."
  },
  {
    id: 2,
    name: "One-Day Tour to Luxor (By Bus)",
    category: "Day Tours",
    location: "Luxor",
    price: "$60",
    rating: 4.7,
    reviews: 18,
    image: "assets/images/packages/Day Tours to Egypt’s .png",
    details: "Travel back in time with a full-day guided tour of Luxor. Visit the Valley of the Kings, where pharaohs were laid to rest, marvel at the grandeur of Karnak Temple, and explore Luxor Temple at sunset. Enjoy a scenic drive, lunch at a local restaurant, and expert historical insights."
  },
  {
    id: 3,
    name: "Horse Riding in the Sea",
    category: "Island & Beach Adventures",
    location: "Red Sea",
    price: "$30",
    rating: 4.8,
    reviews: 35,
    image: "assets/images/packages/Island & Beach Adventures.png",
    details: "Enjoy an unforgettable horse riding experience along the Red Sea coastline. Ride through sandy beaches, feel the thrill of splashing through crystal-clear waters, and take in the breathtaking scenery. Suitable for beginners and experienced riders alike."
  },
  {
    id: 4,
    name: "Safari Adventure (5 Hours)",
    category: "Desert & Wildlife Adventures",
    location: "Sahara Desert",
    price: "25€",
    rating: 4.7,
    reviews: 27,
    image: "assets/images/packages/Desert & Wildlife Adventures.png",
    details: "Venture into the vast Sahara Desert on a thrilling 5-hour safari. Ride powerful quad bikes over golden dunes, experience a traditional camel ride, and visit a Bedouin village. Enjoy a traditional Egyptian dinner under the stars with live entertainment."
  },
  {
    id: 5,
    name: "Orange Bay",
    category: "Island & Beach Adventures",
    location: "Hurghada",
    price: "25€",
    rating: 4.9,
    reviews: 40,
    image: "assets/images/packages/Island & Beach Adventures(1).png",
    details: "Escape to Orange Bay, a stunning tropical paradise in the Red Sea. Relax on white sandy beaches, snorkel in crystal-clear waters teeming with marine life, and soak up the sun on this beautiful island getaway. Perfect for families, couples, and adventure seekers."
  },
  {
    id: 6,
    name: "Nile Cruise – 4 Nights / 5 Days",
    category: "Nile Cruise",
    location: "Luxor to Aswan",
    price: "$535",
    rating: 4.9,
    reviews: 30,
    image: "assets/images/packages/Nile Cruise(1).png",
    details: "Sail the legendary Nile River on a luxurious 4-night cruise from Luxor to Aswan. Discover ancient wonders, including Karnak Temple, the Temple of Horus at Edfu, and the stunning Philae Temple in Aswan. Enjoy fine dining, spacious cabins, and world-class service on board."
  },
  {
    id: 7,
    name: "One-Day Tour to Cairo (By Bus)",
    category: "Day Tours",
    location: "Cairo",
    price: "$65",
    rating: 4.6,
    reviews: 22,
    image: "assets/images/packages/Day Tours to Egypt’s (1).png",
    details: "Visit the heart of Egypt with a full-day guided tour of Cairo. Explore the Great Pyramids of Giza, marvel at the Sphinx, and dive into ancient artifacts at the Egyptian Museum. Experience local culture with a visit to the bustling Khan El Khalili Bazaar."
  },
  {
    id: 8,
    name: "One-Day Tour to Cairo (By Minibus)",
    category: "Day Tours",
    location: "Cairo",
    price: "55€",
    rating: 4.5,
    reviews: 20,
    image: "assets/images/packages/Day Tours to Egypt’s (2).png",
    details: "Enjoy a comfortable and intimate guided tour of Cairo in a small-group minibus. Visit the Pyramids, the Sphinx, and the Egyptian Museum, and take in the city's vibrant culture with a guided market tour. Includes hotel pickup and a delicious Egyptian lunch."
  },
  {
    id: 9,
    name: "One-Day Tour to Luxor (By Minibus)",
    category: "Day Tours",
    location: "Luxor",
    price: "65€",
    rating: 4.7,
    reviews: 19,
    image: "assets/images/packages/Day Tours to Egypt’s (3).png",
    details: "Explore Luxor’s ancient wonders in a comfortable minibus tour. Visit the Valley of the Kings, Karnak Temple, and the spectacular Temple of Hatshepsut. Enjoy a guided experience with insightful commentary and a delightful local lunch."
  },
  {
    id: 10,
    name: "Paradise Island",
    category: "Island & Beach Adventures",
    location: "Hurghada",
    price: "25€",
    rating: 4.9,
    reviews: 32,
    image: "assets/images/packages/Island & Beach Adventures(2).png",
    details: "Spend a relaxing day at Paradise Island, known for its crystal-clear waters and pristine sandy beaches. Snorkel among colorful coral reefs, enjoy water sports, and unwind in a breathtaking natural setting. Perfect for those looking for tranquility and adventure."
  },
  {
    id: 11,
    name: "Dolphin Show",
    category: "Desert & Wildlife Adventures",
    location: "Red Sea",
    price: "23€",
    rating: 4.8,
    reviews: 28,
    image: "assets/images/packages/Desert & Wildlife Adventures(1).png",
    details: "Witness the intelligence and charm of dolphins in this exciting live show. Enjoy spectacular tricks and performances by these amazing marine creatures. A fantastic experience for families and animal lovers."
  }
];

const mainTourPackages = document.querySelector("#main-tour-packages");
if(mainTourPackages){
  tourPackages.splice(0, 4).forEach((tourPackage) => {
    const tourPackageElement = `
      <div class="group rounded-md shadow dark:shadow-gray-700">
                        <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 mx-2 mt-2">
                            <img src="${tourPackage.image ?? "assets/images/listing/1.jpg"}" class="scale-125 group-hover:scale-100 duration-500" alt="">
                            ${tourPackage.discount ? `<div class="absolute top-0 start-0 p-4">
                                <span class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">${tourPackage.discount}</span>
                            </div>` : ""}

                            <div class="absolute top-0 end-0 p-4">
                                <a href="javascript:void(0)" class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i class="mdi mdi-heart text-[20px] align-middle"></i></a>
                            </div>
                        </div>

                        <div class="p-3">
                            <p class="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" class="text-red-500 size-4 me-1"></i>${tourPackage.location}</p>
                            <a href="tour-detail-one.html" class="text-md font-medium hover:text-red-500 duration-500 ease-in-out">${tourPackage.name}</a>

                            <div class="flex items-center mt-2">
                                <span class="text-slate-400">Rating:</span>
                                <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline text-black dark:text-white text-sm">${tourPackage.rating}(${tourPackage.reviews})</li>
                                </ul>
                            </div>
                            
                            <div class="mt-3 pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                <h5 class="text-lg font-medium text-red-500">${tourPackage.price}</h5>

                                <a href="tour-package-detail.html?id=${tourPackage.id}" class="text-slate-400 hover:text-red-500">Explore Now <i class="mdi mdi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
    `
    mainTourPackages.innerHTML += tourPackageElement;
  });
}

const tourPackagesTiles = document.querySelector("#tour-packages-tiles");
if(tourPackagesTiles){
  tourPackages.forEach((tourPackage) => {
    const tourPackageElement = `
      <div class="group rounded-md shadow dark:shadow-gray-700">
                        <div class="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                            <img src="${tourPackage.image ?? "assets/images/listing/11.jpg"}" class="scale-125 group-hover:scale-100 duration-500" alt="">

                            <div class="absolute top-0 end-0 p-4">
                                <a href="javascript:void(0)" class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i class="mdi mdi-heart text-[20px] align-middle"></i></a>
                            </div>
                        </div>

                        <div class="p-4">
                            <p class="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" class="text-red-500 size-4 me-1"></i> ${tourPackage.location}</p>
                            <a href="tour-detail-one.html" class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">${tourPackage.name}</a>
                            <p class="flex items-center text-slate-400 font-small mb-2"> ${tourPackage.category}</p>

                            <div class="flex items-center mt-2">
                                <span class="text-slate-400">Rating:</span>
                                <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline"><i class="mdi mdi-star align-middle"></i></li>
                                    <li class="inline text-black dark:text-white text-sm">${tourPackage.rating}(${tourPackage.reviews})</li>
                                </ul>
                            </div>
                            
                            <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                <h5 class="text-lg font-medium text-red-500">${tourPackage.price}</h5>

                                <a href="tour-package-detail.html?id=${tourPackage.id}" class="text-slate-400 hover:text-red-500">Explore Now <i class="mdi mdi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div><!--end content-->
    `
    tourPackagesTiles.innerHTML += tourPackageElement;
  });
}

const urlParams = new URLSearchParams(window.location.search);
const tourId = urlParams.get("id");

const data = tourPackages.find(package => package.id == tourId);


if(document.querySelector("#tour-package-detail") && tourId){

  document.querySelector("#package-title").textContent = data.name;
  document.querySelector("#package-name").textContent = data.name;
  document.querySelector("#package-location").innerHTML += data.location;
  document.querySelector("#package-price").textContent = data.price;
  document.querySelector("#package-description").textContent = data.details;
  document.querySelector("#package-thumbnail").setAttribute("src", data.image);
} 