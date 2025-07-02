// src/MainContent.jsx
import React from 'react';
import './MainContent.css'; // Import the external CSS file

// Reusing existing icons or defining new ones if needed for this specific content
// Placeholder for a generic PlusIcon for the product cards
const PlusIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// Placeholder for Filter icon
const FilterIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

// Placeholder for ChevronRightIcon for notifications
const ChevronRightIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// Data for Categories and Stock (will also be used for Popular Categories by manually pulling image URLs)
const categoriesData = [
    { name: 'Veggies', stock: 1890, imageUrl: 'https://img.icons8.com/ios-filled/50/40C057/natural-food.png', color: 'green' },
    { name: 'Tubers', stock: 2040, imageUrl: 'https://img.icons8.com/?size=100&id=11316&format=png&color=40C057', color: 'orange' },
    { name: 'Fish', stock: 548, imageUrl: 'https://img.icons8.com/?size=100&id=96285&format=png&color=40C057', color: 'blue' },
    { name: 'Fruits', stock: 300, imageUrl: 'https://img.icons8.com/?size=100&id=jlunILjlHtw3&format=png&color=40C057', color: 'red' },
    { name: 'Meat', stock: 236, imageUrl: 'https://img.icons8.com/?size=100&id=25093&format=png&color=40C057', color: 'purple' },

];

// Data for Popular Products
const allPopularProductsData = [
    { name: 'Cabbage', imageUrl: 'https://exat8rt6fi5.exactdn.com/wp-content/uploads/2022/05/cabbage-01.jpg?strip=all&lossy=1&ssl=1', price: 15.10, unit: 'Kg' },
    { name: 'Kale vegetables', imageUrl: 'https://gabbarfarms.com/cdn/shop/products/KaleCurly_6b5d32f7-c886-4b6e-a8db-ec976b3941fc.jpg?v=1638510956', price: 8.34, unit: 'Kg' },
    { name: 'Brocoly', imageUrl: 'https://www.veggycation.com.au/siteassets/veggycationvegetable/broccoli.jpg', price: 5.60, unit: 'Kg' },
    { name: 'Celery', imageUrl: 'https://www.veggycation.com.au/siteassets/veggycationvegetable/celery.jpg', price: 4.80, unit: 'Kg' },
];

// Data for Income Section
const incomeData = [
    { period: 'Daily', amount: '$129.80', progress: 60, iconUrl: 'https://img.icons8.com/?size=100&id=F2qKDEUSZX5C&format=png&color=40C057' },
    { period: 'Weekly', amount: '$347.62', progress: 80, iconUrl: 'https://img.icons8.com/?size=100&id=39182&format=png&color=40C057' },
    { period: 'Monthly', amount: '$897.66', progress: 70, iconUrl: 'https://img.icons8.com/?size=100&id=3hbmYufipcxr&format=png&color=40C057' },
];

const MainContent = () => {
  return (
    <div className="main-content-container">
      {/* Main Grid Layout */}
      <div className="main-grid">
        {/* Left Column */}
        <div className="main-grid-left">
          {/* Get special discounts banner */}
          <div className="promotion-banner card-panel">
            <div className="promotion-banner-content">
              <h2>Get special discounts <br />up to 45%</h2>
              <p>Enjoy our vegetables at a discount price</p>
            </div>

            <div className="promotion-banner-right">
              <img
                src="/image1.jpg"
                alt="Fresh vegetables in a basket"
                className="promotion-banner-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100x100/16a34a/FFFFFF?text=Basket";
                }}
              />
              <button className="promotion-banner-button right-button">Use Now</button>
            </div>
          </div>


          {/* Popular Categories - NOW USING THE IMAGES YOU PROVIDED */}
          <div className="card-panel">
            <div className="popular-categories-header">
              <h2>Popular Categories</h2>
              <a href="#" className="view-all-link">View All</a>
            </div>

            <div className="category-grid">
              {[
                { name: "Vegetables", imageUrl: "/image1.jpg" },
                {
                  name: "Fashion",
                  imageUrl:
                    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/21203458/2023/1/2/06271946-be59-476d-bb62-0b4d81c961611672651142670-Roadster-Men-Sweatshirts-91672651142282-1.jpg"
                },
                {
                  name: "Mobiles",
                  imageUrl:
                    "https://suprememobiles.in/cdn/shop/files/RedmiNote145G-MystiqueWhite.png?v=1733893192"
                },
                {
                  name: "Office",
                  imageUrl:
                    "https://images-cdn.ubuy.co.in/67dd43baf65b7208305a6271-epson-expression-home-xp-4105-nbsp.jpg"
                },
                {
                  name: "Computers",
                  imageUrl:
                    "https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
                }
              ].map((category) => (
                <div className="category-item" key={category.name}>
                  <div className="category-icon">
                    <img
                      src={category.imageUrl}
                      alt={`${category.name} icon`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/60x60/ecfdf5/2563eb?text=${category.name.charAt(
                          0
                        )}`;
                      }}
                    />
                  </div>
                  <span className="category-name">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories and Stock - Using categoriesData and showing images */}
          <div className="card-panel">
            <div className="stock-header">
              <h2>Categories and Stock</h2>
              <button className="filter-button"><FilterIcon /> Filter</button>
            </div>
            <div className="stock-grid">
              {categoriesData.map((category) => (
                // Dynamically apply color class based on category.color
                <div className={`stock-item color-${category.color}`} key={category.name}>
                  {/* Image added for Categories and Stock */}
                  <img
                    src={category.imageUrl}
                    alt={`${category.name} icon`}
                    className="stock-item-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/40x40/d1fae5/065F46?text=${category.name.charAt(0)}`; }}
                  />
                  <span className="stock-quantity">{category.stock} stock</span>
                  <span className="stock-name">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Product - Using allPopularProductsData and displaying in a single row */}
          <div className="card-panel">
            <div className="popular-product-header">
              <h2>Popular Product</h2>
              <a href="#" className="view-all-link">See All</a>
            </div>
            <div className="popular-product-grid">
              {allPopularProductsData.map((product) => (
                <div className="product-card" key={product.name}>
                  <div className="product-card-image-container">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="product-card-image"
                      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x80/f9fafb/374151?text=${product.name.replace(/\s/g, '+')}`; }}
                    />
                  </div>
                  <div className="product-card-info">
                    <span className="product-card-name">{product.name}</span>
                  </div>
                  <div className="product-card-footer">
                    <span className="product-card-price">${product.price.toFixed(2)} <small>/{product.unit}</small></span>
                    <button className="product-card-add-button"><PlusIcon /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="main-grid-right">
          {/* Income */}
          <div className="card-panel">
            <h2 className="income-header">Income</h2>
            <div className="income-grid">
              {incomeData.map((income, index) => (
                <div className="income-card" key={index}>
                  <div className="income-icon-bg">
                    <img src={income.iconUrl} alt={`${income.period} Income icon`} className="income-img-icon" onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/30x30?text=I`; }} />
                  </div>
                  <span className="income-amount">{income.amount}</span>
                  <span className="income-period">{income.period}</span>
                  {/* Dynamically apply conic-gradient based on progress */}

                </div>
              ))}
            </div>
          </div>

          {/* Notification */}
          <div className="card-panel">
            <h2 className="notification-header">Notification</h2>
            <div className="notification-list">
              <div className="notification-item">
                <div className="notification-content">
                  <span className="notification-message">The fruit is almost finished, quickly refill</span>
                  <span className="notification-time">Tue, 14 May, 10:00 AM</span>
                </div>
                <ChevronRightIcon className="notification-arrow" />
              </div>
              <div className="notification-item">
                <div className="notification-content">
                  <span className="notification-message">Vegetable stocks have been filled</span>
                  <span className="notification-time">Wed, 15 May, 09:00 AM</span>
                </div>
                <ChevronRightIcon className="notification-arrow" />
              </div>
              <div className="notification-item">
                <div className="notification-content">
                  <span className="notification-message">Fish stock has been reordered</span>
                  <span className="notification-time">Fri, 17 May, 10:00 AM</span>
                </div>
                <ChevronRightIcon className="notification-arrow" />
              </div>
              <div className="notification-item">
                <div className="notification-content">
                  <span className="notification-message">Fish orders have been refilled</span>
                  <span className="notification-time">Fri, 17 May, 10:03 PM</span>
                </div>
                <ChevronRightIcon className="notification-arrow" />
              </div>
            </div>
          </div>

          {/* Latest Order */}
          <div className="card-panel">
            <h2 className="latest-order-header">Latest order</h2>
            <table className="latest-order-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Goods</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="order-name">Suman</span><br />
                    <span className="order-date">Sun, 19 May, 08:00 AM</span>
                  </td>
                  <td>Carrot (5)</td>
                  <td><span className="status-button accept">Accept</span></td>
                </tr>
                <tr>
                  <td>
                    <span className="order-name">Naveen</span><br />
                    <span className="order-date">Sun, 19 May, 08:52 AM</span>
                  </td>
                  <td>Fruits</td>
                  <td><span className="status-button accept">Accept</span></td>
                </tr>
                <tr>
                  <td>
                    <span className="order-name">Ariana</span><br />
                    <span className="order-date">Sun, 19 May, 08:48 AM</span>
                  </td>
                  <td>Table 4"4</td>
                  <td><span className="status-button accepted">Accepted</span></td>
                </tr>
                <tr>
                  <td>
                    <span className="order-name">Reshmi</span><br />
                    <span className="order-date">Sun, 19 May, 06:30 AM</span>
                  </td>
                  <td>Pure Ghee</td>
                  <td><span className="status-button accept">Accept</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;