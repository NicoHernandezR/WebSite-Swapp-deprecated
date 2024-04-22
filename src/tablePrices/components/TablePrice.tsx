import React from "react";
import ContentTable from "../types/ContentTable";

function TablePrice() {
  const Headers = ["Caracteristicas", "Gratis", "SemiPremium", "Premium"];

  const Content: ContentTable[] = [
    {
      title: "Caracteristica 1",
      aplied: [true, true, true],
    },
    {
      title: "Caracteristica 2",
      aplied: [true, false, true],
    },
    {
      title: "Caracteristica 3",
      aplied: [false, true, false],
    },
    {
      title: "Caracteristica 3",
      aplied: [false, true, false],
    },
    {
      title: "Caracteristica 3",
      aplied: [false, true, false],
    },
    {
      title: "Caracteristica 3",
      aplied: [false, true, false],
    },
    {
      title: "Caracteristica 3",
      aplied: [false, true, false],
    },
    {
      title: "Caracteristica 3",
      aplied: [false, true, false],
    },
    
  ];

  return (
    <div className="bg-custom-primary border-t-2 border-gray-600">
      <h1 className="text-center text-[30px] font-title text-white font-bold py-4">
        Resumen de niveles de suscripcion
      </h1>
      <div className="flex justify-center  p-7">
        <table className="max-w-4xl w-full border border-black">
          <thead className="bg-custom-black text-white">
            <tr>
              {Headers.map((head) => (
                <th key={head} className="py-2 px-4 border border-black">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-transparent">
            {Content.map((fila, index) => (
              <tr key={index}>
                <td className="border font-subtitle text-white border-black text-center py-2 px-4">
                  {fila.title}
                </td>
                {fila.aplied.map((item, index) => (
                  <td
                    key={index}
                    className="border border-black py-2 px-4 text-center"
                  >
                    {item ? "*" : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablePrice;
