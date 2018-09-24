// Vue.use(require('vue-moment'));
// import moment from 'moment';
var app = new Vue ({
    el:'#app',
    data:{
        config : [],
        items: [] ,
        search: '',
    },  
    methods:{
        // getHumanDate : function (date) {
        //     return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        // },
        getInitialUsers () {
                self = this;
                let x = 0;
                this.$http.get('https://guarded-oasis-77929.herokuapp.com/api/event' ).then(response => {
                    this.config = response.data;
                    this.items = response.data.data.data;
                    console.log(this.items);
                    console.log(this.config);

                });
          },
        beforeMount() {
            this.getInitialUsers();
        },
        scroll (items) {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
            //         var self = this;
            //         this.$http.get('https://guarded-oasis-77929.herokuapp.com/api/event?page=').then(response => {
            //         self.items.push(response.data.data.data) ;
            //         console.log(this.items)
            //   });
          }
        };
      },
      buscar: function(){
        alert(this.search);
      }


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
        //     return this.items.filter((item)=> {
        //         return item.data.match(this.search)
                
        //     })
        }
    }
})
console.log('teste')  