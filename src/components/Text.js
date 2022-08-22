import React from "react";
import { useSelector } from "react-redux";

const Text = ({ user }) => {
  //   const user = useSelector((state) => state.user);
  const index = useSelector((state) => state.activeIcon);

  const sentence = [
    `Hi, my name is ${user.name.first} ${user.name.last}`,
    `My email address is  ${user.email}`,
    `My birthdate is ${user.dob.date.slice(0, 10)}`,
    `My address is ${user.location.postcode}, ${user.location.city}, ${user.location.country}`,
    `My phone number is ${user.phone}`,
    `My password is ${user.login.password}`,
  ];
  return (
    <div>
      <h3>{sentence[index]}</h3>
    </div>
  );
};

export default Text;
