class Profile {
    constructor() {
        this.clientId = "";
        this.clientSecret = "";
    }
    // fonksiyon asenkron olduğu için önce profil sonra da bu profilin userId sine sahip todo list gelir.
    async getProfile(username) { //inputtan gönderilen veri username
        const profileResponse = await fetch
        (`https://jsonplaceholder.typicode.com/users?username=${username}`);

        const profile = await profileResponse.json();
        //console.log(profile);

        const todoResponse = await fetch
        (`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);  
        const todo = await todoResponse.json(); // await i unutunca doğal olarak bir öncekinde kalıyor. ilerlemiyor.

        return {
            // "profile": profile,  // profile da bir obje olduğu için sadece profile da yazsak olurdu.
            // "todo": todo
            profile,
            todo
        }

    }
}