export default function Home() {
  return (
    <>
      {/* <p className="text-white text-3xl mb-16 font-bold">PLOTT</p> */}

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm">
          <div>
            <h3 className=" text-center text-gray-700 font-bold">Account Balance: $X,XXX.XX</h3>
          </div>
        </div>
        <div className="rounded bg-white h-40 shadow-sm">
          <div>
            <h3 className=" font-bold text-center text-xl">Other Properties:</h3>
            <p className=" font-bold mt-3 text-center">Mississippi, Conneticut, Minnesota, New Jersey</p>
          </div>
        </div>
        <div className="rounded bg-white h-40 shadow-sm">
          <div>
            <h3 className=" text-xl font-bold text-center">My Properties:</h3>
            <p className=" text-center font-bold mt-4">Georgia, California, Texas, Washington</p>
          </div>
        </div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm">
        <div className=" items-center">
          <h3 className=" pl-3 font-bold text-gray-700">My Invested Balance: $X,XXX.XX</h3>
          <button className=" bg-green-400 rounded-lg p-2 hover:bg-white transition ease-in-out delay-150 m-5">Invest Now</button>
        </div>
      </div>
    </>
  );
}
