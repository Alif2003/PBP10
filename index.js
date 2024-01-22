const mahasiswaNim = '11020356';
const updatedData = {
    nama: 'Alif',
    gender: 'L',
    prodi: 'TI',
    alamat: 'JL. Cibatu City'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    const nim = "123477"; // Gantilah dengan nilai yang sesuai
    const baru = {
        nama: 'Alief',
        gender: 'L',
        prodi: 'TI',
        alamat: 'JL. Cibatu City House'
    };
fetch(`http://localhost:3000/mahasiswa/${nim}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ baru }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));