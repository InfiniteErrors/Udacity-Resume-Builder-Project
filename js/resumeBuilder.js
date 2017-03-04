var bio = {
    "name": "Bret Prins",
    "role": "Web Developer",
    "contacts": {
        "mobile": "1-800-CSS-HTML",
        "email": "WebDev@gmail.com",
        "github": "InfiniteErrors",
        "twitter": "@BretPrins",
        "Location": "Edmonton"
    },
    "welcomeMessage": "Hey there! Welcome to my first attempt at javascript",
    "skills": ["HTML", "CSS", "JavaScript", "UX Design", "Cisco LAN Networks"],
    "biopic": "images/me.jpg"
};

var education = {
    "schools": [{
            "name": "NAIT",
            "location": "Edmonton",
            "major": "Digital Media IT"
        },
        {
            "name": "Cisco",
            "location": "Edmonton",
            "major": "Cisco CCNA"
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
            "date": "2010 - Current",
            "description": "Managing a network or over 1200 daily users and supporting 90+ staff on various technical challenges."
        },
        {
            "name": "St. Albert Aquatics",
            "title": "Lifeguard",
            "location": "St. Albert",
            "date": "2006 - 2010",
            "description": "Ensuring public safety and a fantastic customer experience at the pool."
        }
    ]
};

var projects = {
    "project": [{
            "title": "Google Chromebooks",
            "date": "2016",
            "description": "Implementing new process and documentation for Google chromebook hardware throughout the schools practices.",
            "imgs": "images/google.jpg"
        },
        {
            "title": "Backend hardware refresh",
            "date": "2013",
            "description": "Replace entire backend infrustructure with new equipment and implement virtualized services via VMware.",
            "imgs": "images/cisco.jpg"
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
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);


    $("#header").append(HTMLskillsStart);
    for (var index = 0; index < bio.skills.length; index++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
        $("#skills").append(formattedSkill);
    }
}
bio.display();


work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].name);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedEmployerLocation);

        var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].date);
        $(".work-entry:last").append(formattedWorkDate);

        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedWorkDescription);


    }
}
work.display();


projects.display = function() {

    for (var index = 0; index < projects.project.length; index++) {
        $("#projects").append(HTMLprojectStart);

        var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.project[index].title);
        $(".project-entry:last").append(formattedProTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[index].date);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProDes = HTMLprojectDescription.replace("%data%", projects.project[index].description);
        $(".project-entry:last").append(formattedProDes);
        var formattedImg = HTMLprojectImage.replace("%data%", projects.project[index].imgs);
        $(".project-entry:last").append(formattedImg);
    }
}
projects.display();


education.display = function() {
    for (var index = 0; index < education.schools.length; index++) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[index].name);
        $(".education-entry:last").append(formattedschoolName);
        var formattedschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[index].location);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[index].major);
        $(".education-entry:last").append(formattedschoolMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var index = 0; index < education.onlineCourses.length; index++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[index].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[index].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[index].dates);
        $('.education-entry:last').append(formattedOnlineDate);
        var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[index].url);
        $('.education-entry:last').append(formattedUrl);
    }
}
education.display();

$("#mapDiv").append(googleMap);
