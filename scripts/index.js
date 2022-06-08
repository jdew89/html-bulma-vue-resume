import { createApp } from 'vue'

const MyComp = {
  template: '#my-comp-template'
  // ...
}

const app = createApp({
  data() {
    return {
      message: 'Hello Vue!',
      skills: [
        "Windows Administration",
        "Server Administration",
        "Docker",
        "AWS",
        "Powershell",
        "G Suite Administration",
        "Javascript", 
        "Golang",
        "Python",
        "Oracle",
        "SQL Server Management",
        "Customer Service"
      ]
    }
  }
});

console.log(document.getElementById("section-title-template").innerHTML);

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

app.mount('#resume');




  