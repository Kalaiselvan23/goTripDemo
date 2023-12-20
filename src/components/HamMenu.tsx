import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom"
import { Button } from "./ui/button";
const HamMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <IoMenu />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="flex flex-col gap-4 text-base font-medium text-left  text-black">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Destinations</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
            <NavLink to={"/"}>About</NavLink>
            <div className="flex justify-center">
              <Button className="bg-blue-500 rounded-[0.3rem] font-semibold text-white mx-2">Login</Button>
              <Button className="bg-orange-400 rounded-[0.3rem] font-semibold text-white ">Signup</Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}

export default HamMenu
