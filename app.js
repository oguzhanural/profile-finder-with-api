//https://jsonplaceholder.typicode.com/ 
const profile = new Profile();
const ui = new UI();
const searchProfile = document.getElementById("searchProfile");
//console.log(searchProfile);

searchProfile.addEventListener("keyup", (event) => {
    let text = event.target.value;
    ui.clear();
    if (text!=="") {
        //console.log(text);
        profile.getProfile(text)
            .then(res => {
                if (res.profile.length === 0) {
                    ui.showAlert(text);
                }else{
                    //  const islemler = Promise.all(res.profile, res.todo);
                    //  console.log(islemler);
                    //console.log(res.todo);
                    ui.showProfile(res.profile[0]);
                    //ui.showTodo(res.profile);
                    ui.showTodo(res.todo);
                    //console.log(res.profile[0]);
                }
            })
            .catch(error => {
                ui.showAlert(text);
            });
    }
});
