import { Button } from "./ui/button";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";

const Navbar = () => {
  const items = [
    { name: "Procedimientos", href: "/procedimientos" },
    { name: "Productos", href: "/productos" },
    { name: "Crear Publicación", href: "/crearguia" },
  ];

  return (
    <div className="fixed bg-white w-full flex justify-between items-center px-12 py-4 z-10">
      <a href="/">
        <span className="text-xl font-black">Media Guía App</span>
      </a>
      <ul className="hidden md:flex">
        {items.map((item) => {
          return (
            <li className="mx-4 flex items-center" key={item.href}>
              <a href={item.href}>
                {item.href === "/crearguia" ? (
                  <Button className="text-xl">{item.name}</Button>
                ) : (
                  item.name
                )}
              </a>
            </li>
          );
        })}
      </ul>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="md:hidden text-xl">Menu</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm min-h-screen flex flex-col justify-center items-center">
            <DrawerClose className="fixed right-24 top-24 text-2xl font-black">
              X
            </DrawerClose>
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-black">
                <a href="/">Medi Guía App</a>
              </DrawerTitle>
            </DrawerHeader>
            {items.map((item) => {
              return (
                <li className="mx-4 flex items-center my-4" key={item.href}>
                  <a href={item.href}>
                    {item.href === "/crearguia" ? (
                      <Button className="text-xl">{item.name}</Button>
                    ) : (
                      item.name
                    )}
                  </a>
                </li>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
