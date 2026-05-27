// Efecto de resaltado al hacer scroll en la tabla
document.addEventListener('DOMContentLoaded', () => {
    const filas = document.querySelectorAll('.features-table tbody tr');
    
    filas.forEach(fila => {
        fila.addEventListener('mouseover', () => {
            fila.style.backgroundColor = '#2a3444';
        });
        fila.addEventListener('mouseout', () => {
            fila.style.backgroundColor = '';
        });
    });

    // Mensaje al hacer clic en botón de comprar
    const botonesRango = document.querySelectorAll('.btn-tier');
    botonesRango.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('¡Perfecto! Continúa con el proceso de pago para obtener tu rango 🚀');
        });
    });
});