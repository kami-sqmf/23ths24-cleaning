'use client';
import { RiArrowLeftSLine, RiHome4Line } from "@remixicon/react";
import { usePathname, useRouter } from "next/navigation";

const NavLeft = ({ }: {}) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      {pathname === "/" ?
        <RiHome4Line className="w-6 h-6 flex-grow-0" />
        :
        <RiArrowLeftSLine onClick={() => { router.back() }} className="w-7 h-7 flex-grow-0" />
      }
    </>
  )
}

export { NavLeft };
