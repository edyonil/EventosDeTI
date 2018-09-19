var app = new Vue ({
    el:'#app',
    data:{
        titulo: 'title',
        items: [] ,
        persons:[],
        search: '',
        lista : [] ,
        cadastro: {
            name : '',
            age : '',
            imagem : "https://pic1.zhimg.com/v2-aad666a6b3f2bfa1890687b5bdea7e43_1200x500.jpg"
            
        },
      
    },  
    methods:{
          addDados(){
            this.lista.push({name : this.cadastro.name , age : this.cadastro.age});
            this.cadastro.name = '';
            this.cadastro.age = ''
        },
        // getInitialUsers () {
        //     for (var i = 0; i < 5; i++) {
        //         this.$http.get('https://randomuser.me/api/').then(response => {
        //           this.persons.push(response.data.results[0]);
        //         });
        //     }
        //   },
        // beforeMount() {
        //     this.getInitialUsers();
        // },
        scroll (persons) {
            window.onscroll = () => {
             let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
            this.$http.get('https://randomuser.me/api/').then(response => {
                persons.push(response.data.results[0]);
                
              });
              console.log('teste')  
          }
        };
      },
    },
    mounted() {
      this.scroll(this.persons)
    },
    created : function(){
        // this.$http.get('dataserver.json').then(function(response){
        //     this.items = response.data;
        // for (var i = 0; i < 5; i++) {
        //     this.$http.get('dataserver.json').then(response => {
        //       this.items.push(response.data);
        //     });
        // }
         
            for (var i = 0; i < 5; i++) {
                this.$http.get('https://randomuser.me/api/').then(response => {
                  this.persons.push(response.data.results[0]);
                });
            }
          
            //  this.getInitialUsers();
        
        },
    // computed : {
    //     filteredItems: function() {
    //         return this.items.filter((item)=> {
    //             return item.description.match(this.search)
                
    //         })
    //     }
    // }
})
