import { useState } from "react";

export default function Home() {
  const [temp, settemp] = useState({ celsius: 0, fahrenheit: 32 });

  const handleChange = (select, e) => {
    e.target.id == "eg-32"
      ? settemp({
          celsius: e.target.value,
          fahrenheit: e.target.value * (9 / 5) + 32,
        })
      : settemp({
          celsius: (e.target.value - 32) * (5 / 9),
          fahrenheit: e.target.value,
        });
  };

  const renderList = [
    {
      heading: "Enter Celsius",
      value: temp.celsius,
      placeholder: "eg-32",
    },
    {
      heading: "Enter Fahrenheit",
      value: temp.fahrenheit,
      placeholder: "eg-98",
    },
  ];

  return (
    <main className="w-screen h-screen bg-black text-white flex flex-col">
      <div className="w-full h-[10%] flex">
        <div className="my-auto text-xl font-semibold">
          Temperature Converter
        </div>
      </div>
      <div className="w-full h-full p-2 flex ">
        <div className="w-3/5 h-1/6  mx-auto mt-20 rounded-md border-primary border  flex flex-row">
          {renderList.map((value, index) => (
            <div key={index} className="w-1/2 p-2 flex flex-col">
              <div className="font-semibold text-md">{value.heading}</div>
              <div className="my-auto">
                <input
                  type="number"
                  id={value.placeholder}
                  value={value.value}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder={value.placeholder}
                  className="input input-bordered bg-black text-white input-primary w-full max-w-xs"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
