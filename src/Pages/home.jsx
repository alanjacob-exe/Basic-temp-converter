import { useState } from "react";

export default function Home() {
  const [temp, setTemp] = useState({ celsius: 0.0, fahrenheit: 32 });

  const handleChange = (index, value) => {
    setTemp({
      [index == 0 ? "celsius" : "fahrenheit"]: value,
      [index == 0 ? "fahrenheit" : "celsius"]:
        index == 0 ? (value - 32) * (5 / 9) : value * (9 / 5) + 32,
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
    <>
      <div className="page-wrapper">
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
                    value={value.value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    placeholder={value.placeholder}
                    className="input input-bordered bg-black text-white input-primary w-full max-w-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
