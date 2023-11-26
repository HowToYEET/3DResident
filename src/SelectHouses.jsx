export default function SelectHouses() {
  const items = ["house 1", "house 2", "house 3"];
  let itemList = items.map((item, index) => {
    return (
      <>
        <div class="h-56 grid grid-cols-3 gap-4 content-center items-center ...">
          <div>
            <h1>Here is house number {index + 1}</h1>
            <h2>{item}</h2>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <main>{itemList}</main>
    </>
  );
}
