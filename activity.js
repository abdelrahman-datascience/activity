async function fetchRandomUserData() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const user = data.results[0];

        return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            gender: user.gender,
            age: user.dob.age,
            country: user.location.country,
            picture: user.picture.large
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
}

async function displayUserData() {
    const userData = await fetchRandomUserData();

    if (userData) {
        document.getElementById("userImage").src = userData.picture;
        document.getElementById("userName").innerHTML = `👤 Name: ${userData.name}`;
        document.getElementById("userEmail").innerHTML = `📧 Email: ${userData.email}`;
        document.getElementById("userGender").innerHTML = `⚧ Gender: ${userData.gender}`;
        document.getElementById("userAge").innerHTML = `🎂 Age: ${userData.age}`;
        document.getElementById("userCountry").innerHTML = `📍 Country: ${userData.country}`;
    } else {
        alert("Failed to fetch user data. Try again!");
    }
}
