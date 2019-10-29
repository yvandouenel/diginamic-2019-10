let i = 1;
function a() {
  let j = 2;
  b();
  function b(){
    {
      let k = 3;
      console.log(k);
    }
    let l = 4;
    console.log(l);

  }
}
a();