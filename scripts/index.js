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
      skills_old: [
        "Windows Server Administration",
        //"Server Administration",
        "Docker",
        "Powershell",
        //"G Suite Administration",
        //"Javascript",
        "NodeJS",
        "Golang",
        //"Python",
        //"Oracle DB Management",
        //"SQL Server Management",
        //"Customer Service"
      ],
      skills: {
        Programming: ["Powershell", "Javascript", "NodeJS", "GoLang", "Python", "SQL"],
        Software: ["Docker", "GitHub", "AWS"],
        Databases: ["PostgreSQL", "SQL Server", "Oracle DB", "DynamoDB", "MongoDB"],
        Administration: ["Windows Server", "Linux (Ubuntu, Amazon)"],
        //Cloud: ["AWS"],
      },
      certs: [{
        title: "AWS Certified Cloud Practitioner",
        month: "May",
        year: 2021
      },{
        title: "AWS Certified Solutions Architect",
        month: "Dec",
        year: 2021
      } ],
      //certs: [], 
      education: [{
        degree: "Bachelor of Science",
        field: "Computer Science",
        gradyear: 2013,
        school: "Malone University",
        location: "Canton, OH"
      }],
      // excellent customer service and
      summary: `Talented Information Technology Professional with 7+ years of Windows administration experience and certified in AWS cloud architecture.
      Motivated to learn new skills and adapt to new technologies and environments. Effective and comfortable communicating with
      people of all skill levels. Skilled at automating deployments with scripting.`,
      workexperience: [
        {
          jobtitle: "Software Application Engineer",
          daterange: "10/2021 to Present",
          company: "3E Company",
          location: "Canton, OH",
          tasks: [
            'Created automated Windows deployments using powershell',
            'Configured legacy Windows application to run on AWS Appstream and RDS',
            'Containerized our .NET api\'s in docker and deployed on AWS',
            //'Supported our enterprise Windows desktop application',
            'Administered IIS .NET applications for customers',
            'Migrated our hosted application from on-site to AWS',
            //'Worked with high profile customers to help troubleshoot on-prem environment installations'
          ]
        },
        {
          jobtitle: "Full Stack Engineer",
          daterange: "10/2018 to Present",
          company: "Easy Earnest",
          location: "Canton, OH",
          tasks: [
            'Designed and built SaaS product for making electronic earnest money payments',
            'Coded in Node/Express for backend and VueJs for frontend',
            'Stored data using PostgreSQL',
            'Hosted and maintained on AWS infrastructure',
          ]
        },
        {
          jobtitle: "IT Director",
          daterange: "10/2018 to 03/2021",
          company: "Cutler Real Estate",
          location: "Canton, OH",
          tasks: [
            'Converted a fully physical server environment to a virtual environment using Hyper-v',
            'Provided technical support for 400+ agents and staff',
            'Managed 80+ domain users through Active Directory and Group Policy',
            'Deployed MDT server for more efficient desktop deployment',
            //'Tracked inventory of all hardware and software licenses',
            //'Used Connectwise Control to remotely support 20+ offices',
            //'Performed maintenance and deploy computers for staff',
            //'Worked with outside vendors to provide business needs',
            //'Managed the IT budget and resource allocation'
          ]
        },
        {
          jobtitle: "IT Support Specialist",
          daterange: "03/2017 to 10/2018",
          company: "Cutler Real Estate",
          location: "Canton, OH",
          promoted: true,
          tasks: [
            'Provided technical support for 400+ agents and staff',
            'Managed 400+ users in G Suite',
            //'Used LogMeIn Rescue to remotely support 20+ offices',
            'Facilitated a conversion from Delta Mail to the G Suite product',
            'Deployed HappyFox ticketing system',
            //'Managed 80+ domain users through Active Directory and Group Policy',
            //'Completed computer installs for staff computers',
            //'Tracked inventory of all hardware and software licenses',
          ]
        },/*
        {
          jobtitle: "IT Customer Support Specialist",
          daterange: "02/2016 to 02/2017",
          company: "Insight for Living",
          location: "Frisco, TX",
          tasks: [
            'Provided technical, operation and training support for users',
            'Completed computer refreshes for client computers',
            'Tracked inventory of all hardware and software licenses',
            'Ensured printers are working properly and performed basic maintenance',
            'Assisted with bill coding and data entry',
            'Created documentation for procedures and installs',
            'Edited Active Directory and GPOs',
            'Patched, tested, and installed Ethernet cable',
          ]
        },*/
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
      location: String,
      promoted: Boolean,
      tasks: Array
    }
  }
);

app.mount('#resume');




  