import { FooterCopyright, Section } from "astro-boilerplate-components";

import { AppConfig } from "@/utils/AppConfig";

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
    <img src="/assets/images/bottom_design.png" alt="" />
  </Section>
);

export { Footer };
