new Vue({
    el: '#exercise',
    data: {
        effectClasses:{
            highlight : false,
            shrink : true
        },
        float : 'float',
        userClass:'',
        isVisible:true,
        myStyle: {
            width: '100px',
            height: '150px',
            backgroundColor: 'gray'
        },
        progressBar: {
            width: '0px',
            backgroundColor: 'red'
        }
    },
    methods: {
      startEffect: function() {
        var vm = this;
        setInterval(function(){
            vm.effectClasses.highlight = !vm.effectClasses.highlight;
            vm.effectClasses.shrink = !vm.effectClasses.shrink;
        },4000)
      },
      startProgress: function() {
        var vm = this;
          var width = 0;
         
        setInterval(function() {
          width = width + 10;
          vm.progressBar.width = width + 'px';
          }, 500);
        }
    }
  });
  
  /*
  Getting Started: https://jsfiddle.net/smax/pcjtcmdm/

Template Syntax: https://jsfiddle.net/smax/bkk97b7g/

Events: https://jsfiddle.net/smax/7zdak05g/

Two-Way-Binding: https://jsfiddle.net/smax/ut0tsbcu/

Computed Properties & Watch: https://jsfiddle.net/smax/yLjqxmw0/

Dynamic Classes: https://jsfiddle.net/smax/gowg40ym/

Dynamic Styles: https://jsfiddle.net/smax/3rvdLq5y/

Further Links:

Official Docs - Getting Started: http://vuejs.org/guide/

Official Docs - Template Syntax: http://vuejs.org/guide/syntax.html

Official Docs - Events: http://vuejs.org/guide/events.html

Official Docs - Computed Properties & Watchers: http://vuejs.org/guide/computed.html

Official Docs - Class & Style Binding: http://vuejs.org/guide/class-and-style.html
  */