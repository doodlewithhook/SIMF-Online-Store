
// Product Database
const products = {
  handcraft: [
    {
  id: 'hc1',
  name: 'Handcrafted Scarf Pins',
  price: 500,
  priceNote: 'Pack of 5 — PKR 500 | Single — PKR 200',
  image: 'src="images/Handcrafted-Scarf-Pins.jpg",
  description: 'Elegant and colorful handcrafted scarf pins designed to beautifully secure your hijab or dupatta. Each pin is crafted with love using floral clay designs and decorative beads. A perfect blend of fashion and tradition!',
  features: [
    'Handcrafted floral designs',
    'Pack of 5 pins in assorted colors',
    'Available individually or as a set',
    'Perfect for hijabs, scarves, and dupattas',
    'Great gift idea for ladies and girls'
  ]
},
    {
      id: 'hc2',
      name: 'Ceramic Pottery Vase',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Elegant ceramic vase with traditional Pakistani patterns. Hand-painted with intricate designs that showcase our cultural heritage.',
      features: [
        'Hand-painted ceramic',
        'Traditional Pakistani motifs',
        'Perfect for flowers or decoration',
        'Dishwasher safe',
        'Unique cultural design'
      ]
    },
    {
      id: 'hc3',
      name: 'Embroidered Wall Hanging',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1544967882-c8c74bb97234?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Stunning embroidered wall hanging featuring traditional Pakistani needlework. A beautiful piece to enhance any room\'s aesthetic.',
      features: [
        'Hand-embroidered fabric',
        'Traditional Pakistani patterns',
        'Ready to hang',
        'Colorfast materials',
        'Perfect wall decoration'
      ]
    }
  ],
  toys: [
    {
      id: 'toy1',
      name: 'Wooden Building Blocks',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Educational wooden building blocks that help develop creativity and motor skills. Made from safe, non-toxic wood with smooth edges.',
      features: [
        'Set of 50 wooden blocks',
        'Non-toxic, child-safe materials',
        'Develops motor skills',
        'Encourages creativity',
        'Smooth, splinter-free edges'
      ]
    },
    {
      id: 'toy2',
      name: 'Stuffed Animal Collection',
      price: 2200,
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Soft and cuddly stuffed animals made with premium materials. Perfect companions for children of all ages.',
      features: [
        'Set of 3 stuffed animals',
        'Hypoallergenic materials',
        'Machine washable',
        'Safe for all ages',
        'Super soft and cuddly'
      ]
    },
    {
      id: 'toy3',
      name: 'Educational Puzzle Set',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Colorful educational puzzles that help children learn shapes, colors, and problem-solving skills.',
      features: [
        'Set of 5 different puzzles',
        'Educational and fun',
        'Durable cardboard',
        'Age-appropriate designs',
        'Develops cognitive skills'
      ]
    }
  ],
  jewelry: [
    {
      id: 'jew1',
      name: 'Silver Handcrafted Earrings',
      price: 2800,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Elegant silver earrings with intricate handcrafted designs. Perfect for special occasions or everyday wear.',
      features: [
        'Pure silver construction',
        'Handcrafted design',
        'Hypoallergenic',
        'Comes with gift box',
        'Traditional Pakistani style'
      ]
    },
    {
      id: 'jew2',
      name: 'Beaded Hair Accessories Set',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Beautiful set of beaded hair accessories including clips, bands, and pins. Perfect for adding elegance to any hairstyle.',
      features: [
        'Set of 8 accessories',
        'Colorful glass beads',
        'Strong and durable',
        'Suitable for all hair types',
        'Beautiful gift packaging'
      ]
    },
    {
      id: 'jew3',
      name: 'Traditional Bangles Set',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Stunning set of traditional Pakistani bangles with intricate patterns and beautiful colors.',
      features: [
        'Set of 12 bangles',
        'Traditional designs',
        'Multiple color options',
        'Comfortable fit',
        'Cultural significance'
      ]
    }
  ]
};

// Category information
const categoryInfo = {
  handcraft: {
    title: 'Handy Craft Items',
    description: 'Unique handmade decorative pieces and functional art created by skilled artisans'
  },
  toys: {
    title: 'Kids Toys',
    description: 'Educational and fun toys designed to inspire creativity and learning in children'
  },
  jewelry: {
    title: 'Jewelry & Hair Accessories',
    description: 'Beautiful handcrafted jewelry and elegant hair accessories for every occasion'
  }
};

// Current state
let currentCategory = null;
let currentProduct = null;

// Page navigation functions
function showHome() {
  hideAllPages();
  document.getElementById('home-page').classList.add('active');
  currentCategory = null;
  currentProduct = null;
}

function showCategory(category) {
  hideAllPages();
  document.getElementById('category-page').classList.add('active');
  currentCategory = category;
  
  // Update category info
  const info = categoryInfo[category];
  document.getElementById('category-title').textContent = info.title;
  document.getElementById('category-description').textContent = info.description;
  
  // Load products
  loadCategoryProducts(category);
}

function showProduct(productId) {
  const product = findProductById(productId);
  if (!product) return;
  
  hideAllPages();
  document.getElementById('product-page').classList.add('active');
  currentProduct = product;
  
  // Update product details
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-image').alt = product.name;
  document.getElementById('product-title').textContent = product.name;
  document.getElementById('product-price').textContent = product.priceNote || `PKR ${product.price.toLocaleString()}`;
  document.getElementById('product-description').textContent = product.description;
  
  // Load features
  const featuresContainer = document.getElementById('product-features');
  featuresContainer.innerHTML = '<h3 class="text-lg font-semibold text-simf-text-dark mb-3">Features:</h3>';
  
  product.features.forEach(feature => {
    const featureElement = document.createElement('div');
    featureElement.className = 'flex items-center space-x-2';
    featureElement.innerHTML = `
      <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
      <span class="text-gray-600">${feature}</span>
    `;
    featuresContainer.appendChild(featureElement);
  });
}

function showContact() {
  hideAllPages();
  document.getElementById('contact-page').classList.add('active');
}

function hideAllPages() {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
}

function goBackToCategory() {
  if (currentCategory) {
    showCategory(currentCategory);
  } else {
    showHome();
  }
}

// Product loading functions
function loadCategoryProducts(category) {
  const productsGrid = document.getElementById('products-grid');
  productsGrid.innerHTML = '';
  
  const categoryProducts = products[category] || [];
  
  categoryProducts.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
  
  if (categoryProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <p class="text-gray-500 text-lg">No products available in this category yet.</p>
        <p class="text-gray-400 mt-2">Check back soon for new arrivals!</p>
      </div>
    `;
  }
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow product-card cursor-pointer';
  card.onclick = () => showProduct(product.id);
  
  card.innerHTML = `
    <div class="relative">
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover" />
      <span class="absolute top-2 right-2 bg-simf-primary text-white text-xs px-2 py-1 rounded">PKR</span>
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-simf-text-dark mb-2 line-clamp-2">${product.name}</h3>
      <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold text-simf-primary">PKR ${product.price.toLocaleString()}</span>
        <button onclick="event.stopPropagation(); orderProductQuick('${product.id}')" 
                class="bg-simf-primary hover:bg-opacity-90 text-white px-4 py-2 rounded text-sm transition-colors">
          Quick Order
        </button>
      </div>
    </div>
  `;
  
  return card;
}

// Utility functions
function findProductById(productId) {
  for (const category in products) {
    const product = products[category].find(p => p.id === productId);
    if (product) return product;
  }
  return null;
}

function scrollToCategories() {
  document.getElementById('categories').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// WhatsApp functions
function orderProduct() {
  if (!currentProduct) return;
  
  const message = `Hello! I'm interested in ordering: ${currentProduct.name} (PKR ${currentProduct.price.toLocaleString()})`;
  const whatsappUrl = `https://wa.me/923333169989?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function orderProductQuick(productId) {
  const product = findProductById(productId);
  if (!product) return;
  
  const message = `Hello! I'm interested in ordering: ${product.name} (PKR ${product.price.toLocaleString()})`;
  const whatsappUrl = `https://wa.me/923333169989?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function sendWhatsAppMessage() {
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const message = document.getElementById('contact-message').value;
  
  if (!name || !phone || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  const whatsappMessage = `Hello! My name is ${name}. Phone: ${phone}. I'm interested in: ${message}`;
  const whatsappUrl = `https://wa.me/923333169989?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
  
  // Clear form
  document.getElementById('contact-name').value = '';
  document.getElementById('contact-phone').value = '';
  document.getElementById('contact-message').value = '';
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  showHome();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add line-clamp styles for text truncation
const style = document.createElement('style');
style.textContent = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);
