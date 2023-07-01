import { useState } from "react";
import { useMemo } from "react";

export default function Home() {
  const [temp, setTemp] = useState({ celsius: 0.0, fahrenheit: 32 });

  const handleChange = ({ target }) => {
    const { id, value } = target;

    setTemp({
      [id]: parseFloat(value),
      [id === "celsius" ? "fahrenheit" : "celsius"]: parseFloat(
        id === "celsius" ? value * (9 / 5) + 32 : (value - 32) * (5 / 9)
      ),
    });
  };

  // const renderList = [
  //   {
  //     heading: "Enter Celsius",
  //     value: temp.celsius,
  //     placeholder: "eg-32",
  //   },
  //   {
  //     heading: "Enter Fahrenheit",
  //     value: temp.fahrenheit,
  //     placeholder: "eg-98",
  //   },
  // ];

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  const inputComponent = useMemo(() => {
    return Object.keys(temp)
      .sort()
      .map((key) => (
        <>
          <input
            min="0.00"
            type="number"
            step="0.01"
            id={key}
            value={temp[key]}
            onChange={handleChange}
            className="input input-bordered bg-black text-white input-primary w-full max-w-xs"
          />
        </>
      ));
  }, [temp]);

  return (
    <>
      <div className="page-wrapper">
        <div className="w-full h-[10%] flex">
          <div className="my-auto text-xl font-semibold">
            Temperature Converter
          </div>
        </div>
        <div className="w-full h-full p-2 flex ">
          <div className="w-3/5 h-1/6  mx-auto mt-20 rounded-md   flex flex-row">
            {inputComponent}
            {/* {Object.keys(temp)
              .sort()
              .map((key) => (
                <div key={key} className="">
                  <input
                    min="0.00"
                    type="number"
                    step="0.01"
                    id={key}
                    value={temp[key]}
                    onChange={handleChange}
                    className="input input-bordered  bg-black text-white input-primary w-full max-w-xs"
                  />
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
