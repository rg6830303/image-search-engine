<!-- script.js -->
document.getElementById('upload-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData();
    const image = document.getElementById('image').files[0];
    formData.append('image', image);
    
    const res = await fetch('http://<YOUR-EC2-IP>:5000/search', {
      method: 'POST',
      body: formData
    });
  
    const data = await res.json();
    const results = document.getElementById('results');
    results.innerHTML = data.images.map(img => `<img src="${img}" />`).join('');
  });