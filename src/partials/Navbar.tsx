import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from "astro-boilerplate-components";

const Navbar = () => (
  <Section>
    <img src="/assets/images/top_design.png" alt="" />
    <NavbarTwoColumns>
      <div className="flex items-center"> {/* Add flex and items-center classes here */}
        <a href="/" className="main-title flex items-center"> {/* Optionally add flex and items-center here if needed */}
          <img className='orbit-logo mr-2' src="/assets/images/card_orbit_clear.png" alt="Ghazanellie logo" /> {/* Add margin-right (mr-2) for spacing */}
          Ghazanellie
        </a>
      </div>

      <NavMenu>
        <NavMenuItem className='main-title' href="/posts/">Blog</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar }
