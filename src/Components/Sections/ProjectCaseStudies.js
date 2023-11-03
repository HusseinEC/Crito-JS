import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import ProjectCases from '../Generics/ProjectCases'
import ProjectsBtn from '../Generics/ProjectsBtn'

const ProjectCaseStudies = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div>
                <SectionTitle title="Project & Case Studies" description="Let's Looks Our Global Project"/>
            </div>
            <div>
                <ProjectCases/>
            </div>
            <div>
                <ProjectsBtn/>
            </div>
        </div>
    </section>
  )
}

export default ProjectCaseStudies