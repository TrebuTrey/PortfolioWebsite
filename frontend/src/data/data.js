
export const certifications = [
  { 
    id: 1, 
    name: 'AWS Cloud Practitioner', 
    issuingOrganization: 'Amazon Web Services', 
    issued: 'July 2025', 
    description: 'Certified in Amazon Web Services (AWS) Cloud Practitioner Foundational, demonstrating a solid understanding of cloud concepts, core AWS services, pricing models, and best practices. Skilled in leveraging AWS to design scalable, secure, and cost-efficient solutions that support business innovation and agility.' , 
    domain: 'amazonaws.com',
    accreditation: 'https://www.credly.com/badges/865acb41-2132-4e76-bdb4-e62b80f031d8/linked_in_profile',
    image:  "/logo_images/aws.svg"
  },
  { 
    id: 2, 
    name: 'Backend Software Developer', 
    issuingOrganization: 'Promineo Tech', 
    issued: 'June 2025', 
    description: 'Completed Promineo Tech\'s Backend Software Development Program, covering core Java programming, object-oriented principles, and backend application structure. Trained in Spring Boot for building RESTful APIs and Java Database Connectivity (JDBC) for managing data persistence, with hands-on projects reinforcing each concept.', 
    domain: '',
    accreditation: '/certificates/backend-software-developer.pdf',
    image: '/logo_images/promineo.png' 
  },
  {
    id: 3,
    name: 'Lean Six Sigma - Green Belt',
    issuingOrganization: 'Arizona State University',
    issued: 2020,
    description: 'Certified Lean Six Sigma Green Belt, skilled in applying data-driven methodologies to identify process inefficiencies and implement continuous improvement strategies. Experienced in leading projects that reduce waste, improve quality, and enhance operational performance.',
    domain: 'asu.edu',
    accreditation: '/certificates/lss-green-belt.pdf',
    image: "/logo_images/six_sigma.svg"
  },
  { 
    id: 4, 
    name: 'Solidworks Mechanical Designer - Associate', 
    issuingOrganization: 'Dassault Systemes', 
    issued: '2018', 
    description: 'Certified SolidWorks Mechanical Designer - Associate, demonstrating proficiency in transforming 2D blueprints into fully realized 3D models. Skilled in applying geometric dimensioning and tolerancing (GD&T) to ensure precision, and converting detailed 3D designs back into accurate technical drawings for manufacturing.', 
    domain: '3ds.com',
    accreditation: '/certificates/solidworks-certificate.pdf',
    image: "/logo_images/solidworks.svg" 
  },
  // { 
  //   id: 5, 
  //   name: 'Procore Certification - Superintendent', 
  //   issuingOrganization: 'Procore Technologies', 
  //   issued: '2023', 
  //   description: 'Certified in Procore Superintendent, demonstrating expertise in leveraging the platform\'s tools to manage construction workflows, coordinate subcontractors, and oversee project schedules. Skilled in using Procore to ensure on-site efficiency and effective communication throughout project phases.', 
  //   domain: 'procore.com',
  //   accreditation: 'https://verify.skilljar.com/c/t73j9ao5greu' 
  // },
  // { 
  //   id: 6, 
  //   name: 'Smartsheet Core App', 
  //   issuingOrganization: 'Smartsheet', 
  //   issued: 'November 2022', 
  //   description: 'Certified in Smartsheet Core App, showcasing proficiency in utilizing Smartsheet\'s features to streamline project management, automate workflows, and collaborate effectively across teams. Experienced in building and managing sheets, reports, and dashboards to drive project visibility and accountability.', 
  //   domain: 'smartsheet.com',
  //   accreditation: 'https://www.credly.com/badges/4c8d7d76-2cd8-4177-8024-7d00dec57f8f/linked_in_profile' 
  // },
];

export const programmingLanguages = ['Python', 'Java','JavaScript/TypeScript', 'Excel VBA', 'Matlab'];

export const projectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    summary: "A React website to showcase my qualifications and completed projects across various mediums.",
    media: "/projects/Website System Diagram.png",
    tags: ["API", "React", "JavaScript"]
  },
  {
    id: 2,
    name: "Estimation Tool",
    summary: "Connect Frontend to Inventory Management API and calculate total cost of workflow.",
    media: "https://www.youtube.com/embed/ScMzIvxBSi4",
    tags: ["API", "Python"]
  },
  {
    id: 3,
    name: "Progress Tracker",
    summary: "Macro-Enabled Excel files used by onsite superintendents to provide tracking updates to dashboard Excel sheet and can send daily updates to email lists.",
    media: "",
    tags: ["Excel VBA", "Automation"]
  },
  {
    id: 4,
    name: "Accounts Template Populator",
    summary: "Python UI for choosing the product and department of choice will populate and compile all files relevant for the customer and the billing department. Selenium used to file for permitting through the provided Microsoft Forms links.",
    media: "",
    tags: ["Python", "Automation", "Web Scraper"]
  },
  {
    id: 5,
    name: "Booking Website",
    summary: "Customer portal to request booking for bus tours and package deliveries.",
    media: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Full Stack", "JavaScript", "API"]
  },
  {
    id: 6,
    name: "Chinese Language Learner",
    summary: "Built on top of the Mandarin Blueprint method, this SRS memory system allows you to test your skills and make better mnemonics for remembering Chinese characters.",
    media: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Python", "API"]
  },
  {
    id: 7,
    name: "Pokemon Shiny Hunter",
    summary: "Image comparator program identifies exceedingly rare Pokemon in emulation and proceeds to notify the user via email and catch the specimen.",
    media: "",
    tags: ["Python", "Automation"]
  }
];

export const contactInfo = {
    linkedIn: "https://www.linkedin.com/in/trey-pubins-a550701aa/",
    gitHub: "https://github.com/TrebuTrey"
}