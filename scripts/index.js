import { createApp } from 'vue'

const MyComp = {
  template: '#my-comp-template'
  // ...
}

const app = createApp({
  data() {
    return {
      fullname: "Jeffrey DeWitt",
      location: "Canton,OH",
      phone: "(440) 539-1862",
      email: "jadewitt00@gmail.com",
      skills: [
        "Windows Server Administration",
        //"Server Administration",
        "Docker",
        "Powershell",
        //"G Suite Administration",
        "Javascript",
        "NodeJS",
        "Golang",
        //"Python",
        //"Oracle DB Management",
        //"SQL Server Management",
        //"Customer Service"
      ],
      certs: ["AWS Certified Cloud Practitioner (2021)","AWS Certified Solutions Architect (2021)"],
      education: {
        degree: "Bachelor of Science",
        field: "Computer Science",
        gradyear: 2013,
        school: "Malone University"
      },
      // excellent customer service and
      summary: `Talented Information Technology Professional with 7+ years of Windows administration experience and certified in AWS cloud architecture.
      Motivated to learn new skills and adapt to new technologies and environments. Effective and comfortable communicating with
      people of all skill levels. Skilled at automating deployments with scripting.`,
      workexperience: [
        {
          jobtitle: "Software Application Engineer",
          daterange: "10/2021 to Present",
          company: "3E Company",
          tasks: [
            'Created automated windows deployments using powershell.',
            'Configured application to run on AWS Appstream and RDS.',
            'Containerized our .NET api\'s in docker and deployed on AWS.',
            'Troubleshoot and support our enterprise Windows desktop application.',
            'Configure and install our enterprise Windows desktop application.',
            'Administer IIS .NET applications for customers.',
            'Migrated our hosted application from on-site to AWS.',
            'Work with high profile customers to help troubleshoot on-prem environment installations.'
          ]
        },
        {
          jobtitle: "Full Stack Engineer",
          daterange: "10/2018 to Present",
          company: "Easy Earnest",
          tasks: [
            'Designed and built SaaS product for making electronic earnest money payments.',
            'Coded in Node and Express for backend.',
            'Front end coded in VueJS.',
            'Data stored using PostgreSQL.',
            'Hosted and maintained on AWS infrastructure.',
          ]
        },
        {
          jobtitle: "IT Director",
          daterange: "10/2018 to 03/2021",
          company: "Cutler Real Estate",
          tasks: [
            'Provide technical support for 400+ agents and staff.',
            'Converted a fully physical server environment to a virtual environment.',
            'Use Connectwise Control to remotely support 20+ offices.',
            'Manage 80+ domain users through Active Directory and Group Policy.',
            'Perform maintenance and deploy computers for staff.',
            'Deployed MDT server for more efficient desktop deployment.',
            'Track inventory of all hardware and software licenses.',
            'Work with outside vendors to provide business needs.',
            'Manage the IT budget and resource allocation.'
          ]
        },
        {
          jobtitle: "IT Support Specialist",
          daterange: "03/2017 to 10/2018",
          company: "Cutler Real Estate",
          tasks: [
            'Provided technical support for 400+ agents and staff.',
            'Used LogMeIn Rescue to remotely support 20+ offices.',
            'Designed and deployed Happyfox ticketing system.',
            'Facilitated a conversion from Delta Mail to the G Suite product.',
            'Manage 80+ domain users through Active Directory and Group Policy.',
            'Complete computer installs for staff computers.',
            'Track inventory of all hardware and software licenses.',
          ]
        },
        {
          jobtitle: "IT Customer Support Specialist",
          daterange: "02/2016 to 02/2017",
          company: "Insight for Living",
          tasks: [
            'Provided technical, operation and training support for users.',
            'Completed computer refreshes for client computers.',
            'Tracked inventory of all hardware and software licenses.',
            'Ensured printers are working properly and performed basic maintenance.',
            'Assisted with bill coding and data entry.',
            'Created documentation for procedures and installs.',
            'Edited Active Directory and GPOs.',
            'Patched, tested, and installed Ethernet cable.',
          ]
        },
      ],
    }
  }
});

app.component(
  // the registered name
  'SectionTitle',
  // the implementation
  {
    
    template: document.getElementById("section-title-template").innerHTML,
    //template: "#section-title-template",
    data(){
      return {
        
      }
    },
    props: {
      sectiontitle: String
    }
  }
);

app.component(
  // the registered name
  'WorkExp',
  {
    
    template: document.getElementById("work-exp-template").innerHTML,
    data(){
      return {
        
      }
    },
    props: {
      jobtitle: String,
      daterange: String,
      company: String,
      tasks: Array
    }
  }
);

app.mount('#resume');




  