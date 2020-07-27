import { Flex, Link as UILink } from "@chakra-ui/core";
import Link from "next/link";
import { NavigationLink } from '../../interfaces';

export interface NavigationLinks {
  navLinks: NavigationLink[];
}
export interface PixelsWidth extends NavigationLinks {
  widthPx: number;
}
export interface PercentWidth extends NavigationLinks {
  widthPer: number;
}
export type NavbarProps = PixelsWidth | PercentWidth;

const Navbar = (props: NavbarProps) => {
  return (
    <Flex w={'widthPx' in props ? `${props.widthPx}px` : `${props.widthPer}%`} justify='space-between'>
      {
        props.navLinks.map((link, i) =>
          <Link key={`${link.name}-${i}`} href={link.href}>
            <UILink color="#fff" fontSize='1.1rem'>{link.name}</UILink>
          </Link>
        )
      }
    </Flex>
  )
}

export default Navbar;
