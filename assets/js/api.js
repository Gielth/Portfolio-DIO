
async function getProfileJSON () {
    const url = 'https://raw.githubusercontent.com/Gielth/js-developer-portfolio-DIO/main/data/profile.json' 
    const fetching = await fetch(url)
    const profileData = await fetching.json();
    return profileData
}

