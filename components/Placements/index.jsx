"use client"
import SectionTitle from "../Common/SectionTitle";
import Brands from "../Brands/index";
import Image from "next/image";
import { useEffect, useState } from "react";


const Placements = () => {

  
  const imgs = [
    {
      name: "jacob",
      url: "/images/companies/jacob.png",
      height: 150,
      width: 100,
    },
    {
      name: "gbim",
      url: "/images/companies/gbim.png",
      height: 100,
      width: 150,
    },
    {
      name: "icedesigner.png",
      url: "/images/companies/icedesigner.png",
      height: 100,
      width: 150,
    },
    {
      name: "aecom",
      url: "/images/companies/aecom.jpeg",
      height: 100,
      width: 150,
    },
    {
      name: "obermeyer",
      url: "/images/companies/obermeyer.png",
      height: 100,
      width: 150,
    },
    {
      name: "tag",
      url: "/images/companies/Tag.png",
      height: 100,
      width: 150,
    },
  ];
  return (
    <div id="placements" >
      <SectionTitle
        title="Placements"
        paragraph="Several of our students have successfully secured positions at prominent consulting firms, which is a testament to the quality of our training and the skills they have acquired through our programs"
        center
      />
      <div className="container flex justify-center" >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {imgs.map((img) => {
            return (
              <div className="col" key={img.name}>
                <Image
                  src={img.url}
                  alt={img.name}
                  width={img.width}
                  height={img.height}
                  key={img.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Placements;
