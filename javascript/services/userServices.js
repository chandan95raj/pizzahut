const USERSERVICES = {
    userlist:[],
    isLogined:false,
    register(){

    },
    login(email,password){
        this.isLogined = true
    },
    logout(){
        this.isLogined = false
    },
    getUser(){

    },
    updateUser(){

    },
    isAuth(){
        return this.isLogined
    }
}

export default USERSERVICES;