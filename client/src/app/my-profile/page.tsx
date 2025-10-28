"use client";
import { assets } from "@/assets/assets_frontend/assets";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [userData, setUserData] = useState({
    name: "Mr. Shahzad",
    image: assets.profile_pic,
    email: "mr.shahzad.developer@gmail.com",
    phone: "+92 3415278601",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Brench Road, London",
    },
    gender: "Male",
    dob: "2004-04-14",
  });

  const [edit, setEdit] = useState(true);

  return (
    <div>
      <Image src={userData.image} alt="User Image" />
      <h1>{userData.name}</h1>
      <hr />
      <div>
        <h1>Contact Information</h1>
        <div>
          <p>Name: </p>
          {/* {
          edit?
          <input type="text" value={userData.name} onChange={e => setUserData(...prev ,name:e.target.value)} />
         } */}
          <p>{userData.name}</p>
        </div>
        <div>
          <p>Phone: </p>
          <p>{userData.phone}</p>
        </div>
        <div>
          <p>Adress: </p>
          <div>
            <p>{userData.address.line1}</p>
            <p>{userData.address.line2}</p>
          </div>
        </div>
        <p>Basic Information</p>
         <div>
          <p>Gender: </p>
          <p>{userData.gender}</p>
        </div>
         <div>
          <p>Birthday: </p>
          <p>{userData.dob}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
