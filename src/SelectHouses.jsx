export default function SelectHouses() {
 const someHouses = [new House("vendsyssel 4", 52, "./placeholder.jpg", 1200000),
  new House("vendsyssel 4", 52, "./placeholder.jpg", 1200000),
   new House("vendsyssel 4", 52, "./placeholder.jpg", 1200000),
   new House("vendsyssel 4", 52, "./placeholder.jpg", 1200000),
   new House("vendsyssel 4", 52, "./placeholder.jpg", 1200000),
   new House("vendsyssel 4", 52, "./placeholder.jpg", 1200000),
   new House("vendsyssel 4", 52, "./placeholder.jpg", 1200000)]

  let itemList = someHouses.map((item, index) => {
    return (
      <div>
        <div className=" bg-sky-500 hover:bg-sky-700 flex justify-center rounded-lg">
          <div className="">
            <h2 className="text-lg">{item.RoadName}</h2>
            <h2 className="">Area: {item.sqm}m²</h2>
            <h2 className="">{formatter.format(item.price)}</h2>
            <img className="object-cover h-auto w-80 rounded-lg place-content-center" src={item.image} alt="placeholder"/>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <main className=" mx-5 bg-sky-100 relative top-40 grid grid-cols-3 gap-5">{itemList}</main>
    </div>
  );
}
const formatter = new Intl.NumberFormat('dk-DK', {
  style: 'currency',
  currency: 'DKK',
});
class House{
  constructor(RoadName, sqm, image, price){
      this.RoadName = RoadName;
      this.sqm = sqm;
      this.image = image
      this.price = price
  }
}