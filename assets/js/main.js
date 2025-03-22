function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    const cleanedPhone = profileData.phone.replace(/[^\d]/g, '')
    phone.innerText = profileData.phone
    phone.href = `https://wa.me/+55${cleanedPhone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
   
}

function updateSoftSkills (profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
   
}

function updateHardSkills (profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src='${skill.logo}' alt='${skill.name}' title='${skill.name}'></li>`).join('')
   
}

function updateLanguages (profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
   
}


function updateProjects (profileData) {
    const projects = document.getElementById('profile.projects')
    projects.innerHTML = profileData.projects.map(projects => {
        return `
        <li>
            <h3 ${projects.github ? 'class="github"' : ''}>${projects.name}</h3>
                <a href="${projects.url}" target="_blank">${projects.url}
                </a>
        </li>
        `
    }).join('')
} 

function updateExperiences (profileData) {
    const experiences = document.getElementById('profile.experiences')
    experiences.innerHTML = profileData.experiences.map(experiences => {
        return `
        <li>
            <h3 class="title">${experiences.name}</h3>
                <p class="period">${experiences.period}</p>
                    <p>${experiences.description}</p>
        </li>`
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjects(profileData)
    updateExperiences(profileData)
})()