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

    // document.getElementById(id).focus();
    // e.target.id == "eg-32"
    //   ? settemp({
    //       celsius: e.target.value,
    //       fahrenheit: e.target.value * (9 / 5) + 32,
    //     })
    //   : settemp({
    //       celsius: (e.target.value - 32) * (5 / 9),
    //       fahrenheit: e.target.value,
    //     });
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
          <div className="w-3/5 h-1/6  mx-auto mt-20 rounded-md border-primary border  flex flex-row">
            {console.log("temp", temp)}
            {inputComponent}
            {/* {renderList.map((value, index) => (
              <div key={index} className="w-1/2 p-2 flex flex-col">
                <div className="font-semibold text-md">{value.heading}</div>
                <div className="my-auto">
                  temp
                  <input
                    type="number"
                    id={value.placeholder}
                    value={value.value}
                    onChange={handleChange}
                    placeholder={value.placeholder}
                    className="input input-bordered bg-black text-white input-primary w-full max-w-xs"
                  />
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
