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
    <div className="flex justify-between items-center px-12 py-4">
      <span className="text-xl font-black">Media Guía App</span>
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
          <Button className="md:hidden">Menu</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm min-h-screen flex flex-col justify-center items-center">
            <DrawerClose className="fixed right-12 top-12 text-2xl font-black">
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
