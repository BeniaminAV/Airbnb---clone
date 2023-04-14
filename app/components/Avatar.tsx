"use client";

import React from "react";
import Image from "next/image";
import { AvatarImg } from "@/public";

interface AvatarImgProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarImgProps> = ({ src }) => {
  return (
    <div>
      <Image
        className="rounded-full"
        height="30"
        width="30"
        alt="avatar"
        src={src || AvatarImg}
      />
    </div>
  );
};

export default Avatar;
