// Dual View Frame Toggle Engine
function switchView(mode) {
    const container = document.getElementById('viewModeContainer');
    const buttons = document.querySelectorAll('.view-controls .btn-group button');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if(mode === 'desktop') {
        container.className = "workspace desktop-mode";
        buttons[0].classList.add('active');
    } else {
        container.className = "workspace mobile-mode";
        buttons[1].classList.add('active');
    }
}

// Single-Page Dynamic Navigation Matrix
function navigateTo(sectionId) {
    // Manage Link Highlighting active arrays
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Handle visible page view block routing targets
    const sections = document.querySelectorAll('.web-section');
    sections.forEach(sec => {
        sec.classList.remove('active-section');
    });
    
    document.getElementById(`${sectionId}-sec`).classList.add('active-section');
}

// Interactive Mobile Hamburger Dropdown Toggler
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

// Geo-Location Interactive Switcher Engine
function switchLocation(locationKey) {
    // Deactivate all configuration tabs and visual panels
    const buttons = document.querySelectorAll('.loc-tab-btn');
    const panels = document.querySelectorAll('.location-panel');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active-loc'));
    
    // Select targets based on key matches
    if(locationKey === 'pune') {
        buttons[0].classList.add('active');
        document.getElementById('loc-pune').classList.add('active-loc');
    } else {
        buttons[1].classList.add('active');
        document.getElementById('loc-salem').classList.add('active-loc');
    }
}

// Accordion Bindings & Lifecycle Listeners Matrix
document.addEventListener("DOMContentLoaded", function() {
    const triggers = document.querySelectorAll('.accordion-trigger');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const currentNode = this.parentElement;
            const parentContainer = currentNode.parentElement;
            
            const openNodes = parentContainer.querySelectorAll('.accordion-node.open');
            openNodes.forEach(node => {
                if(node !== currentNode) {
                    node.classList.remove('open');
                }
            });
            
            currentNode.classList.toggle('open');
        });
    });

    // Form Event interception
    const form = document.getElementById('terminalForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Transmission verified. Connection routing initiated securely.');
            form.reset();
        });
    }
});