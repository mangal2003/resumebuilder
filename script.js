// for collection page>>>>>>>>>>>>>>>>>>>>>>>>>>>
let loginPage = document.getElementById("loginPage");
let dataCollectionPage = document.getElementById("dataCollectionPage");
let descriptionPage = document.getElementById("descriptionPage");
let looggedInName = document.getElementById("nameForLogin");
let loggedInMail = document.getElementById("emailForLogin");
let userName = document.getElementById("userName");
let personalInfomation = document.getElementById("personalInfomation");
let afterPI = document.getElementById("afterPI");
let education = document.getElementById("education");
let afterEducation = document.getElementById("afterEducation");
let skills = document.getElementById("skills");
let afterSkills = document.getElementById("afterSkills");
let forLanguages = document.getElementById("forLanguages");
let forCertifications = document.getElementById("forCertifications");
let forInterest = document.getElementById("forInterest");
let afterAddSec = document.getElementById("afterAddSec");
let summary = document.getElementById("summary");
let nameemailwarn = document.getElementById("nameemailwarn");
let piwarning = document.getElementById("piwarning");
let skillwarning = document.getElementById("skillwarning");
let summarywarning = document.getElementById("summarywarning");
let logoutconfrm = document.getElementById("logoutconfrm");
// for preview page>>>>>>>>>>>>>>>>>>>>>>>>>>>
let previewWrapper = document.getElementById("previewWrapper");
let resumeName = document.getElementById("resumeName");
let resumeJobTitle = document.getElementById("resumeJobTitle");
let resumeAddress = document.getElementById("resumeAddress");
let resumePhone = document.getElementById("resumePhone");
let resumeMail = document.getElementById("resumeMail");
let instituteName = document.getElementById("instituteName");
let instituteLocation = document.getElementById("instituteLocation");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let degree = document.getElementById("degree");
let fieldOfStudy = document.getElementById("fieldOfStudy");
let resumeSkill = document.getElementById("resumeSkill");
let resumeLanguage = document.getElementById("resumeLanguage");
let resumeInterest = document.getElementById("resumeInterest");
let resumeCertification = document.getElementById("resumeCertification");
let resumeSummary = document.getElementById("resumeSummary");

function isUserLoggedIn() {
  if (
    localStorage.getItem("loggedInName") == null ||
    localStorage.getItem("loggedInMail") == null
  ) {
    descriptionPage.style.display = "none";
  } else {
    userName.innerText = localStorage.getItem("loggedInName") + "!";
    loginPage.style.display = "none";
  }
}
isUserLoggedIn(); // htana nhi h...!!!!!!!!!!!!!!!!!!! important

function makeUserLogin() {
  localStorage.setItem("loggedInName", looggedInName.value);
  localStorage.setItem("loggedInMail", loggedInMail.value);
  if (
    localStorage.getItem("loggedInName") == "" ||
    localStorage.getItem("loggedInMail") == ""
  ) {
    nameemailwarn.style.display = "flex";
  } else {
    location.reload();
  }
}
function asklogoutUser() {
  logoutconfrm.style.display = "flex";
}

function logoutUser(number) {
  if (number) {
    localStorage.removeItem("loggedInName");
    localStorage.removeItem("loggedInMail");
    location.reload();
  } else {
    logoutconfrm.style.display = "none";
  }
}

function startBuilding() {
  personalInfomation.style.display = "flex";
  dataCollectionPage.style.display = "flex";
  descriptionPage.style.display = "none";
}

function savePersonalInfo() {
  if (
    resumeName.value == "" ||
    resumeJobTitle.value == "" ||
    resumeAddress.value == "" ||
    resumePhone.value == "" ||
    resumeMail.value == ""
  ) {
    piwarning.style.display = "flex";
    setTimeout(() => {
      piwarning.style.display = "none";
    }, 2000);
  } else {
    personalInfomation.style.display = "none";
    afterPI.style.display = "Block";
  }
}

function backPersonalInfo() {
  personalInfomation.style.display = "flex";
  afterPI.style.display = "none";
}

function askEducation() {
  afterPI.style.display = "none";
  education.style.display = "flex";
}

function backPI() {
  afterPI.style.display = "block";
  education.style.display = "none";
}
function saveEducation() {
  if (
    instituteName.value == "" ||
    instituteLocation.value == "" ||
    startDate.value == "" ||
    endDate.value == "" ||
    degree.value == "" ||
    fieldOfStudy.value == ""
  ) {
    piwarning.style.display = "flex";
    setTimeout(() => {
      piwarning.style.display = "none";
    }, 2000);
  } else {
    education.style.display = "none";
    afterEducation.style.display = "block";
  }
}
function backEducation() {
  education.style.display = "flex";
  afterEducation.style.display = "none";
}

function askSkills() {
  afterEducation.style.display = "none";
  skills.style.display = "flex";
}
function backAfterEducation() {
  afterEducation.style.display = "block";
  skills.style.display = "none";
}

function saveSkills() {
  if (resumeSkill.value == "") {
    skillwarning.style.display = "flex";
    setTimeout(() => {
      skillwarning.style.display = "none";
    }, 2000);
  } else {
    skills.style.display = "none";
    afterSkills.style.display = "block";
  }
}
function backSkills() {
  skills.style.display = "flex";
  afterSkills.style.display = "none";
}
function showLanguage() {
  forLanguages.style.display = "flex";
  afterSkills.style.display = "none";
}
function showLanguage() {
  forLanguages.style.display = "flex";
  afterSkills.style.display = "none";
}
function showInterest() {
  forInterest.style.display = "flex";
  afterSkills.style.display = "none";
}
function showCertification() {
  forCertifications.style.display = "flex";
  afterSkills.style.display = "none";
}

function saveAdditionalSec() {
  if (
    resumeLanguage.value == "" ||
    resumeInterest.value == "" ||
    resumeCertification.value == ""
  ) {
    piwarning.style.display = "flex";
    setTimeout(() => {
      piwarning.style.display = "none";
    }, 2000);
  } else {
    afterSkills.style.display = "none";
    afterAddSec.style.display = "block";
  }
}
function backAfterSkill() {
  afterSkills.style.display = "block";
  afterAddSec.style.display = "none";
}

function languageSave() {
  let languages = document.getElementById("languages");
  if (resumeLanguage.value == "") {
    languages.style.backgroundColor = "rgb(249, 131, 131)";
  } else {
    languages.style.backgroundColor = "lightgreen";
  }
  forLanguages.style.display = "none";
  afterSkills.style.display = "block";
}
function interestSave() {
  let interests = document.getElementById("interests");
  if (resumeInterest.value == "") {
    interests.style.backgroundColor = "rgb(249, 131, 131)";
  } else {
    interests.style.backgroundColor = "lightgreen";
  }
  forInterest.style.display = "none";
  afterSkills.style.display = "block";
}
function certificateSave() {
  let certifications = document.getElementById("certifications");
  if (resumeCertification.value == "") {
    certifications.style.backgroundColor = "rgb(249, 131, 131)";
  } else {
    certifications.style.backgroundColor = "lightgreen";
  }
  forCertifications.style.display = "none";
  afterSkills.style.display = "block";
}
function backAddSec(value) {
  if (value == 1) {
    forLanguages.style.display = "none";
    afterSkills.style.display = "block";
    languageSave();
  } else if (value == 2) {
    forCertifications.style.display = "none";
    afterSkills.style.display = "block";
    certificateSave();
  } else {
    forInterest.style.display = "none";
    afterSkills.style.display = "block";
    interestSave();
  }
}

function askSummary() {
  afterAddSec.style.display = "none";
  summary.style.display = "flex";
}
function backAfterAddSec() {
  afterAddSec.style.display = "block";
  summary.style.display = "none";
}

function saveSummary() {
  if (resumeSummary.value == "") {
    summarywarning.style.display = "flex";
  } else {
    dataCollectionPage.style.display = "none";
    previewWrapper.style.display = "block";

    let rbnamehere = document.getElementById("rbnamehere");
    rbnamehere.innerText = resumeName.value;

    let rbjthere = document.getElementById("rbjthere");
    rbjthere.innerText = resumeJobTitle.value;

    let rbaddhere = document.getElementById("rbaddhere");
    rbaddhere.innerText = resumeAddress.value;

    let rbphnhere = document.getElementById("rbphnhere");
    rbphnhere.innerText = resumePhone.value;

    let rbemlhere = document.getElementById("rbemlhere");
    rbemlhere.innerText = resumeMail.value;

    let insnameprv = document.getElementById("insnameprv");
    insnameprv.innerText = instituteName.value;

    let inslocation = document.getElementById("inslocation");
    inslocation.innerText = instituteLocation.value;

    let startdateprv = document.getElementById("startdateprv");
    startdateprv.innerText = startDate.value;

    let enddateprv = document.getElementById("enddateprv");
    enddateprv.innerText = endDate.value;

    let degreePrv = document.getElementById("degreePrv");
    degreePrv.innerText = degree.value;

    let fosprv = document.getElementById("fosprv");
    fosprv.innerText = fieldOfStudy.value;

    let skillset = document.getElementById("skillset");
    const skillsetarr = resumeSkill.value
      .split(" ")
      .filter((skill) => skill.trim() !== "");
    let ul1 = document.createElement("ul");
    skillsetarr.forEach((skill) => {
      let li = document.createElement("li");
      li.textContent = skill;
      ul1.appendChild(li);
    });
    skillset.appendChild(ul1);

    let languageset = document.getElementById("languageset");
    const languagearr = resumeLanguage.value
      .split(" ")
      .filter((lang) => lang !== "");

    let ul2 = document.createElement("ul");
    languagearr.forEach((lang) => {
      let li = document.createElement("li");
      li.textContent = lang;
      ul2.appendChild(li);
    });
    languageset.appendChild(ul2);

    let rbintsthere = document.getElementById("rbintsthere");
    const interestarr = resumeInterest.value
      .split(" ")
      .filter((intr) => intr !== "");

    let ul3 = document.createElement("ul");
    interestarr.forEach((intr) => {
      let li = document.createElement("li");
      li.textContent = intr;
      ul3.appendChild(li);
    });
    rbintsthere.appendChild(ul3);

    let rbcerthere = document.getElementById("rbcerthere");
    rbcerthere.innerText = resumeCertification.value;

    let rbsummhere = document.getElementById("rbsummhere");
    rbsummhere.innerText = resumeSummary.value;
  }
}

function removeAlert(alertNum) {
  switch (alertNum) {
    case 1:
      nameemailwarn.style.display = "none";
      break;
    case 2:
      piwarning.style.display = "none";
      break;
    case 3:
      skillwarning.style.display = "none";
      break;
    case 4:
      summarywarning.style.display = "none";
      break;
  }
}
