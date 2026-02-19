document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Message dynamique sur la page d'accueil (Actualités)
    const messageZone = document.getElementById('message-dynamique');
    if (messageZone) {
        messageZone.innerHTML = `<strong>Actualités :</strong> Les inscriptions pour la rentrée 2026 sont ouvertes !`;
        messageZone.style.color = 'var(--bleu-efrei)';
        messageZone.style.fontSize = '1.2rem';
    }

    // 2. Interaction avec le formulaire d'inscription JPO (Accueil)
    const formInscription = document.getElementById('inscription-form');
    if (formInscription) {
        formInscription.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche le rechargement de la page
            
            const nom = document.getElementById('nom').value;
            const dateJpo = document.getElementById('date-jpo').value;
            
            alert(`Félicitations ${nom} ! Votre inscription pour les Portes Ouvertes du ${dateJpo} est confirmée.`);
            
            // Réinitialise le formulaire
            formInscription.reset();
        });
    }
});