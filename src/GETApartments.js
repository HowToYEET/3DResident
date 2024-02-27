import Energy from './GETEnergy.js'

class Apartment {
  constructor(ZipCode, city, RoadName, sqm, images, price, year, roomNumber, floornumber, sqmPrice, EnergyLevel, startingCameraPosition, Annotation, ApartmentPath) {
    this.ZipCode = ZipCode;
    this.city = city;
    this.RoadName = RoadName;
    this.sqm = sqm;
    this.year = year
    this.images = images;
    this.price = price;
    this.roomNumber = roomNumber;
    this.floornumber = floornumber;
    this.sqmPrice = sqmPrice;
    this.EnergyLevel = EnergyLevel;
    this.startingCameraPosition = [-4, 2, 8];
    this.Annotation = [
      {
        title: 'Kitchen',
        position: { x: 0, y: 0, z: 0 },
        lookAt: { x: 0, y: 0, z: 0 }
      },
      {
        title: 'Living Room',
        position: { x: 0, y: 0, z: 0 },
        lookAt: { x: 0, y: 0, z: 0, }
      },
      {
        title: 'Bed Room',
        position: { x: 0, y: 0, z: 0, },
        lookAt: { x: 0, y: 0, z: 0, }
      },
      {
        title: 'Bath Room',
        position: { x: 0, y: 0, z: 0 },
        lookAt: { x: 0, y: 0, z: 0 }
      }
    ],
    this.Apartment = ApartmentPath
  }
}

const ListOfApartments = [
  new Apartment(9000, "Aalborg", "Boulevarden 23, 2 tv", 187,
    ["https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp"
    ], 4298000, 1916, 7, 2, 22984, Energy.D, [-4, 1, 8], [], "/Apartment_1.glb"
  ),
  new Apartment(9000, "Aalborg", "Marshalls allé 2, 2. 3.", 45,
    [
      "https://images.boligsiden.dk/images/case/a821e250-6b4f-4f4a-96c6-689bec385ebf/1440x960/bee732e8-ec5f-4f96-9371-26900fa3f1f9.webp",
      "https://images.boligsiden.dk/images/case/a821e250-6b4f-4f4a-96c6-689bec385ebf/1440x960/41128dbf-0e81-45b5-900a-d67cdb5019a0.webp",
      "https://images.boligsiden.dk/images/case/a821e250-6b4f-4f4a-96c6-689bec385ebf/1440x960/9b8bda94-9a30-4fff-a294-3aaddfa29775.webp"

    ],

    1245000, 2018, 2, 2, 27667, Energy.A15, [-4, 1, 8],[],"/Apartment_2.glb"
  ),
  new Apartment(9000, "Aalborg", "Vesterbro 46, 4. tv.", 132,
    [
      "https://images.boligsiden.dk/images/case/fb661ea1-7ca9-45fe-b5f6-6ca9821351a7/1440x960/09639ce5-5507-4520-a7a7-5e1f296733eb.webp",
      "https://images.boligsiden.dk/images/case/fb661ea1-7ca9-45fe-b5f6-6ca9821351a7/1440x960/3d4de77e-74fe-4494-9f56-f6f764ed7313.webp",
      "https://images.boligsiden.dk/images/case/fb661ea1-7ca9-45fe-b5f6-6ca9821351a7/1440x960/c423d0ad-7c86-4e2a-a7eb-f76279908f66.webp",
      "https://images.boligsiden.dk/images/case/fb661ea1-7ca9-45fe-b5f6-6ca9821351a7/1440x960/1c9619d8-0d1b-479e-aef7-9bc9be78f033.webp"
    ],
    2295000, 1927, 4, 4, 17386, Energy.D, [-4, 1, 8],[],"/Apartment_3.glb" // postion [0,18,0] og scale = 5
  ),
  new Apartment(9400, "Nørresundby", "Stigborgs brygge 149 3. tv", 115,
    [
      "https://images.boligsiden.dk/images/case/dbe50ca3-6578-40e7-a1bd-0047cbb9e409/1440x960/962df607-85b6-4439-b75d-e48faa046801.webp",
      "https://images.boligsiden.dk/images/case/dbe50ca3-6578-40e7-a1bd-0047cbb9e409/1440x960/cb3b3df1-e065-4910-b28d-b8c3aee169a9.webp",
      "https://images.boligsiden.dk/images/case/dbe50ca3-6578-40e7-a1bd-0047cbb9e409/1440x960/06c0cc18-e90a-458a-9210-0a014e35bcdc.webp",
      "https://images.boligsiden.dk/images/case/dbe50ca3-6578-40e7-a1bd-0047cbb9e409/1440x960/0b044626-6904-49ad-a645-1f367b12ae43.webp"

    ],
    4295000, 2022, 4, 3, 37348, Energy.A15, [-4, 1, 8],[],"/Apartment_4.glb"
  ),
  new Apartment(9000, "Aalborg", "Hadsundvej 86A, st. tv.", 88,
    [
      "https://images.boligsiden.dk/images/case/eb6de37e-ce90-403e-adba-f54bd0cde0b7/1440x960/c4e62c34-5f18-47a2-80cb-81fb9f8886f6.webp",
      "https://images.boligsiden.dk/images/case/eb6de37e-ce90-403e-adba-f54bd0cde0b7/1440x960/38e021d7-ae22-40af-9a1b-e96bbfb91115.webp",
      "https://images.boligsiden.dk/images/case/eb6de37e-ce90-403e-adba-f54bd0cde0b7/1440x960/4541bbcf-5376-40c4-952d-32295da77ea9.webp",
      "https://images.boligsiden.dk/images/case/eb6de37e-ce90-403e-adba-f54bd0cde0b7/1440x960/4927582f-f24e-46e9-873c-855769399d14.webp"
    ],
    1395000, 1969, 3, 0, 15852, Energy.C, [-4, 1, 8],[],"/Apartment_1.glb"
  ),
  new Apartment(9000, "Aalborg", "Reberbansgade 18, 1.", 99,
    [
      "https://images.boligsiden.dk/images/case/4164292c-2108-48e9-baba-bdeab3cd33b4/1440x960/685e65cf-a9fe-4646-b21b-b7ad25fbca35.webp",
      "https://images.boligsiden.dk/images/case/4164292c-2108-48e9-baba-bdeab3cd33b4/1440x960/efd4b0dd-bafa-441c-a968-6a9cccc41830.webp",
      "https://images.boligsiden.dk/images/case/4164292c-2108-48e9-baba-bdeab3cd33b4/1440x960/35ef6863-0328-4e0a-bbd9-78d3616b4863.webp",
      "https://images.boligsiden.dk/images/case/4164292c-2108-48e9-baba-bdeab3cd33b4/1440x960/0f3c5d46-e368-4d04-9a30-285d2166d812.webp",
      "https://images.boligsiden.dk/images/case/4164292c-2108-48e9-baba-bdeab3cd33b4/1440x960/3cf3298b-c5a5-43a7-b681-ceb8e7e9f7c5.webp",
    ],
    1995000, 2013, 3, 1, 20152, Energy.C, [-4, 1, 8],[],"/Apartment_1.glb"
  ),
  new Apartment(9000, "Aalborg", "Stormgade 17A, 1. 1.", 91,
    [
      "https://images.boligsiden.dk/images/case/c78d5841-396e-46c1-aca2-1b1da96eca3d/1440x960/a897baca-116e-4758-bd87-de91193d7951.webp",
      "https://images.boligsiden.dk/images/case/c78d5841-396e-46c1-aca2-1b1da96eca3d/1440x960/2b3401ec-a938-4928-9ba1-f698399f1ad8.webp",
      "https://images.boligsiden.dk/images/case/c78d5841-396e-46c1-aca2-1b1da96eca3d/1440x960/aa0ca385-8369-4c84-97d4-629acd898dbf.webp",
      "https://images.boligsiden.dk/images/case/c78d5841-396e-46c1-aca2-1b1da96eca3d/1440x960/664416a6-8221-47aa-ac95-da9d807044d4.webp",
      "https://images.boligsiden.dk/images/case/c78d5841-396e-46c1-aca2-1b1da96eca3d/1440x960/7ce8bf78-b05a-43a3-8a94-8743da296206.webp"
    ],
    2895000, 2020, 3, 1, 31813, Energy.A10, [-4, 1, 8],[],"/Apartment_1.glb"
  ),
  new Apartment(9000, "Aalborg", "Løkkegade 15, st.", 87,
    [
      "https://images.boligsiden.dk/images/case/812aa893-889d-4be0-a026-a531461fbd9f/1440x960/181abf66-9a98-483a-a81d-cd781ac29056.webp",
      "https://images.boligsiden.dk/images/case/812aa893-889d-4be0-a026-a531461fbd9f/1440x960/cdd05411-5e0d-4cae-9336-8f17db14f1f8.webp",
      "https://images.boligsiden.dk/images/case/812aa893-889d-4be0-a026-a531461fbd9f/1440x960/7bd7d1af-8964-42e3-8865-ae7b1e8cd706.webp",
      "https://images.boligsiden.dk/images/case/812aa893-889d-4be0-a026-a531461fbd9f/1440x960/c7100b14-d297-49b1-ac88-3afc96c6cd8b.webp",
      "https://images.boligsiden.dk/images/case/812aa893-889d-4be0-a026-a531461fbd9f/1440x960/723eeb3d-f115-48a2-a6e5-0c6f03981eb6.webp"
    ],
    1595000, 2004, 3, 0, 18333, Energy.D, [-4, 1, 8],[],"/Apartment_1.glb"
  ),
  new Apartment(9000, "Aalborg", "Vesterbro 35, 3. 302.", 91,
    [
      "https://images.boligsiden.dk/images/case/803765bd-a7dc-4645-90ef-aede28ffb226/1440x960/3d7d6d6b-4b21-4f33-8623-cecac0a27ac8.webp",
      "https://images.boligsiden.dk/images/case/803765bd-a7dc-4645-90ef-aede28ffb226/1440x960/410127eb-a81d-4938-a608-964a5300f734.webp",
      "https://images.boligsiden.dk/images/case/803765bd-a7dc-4645-90ef-aede28ffb226/1440x960/03511958-ed6b-4df0-afc2-f4894a09d80b.webp",
    ],
    1495000, 2007, 3, 3, 16429, Energy.C, [-4, 1, 8],[],"/Apartment_1.glb"
  ),
  new Apartment(9000, "Aalborg", "Falstersgade 46, 2. tv.", 62,
    [
      "https://images.boligsiden.dk/images/case/8ac1d7c8-27c8-4377-87ea-666ae225a37a/1440x960/838c11c5-cbb4-437a-840a-39ef81963eb8.webp",
      "https://images.boligsiden.dk/images/case/8ac1d7c8-27c8-4377-87ea-666ae225a37a/1440x960/248e4e5d-ce7f-4292-8e47-cf405502dd1d.webp",
      "https://images.boligsiden.dk/images/case/8ac1d7c8-27c8-4377-87ea-666ae225a37a/1440x960/0dace1d2-8593-48e6-9aa5-e73b46f932ab.webp",
    ],
    1345000, 1932, 2, 2, 21694, Energy.D, [-4, 1, 8],[],"/Apartment_1.glb"
  )
]
export default ListOfApartments;