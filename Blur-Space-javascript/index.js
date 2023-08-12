const color = document.querySelector('#Color');
const blur = document.querySelector('#Blur');
const space = document.querySelector('#Space');
const img = document.querySelector('#Image');
const imgFIle = document.querySelector('#Image-file');
console.dir(color.value)

color.addEventListener('change', ()=>{
    document.querySelector('.hi').style.color = color.value;
    img.style.border = `${space.value}px solid ${color.value}`
});

blur.addEventListener('change',()=>{
    img.style.filter = `blur(${blur.value}px)`;
});

space.addEventListener('change',()=>{
    img.style.border = `${space.value}px solid ${color.value}`;
});

imgFIle.addEventListener('change', () => {
    if (imgFIle.files && imgFIle.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
      }
      reader.readAsDataURL(imgFIle.files[0]);
    }
  })