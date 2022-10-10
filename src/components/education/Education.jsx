import Section from "../section/Section";
import "./Education.css";

function Content() {
  return (
    <div>
      <label>Minor: Computer Science</label>
      <label>Major GPA: 3.61</label>
      <label>Minor GPA: 3.21</label>
      <label>Dean's List: 2013 - 2017</label>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <Section
        sectionName="Education"
        titlePrimary="Drexel University"
        titleSecondary="Bachelor of Science in Software Engineering"
        titleTimeframe="SEPTEMBER 2012 - JUNE 2017, PHILADELPHIA, PA"
      >
        <Content />
      </Section>
    </div>
  );
}

export default Education;
