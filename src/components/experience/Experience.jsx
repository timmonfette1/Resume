import Section from "../section/Section";
import Title from "../title/Title";
import "./Experience.css";

function VesonNautical() {
  return (
    <div>
      <Title
        primary="Veson Nautical"
        secondary="Senior Software Engineer"
        tertiary="Senior Software Engineer - Veson Nautical"
        timeframe="NOVEMBER 2022 - CURRENT, BOSTON, MA (Remote)"
      />
    </div>
  );
}

function COCC() {
  return (
    <div>
      <Title
        primary="COCC"
        secondary="Senior Software Engineer"
        tertiary="Senior Software Engineer - COCC"
        timeframe="JUNE 2022 - NOVEMBER 2022, SOUTHINGTON, CT"
      />
      <ul>
        <li>
          Worked with a team of 8 developers and 8 systems analysts on various
          development projects.
        </li>
        <li>
          Developed applications and features using the legacy technologies of
          the current product as well as modern technologies for the “next-gen”
          product.
        </li>
        <li>
          Coordinated and worked with a third-party vendor who supplied portions
          of our core product.
        </li>
        <li>
          Proposed and made changes to the vendor product based on client needs,
          requests and bugs.
        </li>
        <li>
          Streamlined and documented various processes the team had for local
          installation of the core product.
        </li>
        <li>Provided expertise and ideas for how to modernize the product.</li>
        <li>Trained newer developers and interns on the team.</li>
        <li>
          Performed Code Reviews for other members of the team and other
          development teams within the organization.
        </li>
        <li>
          Worked closely with other departments to coordinate/ scheduled
          releases and to perform deployments of the product.
        </li>
        <li>
          Led meetings with clients to assist them in debugging any issues.
        </li>
      </ul>
    </div>
  );
}

function Checkwriters() {
  return (
    <div>
      <Title
        primary="Checkwriters"
        secondary="Software Architect"
        tertiary="Lead Software Architect - Checkwriters"
        timeframe="JANUARY 2020 - JUNE 2022, NORTHAMPTON, MA"
      />
      <ul>
        <li>Led a team of 6 developers on various projects.</li>
        <li>
          Managed the team in relief of the Director of Software Development
          during scheduled time off.
        </li>
        <li>
          Engaged in code reviews through GitHub Pull Requests for all members
          of the team to ensure coding standards were upheld.
        </li>
        <li>
          Conceptualized, designed and built a new architecture for the entire
          set of Checkwriters applications and products.
        </li>
        <li>
          Created a modular, scalable, and modern software stack to ensure the
          business can meet its growth plans.
        </li>
        <li>
          Designed and implemented an internal identity provider and
          authorization server to standard all access to the system.
        </li>
        <li>
          Architected a suite of APIs on top of the authorization server to
          facilitate client and third party access to the system.
        </li>
        <li>
          Upgraded an aging hashing algorithm used within the system to a more
          modern and secure algorithm after extensive research.
        </li>
        <li>
          Built a CI/CD pipeline that integrated into GitHub commits to provide
          immediate builds and deployments to various servers.
        </li>
        <li>Specified public facing APIs using the OpenAPI Specification.</li>
        <li>
          Mentored the team on new technologies, patterns and coding
          syntax/styles.
        </li>
        <li>
          Assisted in hiring new members of the team and helped train them on
          the overall system and coding patterns.
        </li>
        <li>
          Coordinated meetings with other departments and business stakeholders
          to build a roadmap for software development.
        </li>
        <li>
          Functioned as a “one man development team” to create and develop
          complex internal applications and integrations.
        </li>
        <li>
          Balanced multiple, complex projects simultaneously and pivoted focus
          to address production issues as required.
        </li>
      </ul>
      <Title
        primary="Checkwriters"
        secondary="Software Developer"
        tertiary="Software Developer - Checkwriters"
        timeframe="OCTOBER 2017 - JANUARY 2020, NORTHAMPTON, MA"
      />
      <ul>
        <li>
          Worked with a team of 6 - 8 engineers in an agile development
          environment.
        </li>
        <li>
          Modernized and upgraded older features/code written 7+ years ago in
          the existing web application.
        </li>
        <li>
          Designed integrations with multiple 3rd party vendors and their
          APIs/workflows.
        </li>
        <li>
          Assisted other teams within the company to become more efficient
          through desktop apps or other automation programs.
        </li>
        <li>
          Assisted clients with troubleshooting any issues, bugs or other
          problems they experienced.
        </li>
        <li>Led the creation of new features within the application.</li>
        <li>
          Designed patterns to reduce code duplication and centralize various
          operations of the software.
        </li>
      </ul>
    </div>
  );
}

function Comcast() {
  return (
    <div>
      <Title
        primary="Comcast"
        secondary="Software Engineer"
        tertiary="Lead Developer - Agent Advance Portal"
        timeframe="MARCH 2016 - SEPTEMBER 2016, PHILADELPHIA, PA"
      />
      <ul>
        <li>
          Part of a team of 10 developers at Comcast tasked to create a platform
          for tracking employee promotions in the Call Centers.
        </li>
        <li>Designed and architected the system from the ground up.</li>
        <li>Performed all system administration tasks for the application.</li>
        <li>Led backend development on the API and database.</li>
        <li>
          Created documentation detailing the current system developed in the 6
          month time frame as well as future development plans.
        </li>
      </ul>
      <Title
        primary="Comcast"
        secondary="Software Engineer"
        tertiary="Software Engineer - Network Policy Engineering: PCMM Team"
        timeframe="MARCH 2014 - SEPTEMBER 2016, PHILADELPHIA, PA"
      />
      <ul className="ul no margin">
        <li>
          Worked in an Agile team of 4-7 members on the PCMM (PacketCable
          Multimedia) platform.
        </li>
        <li>
          Performed operational tasks on current vendor software to fix any
          issues that presented.
        </li>
        <li>Utilized Ansible to automate various IT tasks.</li>
        <li>
          Designed and Architected a Cloud based KPI Dashboard system for the
          platform.
        </li>
        <li>
          Developed key components of the Middleware/API and Database code for
          the KPI Dashboard.
        </li>
        <li>
          Led the design, architecture, and development of a custom written High
          Availability application for the KPI backend system.
        </li>
        <li>
          Programmed various Python and Bash scripts for automation and
          continuous integration.
        </li>
      </ul>
    </div>
  );
}

function Content() {
  return (
    <div>
      <VesonNautical />
      <COCC />
      <Checkwriters />
      <Comcast />
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <Section sectionName="Experience">
        <Content />
      </Section>
    </div>
  );
}

export default Experience;
