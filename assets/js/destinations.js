const egyptDestinations = [
  {
    name: "Luxor",
    description: "Step into history with visits to the Valley of the Kings, Karnak Temple, and the Luxor Temple. A city brimming with ancient secrets and monuments.",
    image: "assets/images/listing/Luxor.png",
    url: "destination-detail.html?location=luxor"
  },
  {
    name: "Cairo",
    description: "Explore the iconic Great Pyramids of Giza, Sphinx, and the Egyptian Museum, and experience the vibrant culture of Egypt's capital.",
    image: "assets/images/listing/cairo.png",
    url: "destination-detail.html?location=cairo"
  },
  {
    name: "Nile River",
    description: "Cruise through Egypt’s lifeblood – the Nile River – and visit historical gems like Kom Ombo, Edfu, and Aswan, all from the comfort of a luxury cruise.",
    image: "assets/images/listing/nile river.png",
    url: "destination-detail.html?location=nile-river"
  },
  {
    name: "Sharm El Sheikh",
    description: "Relax on pristine beaches and dive into the rich underwater life in the Red Sea. Perfect for sun lovers and adventure seekers.",
    image: "assets/images/listing/sharm el sheikh.png",
    url: "destination-detail.html?location=sharm-el-sheikh"
  },
  {
    name: "Marsa Alam",
    description: "For nature lovers and adventure enthusiasts, Marsa Alam offers desert safaris, diving, and the chance to explore the unspoiled beauty of Egypt’s coast.",
    image: "assets/images/listing/marsa alam.jpeg",
    url: "destination-detail.html?location=marsa-alam"
  },
  {
    name: "Hurghada",
    description: "Famous for its marine life, vibrant coral reefs, and water sports. Experience the beauty of the Red Sea like never before.",
    image: "assets/images/listing/hurghada.png",
    url: "destination-detail.html?location=hurghada"
  },
  {
    name: "Paradise Island",
    description: "A secluded gem offering crystal-clear waters and white sandy beaches – a true escape into nature.",
    image: "assets/images/listing/paradise island.png",
    url: "destination-detail.html?location=paradise-island"
  }
];

const destinationsContainer = document.querySelector('#destination-tiles')
if(destinationsContainer){
  egyptDestinations.forEach(destination => {
    destinationsContainer.innerHTML += `
    <div class="group rounded-md shadow dark:shadow-gray-700">
                        <div class="md:flex md:items-center">
                            <div class="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow dark:shadow-gray-700 md:m-3 mx-3 mt-3">
                                <img src="${ destination.image ?? "assets/images/listing/1.jpg"}" class="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt="">
                            </div>
                            
                            <div class="p-4 w-full">
                                <p class="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" class="text-red-500 size-4 me-1"></i> ${destination.name}</p>
                                <p href="tour-detail-one.html" class="text-sm font-small">${destination.description}</p>
                            </div>
                        </div>
                    </div><!--end content-->
  `
  })
}

feather.replace();