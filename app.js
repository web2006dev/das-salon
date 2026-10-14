/**
 * DAS Family Salon - Bhopal
 * Interactive Web Engine: Dynamic Catalog, Live IST Timing, WhatsApp Booking & Modal Handlers
 */

// 1. SERVICES DATA
const SERVICES_DATA = [
  // Haircuts & Styling
  {
    id: 'men-cut',
    category: 'hair',
    title: "Men's Signature Haircut & Styling",
    subtitle: "Precision consultation, fade/scissor cut, wash & matte styling",
    price: "₹150",
    duration: "25-30 mins",
    popular: true,
    tag: "Bestseller"
  },
  {
    id: 'women-cut',
    category: 'hair',
    title: "Women's Designer Cut & Blow-Dry",
    subtitle: "Layers, butterfly cut, feather cut or bob with conditioning rinse",
    price: "₹350",
    duration: "40-50 mins",
    popular: true,
    tag: "Trending"
  },
  {
    id: 'kids-cut',
    category: 'hair',
    title: "Kids & Teens Gentle Haircut",
    subtitle: "Patient, kid-friendly grooming with cartoon cape & gentle scissors",
    price: "₹120",
    duration: "20 mins",
    popular: false,
    tag: "Family Favorite"
  },
  {
    id: 'beard-shape',
    category: 'hair',
    title: "Beard Sculpting & Hot Towel Finish",
    subtitle: "Razor sharp contours, beard wash, balm conditioning & steam towel",
    price: "₹100",
    duration: "20 mins",
    popular: false,
    tag: "Popular"
  },
  {
    id: 'hair-wash-dry',
    category: 'hair',
    title: "Scalp Clarifying Wash & Blow-Out",
    subtitle: "Volumizing wash, deep conditioning & salon heat styling finish",
    price: "₹200",
    duration: "25 mins",
    popular: false,
    tag: "Quick Fresh"
  },

  // Hair Spa & Treatments
  {
    id: 'nourish-spa',
    category: 'spa',
    title: "L'Oréal Deep Nourishing Hair Spa",
    subtitle: "Intense moisture infusion, revitalizing scalp massage & steam therapy",
    price: "₹699",
    duration: "45-50 mins",
    popular: true,
    tag: "Client Favorite"
  },
  {
    id: 'anti-dandruff-spa',
    category: 'spa',
    title: "Anti-Dandruff & Scalp Clarifying Spa",
    subtitle: "Tea tree & zinc active scalp scrub, ozone steam & cooling mask",
    price: "₹799",
    duration: "50 mins",
    popular: false,
    tag: "Therapeutic"
  },
  {
    id: 'keratin-smooth',
    category: 'spa',
    title: "Keratin Protein Smoothening",
    subtitle: "Frizz-free silky straight look, protein infusion lasting 4+ months",
    price: "₹2,499",
    duration: "2.5 - 3 hrs",
    popular: true,
    tag: "High Demand"
  },
  {
    id: 'hair-straighten',
    category: 'spa',
    title: "Safe Hair Straightening & Rebonding",
    subtitle: "Safe, chemical-balanced sleek permanent straightening with zero dryness",
    price: "₹2,999",
    duration: "3 hrs",
    popular: false,
    tag: "Safe Tech"
  },
  {
    id: 'hair-color',
    category: 'spa',
    title: "Global Hair Colour & Ammonia-Free Highlights",
    subtitle: "Rich chocolate, burgundy, caramel balayage or root touch-up with shine lock",
    price: "₹1,199",
    duration: "1.5 hrs",
    popular: false,
    tag: "Premium Color"
  },

  // Facials & Cleanups
  {
    id: 'insta-cleanup',
    category: 'facial',
    title: "Insta-Glow Refreshing Cleanup",
    subtitle: "Fruit extract scrub, blackhead extraction, soothing gel & glow pack",
    price: "₹399",
    duration: "30-35 mins",
    popular: true,
    tag: "Best Value"
  },
  {
    id: 'diamond-facial',
    category: 'facial',
    title: "Diamond Radiance Polishing Facial",
    subtitle: "Diamond dust micro-dermabrasion, lymphatic massage & glow sheet mask",
    price: "₹899",
    duration: "55 mins",
    popular: true,
    tag: "Party Glow"
  },
  {
    id: 'o3-brightening',
    category: 'facial',
    title: "O3+ Premium Brightening & Anti-Tan Facial",
    subtitle: "Advanced melanin reduction, oxygen infusion serum & peel-off rubber mask",
    price: "₹1,499",
    duration: "65 mins",
    popular: false,
    tag: "Dermat Grade"
  },
  {
    id: 'charcoal-detox',
    category: 'facial',
    title: "Charcoal Deep Pore Detox Therapy",
    subtitle: "Activated bamboo charcoal, oil balance formulation & pore tightening mist",
    price: "₹699",
    duration: "45 mins",
    popular: false,
    tag: "Anti-Pollution"
  },
  {
    id: 'detan-face-neck',
    category: 'facial',
    title: "Instant Face & Neck De-Tan Therapy",
    subtitle: "Kojic acid & milk protein instant de-tan therapy for sun damaged skin",
    price: "₹349",
    duration: "25 mins",
    popular: false,
    tag: "Instant Sun Fix"
  },

  // Waxing & Skin Care
  {
    id: 'smooth-wax-arms-legs',
    category: 'waxing',
    title: "Hygienic Full Arms & Full Legs Waxing",
    subtitle: "Single-use disposable strips, gentle chocolate wax & soothing aloe lotion",
    price: "₹399",
    duration: "35 mins",
    popular: true,
    tag: "Painless Care"
  },
  {
    id: 'rica-arms-underarms',
    category: 'waxing',
    title: "Italian Rica Wax (Arms + Underarms)",
    subtitle: "Colophony-free Italian wax, non-irritating for delicate, sensitive skin",
    price: "₹599",
    duration: "30 mins",
    popular: false,
    tag: "Sensitive Skin"
  },
  {
    id: 'full-body-wax',
    category: 'waxing',
    title: "Full Body Silk Touch Waxing",
    subtitle: "Complete body waxing in sanitized private room with post-wax skin cooling",
    price: "₹1,299",
    duration: "75 mins",
    popular: false,
    tag: "Total Silk"
  },
  {
    id: 'threading-combo',
    category: 'waxing',
    title: "Eyebrow Threading & Upper Lip Shape",
    subtitle: "Antibacterial organic cotton thread, precision arched styling",
    price: "₹50",
    duration: "10 mins",
    popular: false,
    tag: "Essential"
  },

  // Family Combos & Men's Packages
  {
    id: 'men-royal-combo',
    category: 'combos',
    title: "Men's Executive Grooming Package",
    subtitle: "Haircut + Beard Styling + Face & Neck De-Tan + Scalp Head Massage",
    price: "₹699",
    duration: "60 mins",
    popular: true,
    tag: "Save 30%"
  },
  {
    id: 'women-refresh-combo',
    category: 'combos',
    title: "Women's Rejuvenation Glow Package",
    subtitle: "Haircut & Blowdry + Deep Hair Spa + Glow Cleanup + Threading",
    price: "₹1,199",
    duration: "85 mins",
    popular: true,
    tag: "Save 35%"
  },
  {
    id: 'family-weekend-combo',
    category: 'combos',
    title: "Complete Family Weekend Grooming",
    subtitle: "Parents (Cut + Spa/Cleanup) + Child Haircut together at great value",
    price: "₹1,899",
    duration: "90 mins",
    popular: false,
    tag: "Family Saver"
  }
];

// 2. LIVE IST TIMING ENGINE
function checkLiveStatus() {
  const statusEl = document.getElementById('liveStatusIndicator');
  const statusHeroEl = document.getElementById('heroTimingBadge');
  
  // Calculate IST Date/Time
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 3600000;
  const istTime = new Date(utc + istOffset);
  
  const currentHour = istTime.getHours();
  const currentMinute = istTime.getMinutes();
  const timeInMinutes = currentHour * 60 + currentMinute;
  
  // Hours: 9:00 AM (540 mins) to 10:00 PM (1320 mins)
  const openTime = 9 * 60; // 9:00 AM
  const closeTime = 22 * 60; // 10:00 PM (22:00)
  
  const isOpen = (timeInMinutes >= openTime && timeInMinutes < closeTime);
  
  const formatBadge = (statusHtml) => statusHtml;
  
  if (isOpen) {
    const hoursLeft = Math.floor((closeTime - timeInMinutes) / 60);
    const minsLeft = (closeTime - timeInMinutes) % 60;
    const timeStr = hoursLeft > 0 ? `${hoursLeft}h ${minsLeft}m` : `${minsLeft}m`;
    
    if (statusEl) {
      statusEl.innerHTML = `
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-emerald mr-2"></span>
        <span class="text-emerald-400 font-semibold text-xs tracking-wide uppercase">Open Now</span>
        <span class="text-gray-400 text-xs ml-1 hidden sm:inline">· Closes 10:00 PM</span>
      `;
    }
    if (statusHeroEl) {
      statusHeroEl.innerHTML = `
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-emerald mr-2"></span>
        <span class="text-emerald-300 font-medium text-xs">OPEN TODAY UNTIL 10:00 PM IST (Late Night Care Available)</span>
      `;
    }
  } else {
    if (statusEl) {
      statusEl.innerHTML = `
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 mr-2"></span>
        <span class="text-amber-400 font-semibold text-xs tracking-wide uppercase">Closed Now</span>
        <span class="text-gray-400 text-xs ml-1 hidden sm:inline">· Opens 9:00 AM</span>
      `;
    }
    if (statusHeroEl) {
      statusHeroEl.innerHTML = `
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 mr-2"></span>
        <span class="text-amber-300 font-medium text-xs">OPENS AT 9:00 AM TOMORROW · Reserve Your Preferred Slot Online</span>
      `;
    }
  }
}

// 3. RENDER SERVICES
function renderServices(activeCategory = 'all') {
  const container = document.getElementById('servicesContainer');
  if (!container) return;
  
  const filtered = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);
    
  container.innerHTML = filtered.map(service => `
    <div class="service-card glass-panel rounded-2xl p-5 border border-white/5 relative flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
            ${service.tag}
          </span>
          <span class="text-xs text-gray-400 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-gray-400"></i> ${service.duration}
          </span>
        </div>
        <h4 class="text-lg font-bold text-white mb-1.5">${service.title}</h4>
        <p class="text-xs text-gray-300 leading-relaxed mb-4">${service.subtitle}</p>
      </div>
      
      <div class="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
        <div>
          <span class="text-xs text-gray-400 uppercase tracking-wider block">Price</span>
          <span class="text-xl font-extrabold text-amber-300">${service.price}</span>
        </div>
        <button 
          onclick="openBookingModal('${service.title.replace(/'/g, "\\'")}')" 
          class="px-4 py-2 rounded-xl gold-btn text-xs font-bold flex items-center gap-1.5 transition-transform">
          <span>Book Now</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');
  
  if (window.lucide) {
    lucide.createIcons();
  }
}

// 4. FILTER TAB HANDLER
function setupCategoryFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      renderServices(category);
    });
  });
}

// 5. BOOKING MODAL LOGIC
function openBookingModal(preselectedService = '') {
  const modal = document.getElementById('bookingModal');
  const serviceInput = document.getElementById('modalServiceInput');
  const dateInput = document.getElementById('modalDateInput');
  
  if (preselectedService && serviceInput) {
    serviceInput.value = preselectedService;
  }
  
  // Set default date to today
  if (dateInput && !dateInput.value) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today;
  }
  
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// WhatsApp Dispatch Engine
function handleBookingSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('modalNameInput')?.value.trim();
  const phone = document.getElementById('modalPhoneInput')?.value.trim();
  const service = document.getElementById('modalServiceInput')?.value.trim();
  const date = document.getElementById('modalDateInput')?.value;
  const time = document.getElementById('modalTimeInput')?.value;
  const stylist = document.getElementById('modalStylistInput')?.value;
  const notes = document.getElementById('modalNotesInput')?.value.trim();
  
  if (!name || !phone || !service) {
    alert("Please fill in your name, phone number, and selected service.");
    return;
  }
  
  // Generate Booking Reference
  const refCode = 'DAS-' + Math.floor(100000 + Math.random() * 900000);
  
  // Format WhatsApp Payload
  const message = `👋 Hello DAS Family Salon! I'd like to book an appointment.

🏷️ *Ref Code:* ${refCode}
👤 *Name:* ${name}
📱 *Phone:* ${phone}
✂️ *Service:* ${service}
📅 *Preferred Date:* ${date || 'Flexible'}
⏰ *Preferred Time:* ${time || 'Any Slot'}
⭐ *Stylist Preference:* ${stylist || 'Any Expert'}
${notes ? `📝 *Special Request:* ${notes}\n` : ''}
📍 *Location:* Minal Shopping St, Narela Shankri, Ayodhya Nagar, Bhopal`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/918349082121?text=${encoded}`;
  
  // Close booking modal and show instant confirmation ticket
  closeBookingModal();
  showConfirmationTicket({
    refCode,
    name,
    service,
    date: date || 'Flexible',
    time: time || 'Confirmed upon arrival',
    stylist: stylist || 'Senior Stylist',
    waUrl
  });
}

function showConfirmationTicket(data) {
  const passModal = document.getElementById('confirmationModal');
  const passContent = document.getElementById('confirmationContent');
  
  if (passContent) {
    passContent.innerHTML = `
      <div class="text-center mb-6">
        <div class="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
          <i data-lucide="check-check" class="w-7 h-7"></i>
        </div>
        <span class="text-xs font-bold tracking-widest text-amber-400 uppercase">Appointment Generated</span>
        <h3 class="text-2xl font-serif-luxury text-white mt-1">Ready to Confirm</h3>
        <p class="text-xs text-gray-400 mt-1">Ref ID: <span class="font-mono text-amber-300 font-bold">${data.refCode}</span></p>
      </div>

      <div class="bg-black/40 rounded-xl p-4 border border-white/10 space-y-2.5 text-xs mb-6">
        <div class="flex justify-between items-center text-gray-300">
          <span class="text-gray-400">Client Name:</span>
          <span class="font-semibold text-white">${data.name}</span>
        </div>
        <div class="flex justify-between items-center text-gray-300">
          <span class="text-gray-400">Service:</span>
          <span class="font-semibold text-amber-300">${data.service}</span>
        </div>
        <div class="flex justify-between items-center text-gray-300">
          <span class="text-gray-400">Date & Slot:</span>
          <span class="font-semibold text-white">${data.date} (${data.time})</span>
        </div>
        <div class="flex justify-between items-center text-gray-300">
          <span class="text-gray-400">Stylist:</span>
          <span class="font-semibold text-white">${data.stylist}</span>
        </div>
        <div class="flex justify-between items-center text-gray-300 border-t border-white/5 pt-2">
          <span class="text-gray-400">Salon Location:</span>
          <span class="font-semibold text-white">Minal Shopping St, Bhopal</span>
        </div>
      </div>

      <div class="space-y-3">
        <a href="${data.waUrl}" target="_blank" rel="noopener noreferrer" 
           class="w-full py-3.5 px-4 rounded-xl gold-btn font-bold text-sm flex items-center justify-center gap-2 shadow-lg">
          <i data-lucide="message-square" class="w-4 h-4"></i>
          <span>Send via WhatsApp to Salon Desk</span>
        </a>
        <button onclick="closeConfirmationModal()" 
           class="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold transition-colors">
          Close Window
        </button>
      </div>
    `;
  }
  
  if (passModal) {
    passModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeConfirmationModal() {
  const passModal = document.getElementById('confirmationModal');
  if (passModal) {
    passModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// 6. INITIALIZATION ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  renderServices('all');
  setupCategoryFilters();
  checkLiveStatus();
  
  // Re-check status every 60 seconds
  setInterval(checkLiveStatus, 60000);
  
  // Modal click-outside-to-close listeners
  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeBookingModal();
      }
    });
  }
  
  const confirmationModal = document.getElementById('confirmationModal');
  if (confirmationModal) {
    confirmationModal.addEventListener('click', (e) => {
      if (e.target === confirmationModal) {
        closeConfirmationModal();
      }
    });
  }
  
  // Form submission
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
  }
  
  if (window.lucide) {
    lucide.createIcons();
  }
});
