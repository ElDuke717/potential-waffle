import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from "astro-boilerplate-components";

const Navbar = () => (
  <Section>
    <img src="/assets/images/top_design.png" alt="" />
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="h-10 w-10"
              src="/assets/images/card_orbit_clear.png"
              alt="Ghazanellie logo"
              loading="lazy"
            />
          }
          name="Ghazanellie"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blog</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
