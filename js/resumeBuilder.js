'use strict';
var work = {
// work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.
	jobs: [
		{
			title: "Software Engineer",
			employer: "General Motors",
			dates: "2015-Current",
			location: "Chandler, AZ",
			description: "DiSCO"
		}
	]
};
var projects = {
// projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.
	project: [
		{
			title: "Capstone Project",
			dates: "2014",
			description: "Our team worked alongside Orbital Sciences in creating a Payload Separation System (PSS). Our team designed with SolidWorks, and built, using a CNC machine, an improvement on the current system in a Pegasus Rocket.",
			images: ["images/197x148.gif","images/197x148.gif"]
		},
		{
			title: "NAU Startup Weekend",
			dates: "2013",
			description: "Our team created from scratch a website to help hourly workers dynamically change shifts to better suit their needs.",
			images: ["images/197x148.gif","images/197x148.gif"]
		},
		{
			title: "Eagle Scout",
			dates: "2008",
			description: "Orginized a group of scouts to create a tail system at Ball's Bluff Battlefield State Park.",
			images: ["images/197x148.gif","images/197x148.gif"]
		}
	]
};
var bio = {
// bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
	name: "Benjamin Dirgo",
	role: "Software Engineer",
	contacts: {
		email: "bdirgo@gmail.com",
		github: "bdirgo",
		twitter: "@bdirgo",
		location: "Phoenix, AZ"
	},
	profileURL: "images/361b955.jpg",
	skills: ["Javascript","HTML5","CAD","Mechatronics"]
};
var education = {
// education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
	schools: [
		{
			name: "Northern Arizona University",
			years: 3.5,
			location: "Flagstaff, AZ",
			degree: "BA",
			majors: ["Mechanical Engineering"],
			minor: ["Mathmatics"],
			dates: "2015",
			url: "www.nau.edu"
		},
		{
			name: "West Virginia University",
			years: 3.5,
			location: "Morgantown, WV",
			degree: "Transfered",
			majors: ["Mechanical Engineering", "Aerospace Engineering"],
			minor: [],
			dates: "2011",
			url: "www.wvu.edu"
		}
	],
	nanodegree: [
		{
			title: "Front-End Web Development",
			school: "Udacity",
			dates: "2015",
			url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.profileURL));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);
        for (var i = bio.skills.length - 1; i >= 0; i--) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").prepend(formattedSkill);
        }
    }
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

};


work.display = function() {
    for (var index in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedWorkDates + formattedLocation + formattedDescription);
    }
};

projects.display = function() {
    for (var index in projects.project) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[index].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[index].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[index].description));
        if (projects.project[index].images.length > 0) {
            for (var image in projects.project[index].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[index].images[image]));
            }
        }
    }
};

education.display = function() {
    for (var index = 0; index < education.schools.length; index++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name);
        var formattedTitle = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
        var formattedWorkDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
        $(".education-entry:last").append(formattedName + formattedTitle + formattedWorkDates + formattedLocation);
        for (var i = education.schools[index].majors.length - 1; i >= 0; i--) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors[i]);
            $(".education-entry:last").append(formattedMajor);
        }
        for (var i = education.schools[index].minor.length - 1; i >= 0; i--) {
            var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[index].minor[i]);
            $(".education-entry:last").append(formattedMinor);
        }
    }
    for (var index = education.nanodegree.length - 1; index >= 0; index--) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLonlineTitle.replace("%data%", education.nanodegree[index].title);
        var formattedTitle = HTMLonlineSchool.replace("%data%", education.nanodegree[index].school);
        var formattedWorkDates = HTMLonlineDates.replace("%data%", education.nanodegree[index].dates);
        var formattedLocation = HTMLonlineURL.replace("%data%", education.nanodegree[index].url);
        $(".education-entry:last").append(formattedLocation + formattedName + formattedTitle + formattedWorkDates + "<br>");
    }
};
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
