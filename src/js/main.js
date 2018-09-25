// Vue.use(require('vue-moment'));
// import moment from 'moment';
var app = new Vue ({
    el:'#app',
    data:{
        config : [],
        items: [] ,
        search: '',
        uri: 'https://guarded-oasis-77929.herokuapp.com/api/event'
    },  
    methods:{
        // getHumanDate : function (date) {
        //     return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        // },
        getInitialUsers () {
                self = this;
                let x = 0;
                this.$http.get(this.uri).then(response => {
                    this.config = response.data.data;
                    this.items = response.data.data.data;
                });
          },
        beforeMount() {
            this.getInitialUsers();
        },
        scroll (items) {
            let active = false;
            window.onscroll = (event) => {    
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 350 >= document.documentElement.offsetHeight;
            if (bottomOfWindow && !active) {
                active = true;
                var self = this;
                console.log(this.config);
                this.$http.get(this.config.next_page_url).then(response => {
                    this.config = response.data.data;
                    let item = response.data.data.data;
                    item.forEach(data => {
                        this.items.push(data);
                    });
                    active = false;
                });
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