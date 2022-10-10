import Section from "../section/Section";
import "./Summary.css";

function Content() {
  return (
    <div>
      <p>
        I am a Software Engineer/Architect with 8 years of industry experience
        across many different disciplines, levels and domains. I have
        architected solutions to meet business goals, both present and
        future-thinking, with a focus on modularity and scalability and I’ve
        taken projects from their origination through requirements gathering,
        documentation phases, implementation, and seen them through testing to
        production deployment. My skillset is full stack and includes frontend
        frameworks, backend application tiers including REST APIs, and database
        management. I have proven experience working independently, as well as
        within an Agile development team, including acting as a lead/senior
        developer. Within those teams I have provided training for new hires, as
        well as reviewed the work of my colleagues through code reviews.
      </p>
      &nbsp;
      <p>
        Throughout my career I have never been one to shy away from a challenge
        and I have tackled complex projects with passion and a desire to
        implement the best, and most efficient solutions. Learning new skills
        and new domains is a passion of mine and I will always seek out
        opportunities to expand my skills and my knowledge. Writing software and
        coding has been a love of mine for over half of my life, and I approach
        it with the same enjoyment as the day I first started. Please see the
        GitHub link for examples of personal work and projects.
      </p>
    </div>
  );
}

function Summary() {
  return (
    <div className="summary">
      <Section sectionName="Professional Summary">
        <Content />
      </Section>
    </div>
  );
}

export default Summary;
