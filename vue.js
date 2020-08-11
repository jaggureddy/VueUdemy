new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue',
    link : "http://google.com/",
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello : function(){
      return "Hello Vue!"
    },
    testVOnce : function(){
      this.title = "Hello v once";
      return this.title;
    }
  }
});