import { Developer } from "./developer";

export const developers : Developer[] = [
    {
        _id: "1",
        _busyPeriods: [{from:'2022-01-24', to:'2022-01-30'}],
        name: "Ivan",
        email: "Ivan@ivan.gmail.com",
        phoneNumber: "0895105609",
        location: "Bulgaria, Sofia",
        pricePerHour: 10,
        technologies: ["C#", "JavaScript"],
        yearsOfExperience: 5,
        nativeLanguage: "Bulgarian",
  
        description:"very kind person who is always willing to help his team",
        //linkedinProfileLink?:  ,
        //profilePictureURL?
    },
    {
        _id: "2",
        _busyPeriods: [{from:'2022-01-20', to:'2022-01-24'}],
        name: "Elon Musk",
        email: "elon@elon.gmail.com",
        phoneNumber: "0895105609",
        location: "USA",
        pricePerHour: 100,
        technologies: ["Tesla", "C++"],
        yearsOfExperience: 15,
        nativeLanguage: "English",
  
        description:"very rich and ambitious person who wants to go to mars",
        linkedinProfileLink:  "https://www.linkedin.com/company/elon-musk-fans-tesla-fans/",
        profilePictureURL:"https://media-exp1.licdn.com/dms/image/C4D0BAQEk8cFuf1OHiw/company-logo_200_200/0/1628713560126?e=1651104000&v=beta&t=DHJl2Bh5rSsdeTlstzL0dnCBJfRZ935V2in4Msd2EAI"
    },
    {
        _id: "3",
        _busyPeriods: [{from:'2022-02-01', to:'2022-02-10'}],
        name: "Jon Skeet",
        email: "jon@skeet.gmail.com",
        phoneNumber: "0895105609",
        location: "USA",
        pricePerHour: 100,
        technologies: ["C#","F#",".NET", "C++"],
        yearsOfExperience: 10,
        nativeLanguage: "English",
  
        description:"a master of the c# programming language and one of the biggest contributors to the community",
        linkedinProfileLink:  "https://www.linkedin.com/in/jon-skeet-ba3800/",
        profilePictureURL:"https://media-exp1.licdn.com/dms/image/C4E03AQFFq1s0ShnZXQ/profile-displayphoto-shrink_400_400/0/1528960282008?e=1648080000&v=beta&t=V93-bo5V5QesYtkjJZujhOA8p6Ie_ZQ1oIhoRlTKxhA"
    },    
  ];