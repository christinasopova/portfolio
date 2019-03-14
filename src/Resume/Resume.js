import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }
  render() {
    return (
      <div className="resume-container">
        <div>
          <h3 className="sub-title">SKILLS</h3>
          <section className="skills">
            <div className="skill">
              <h3 className="skills-title">PM Skills</h3>
              <p className="skill-item">Agile</p>
              <p className="skill-item">Scrum</p>
              <p className="skill-item">Jira</p>
              <p className="skill-item">WBS</p>
              <p className="skill-item">Project Strategies</p>
              <p className="skill-item">Project Plans</p>
            </div>
            <div className="skill">
              <h3 className="skills-title">Technical Skills</h3>
              <p className="skill-item">Javascript</p>
              <p className="skill-item">React</p>
              <p className="skill-item">Redux</p>
              <p className="skill-item">Firebase</p>
              <p className="skill-item">HTML / CSS</p>
              <p className="skill-item">Express</p>
              <p className="skill-item">Node.js</p>
              <p className="skill-item">Ruby on Rails</p>
            </div>

            <div className="skill">
              <h3 className="skills-title">Design Skills</h3>
              <p className="skill-item">Sketch</p>
              <p className="skill-item">Invision</p>
            </div>
          </section>
        </div>

        <h3 className="sub-title">RELEVANT EXPERIENCE</h3>
        <section className="experience">
          <div className="experience-item">
            <div className="name-period">
              <p className="company-name">GENERAL ASSEMBLY</p>
              <p className="period">Dec 2018— Mar 2019</p>
            </div>
            <div className="role-description">
              <p className="role">
                Engineering Fellow | Web Development Immersive - New York, NY
              </p>
              <p className="description">
                General Assembly’s Web Development Immersive (WDI) is a 12 week
                long training program dedicated to prepare students to think
                like engineers and approach problems creatively in order to
                build the next generation of web applications and digital
                products.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="name-period">
              <p className="company-name">C-SPOT</p>
              <p className="period">Sep 2015— Jan 2017</p>
            </div>
            <div className="role-description">
              <p className="role">Product Manager - New York, NY</p>
              <p className="description">
                Managed the launch of the Heirloom Series collection of premium
                chocolate bars. Responsible for developing the marketing
                strategy, allocating assignments to team members, and managing
                the interactions with designers, chocolate producers, and web
                developers. As a result of the successful product execution, the
                limited release Heirloom Chocolate Series sold out in record
                time.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="name-period">
              <p className="company-name">C-SPOT</p>
              <p className="period">Mar 2015 — Jun 2015</p>
            </div>
            <div className="role-description">
              <p className="role">Product Manager Assistant - New York, NY</p>
              <p className="description">
                Assisted the CEO in execution of the management plan for
                assigned projects, including publishing chocolate bar reviews,
                preparing the monthly newsletter, and coming up with a
                subscription policy and addition of new products in the online
                chocolate store. Used Asana and Slack for managing tasks and
                helped coordinate projects from inception to completion.
                Coordinated and executed daily administrative tasks.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="name-period">
              <p className="company-name">DeltaClick</p>
              <p className="period">Jan 2014 — Feb 2015 </p>
            </div>
            <div className="role-description">
              <p className="role">Project Manager - Yekaterinburg, Russia</p>
              <p className="description">
                Manager digital projects for Ubrir bank, UGMK Clinic, Yarmarka
                TD (high-quality grains and grains mix manufacturer) and Pegas
                Touristik (tour operator): web and mobile applications
                development and marketing strategy. Responsible for developing
                project plans, strategies, detailed timelines with dependencies
                and milestones, estimated projects’ resources, develop WBS,
                allocating assignments to team members, monitor, and control
                project performance, project changes and optimization and status
                reports for marketing managers and CIOs. Managed a team of 10
                people. The team included developers, system analysts, designers
                and content managers, social media managers, media buyers.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="name-period">
              <p className="company-name">GMS Digital</p>
              <p className="period">Jul 2013 — Dec 2013 </p>
            </div>
            <div className="role-description">
              <p className="role">Project Manager - Tel-Aviv, Israel</p>
              <p className="description">
                Organized and documented client and internal meetings.
                Participated in the RFP process, prepared presentations for new
                business clients, lead client meetings with stakeholders and
                decision makers. Planed, created and updated project schedules
                and timeline as well as prepared budget and execution reports.
                Set up PM/Account Director Dashboards for clients.
              </p>
            </div>
          </div>
        </section>
        <h3 className="sub-title">EDUCATION</h3>
        <section className="education">
          <div className="education-item">
            <p>Dec 2018 — Mar 2019</p>
            <p className="education-title">Web Development Immersive</p>
            <p>General Assembly – New York, NY</p>
          </div>
          <div className="education-item-1">
            <p>Oct 2018 —Dec 2018</p>
            <p className="education-title">Front End Web Development</p>
            <p>Per Scholas – New York, NY</p>
          </div>
          <div className="education-item-1">
            <p>Sep 2009 — May 2014</p>
            <p className="education-title">Master of Science in Marketing</p>
            <p>Donetsk National University – Donetsk, Ukraine</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
