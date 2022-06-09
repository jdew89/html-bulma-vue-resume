import { createApp } from 'vue'

const MyComp = {
  template: '#my-comp-template'
  // ...
}

const app = createApp({
  data() {
    return {
      skills: [
        "AWS Certified Solutions Architect (2021)",
        "Windows Administration",
        "Server Administration",
        "Docker",
        "Powershell",
        "G Suite Administration",
        "Javascript", 
        "Golang",
        "Python",
        "Oracle DB Management",
        "SQL Server Management",
        "Customer Service"
      ],
      workExperience: [
        {
          jobtitle: "Software Application Engineer",
          daterange: "10/2021 to Present",
          company: "3E Company",
          tasks: [
            'Troubleshoot and support our enterprise Windows desktop application.',
            'Configure and install the application.',
            'Administer IIS .NET applications for customers.',
            'Migrated our hosted application from on-site to AWS.',
            'Created automated deployments using powershell.',
            'Configured application to run on AWS Appstream and RDS.',
            'Containerized our .NET api\'s in docker.',
            'Work with high profile customers to help troubleshoot on-prem environment installations.'
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




  