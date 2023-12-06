import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

type Props = {
  onClick: () => void;
};

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false); // in real-world application useState will be set via prop
  // ex: rendering tweets of user. some of them he has liked other he hasn't

  const toggle = () => {
    setStatus(!status); // reverses whatever is status.
    onClick();
  };

  if (status) return <IoMdHeart color="Red" size={30} onClick={toggle} />;
  return <IoMdHeartEmpty size={30} onClick={toggle} />;
};

export default Like;
