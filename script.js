function sumar(){
    let suma=0;
    let contador=0;
    let numer1=Number(document.getElementById(`pal1`).value);
    let resultado=numer1;
if (numer1==1) {
        document.getElementById('resultado').textContent = `RIGHT ANSWER`;
        document.body.style.backgroundColor = 'green';
      } else {
        document.getElementById('resultado').textContent = `WRONG ANSWER`;
        document.body.style.backgroundColor = 'red';
      }
}
