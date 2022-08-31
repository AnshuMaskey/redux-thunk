import React from "react";
import { useSelector } from "react-redux";

const Text = ({ user }) => {
  //   const user = useSelector((state) => state.user);
  const { activeIcon } = useSelector((state) => state.users);

  const sentence = [
    `Hi, my name is ${user.name}`,
    `My email address is  ${user.email}`,
    `My birthdate is ${user.date}`,
    `My address is ${user.address}`,
    `My phone number is ${user.phone}`,
    `My password is ${user.password}`,
  ];
  return (
    <div>
      <h3>{sentence[activeIcon]}</h3>
    </div>
  );
};

export default Text;
