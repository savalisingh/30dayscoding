function gf() {
    let gfvar = 3;
    console.log(gfvar);
    parent();
    function parent() {
        let parentvar=4;
      for (let i = 0; i < gfvar; i++) {
        console.log('*');// not able to print this in different line
      }
      child();
      function child(){
        for (let i = 0; i < gfvar; i++) {
            console.log('-');// not able to print this in different line
          }
          for (let i = 0; i < parentvar; i++) {
            console.log('+');// not able to print this in different line
          }
      }
    }   
}
  
gf();