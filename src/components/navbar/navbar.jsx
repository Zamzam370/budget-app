
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router";

export function NavbarComponent() {
  return (
    <Navbar  className="bg-gradient-to-br from-slate-200 rounded-2xl via-slate-300 to-slate-500 w-full">
      <NavbarBrand >
       
        
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Sign Out</Button>
        <NavbarToggle />
      </div>
    <NavbarCollapse>
          <NavLink to='/budget' >
          Budget
        </NavLink>
        <NavLink to='/history' >
          History
        </NavLink>
       
      </NavbarCollapse>
    </Navbar>
  );
}
