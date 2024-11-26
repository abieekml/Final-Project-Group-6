 // Script untuk mengubah navbar saat di-scroll
 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.remove('navbar-default');
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.add('navbar-default');
        navbar.classList.remove('navbar-scrolled');
    }
});

// Function to format numbers as Rupiah
function formatRupiah(amount) {
    return amount.toLocaleString('id-ID');
}

document.getElementById('needs-calculator').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const salary = parseInt(document.getElementById('salary').value);
    const electricity = parseInt(document.getElementById('electricity').value);
    const vehicles = parseInt(document.getElementById('vehicles').value);
    
    let donationPercentage = 0.01; // Default 1%

    if (electricity > 1000 || vehicles > 3) {
        donationPercentage = 0.03; // Up to 3% if electricity is high or vehicles are many
    } else if (electricity > 500 || vehicles > 1) {
        donationPercentage = 0.02; // 2% for moderate usage
    }

    const donation = salary * donationPercentage;

    // Klasifikasi tingkat pendapatan
    let incomeLevel;
    if (salary < 4000000) {
        incomeLevel = "Menengah Bawah";
    } else if (salary >= 4000000 && salary < 6000000) {
        incomeLevel = "Menengah";
    } else {
        incomeLevel = "Menengah Atas";
    }

    // Prepare the result
    const resultText = `
        <p>Gaji Anda: <span class="highlight">Rp ${formatRupiah(salary)}</span> (${incomeLevel})</p>
        <p>Rekomendasi Donasi (${donationPercentage * 100}%): <span class="highlight">Rp ${formatRupiah(donation)}</span></p>
        <p>Anda termasuk dalam kategori: ${incomeLevel}</p>
        <p>Golongan Donasi: Rp ${formatRupiah(donation)}</p>
    `;
    
    // Show the popup
    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    popupResult.innerHTML = resultText;
    popup.style.display = 'block';
    
    // Hide the popup when "Done" is clicked
    document.getElementById('done-button').addEventListener('click', function() {
        popup.style.display = 'none';
    });
});