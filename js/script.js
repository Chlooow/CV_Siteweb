let history = ['info'];

        const menuItems = document.querySelectorAll('.menu-item');
        const pages = document.querySelectorAll('.page');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetPage = item.getAttribute('data-page');
                showPage(targetPage);
            });
        });

        function showPage(pageId) {
            // Ajouter à l'historique
            if (history[history.length - 1] !== pageId) {
                history.push(pageId);
            }

            // Masquer toutes les pages
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Afficher la page cible
            document.getElementById(pageId).classList.add('active');

            // Mettre à jour le menu
            menuItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-page') === pageId) {
                    item.classList.add('active');
                }
            });
        }

        function goBack() {
            if (history.length > 1) {
                history.pop(); // Retirer la page actuelle
                const previousPage = history[history.length - 1];
                
                // Retirer de l'historique pour éviter la duplication
                history.pop();
                
                showPage(previousPage);
            }
        }