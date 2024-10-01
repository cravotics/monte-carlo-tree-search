// Function to dynamically create and insert the burger menu and its options
function createBurgerMenu() {
    const navMenu = document.getElementById('nav-menu');
    
    // Create burger icon
    const burgerIcon = document.createElement('div');
    burgerIcon.classList.add('burger-icon');
    burgerIcon.innerHTML = '<i class="fas fa-bars"></i>';
    burgerIcon.onclick = toggleMenu;
    
    // Create menu list
    const menuList = document.createElement('ul');
    menuList.classList.add('menu');
    menuList.id = 'menu';
    
    // Menu options
    const menuItems = [
        { text: '1. Summary of the topic', href: '#summary' },
        { text: '2. Formal definition', href: '#definition' },
        { text: '3. Overview of key results', href: '#key-results' },
        { text: '4. Decision-making in robotics', href: '#decision-making' },
        { text: '5. Description of variants', href: '#variants' },
        { text: '6. Important applications', href: '#applications' },
        { text: '7. Open research questions', href: '#open-questions' },
        { text: '8. References', href: '#references' }
    ];
    
    // Append each menu item
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.text;
        link.href = item.href;
        listItem.appendChild(link);
        menuList.appendChild(listItem);
    });
    
    // Append burger icon and menu to nav
    navMenu.appendChild(burgerIcon);
    navMenu.appendChild(menuList);
}

// Function to toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Call the function to create the burger menu when the page loads
window.onload = createBurgerMenu;
