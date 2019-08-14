{"filter":false,"title":"gallery.js","tooltip":"/assets/js/gallery.js","undoManager":{"mark":25,"position":25,"stack":[[{"start":{"row":16,"column":81},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":1},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"insert","lines":["  "]},{"start":{"row":17,"column":2},"end":{"row":18,"column":0},"action":"insert","lines":["",""]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":18,"column":2},"end":{"row":35,"column":0},"action":"insert","lines":["var myIndex = 0;","carousel();","","function carousel() {","    var i;","    var x = document.getElementsByClassName(\"mySlides\");","    for (i = 0; i < x.length; i++) {","        x[i].style.display = \"none\";","    }","    myIndex++;","    if (myIndex > x.length) { myIndex = 1 }","    x[myIndex - 1].style.display = \"block\";","    setTimeout(carousel, 3500); // Change image every 3.5 seconds","}","","const nav = document.querySelector('#main');","const topOfNav = nav.offsetTop;",""],"id":2}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"remove","lines":["  "],"id":3}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"remove","lines":["  "],"id":4},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"remove","lines":["  "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"remove","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":2},"end":{"row":8,"column":5},"action":"remove","lines":["   "]},{"start":{"row":9,"column":2},"end":{"row":9,"column":5},"action":"remove","lines":["   "]},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":[" "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":4},"end":{"row":10,"column":6},"action":"remove","lines":["  "]},{"start":{"row":10,"column":41},"end":{"row":10,"column":45},"action":"remove","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["   "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":5},"action":"remove","lines":["     "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":22,"column":2},"end":{"row":22,"column":4},"action":"remove","lines":["  "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":1},"action":"remove","lines":[" "]},{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"remove","lines":[" "]},{"start":{"row":24,"column":2},"end":{"row":24,"column":4},"action":"remove","lines":["  "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"remove","lines":["  "]},{"start":{"row":25,"column":4},"end":{"row":25,"column":6},"action":"remove","lines":["  "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"remove","lines":["  "]},{"start":{"row":27,"column":2},"end":{"row":27,"column":4},"action":"remove","lines":["  "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"remove","lines":["  "]},{"start":{"row":29,"column":2},"end":{"row":29,"column":4},"action":"remove","lines":["  "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":6},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["I"],"id":7},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["n"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["s"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["p"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["i"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["r"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["e"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["d"]}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":[" "],"id":8},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["b"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["y"]}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":[" "],"id":10}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "],"id":11},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["J"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["a"]}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["v"],"id":12},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["a"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"remove","lines":["s"],"id":13}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["S"],"id":14},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["c"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["r"]},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["i"]},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["p"]},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":[" "],"id":15},{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["3"]},{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["0"]}],[{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":[" "],"id":16},{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["F"]},{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["o"]},{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":[" "],"id":17},{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["£"]},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["0"]}],[{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"remove","lines":["0"],"id":18},{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"remove","lines":["£"]}],[{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["3"],"id":19},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["0"]}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":[" "],"id":20},{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["d"]},{"start":{"row":0,"column":36},"end":{"row":0,"column":37},"action":"insert","lines":["a"]},{"start":{"row":0,"column":37},"end":{"row":0,"column":38},"action":"insert","lines":["y"]}],[{"start":{"row":0,"column":38},"end":{"row":0,"column":39},"action":"insert","lines":[" "],"id":21},{"start":{"row":0,"column":39},"end":{"row":0,"column":40},"action":"insert","lines":["c"]},{"start":{"row":0,"column":40},"end":{"row":0,"column":41},"action":"insert","lines":["h"]},{"start":{"row":0,"column":41},"end":{"row":0,"column":42},"action":"insert","lines":["a"]},{"start":{"row":0,"column":42},"end":{"row":0,"column":43},"action":"insert","lines":["l"]},{"start":{"row":0,"column":43},"end":{"row":0,"column":44},"action":"insert","lines":["l"]},{"start":{"row":0,"column":44},"end":{"row":0,"column":45},"action":"insert","lines":["e"]},{"start":{"row":0,"column":45},"end":{"row":0,"column":46},"action":"insert","lines":["n"]},{"start":{"row":0,"column":46},"end":{"row":0,"column":47},"action":"insert","lines":["g"]},{"start":{"row":0,"column":47},"end":{"row":0,"column":48},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":23},"end":{"row":4,"column":29},"action":"remove","lines":["","  console.log('widen photo');"],"id":22}],[{"start":{"row":23,"column":45},"end":{"row":23,"column":46},"action":"insert","lines":["-"],"id":23}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"remove","lines":["S"],"id":24}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":["s"],"id":25}],[{"start":{"row":7,"column":26},"end":{"row":8,"column":30},"action":"remove","lines":["","  console.log(e.propertyName);"],"id":26}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":26},"end":{"row":7,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1565815482678,"hash":"1ce0e5df400989c32ec9aa0e5e4c21232ce9ee8e"}