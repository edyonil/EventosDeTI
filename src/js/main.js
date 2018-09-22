var app = new Vue ({
    el:'#app',
    data:{
        config : [],
        items: [] ,
        search: '',
    },  
    methods:{
        getInitialUsers () {
                self = this;
                let x = 0;
                this.$http.get('https://guarded-oasis-77929.herokuapp.com/api/event?page=' + x ).then(response => {
                    this.config = response.data;
                    this.items = response.data.data.data;
                    console.log(this.items)
                });
          },
        beforeMount() {
            this.getInitialUsers();
        },
        scroll (items) {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
                    var self = this;
                    this.$http.get('https://guarded-oasis-77929.herokuapp.com/api/event?page=').then(response => {
                    self.items.push(response.data.data.data) ;
                    console.log(this.items)
              });
          }
        };
      },
    },
    mounted() {
      this.scroll(this.items)
    },
    created : function(){          
              this.getInitialUsers(); 
        },
    //
    // filtro do Vue 
    //
    computed : {
        filteredItems: function() {
            return this.items.filter((item)=> {
                return items.data.title.match(this.search)
                
            })
        }
    }
})
console.log('teste')  