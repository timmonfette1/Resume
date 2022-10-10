import Section from "../section/Section";
import "./Skills.css";

function Content() {
  return (
    <div className="skills">
      <ul>
        <li>Linux OSes (CentOS/RedHat, Ubuntu, Linux Mint, Arch Linux).</li>
        <li>Windows systems and the .NET framework including .NET 6.</li>
        <li>
          C#, Java, Python, Go (Golang), C, C++, Rust, Julia, and Javascript
          Frameworks including AngularJS, Angular, React.
        </li>
        <li>
          Architectural patterns including BFF (Backend for Frontend), Gateway
          APIs, and Microservices.
        </li>
        <li>ORMs including Entity Framework for Entity driven patterns.</li>
        <li>RPC Frameworks (gRPC).</li>
        <li>Contract-First Development using OpenAPI.</li>
        <li>
          IT Automation tools and CI/CD Pipelines (Ansible, Jenkins, GoCD).
        </li>
        <li>Source code control (Git/GitHub).</li>
        <li>
          Databases - including both NoSQL (MongoDB) and relational (Microsoft
          SQL Server, MySQL, Oracle SQL).
        </li>
        <li>
          T-SQL (MS SQL Server) and PL/SQL (Oracle) scripting (queries,
          functions, stored procedures).
        </li>
        <li>Containers/Containerized Development (Docker, Kubernetes).</li>
        <li>Cloud Based Applications/Infrastructure (OpenStack, AWS).</li>
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <Section sectionName="Skills">
        <Content />
      </Section>
    </div>
  );
}

export default Skills;
