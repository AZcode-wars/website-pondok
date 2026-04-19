document.addEventListener('DOMContentLoaded', () => {
    // Quota visualizer logic
    const quotaFill = document.getElementById('quota-fill');
    const quotaText = document.getElementById('quota-text');
    
    // Simulating fetching data
    setTimeout(() => {
        const totalQuota = 150;
        const registered = 112;
        const percentage = (registered / totalQuota) * 100;
        const remaining = totalQuota - registered;

        quotaFill.style.width = `${percentage}%`;
        quotaText.innerHTML = `Terdaftar <strong>${registered}</strong> dari <strong>${totalQuota}</strong> santri. Sisa kuota: <strong>${remaining}</strong>`;
    }, 800);

    // Form submission logic
    const form = document.getElementById('ppdb-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Mengirim...';
            btn.disabled = true;

            // Simulating API call
            setTimeout(() => {
                alert('Pendaftaran Berhasil! Silakan cek email Anda untuk instruksi selanjutnya.');
                btn.innerText = originalText;
                btn.disabled = false;
                form.reset();
            }, 1500);
        });
    }
});
