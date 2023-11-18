import { useEffect, useState } from "react";

//components

import PaintDetails from "../components/paintDetails";
import PaintForm from "../components/paintForm";

const Paints = () => {
  const [paints, setPaints] = useState(null);
  useEffect(() => {
    const fetchPaints = async () => {
      const response = await fetch(
        "https://trailblazerupkeeper.onrender.com/paints"
      );
      const json = await response.json();

      if (response.ok) {
        setPaints(json);
      }
    };
    fetchPaints();
  }, []);
  return (
    <div className="mt-20 paint-page">
      <div className="flex flex-wrap justify-between">
        <div>
          <PaintForm />
          <br />
        </div>
        <div className="flex justify-end w-1/2">
          <img
            className=""
            src="https://brand.utahtech.edu/wp-content/uploads/sites/249/2022/05/Athletic-Trailblazers-Logomark-Web.png"
            alt="logo"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-3 grid-rows-3 gap-3 paints">
        {paints &&
          paints.map((paints) => (
            <PaintDetails key={paints._id} paints={paints} />
          ))}
      </div>
      <br />
    </div>
  );
};

export default Paints;
