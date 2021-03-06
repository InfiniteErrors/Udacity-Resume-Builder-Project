var bio = {
    "name": "Bret Prins",
    "role": "Web Developer",
    "contacts": {
        "mobile": "1-800-CSS-HTML",
        "email": "WebDev@gmail.com",
        "github": "InfiniteErrors",
        "twitter": "@BretPrins",
        "location": "Edmonton"
    },
    "welcomeMessage": "Hey there! Welcome to my first attempt at javascript.",
    "skills": ["HTML", "CSS", "JavaScript", "UX Design", "Cisco LAN Networks"],
    "biopic": "images/me.jpg"
};

var education = {
    "schools": [{
            "name": "NAIT",
            "location": "Edmonton",
            "majors": ["Digital Media & IT"],
            "degree": "Diploma Program",
            "dates": "2010"
        },
        {
            "name": "Cisco",
            "location": "Edmonton",
            "majors": ["CCNA"],
            "degree": "Certificate Program",
            "dates": "2011"
        }
    ],
    "onlineCourses": [{
            "title": "CS50 Programming",
            "school": "Harvard",
            "dates": "December 2015",
            "url": "https://cs50.harvard.edu/"
        },
        {
            "title": "Nanodegree Frontend Developer",
            "school": "Udacity",
            "dates": "In progress",
            "url": "https://www.udacity.com/"
        }
    ]
};

var work = {
    "jobs": [{
            "name": "St. Albert Public School Board",
            "title": "Technical Analyst",
            "location": "St. Albert",
            "dates": "2010 - Current",
            "description": "Managing a network or over 1200 daily users and supporting 90+ staff on various technical challenges."
        },
        {
            "name": "St. Albert Aquatics",
            "title": "Lifeguard",
            "location": "St. Albert",
            "dates": "2006 - 2010",
            "description": "Ensuring public safety and a fantastic customer experience at the pool."
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Google Chromebooks",
            "dates": "2016",
            "description": "Implementing new process and documentation for Google chromebook hardware throughout the schools practices.",
            "images": ["images/google.jpg"]
        },
        {
            "title": "Backend hardware refresh",
            "dates": "2013",
            "description": "Replace entire backend infrustructure with new equipment and implement virtualized services via VMware.",
            "images": ["images/cisco.jpg"]
        }
    ]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = formattedName + formattedRole;
    $("#header").prepend(formattedNameRole);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    $("#header").append(HTMLskillsStart);
    for (var index = 0; index < bio.skills.length; index++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
        $("#skills").append(formattedSkill);
    }
};


work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].name);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedEmployerLocation);
        var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedWorkDate);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};



projects.display = function() {

    for (var index = 0; index < projects.projects.length; index++) {
        $("#projects").append(HTMLprojectStart);

        var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
        $(".project-entry:last").append(formattedProTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProDes = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
        $(".project-entry:last").append(formattedProDes);

        for (var imageNum = 0; imageNum < projects.projects[index].images.length; imageNum++) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[imageNum]);
          $(".project-entry:last").append(formattedImage);
        }
    }
};



education.display = function() {
    for (var index = 0; index < education.schools.length; index++) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[index].name);
        $(".education-entry:last").append(formattedschoolName);
        var formattedschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[index].location);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[index].degree);
        $(".education-entry:last").append(formattedschoolDegree);
        var formattedschoolDate = HTMLschoolDates.replace('%data%', education.schools[index].dates);
        $(".education-entry:last").append(formattedschoolDate);

        for (var major = 0; major < education.schools[index].majors.length; major++) {
          var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[index].majors[major]);
          $(".education-entry:last").append(formattedschoolMajor);
        }
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
        $('.education-entry:last').append(formattedOnlineDate);
        var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
        $('.education-entry:last').append(formattedUrl);
    }
};

education.display();
bio.display();
projects.display();
work.display();

$("#mapDiv").append(googleMap);
