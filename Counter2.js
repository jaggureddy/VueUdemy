new Vue({
    el:'#app',
    data:{
        counter:0,
        secondCounter:0
    },
    computed:{
        output:function(){
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    },
    methods:{
        // increase:function(){
        //     this.counter++;
        //     this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        // },
        result:function(){
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    },
    watch:{
        counter : function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            },2000)
        }
    }
})