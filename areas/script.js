document.addEventListener('DOMContentLoaded', async function() {
    const area = "Mistieri";
    const token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RfbmFtZSI6Ik5vbWUiLCJsYXN0X25hbWUiOiJTb2JyZW5vbWUiLCJlbWFpbCI6ImVtYWlsQGV4ZW1wbG8uY29tIiwiYmlydGhfZGF0ZSI6IjE5OTAtMDEtMDFUMDI6MDA6MDAuMDAwWiIsImlhdCI6MTc0ODk3NDM3OH0.fw4Qx5jN3LELkum2Bxq159MpfLVACNvjZB34_c7f0zw
    const response = await fetch(`/http://localhost:3000/brinquedos/area/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        Authorization: "Bearer" + token
    });

    const data = await response.json();
    console.log(data);

});
const grid = document.querySelector('.grid');
grid.innerHTML = grid.innerHTML + 
                   ` <div class="ride-card">
                <div class="ride-image" style="background-image: url('https://36b7b97122.cbaul-cdnwnd.com/a929c8f5bc1fba6c13d5199567947203/system_preview_detail_200000075-c5003c579f/Kastel%20di%20Lendas.png')"></div>
                <div class="ride-info">
                    <h3 class="ride-name">${brinquedo.name}Kastel di Lendas</h3>
                    <div class="ride-time">${brinquedo.waiting_time}15 min</div>
                    <span class="ride-status status-busy>${brinquedo.status}Normal</span>
                </div>`;