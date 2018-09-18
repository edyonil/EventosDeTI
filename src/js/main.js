var app = new Vue ({
    el:'#app',
    data:{
        titulo: 'title',
        items: [] ,
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

        
    },
    created : function(){
        this.$http.get('dataserver.json').then(function(response){
            console.log(response.data);
            this.items = response.data;
        });
    },
    computed : {
        filteredItems: function() {
            return this.items.filter((item)=> {
                return item.description.match(this.search)
                
            })
        }
    }
    
})
