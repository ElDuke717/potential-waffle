import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <>
        Discover the <GradientText>Tarot</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="A Timeless Tradition"
        description="Embark on an introspective journey with our expert tarot readings. The tarot provides a mirror to your soul, offering profound insights into your innermost questions. Whether you're seeking guidance on love, career, relationships, or personal growth, our readings aim to illuminate your path and empower your decisions. "
        link="/"
        img={{
          src: "/assets/images/card_orbit_clear.png",
          alt: "Project Web Design",
        }}
        // category={
        //   <>
        //     <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
        //     <Tags color={ColorTags.LIME}>Web design</Tags>
        //     <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
        //     <Tags color={ColorTags.ROSE}>TypeScript</Tags>
        //   </>
        // }
      />
      <Project
        name="Personalized Readings"
        description="We believe each tarot reading is a personal exploration. Choose from a variety of spreads and decks to suit your specific query or situation. Our readings are tailored to your energy and the questions you bring to the cards, ensuring a session that speaks directly to your spirit. "
        link="/"
        img={{ src: "/assets/images/cards_spread_clear.png", alt: "Project Fire" }}
        // category={
        //   <>
        //     <Tags color={ColorTags.VIOLET}>Next.js</Tags>
        //     <Tags color={ColorTags.EMERALD}>Blog</Tags>
        //     <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
        //   </>
        // }
      />
      <Project
        name="What to Expect"
        description="During a tarot reading, you will select cards from the deck, which our readers will lay out in a specific spread. Each position in the spread reflects a different aspect of your question. As the cards are revealed, we will guide you through their meanings and the insights they provide into your life's journey. "
        link="/"
        img={{ src: "/assets/images/cards_spread2_clear.png", alt: "Project Maps" }}
        // category={
        //   <>
        //     <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
        //     <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
        //     <Tags color={ColorTags.ROSE}>TypeScript</Tags>
        //   </>
        // }
      />
      <Project
        name="Embrace the Guidance of the Tarot"
        description="Ready to uncover the hidden facets of your life's tapestry? Let the tarot be your guide to understanding the present and exploring the future's potential. Connect with our tarot readers today and step into a world of clarity and self-discovery."
        link="/"
        img={{ src: "/assets/images/tarot_arrange_clear.png", alt: "Project Maps" }}
        // category={
        //   <>
        //     <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
        //     <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
        //     <Tags color={ColorTags.ROSE}>TypeScript</Tags>
        //   </>
        // }
      />
    </div>
  </Section>
);

export { ProjectList };
