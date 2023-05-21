
function updateProfile (profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name

    const cargo = document.getElementById('profile.cargo');
    cargo.innerText = profileData.job

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone

    const mail = document.getElementById('profile.mail');
    mail.innerText = profileData.email

}

function updateSkills (profileData) {
    const skillsProgramming = document.getElementById('profileSkillsProgramming')
    skillsProgramming.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')

    const skillsPersonal = document.getElementById('profileSkillsPersonal')
    skillsPersonal.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages (profileData) {
    const languages = document.getElementById('profileLanguages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio (profileData){
    const portfolio = document.getElementById('profilePortfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <span class="title  ${project.github ? 'github' : ''}">${project.name}</span>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateExperience (profileData) {
    const experience = document.getElementById('profileExperience')
    experience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <span class="title">${experience.name}</span>
                <span class="period">${experience.period}</span>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}






(async () => {
    const profileData = await getProfileJSON();

    updateProfile(profileData);
    updateSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperience(profileData);

})()