import { useState } from "react";

export default function Home() {
  const [temp, settemp] = useState({ celsius: 0, fahrenheit: 0 });

  const handleCelsius = (e) => {
    settemp({
      celsius: e.target.value,
      fahrenheit: e.target.value * (9 / 5) + 32,
    });
  };

  const handleFahrenheit = (e) => {
    settemp({
        celsius:(e.target.value)-(32)*(5/9),
        fahrenheit:e.target.value
    })
  };
  console.log(temp);
  return (
    <main className="w-screen h-screen bg-black text-white flex flex-col">
      <div className="w-full h-[10%] flex">
        <div className="my-auto text-xl font-semibold">
          Temperature Converter
        </div>
      </div>
      <div className="w-full h-full p-2 flex ">
        <div className="w-3/5 h-1/6  mx-auto mt-20 rounded-md border-primary border  flex flex-row">
          <div className="w-1/2 p-2 flex flex-col">
            <div className="font-semibold text-md">Enter in Celsius</div>
            <div className="my-auto">
              <input
                type="text"
                value={temp.celsius}
                onChange={(e) => {
                  handleCelsius(e);
                }}
                placeholder="eg- 32"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </div>
          <div className="w-1/2 p-2 flex flex-col">
            <div className="font-semibold text-md">Enter in fahrenheit </div>
            <div className="my-auto">
              <input
                type="text"
                value={temp.fahrenheit}
                onChange={(e) => {handleFahrenheit(e)}}
                placeholder="eg- 98"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </main>
  );
}
