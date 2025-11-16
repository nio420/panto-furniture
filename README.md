🛋️ Panto Interior E-Commerce Project

Panto is a modern, responsive e-commerce web application for furniture and interior products. Users can browse products by category, search for items, view details, and manage their shopping cart. The platform is visually appealing, user-friendly, and fully responsive across all devices.

✨ Features

The Hero Section displays a beautiful banner with a headline, subtext, tooltip buttons, and a search bar. Users can search for products by name. If the input is empty, a message prompts to enter a product name, and if the product does not exist, it shows "Product is not available".

The Products component displays products by category such as Chair, Beds, Sofa, and Lamp. Users can filter by category, view more products using the "View All" button, and collapse with "Show Less". The grid is responsive for mobile, tablet, and desktop screens.

The Cart functionality allows users to add or remove products, dynamically shows the total items in the navbar, displays an order summary, and supports multiple payment options.

The Navigation includes a fixed responsive navbar with scroll effect. The mobile menu has a toggle button, close icon, and the cart icon is accessible on both desktop and mobile views.

Additional sections include Why Choose Us, Experiences, Material, Testimonials, and Footer. All sections are fully responsive and visually consistent.

💻 Tech Stack

The project is built with React, Vite, and TailwindCSS. Icons are from React-Icons and Lucide-React. React Router DOM handles routing, and React Context API manages state for the cart.

⚡ Installation & Setup

Clone the repository using git clone <your-repo-url> and navigate to the project folder. Install dependencies using npm install. Start the development server using npm run dev. Open the app in the browser at http://localhost:5173.

🗂️ File Structure

The src folder contains all code: /assets for images and banners, /Components for all React components like Hero, Products, Navbar, etc., /context for CartContext, /Utils for products, reviews, and helper functions. The main App component is in App.jsx, and ReactDOM renders in main.jsx.

🚀 Usage

Users can type a product name in the Hero search bar and press Enter or click the search icon. If the product exists, the Products section scrolls into view and displays results. If the product does not exist, an alert shows "Product is not available".

Clicking category buttons filters products, and "View All" expands the list. Users can add items to the cart, view the cart summary, remove items, and select a payment method.

📱 Responsive Design

The design is fully responsive. The navbar, Hero, Products, and all sections adapt seamlessly to mobile, tablet, and desktop screens. Testimonials or product highlights use a Swiper slider with autoplay support.

🔮 Future Enhancements

Possible future features include backend integration for persistent cart storage, user authentication, order history, search suggestions/autocomplete, and advanced product filtering and sorting.

👤 Author

Naimul Islam Omit
Portfolio: https://nio420.github.io/Portfolio/

GitHub: https://github.com/nio420

Email: naimulislamomit2022@gmail.com
# panto-furniture
