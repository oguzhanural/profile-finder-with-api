class UI {
    constructor(){
        this.profilContainer = document.querySelector("#profileContainer");
        this.alert = document.querySelector("#alert");
    }

    showProfile(profile) {
        //console.log(profile.address.city);
        this.profilContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a>
                            <img src="https://via.placeholder.com/150" class="img-thumbnail">
                        </a>
                    </div>
                    <div class="col-md-6">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                               Name: ${profile.name}
                            </li>
                            <li class="list-group-item">
                                Username: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                Email: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                Phone: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                Adress: 
                                ${profile.address.street}
                                ${profile.address.suite}
                                ${profile.address.city}
                            </li>
                            <li class="list-group-item">
                                Website: ${profile.website}
                            </li>

                        </ul>
                        <h4 class="mt-4">Todo list</h4>
                        
                        <ul id="todo" class="list-group">

                        </ul>
                    </div>
                </div>

            </div>
        
        `;
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found`;
    }

    showTodo(todo){
        // console.log(todo);
        let html = ""; 
        //console.log(todo);
        //var promises = [];
         todo.forEach(item => {
            //console.log(item);
            //promises.push(item);
            if (item.completed) {
                html += `
                <li class="list-group-item bg-success">
                ${item.title}
                </li> 
                `;
            }else{
                html += `
                <li class="list-group-item bg-secondary">
                ${item.title}
                </li> 
                `;
            }
        });
        //console.log(html);
        //document.getElementById("todo").innerHTML = html;
        this.profilContainer.querySelector("#todo").innerHTML = html;
    }

    clear() {
        this.profilContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }
   
}