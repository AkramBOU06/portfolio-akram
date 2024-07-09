document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    var triggers = document.querySelectorAll('.skill-trigger');
    var closeButtons = document.querySelectorAll('.close-modal');

    triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            var targetModal = document.querySelector(trigger.getAttribute('data-target'));
            targetModal.style.display = 'block';
        });
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function (event) {
        modals.forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    }
});
