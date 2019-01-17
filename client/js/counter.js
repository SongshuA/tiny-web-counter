Vue.component('counter', {
    props:{
        src: String,

        name: String,

        increase: {
            type:Boolean,
            default: false
        }
    },

    data: function(){
        return {
            count: 0
        }
    },

    created: function(){
        var vm = this;

        if(this.increase){
            axios.post(this.src, {key: this.name}).then(function(response){
                vm.count = response.data;
            });

        }else{
            axios.get(this.src, {
                params: {key: this.name}
            }).then(function(response){
                vm.count = response.data;
            });
        }
    },

    template: '<span>{{count}}</span>'
});