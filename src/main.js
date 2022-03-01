//base URL API
var api_url = "http://localhost:8000/api";

//konfigurasi route
var router = [
    {
        path: "/",
        name: "Home",
        component: httpVueLoader("./src/components/Home.vue")
    },
    {
        path: "/book",
        name: "Book",
        component: httpVueLoader("./src/components/Book.vue")
    },
];


var routers = new VueRouter({ routes: router, base: "/" });

//instance vue 
var app = new Vue({
    el: "#app", //elemen yang di vue kan
    components: {
        "login": httpVueLoader("./src/components/Login.vue"),
        "apps" : httpVueLoader("./src/components/App.vue") //belum jadi
    },
    data: { //state /variabel global
      user: {
          id_user: "",
          role: "",
          name: "",
          username: "",
      },
      mycomponent: "login",
    },
    router: routers,
    methods: {
        CekToken: function(){

            //this.mycomponent = "login";

            //cek token

            // if(... === true){
            //     this.mycomponent = "apps";
            //     this.role = response.data.data.role;
            //     this.name = response.data.data.name;

            // } else {
            //     this.mycomponent = "login";
            // }
        }
    },
    mounted(){
        this.CekToken();

    }


});

