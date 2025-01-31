async function fetchRandomUserData() {
    try {
        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const user = data.results[0];

        return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            gender: user.gender,
            age: user.dob.age,
            country: user.location.country
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
}

async function displayUserData() {
    const userData = await fetchRandomUserData();

    if (userData) {
        console.log(`User Name: ${userData.name}`);
        console.log(`User Email: ${userData.email}`);
        console.log(`Gender: ${userData.gender}`);
        console.log(`Age: ${userData.age}`);
        console.log(`Country: ${userData.country}`);
    } else {
        console.log("Failed to fetch user data.");
    }
}

displayUserData();
