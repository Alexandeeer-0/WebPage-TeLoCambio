document.addEventListener('DOMContentLoaded', function() {
    // Cargar actividades recientes
    loadRecentActivity();
    
    // Manejar búsqueda
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = searchForm.querySelector('input').value;
            searchProducts(searchTerm);
        });
    }
});

async function loadRecentActivity() {
    const activityList = document.querySelector('.activity-list');
    if (activityList) {
        // Aquí irá la lógica para cargar actividades desde el backend
        activityList.innerHTML = '<p>Cargando actividades...</p>';
    }
}

async function searchProducts(term) {
    // Implementar lógica de búsqueda
    console.log('Buscando:', term);
}
