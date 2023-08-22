import { useState } from "react";
import "./calculation-app.css";

function CalcApp() {
   // State
  const [shape, setShape] = useState("");
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(null);
  const [side, setSide] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [pedestal, setPedestal] = useState(0);
  const [prism_triangle_height, setPrism_triangle_height] = useState(0);
  const [radius, setRadius] = useState(0);

  const handleShapeChange = (event) => {
    setShape(event.target.value);
  };

  const handleCalculationChange = (event) => {
    setCalculation(event.target.value);
  };

  const handleCalculate = async () => {
    const response = await fetch("http://localhost:8080/calculation_base.php", {
      method: "POST",
      body: JSON.stringify({
        shape,
        calculation,
        side,
        length,
        width,
        height,
        pedestal,
        prism_triangle_height,
        radius,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Calculator bangun ruang
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2 font-semibold text-gray-700 ">
              Pilih bangun ruang:
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={shape}
              onChange={handleShapeChange}
            >
              <option value="">Select</option>
              <option value="cube">Kubus</option>
              <option value="rectangular_prism">Balok</option>
              <option value="prism_triangle">Prisma Segitiga</option>
              <option value="sphere">Bola</option>
              <option value="cone">kerucut</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2 font-semibold text-gray-700">
              Pilih penghitungan:
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={calculation}
              onChange={handleCalculationChange}
            >
              <option value="">Select</option>
              <option value="surface_area">Luas permukaan</option>
              <option value="volume">Volume</option>
            </select>
          </div>
        </div>
        {shape === "cube" && (
          <div className="mt-4">
            <label className="block mb-2 font-semibold text-gray-700">
              Masukan panjang sisi:
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={side}
              onChange={(event) => setSide(parseFloat(event.target.value))}
            />
          </div>
        )}

        {shape === "rectangular_prism" && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan Panjang:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={length}
                onChange={(event) => setLength(parseFloat(event.target.value))}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan Lebar:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={width}
                onChange={(event) => setWidth(parseFloat(event.target.value))}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan Tinggi:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={height}
                onChange={(event) => setHeight(parseFloat(event.target.value))}
              />
            </div>
          </div>
        )}
        {shape === "prism_triangle" && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan alas:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={pedestal}
                onChange={(event) => setPedestal(parseFloat(event.target.value))}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan tinggi prisma:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={prism_triangle_height}
                onChange={(event) => setPrism_triangle_height(parseFloat(event.target.value))}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan Tinggi:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={height}
                onChange={(event) => setHeight(parseFloat(event.target.value))}
              />
            </div>
          </div>
        )}
        {shape === "sphere" && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan jari jari lingkaran:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={radius}
                onChange={(event) => setRadius(parseFloat(event.target.value))}
              />
            </div>
          </div>
        )}
         {shape === "cone" && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan jari jari kerucut:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={radius}
                onChange={(event) => setRadius(parseFloat(event.target.value))}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Masukan Tinggi kerucut:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={height}
                onChange={(event) => setHeight(parseFloat(event.target.value))}
              />
            </div>
          </div>
        )}

        <div className="mt-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleCalculate}
          >
            Hitung!
          </button>
        </div>

        <div className="mt-8">
          {result !== null && (
            <div className="text-center text-xl font-semibold text-green-700">
              Hasil: {result} cm^3
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalcApp;
