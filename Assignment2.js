new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe : function(){
            alert('clicked');
        },
        changeValue: function(event) {
            this.value = event.target.value;
        }
    }
});