export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold"></p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm">
          <div>
            <h3 className=" text-center text-gray-700 font-bold">Account Balance: $X,XXX.XX</h3>
          </div>
        </div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm">
        <div className=" flex items-center">
          <h3 className=" pl-3 font-bold text-gray-700">My Invested Balance: $X,XXX.XX</h3>
          <button className=" bg-green-400 rounded-lg p-2 hover:bg-white transition ease-in-out delay-150 m-5">Invest Now</button>
        </div>
      </div>
    </>
  );
}
