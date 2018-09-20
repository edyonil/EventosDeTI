var app = new Vue ({
    el:'#app',
    data:{
        items: [] ,
        search: '',
    },  
    methods:{
        getInitialUsers () {
            for (var i = 0; i < 10; i++) {
                this.$http.get('https://guarded-oasis-77929.herokuapp.com/api/event',).then(response => {
                  this.items.push(response.data.results[0]);
                });
            }
          },
        beforeMount() {
            this.getInitialUsers();
        },
        scroll (items) {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
                this.$http.get('https://guarded-oasis-77929.herokuapp.com/api/event').then(response => {
                items.push(response.data.results[0]);
                
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
    // computed : {
    //     filteredItems: function() {
    //         return this.items.filter((item)=> {
    //             return item.description.match(this.search)
                
    //         })
    //     }
    // }
})
console.log('teste')  