import Energy from "./GETEnergy.js";

class Apartment {
  constructor(
    ZipCode,
    city,
    RoadName,
    sqm,
    images,
    price,
    year,
    roomNumber,
    floornumber,
    sqmPrice,
    EnergyLevel,
    startingCameraPosition,
    Annotation,
    framelimits,
    target,
    ApartmentPath
  ) {
    this.ZipCode = ZipCode;
    this.city = city;
    this.RoadName = RoadName;
    this.sqm = sqm;
    this.year = year;
    this.images = images;
    this.price = price;
    this.roomNumber = roomNumber;
    this.floornumber = floornumber;
    this.sqmPrice = sqmPrice;
    this.EnergyLevel = EnergyLevel;
    this.startingCameraPosition = startingCameraPosition;
    this.Annotation = Annotation;
    this.framelimits = framelimits;
    this.target = target;
    this.ApartmentPath = ApartmentPath;
  }
}

const ListOfApartments = [
  new Apartment( //#1
    9000,
    "Aalborg",
    "Boulevarden 23, 2 tv",
    187,
    [
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp",
    ],
    4298000,
    1916,
    7,
    2,
    22984,
    Energy.D,
    [-2.8, 1.6, 5.9],
    [
      {
        title: "Kitchen",
        position: { x: -3.4, y: 1.6, z: 4.54 },
        lookAt: { x: -0.1, y: 1.6, z: 2.5 },
      },
      {
        title: "Living Room",
        position: { x: -2.8, y: 1.6, z: 3.86 },
        lookAt: { x: -5.2, y: 0.6, z: 1.66 },
      },
      {
        title: "Bed Rooms",
        position: { x: -5.4, y: 1.6, z: -6.4 },
        lookAt: { x: -5.4, y: 1.2, z: -2.1 },
      },
      {
        title: "Bath Room",
        position: { x: 1.7, y: 1.6, z: -4.55 },
        lookAt: { x: 0.0, y: 1, z: -2.3 },
      },
    ],
    {
      z1: 6,
      z2: -6.5,
      x1: -7,
      x2: 1.9,
    },
    [0, 0, 0],
    "/Apartment_1.glb"
  ),
  new Apartment( //#2
    9000,
    "Aalborg",
    "Boulevarden 23, 2 tv",
    187,
    [
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp",
    ],
    4298000,
    1916,
    7,
    2,
    22984,
    Energy.D,
    [1.3, 1.6, -4.5],
    [
      {
        title: "Kitchen",
        position: { x: 0.51, y: 1.6, z: -0.49 },
        lookAt: { x: -1.1, y: 1, z: -1.6 },
      },
      {
        title: "Living Room",
        position: { x: 0.08, y: 1.6, z: -0.7 },
        lookAt: { x: 0.08, y: 1, z: 2.6 },
      },
      {
        title: "Bed Room",
        position: { x: -0.22, y: 1.6, z: 2.8 },
        lookAt: { x: 0.9, y: 0.6, z: 1.8 },
      },
      {
        title: "Bath Room",
        position: { x: -1.4, y: 1.6, z: -5.1 },
        lookAt: { x: -0.46, y: 1.6, z: 0 },
      },
    ],
    {
      z1: 3.6,
      z2: -4.72,
      x1: -1.39,
      x2: 1.7,
    },
    [0, -2.9, 0],
    "/Apartment_2.glb"
  ),
  new Apartment( // #3
    9000,
    "Aalborg",
    "Boulevarden 23, 2 tv",
    187,
    [
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp",
    ],
    4298000,
    1916,
    7,
    2,
    22984,
    Energy.D,
    [8.2, 1.6, 12.5],
    [
      {
        title: "Kitchen",
        position: { x: 7.7, y: 1.6, z: 10.9 },
        lookAt: { x: 9.4, y: 1, z: 11.7 },
      },
      {
        title: "Living Room",
        position: { x: 7.5, y: 1.6, z: 12.7 },
        lookAt: { x: 5.7, y: 1.6, z: 11.25 },
      },
      {
        title: "Bed Rooms",
        position: { x: 15.6, y: 1.6, z: 6.7 },
        lookAt: { x: 13.8, y: 1, z: 5.6 },
      },
      {
        title: "Bath Room",
        position: { x: 12.9, y: 1.6, z: 7.7 },
        lookAt: { x: 15.1, y: 1.6, z: 7.7 },
      },
    ],
    {
      z1: 12.8,
      z2: 4.7,
      x1: 4.5,
      x2: 17.1,
    },
    [0, 0.4, 0],
    "/Apartment_3.glb"
  ),
  new Apartment( //#4
    9000,
    "Aalborg",
    "Boulevarden 23, 2 tv",
    187,
    [
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp",
    ],
    4298000,
    1916,
    7,
    2,
    22984,
    Energy.D,
    [-4.4, 1.6, 0.1],
    [
      {
        title: "Kitchen",
        position: { x: 1.11, y: 1.6, z: -1.44 },
        lookAt: { x: 0.8, y: 1.6, z: -3.8 },
      },
      {
        title: "Living Room",
        position: { x: -2.6, y: 1.6, z: 0.3 },
        lookAt: { x: -1.8, y: 1.6, z: 4.0 },
      },
      {
        title: "Bed Rooms",
        position: { x: 1.4, y: 1.6, z: 3.1 },
        lookAt: { x: 3.4, y: 1.6, z: 6.4 },
      },
      {
        title: "Bath Room",
        position: { x: 2.4, y: 1.6, z: -0.1 },
        lookAt: { x: 4.13, y: 1.3, z: 0.99 },
      },
    ],
    {
      z1: 6.7,
      z2: -4,
      x1: -4.1,
      x2: 5,
    },
    [0, -1, 0],
    "/Apartment_4.glb"
  ),
  new Apartment( //#5
    9000,
    "Aalborg",
    "Boulevarden 23, 2 tv",
    187,
    [
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp",
    ],
    4298000,
    1916,
    7,
    2,
    22984,
    Energy.D,
    [-0.7, 1.6, -3.2],
    [
      {
        title: "Kitchen",
        position: { x: -6.4, y: 1.6, z: 0.25 },
        lookAt: { x: -4.9, y: 1.6, z: -2.1 },
      },
      {
        title: "Living Room",
        position: { x: -0.33, y: 1.6, z: 0.24 },
        lookAt: { x: -2.3, y: 1.6, z: 3.1 },
      },
      {
        title: "Bed Rooms",
        position: { x: -10.1, y: 1.6, z: 0.8 },
        lookAt: { x: -10.1, y: 1.6, z: 4 },
      },
      {
        title: "Bath Room",
        position: { x: 3.6, y: 1.6, z: -2.8 },
        lookAt: { x: 2.4, y: 1, z: -1.5 },
      },
    ],
    {
      z1: 4,
      z2: -3,
      x1: -12.1,
      x2: 3.7,
    },
    [0, 3, 0],
    "/Apartment_5.glb"
  ),
  new Apartment( //#6
    9000,
    "Aalborg",
    "Boulevarden 23, 2 tv",
    187,
    [
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp",
    ],
    4298000,
    1916,
    7,
    2,
    22984,
    Energy.D,
    [8, 1.6, 2.96],
    [
      {
        title: "Kitchen",
        position: { x: 13.7, y: 1.6, z: 2.24 },
        lookAt: { x: 15.1, y: 0.6, z: 3.5 },
      },
      {
        title: "Living Room",
        position: { x: 10.9, y: 1.6, z: 5.8 },
        lookAt: { x: 10.9, y: 1.6, z: 2.9 },
      },
      {
        title: "Bed Rooms",
        position: { x: 12.4, y: 1.6, z: 0.6 },
        lookAt: { x: 12.4, y: 1, z: -1.2 },
      },
      {
        title: "Bath Room",
        position: { x: 10.4, y: 1.6, z: 0 },
        lookAt: { x: 9.7, y: 1, z: -0.7 },
      },
    ],
    {
      z1: 8,
      z2: -1.5,
      x1: 8,
      x2: 14.6,
    },
    [0, -1.5, 0],
    "/Apartment_6.glb"
  ),
  new Apartment( //#7
    9000,
    "Aalborg",
    "Boulevarden 23, 2 tv",
    187,
    [
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp",
    ],
    4298000,
    1916,
    7,
    2,
    22984,
    Energy.D,
    [2.3, 1.6, -2.2],
    [
      {
        title: "Kitchen",
        position: { x: -0.3, y: 1.6, z: 4.23 },
        lookAt: { x: -0.4, y: 1.6, z: 1.75 },
      },
      {
        title: "Living Room",
        position: { x: 2.6, y: 1.6, z: -1 },
        lookAt: { x: -0 - 7, y: 1, z: -1 },
      },
      {
        title: "Bed Rooms",
        position: { x: 5.2, y: 1.6, z: -1.28 },
        lookAt: { x: 8.2, y: 1.6, z: -1.28 },
      },
      {
        title: "Bath Room",
        position: { x: 4.2, y: 1.6, z: 3.8 },
        lookAt: { x: 6.2, y: 1.6, z: 3.8 },
      },
    ],
    {
      z1: 4.1,
      z2: -2.2,
      x1: -2.2,
      x2: 8.2,
    },
    [0, 3.16, 0],
    "/Apartment_7.glb"
  ),
  new Apartment( //#8
    9000,
    "Aalborg",
    "Boulevarden 23, 2 tv",
    187,
    [
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/568dcab3-9164-454a-8ea7-b3606e35ec4d.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/d40c4c53-6732-4f38-95e8-d09d4d778776.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/6f3688c9-9dae-40d5-8500-fff751d92fd8.webp",
      "https://images.boligsiden.dk/images/case/719466dc-f06b-42ee-a4be-091eea55fc9f/1440x960/a043d293-814b-4ef4-a084-f8456f12614c.webp",
    ],
    4298000,
    1916,
    7,
    2,
    22984,
    Energy.D,
    [-1.5, 1.6, 6],
    [
      {
        title: "Kitchen",
        position: { x: -1, y: 1.6, z: 2.1 },
        lookAt: { x: 1.1, y: 1.2, z: 2.6 },
      },
      {
        title: "Living Room",
        position: { x: -1.3, y: 1.6, z: 1.3 },
        lookAt: { x: 0.3, y: 1.6, z: -1.1 },
      },
      {
        title: "Bed Rooms",
        position: { x: -0.8, y: 1.6, z: -4.2 },
        lookAt: { x: 1.2, y: 1, z: -4.2 },
      },
      {
        title: "Bath Room",
        position: { x: -0.2, y: 1.6, z: 5.7 },
        lookAt: { x: 0.8, y: 1, z: 5.3 },
      },
    ],
    {
      z1: 6,
      z2: -5.1,
      x1: -1.6,
      x2: 1.8,
    },
    [0, 0, 0],
    "/Apartment_8.glb"
  ),
];
export default ListOfApartments;
