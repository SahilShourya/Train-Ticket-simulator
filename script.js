// ===================================================
// ===== DATA — EDIT TRAINS, PRICES, STATIONS HERE =====
// ===================================================

const TRAINS_DATA = [
  {
    number: "12301", name: "Howrah Rajdhani",
    type: "rajdhani", from: "New Delhi", to: "Howrah Junction",
    depart: "16:55", arrive: "09:55+1", duration: "17h 00m", stops: 4,
    classes: [
      { code:"1A", name:"First AC",   price:4200, seats:6,  status:"available" },
      { code:"2A", name:"Second AC",  price:2450, seats:14, status:"available" },
      { code:"3A", name:"Third AC",   price:1750, seats:32, status:"few" }
    ]
  },
  {
    number: "12951", name: "Mumbai Rajdhani",
    type: "rajdhani", from: "New Delhi", to: "Mumbai Central",
    depart: "16:25", arrive: "08:15+1", duration: "15h 50m", stops: 3,
    classes: [
      { code:"1A", name:"First AC",   price:4500, seats:0,  status:"wl" },
      { code:"2A", name:"Second AC",  price:2600, seats:0,  status:"wl" },
      { code:"3A", name:"Third AC",   price:1850, seats:8,  status:"few" }
    ]
  },
  {
    number: "12013", name: "Amritsar Shatabdi",
    type: "shatabdi", from: "New Delhi", to: "Amritsar Junction",
    depart: "07:20", arrive: "13:10", duration: "5h 50m", stops: 6,
    classes: [
      { code:"EC", name:"Executive Chair", price:1850, seats:24, status:"available" },
      { code:"CC", name:"Chair Car",       price:820,  seats:60, status:"available" }
    ]
  },
  {
    number: "22691", name: "Rajdhani Express",
    type: "rajdhani", from: "New Delhi", to: "Bengaluru City",
    depart: "20:00", arrive: "05:50+2", duration: "33h 50m", stops: 8,
    classes: [
      { code:"1A", name:"First AC",  price:5200, seats:4,  status:"few" },
      { code:"2A", name:"Second AC", price:3100, seats:22, status:"available" },
      { code:"3A", name:"Third AC",  price:2100, seats:48, status:"available" }
    ]
  },
  {
    number: "12627", name: "Karnataka Express",
    type: "superfast", from: "New Delhi", to: "Bengaluru City",
    depart: "22:30", arrive: "05:20+2", duration: "30h 50m", stops: 15,
    classes: [
      { code:"SL",  name:"Sleeper",    price:545,  seats:120, status:"available" },
      { code:"3A",  name:"Third AC",   price:1450, seats:64,  status:"available" },
      { code:"2A",  name:"Second AC",  price:2050, seats:28,  status:"few" }
    ]
  },
  {
    number: "11057", name: "Amritsar Express",
    type: "express", from: "Mumbai Central", to: "Amritsar Junction",
    depart: "18:05", arrive: "21:20+1", duration: "27h 15m", stops: 18,
    classes: [
      { code:"SL",  name:"Sleeper",  price:475, seats:0,   status:"wl" },
      { code:"3A",  name:"Third AC", price:1250, seats:16, status:"available" },
      { code:"GEN", name:"General",  price:180, seats:999, status:"available" }
    ]
  },
  {
    number: "20901", name: "Vande Bharat Express",
    type: "vande", from: "New Delhi", to: "Varanasi Junction",
    depart: "06:00", arrive: "14:00", duration: "8h 00m", stops: 3,
    classes: [
      { code:"EC", name:"Executive Chair", price:2200, seats:18, status:"available" },
      { code:"CC", name:"Chair Car",       price:1100, seats:80, status:"available" }
    ]
  },
  {
    number: "12559", name: "Shiv Ganga Express",
    type: "superfast", from: "New Delhi", to: "Varanasi Junction",
    depart: "18:40", arrive: "06:30+1", duration: "11h 50m", stops: 7,
    classes: [
      { code:"SL", name:"Sleeper",    price:355,  seats:88, status:"available" },
      { code:"3A", name:"Third AC",   price:955,  seats:42, status:"available" },
      { code:"2A", name:"Second AC",  price:1380, seats:12, status:"few" }
    ]
  }
];

const PNR_DATA = {
  "1234567890": {
    pnr:"1234567890", train:"12301", trainName:"Howrah Rajdhani",
    from:"New Delhi", to:"Howrah Junction",
    depart:"16:55", arrive:"09:55", date:"12 Mar 2026",
    class:"2A", passengers:[
      { name:"Rahul Sharma", age:32, gender:"M", seat:"A1-21", status:"CNF" },
      { name:"Priya Sharma", age:28, gender:"F", seat:"A1-22", status:"CNF" }
    ],
    fare:4900, status:"confirmed"
  },
  "9876543210": {
    pnr:"9876543210", train:"12951", trainName:"Mumbai Rajdhani",
    from:"New Delhi", to:"Mumbai Central",
    depart:"16:25", arrive:"08:15", date:"15 Mar 2026",
    class:"3A", passengers:[
      { name:"Amit Verma", age:25, gender:"M", seat:"WL/34", status:"WL 34" }
    ],
    fare:1850, status:"wl"
  },
  "5555555555": {
    pnr:"5555555555", train:"20901", trainName:"Vande Bharat Express",
    from:"New Delhi", to:"Varanasi Junction",
    depart:"06:00", arrive:"14:00", date:"8 Mar 2026",
    class:"CC", passengers:[
      { name:"Sunita Rao", age:45, gender:"F", seat:"C2-14", status:"CNF" },
      { name:"Ravi Rao",   age:48, gender:"M", seat:"C2-15", status:"CNF" },
      { name:"Arjun Rao",  age:16, gender:"M", seat:"C2-16", status:"CNF" }
    ],
    fare:3300, status:"confirmed"
  }
};

const LIVE_TRAINS = [
  { number:"12301", name:"Howrah Rajdhani",     from:"New Delhi",     to:"Howrah Junction",    progress:42, currentStation:"Kanpur Central",  nextStation:"Allahabad Junction", delay:0,  status:"ontime",    speed:130 },
  { number:"12951", name:"Mumbai Rajdhani",     from:"New Delhi",     to:"Mumbai Central",     progress:68, currentStation:"Kota Junction",    nextStation:"Vadodara Junction",  delay:15, status:"delayed",   speed:110 },
  { number:"12013", name:"Amritsar Shatabdi",   from:"New Delhi",     to:"Amritsar Junction",  progress:15, currentStation:"Ambala Cantt",     nextStation:"Ludhiana Junction",  delay:0,  status:"ontime",    speed:145 },
  { number:"20901", name:"Vande Bharat Express",from:"New Delhi",     to:"Varanasi Junction",  progress:55, currentStation:"Prayagraj Jn",    nextStation:"Varanasi Jn",        delay:0,  status:"ontime",    speed:160 },
  { number:"12559", name:"Shiv Ganga Express",  from:"New Delhi",     to:"Varanasi Junction",  progress:28, currentStation:"Aligarh Junction", nextStation:"Kanpur Central",     delay:45, status:"delayed",   speed:95  },
  { number:"22691", name:"Rajdhani Express",    from:"New Delhi",     to:"Bengaluru City",     progress:0,  currentStation:"—",                nextStation:"—",                  delay:0,  status:"cancelled", speed:0   },
  { number:"11057", name:"Amritsar Express",    from:"Mumbai Central",to:"Amritsar Junction",  progress:80, currentStation:"New Delhi",        nextStation:"Ambala Cantt",       delay:8,  status:"delayed",   speed:105 }
];

let myBookings = [
  {
    pnr:"5555555555", train:"20901", trainName:"Vande Bharat Express",
    from:"New Delhi", to:"Varanasi Junction", date:"8 Mar 2026",
    depart:"06:00", arrive:"14:00", class:"CC", passengers:3, fare:3300,
    status:"upcoming", bookingDate:"1 Mar 2026"
  },
  {
    pnr:"1234567890", train:"12301", trainName:"Howrah Rajdhani",
    from:"New Delhi", to:"Howrah Junction", date:"12 Mar 2026",
    depart:"16:55", arrive:"09:55", class:"2A", passengers:2, fare:4900,
    status:"upcoming", bookingDate:"2 Mar 2026"
  },
  {
    pnr:"0011223344", train:"12627", trainName:"Karnataka Express",
    from:"New Delhi", to:"Bengaluru City", date:"18 Feb 2026",
    depart:"22:30", arrive:"05:20", class:"SL", passengers:1, fare:545,
    status:"completed", bookingDate:"10 Feb 2026"
  }
];

const OFFERS = [
  { code:"RAIL10",    title:"10% Off on All Classes",    desc:"Get 10% instant discount on all AC classes",       discount:"10%",  color:"#e3f0ff", accent:"#1565c0", badge:"New"      },
  { code:"TATKAL20",  title:"Tatkal Saver",              desc:"₹200 off on Tatkal bookings above ₹1000",          discount:"₹200", color:"#fff3e0", accent:"#e65100", badge:"Limited"  },
  { code:"RAILPASS",  title:"RailPass Exclusive",        desc:"Flat 15% off for annual pass holders",             discount:"15%",  color:"#e8f5e9", accent:"#2d6a4f", badge:"Popular"  },
  { code:"UPIBONUS",  title:"UPI Cashback",              desc:"₹50 cashback on payments via UPI",                 discount:"₹50",  color:"#f3e5f5", accent:"#7b1fa2", badge:"Today"    },
  { code:"FIRSTBOOK", title:"First Booking Bonus",       desc:"₹100 off on your first booking",                  discount:"₹100", color:"#fdecea", accent:"#c62d38", badge:"New User"  },
  { code:"WEEKEND25", title:"Weekend Getaway",           desc:"25% off on journeys starting Friday-Sunday",       discount:"25%",  color:"#e8f5e9", accent:"#2d6a4f", badge:"Weekend"  }
];

// ===================================================
// ===== STATE =====
// ===================================================
let state = {
  passengers: { adult:1, child:0, infant:0 },
  selectedClass: "SL",
  selectedQuota: "GN",
  currentTrain: null,
  currentBooking: { selectedSeats:[], paymentMethod:null, couponDiscount:0, coupon:"" },
  bookingStep: 1,
  filterBookings: "all",
  allTrains: []
};

// ===================================================
// ===== INIT =====
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  document.getElementById('journey-date').value = today.toISOString().split('T')[0];
  document.getElementById('journey-date').min = new Date().toISOString().split('T')[0];
  renderLiveTrains();
  renderBookings();
  renderOffers();
});

// ===================================================
// ===== NAVIGATION =====
// ===================================================
function showPage(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
}

// ===================================================
// ===== SEARCH =====
// ===================================================
function swapStations() {
  const f = document.getElementById('from-station');
  const t = document.getElementById('to-station');
  [f.value, t.value] = [t.value, f.value];
  showToast('🔄 Stations swapped!');
}

function setTripType(type, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  showToast(`✅ ${btn.textContent} selected`);
}

function togglePaxPopup() {
  document.getElementById('pax-popup').classList.toggle('hidden');
}

document.addEventListener('click', (e) => {
  const sel = document.getElementById('pax-selector');
  if (sel && !sel.contains(e.target)) {
    document.getElementById('pax-popup').classList.add('hidden');
  }
});

function changePax(type, delta) {
  if (type === 'adult')  state.passengers.adult  = Math.max(1, Math.min(6, state.passengers.adult  + delta));
  if (type === 'child')  state.passengers.child  = Math.max(0, Math.min(6, state.passengers.child  + delta));
  if (type === 'infant') state.passengers.infant = Math.max(0, Math.min(4, state.passengers.infant + delta));
  document.getElementById('adult-count').textContent  = state.passengers.adult;
  document.getElementById('child-count').textContent  = state.passengers.child;
  document.getElementById('infant-count').textContent = state.passengers.infant;
  updatePaxDisplay();
}

function updatePaxDisplay() {
  const p = state.passengers;
  let parts = [];
  if (p.adult  > 0) parts.push(`${p.adult} Adult${p.adult>1?'s':''}`);
  if (p.child  > 0) parts.push(`${p.child} Child${p.child>1?'ren':''}`);
  if (p.infant > 0) parts.push(`${p.infant} Infant${p.infant>1?'s':''}`);
  document.getElementById('pax-display-text').textContent = parts.join(', ') + ', ' + state.selectedClass;
}

function selectClass(cls, btn) {
  document.querySelectorAll('.class-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.selectedClass = cls;
  updatePaxDisplay();
}

function selectQuota(btn, quota) {
  document.querySelectorAll('#quota-btns .filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.selectedQuota = quota;
}

function searchTrains() {
  const from = document.getElementById('from-station').value.trim();
  const to   = document.getElementById('to-station').value.trim();
  const date = document.getElementById('journey-date').value;
  if (!from || !to) { showToast('⚠️ Please enter both stations!'); return; }
  if (from === to)  { showToast('⚠️ From and To cannot be same!'); return; }
  if (!date)        { showToast('⚠️ Please select journey date!'); return; }
  showToast('🔍 Searching trains...');
  setTimeout(() => {
    let trains = TRAINS_DATA.filter(t =>
      (t.from.toLowerCase().includes(from.toLowerCase()) || from.toLowerCase().includes(t.from.toLowerCase())) &&
      (t.to.toLowerCase().includes(to.toLowerCase())   || to.toLowerCase().includes(t.to.toLowerCase()))
    );
    if (trains.length === 0) trains = TRAINS_DATA;
    state.allTrains = trains;
    document.getElementById('popular-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    document.getElementById('results-title').textContent = `${trains.length} Trains Found`;
    document.getElementById('results-meta').textContent  = `${from} → ${to} | ${formatDate(date)} | ${state.selectedQuota === 'TQ' ? '⚡ Tatkal Quota' : 'General Quota'} | ${state.passengers.adult} Passenger${state.passengers.adult > 1 ? 's' : ''}`;
    renderTrainList(trains);
    showToast(`✅ Found ${trains.length} trains!`);
    document.getElementById('results-section').scrollIntoView({ behavior:'smooth', block:'start' });
  }, 600);
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}

function quickSearch(from, to) {
  document.getElementById('from-station').value = from;
  document.getElementById('to-station').value   = to;
  searchTrains();
}

function renderTrainList(trains) {
  const list = document.getElementById('train-list');
  if (trains.length === 0) {
    list.innerHTML = `<div class="alert alert-warning" style="max-width:500px;">No trains found with current filters.</div>`;
    return;
  }
  list.innerHTML = trains.map(t => `
    <div class="train-card" data-type="${t.type}">
      <div class="train-card-header">
        <div class="train-name-row">
          <span class="train-number">${t.number}</span>
          <span class="train-name">${t.name}</span>
          <span class="train-type-badge badge-${t.type}">${t.type.charAt(0).toUpperCase()+t.type.slice(1)}</span>
        </div>
        <div style="font-size:12px; color:var(--muted);">
          ${state.selectedQuota === 'TQ' ? '<span style="color:#e65100; font-weight:700;">⚡ Tatkal</span>' : '🎫 General'} Quota
        </div>
      </div>
      <div class="journey-row">
        <div>
          <div class="station-time">${t.depart}</div>
          <div class="station-name">${t.from}</div>
          <div class="station-day">Day 1</div>
        </div>
        <div class="journey-line">
          <div class="journey-duration">${t.duration}</div>
          <div class="journey-track"></div>
          <div class="journey-stops">${t.stops} stops</div>
        </div>
        <div style="text-align:right;">
          <div class="station-time">${t.arrive}</div>
          <div class="station-name">${t.to}</div>
          <div class="station-day">${t.arrive.includes('+') ? 'Day 2' : 'Day 1'}</div>
        </div>
      </div>
      <div class="classes-row">
        ${t.classes.map(cls => `
          <div class="class-avail" onclick="selectClassForBooking(this,'${t.number}','${cls.code}')">
            <div class="class-code">${cls.code}</div>
            <div class="class-price">₹${(state.selectedQuota === 'TQ' ? Math.round(cls.price*1.3) : cls.price).toLocaleString()}</div>
            <div class="class-seats">${cls.status==='wl'?'Waitlist':cls.status==='available'?`${cls.seats} seats`:`${cls.seats} left`}</div>
            <div class="avail-tag avail-${cls.status}">${cls.status==='available'?'AVBL':cls.status==='few'?'FEW LEFT':cls.status==='wl'?'WL':'RAC'}</div>
          </div>
        `).join('')}
        <button class="book-btn" onclick="openBookingModal('${t.number}')">Book Now</button>
      </div>
    </div>
  `).join('');
}

function selectClassForBooking(el, trainNum, cls) {
  el.closest('.classes-row').querySelectorAll('.class-avail').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
}

function sortResults(by, btn) {
  document.querySelectorAll('.filter-bar .filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  let sorted = [...state.allTrains];
  if (by === 'departure') sorted.sort((a,b) => a.depart.localeCompare(b.depart));
  if (by === 'duration')  sorted.sort((a,b) => a.duration.localeCompare(b.duration));
  if (by === 'arrival')   sorted.sort((a,b) => a.arrive.localeCompare(b.arrive));
  if (by === 'price')     sorted.sort((a,b) => Math.min(...a.classes.map(c=>c.price)) - Math.min(...b.classes.map(c=>c.price)));
  renderTrainList(sorted);
}

function filterTrains(type, btn) {
  document.querySelectorAll('[onclick^="filterTrains"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  let filtered = state.allTrains;
  if (type !== 'all') {
    if (type === 'available') filtered = filtered.filter(t => t.classes.some(c => c.status === 'available'));
    else filtered = filtered.filter(t => t.type === type);
  }
  renderTrainList(filtered);
}

// ===================================================
// ===== BOOKING MODAL =====
// ===================================================
function openBookingModal(trainNum) {
  const train = TRAINS_DATA.find(t => t.number === trainNum);
  if (!train) return;
  state.currentTrain = train;
  state.currentBooking = { selectedSeats:[], paymentMethod:null, couponDiscount:0, coupon:"" };
  state.bookingStep = 1;
  document.getElementById('modal-train-title').textContent    = `${train.name} — ${train.number}`;
  document.getElementById('modal-train-subtitle').textContent = `${train.from} → ${train.to} | ${train.depart} → ${train.arrive}`;
  document.getElementById('tatkal-notice').innerHTML = state.selectedQuota === 'TQ'
    ? `<div class="alert alert-warning">⚡ <strong>Tatkal Booking:</strong> Tatkal charges applied. No refund on cancellation within 24 hrs.</div>`
    : '';
  buildPassengerForms();
  goToStep(1);
  document.getElementById('booking-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function buildPassengerForms() {
  const total = state.passengers.adult + state.passengers.child;
  let html = '';
  for (let i = 0; i < total; i++) {
    const isChild = i >= state.passengers.adult;
    html += `
      <div class="pax-form-card">
        <div class="pax-form-title">
          👤 Passenger ${i+1} ${isChild ? '<span style="font-size:11px; background:#fff3e0; color:#e65100; padding:2px 6px; border-radius:4px;">Child</span>' : ''}
        </div>
        <div class="pax-form-grid">
          <input class="form-input" placeholder="Full Name" id="pax-name-${i}" required>
          <input class="form-input" placeholder="Age" type="number" min="1" max="120" id="pax-age-${i}">
          <select class="form-input" id="pax-gender-${i}">
            <option value="">Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="T">Transgender</option>
          </select>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;">
          <select class="form-input" id="pax-berth-${i}">
            <option value="">Berth Preference</option>
            <option value="LB">Lower Berth</option>
            <option value="MB">Middle Berth</option>
            <option value="UB">Upper Berth</option>
            <option value="SL">Side Lower</option>
            <option value="SU">Side Upper</option>
            <option value="WS">Window Seat</option>
          </select>
          <select class="form-input" id="pax-id-${i}">
            <option value="">ID Proof Type</option>
            <option value="aadhaar">Aadhaar Card</option>
            <option value="pan">PAN Card</option>
            <option value="passport">Passport</option>
            <option value="voterid">Voter ID</option>
            <option value="drivinglicense">Driving License</option>
          </select>
        </div>
      </div>`;
  }
  document.getElementById('passenger-forms').innerHTML = html;
}

function buildSeatMap() {
  const coaches = ['A1','A2','B1','B2','S1','S2','S3'];
  document.getElementById('coach-selector').innerHTML = coaches.map((c,i) =>
    `<button class="coach-btn ${i===0?'active':''}" onclick="selectCoach('${c}', this)">${c}</button>`
  ).join('');
  generateSeats('A1');
}

function selectCoach(coach, btn) {
  document.querySelectorAll('.coach-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  generateSeats(coach);
}

function generateSeats(coach) {
  const bookedSeats = [3,7,12,15,19,23,27,31,35,42,47];
  const ladiesSeats = [1,2,61,62];
  let html = '';
  for (let i = 1; i <= 64; i++) {
    if (i % 9 === 0) { html += `<div class="seat aisle"></div>`; continue; }
    const isBooked   = bookedSeats.includes(i);
    const isLadies   = ladiesSeats.includes(i);
    const isSelected = state.currentBooking.selectedSeats.includes(`${coach}-${i}`);
    let cls = 'seat';
    if (isBooked)        cls += ' booked';
    else if (isSelected) cls += ' selected';
    else if (isLadies)   cls += ' ladies';
    else                 cls += ' avail';
    html += `<div class="${cls}" onclick="toggleSeat('${coach}-${i}', ${isBooked}, ${isLadies})" title="Seat ${i}">${i}</div>`;
  }
  document.getElementById('seat-grid').innerHTML = html;
  updateSeatInfo();
}

function toggleSeat(seatId, isBooked) {
  if (isBooked) { showToast('❌ This seat is already booked!'); return; }
  const idx = state.currentBooking.selectedSeats.indexOf(seatId);
  const maxSeats = state.passengers.adult + state.passengers.child;
  if (idx >= 0) {
    state.currentBooking.selectedSeats.splice(idx, 1);
  } else {
    if (state.currentBooking.selectedSeats.length >= maxSeats) { showToast(`⚠️ Max ${maxSeats} seat(s) allowed!`); return; }
    state.currentBooking.selectedSeats.push(seatId);
  }
  generateSeats(seatId.split('-')[0]);
}

function updateSeatInfo() {
  const info = document.getElementById('selected-seats-info');
  info.textContent = state.currentBooking.selectedSeats.length === 0
    ? 'No seats selected'
    : `Selected: ${state.currentBooking.selectedSeats.join(', ')} (${state.currentBooking.selectedSeats.length} seat${state.currentBooking.selectedSeats.length>1?'s':''})`;
}

function buildFareTable() {
  const train = state.currentTrain;
  const total = state.passengers.adult + state.passengers.child;
  let selectedCls = null;
  document.querySelectorAll('.class-avail.selected').forEach(el => { if (!selectedCls) selectedCls = el.querySelector('.class-code').textContent; });
  if (!selectedCls) selectedCls = train.classes[0].code;
  const classData = train.classes.find(c => c.code === selectedCls) || train.classes[0];
  const basePrice = state.selectedQuota === 'TQ' ? Math.round(classData.price * 1.3) : classData.price;
  const ticketFare       = basePrice * (state.passengers.adult + state.passengers.child * 0.5);
  const reservationCharge = 60 * total;
  const fuelSurcharge    = Math.round(ticketFare * 0.02);
  const gst              = Math.round((reservationCharge + fuelSurcharge) * 0.18);
  const convenienceFee   = 35;
  const discount         = state.currentBooking.couponDiscount;
  const totalFare        = Math.round(ticketFare + reservationCharge + fuelSurcharge + gst + convenienceFee - discount);
  document.getElementById('fare-table').innerHTML = `
    <div class="fare-row"><span>Base Fare (${selectedCls}) × ${total} pax</span><span>₹${ticketFare.toLocaleString()}</span></div>
    <div class="fare-row"><span>Reservation Charges</span><span>₹${reservationCharge}</span></div>
    <div class="fare-row"><span>Superfast/Fuel Surcharge</span><span>₹${fuelSurcharge}</span></div>
    <div class="fare-row"><span>GST on charges</span><span>₹${gst}</span></div>
    <div class="fare-row"><span>Convenience Fee</span><span>₹${convenienceFee}</span></div>
    ${discount > 0 ? `<div class="fare-row" style="color:var(--rail-green);"><span>✅ Coupon (${state.currentBooking.coupon})</span><span>−₹${discount}</span></div>` : ''}
    <div class="fare-row total"><span>Total Amount</span><span>₹${totalFare.toLocaleString()}</span></div>`;
  document.getElementById('pay-amount').textContent = totalFare.toLocaleString();
  return totalFare;
}

function goToStep(step) {
  if (step > 1 && state.bookingStep === 1) {
    if (!document.getElementById('pax-name-0')?.value) { showToast('⚠️ Please enter passenger name!'); return; }
    const phone = document.getElementById('contact-phone')?.value;
    if (!phone || phone.length !== 10) { showToast('⚠️ Enter valid 10-digit mobile number!'); return; }
  }
  state.bookingStep = step;
  [1,2,3,4].forEach(s => {
    document.getElementById(`modal-step-${s}`).classList.add('hidden');
    const el = document.getElementById(`step-${s}`);
    el.classList.remove('active','done');
    if (s < step) el.classList.add('done');
    else if (s === step) el.classList.add('active');
  });
  document.getElementById(`modal-step-${step}`).classList.remove('hidden');
  if (step === 2) buildSeatMap();
  if (step === 3) buildFareTable();
}

function selectPayment(method, el) {
  document.querySelectorAll('.pay-method').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  state.currentBooking.paymentMethod = method;
  document.getElementById('upi-input').classList.toggle('hidden', method !== 'upi');
}

function applyCoupon() {
  const code = document.getElementById('coupon-input').value.trim().toUpperCase();
  const validCodes = { 'RAIL10':0.10, 'TATKAL20':200, 'FIRSTBOOK':100, 'UPIBONUS':50, 'WEEKEND25':0.25 };
  if (!code) { showToast('⚠️ Enter a coupon code!'); return; }
  if (validCodes[code] !== undefined) {
    const baseAmount = parseInt(document.getElementById('pay-amount').textContent.replace(/,/g,''));
    let disc = validCodes[code];
    if (disc < 1) disc = Math.round(baseAmount * disc);
    disc = Math.min(disc, 500);
    state.currentBooking.couponDiscount = disc;
    state.currentBooking.coupon = code;
    document.getElementById('coupon-result').innerHTML = `<span style="color:var(--rail-green); font-weight:700;">✅ Coupon applied! You save ₹${disc}</span>`;
    buildFareTable();
  } else {
    document.getElementById('coupon-result').innerHTML = `<span style="color:var(--accent); font-weight:700;">❌ Invalid coupon code</span>`;
  }
}

function confirmBooking() {
  if (!state.currentBooking.paymentMethod) { showToast('⚠️ Please select a payment method!'); return; }
  showToast('💳 Processing payment...');
  setTimeout(() => {
    const pnr        = Math.floor(Math.random() * 9000000000) + 1000000000;
    const train      = state.currentTrain;
    const totalFare  = parseInt(document.getElementById('pay-amount').textContent.replace(/,/g,''));
    const paxName    = document.getElementById('pax-name-0')?.value || 'Passenger';
    myBookings.unshift({
      pnr: pnr.toString(), train: train.number, trainName: train.name,
      from: train.from, to: train.to,
      date: document.getElementById('journey-date').value,
      depart: train.depart, arrive: train.arrive,
      class: train.classes[0].code,
      passengers: state.passengers.adult + state.passengers.child,
      fare: totalFare, status: 'upcoming',
      bookingDate: new Date().toLocaleDateString('en-IN')
    });
    document.getElementById('ticket-display').innerHTML = `
      <div class="ticket-label">PNR Number</div>
      <div class="ticket-pnr">${pnr}</div>
      <div class="ticket-grid">
        <div class="ticket-field"><div class="ticket-label">Train</div><div class="ticket-val">${train.name}</div></div>
        <div class="ticket-field"><div class="ticket-label">Route</div><div class="ticket-val">${train.from.split(' ')[0]} → ${train.to.split(' ')[0]}</div></div>
        <div class="ticket-field"><div class="ticket-label">Journey Date</div><div class="ticket-val">${formatDate(document.getElementById('journey-date').value)}</div></div>
        <div class="ticket-field"><div class="ticket-label">Departure</div><div class="ticket-val">${train.depart}</div></div>
        <div class="ticket-field"><div class="ticket-label">Class</div><div class="ticket-val">${train.classes[0].code}</div></div>
        <div class="ticket-field"><div class="ticket-label">Passengers</div><div class="ticket-val">${state.passengers.adult + state.passengers.child}</div></div>
        <div class="ticket-field"><div class="ticket-label">Passenger</div><div class="ticket-val">${paxName}</div></div>
        <div class="ticket-field"><div class="ticket-label">Seats</div><div class="ticket-val">${state.currentBooking.selectedSeats.length > 0 ? state.currentBooking.selectedSeats.join(', ') : 'Auto-assigned'}</div></div>
        <div class="ticket-field"><div class="ticket-label">Amount Paid</div><div class="ticket-val" style="color:var(--accent2);">₹${totalFare.toLocaleString()}</div></div>
      </div>
      <div style="margin-top:16px; display:flex; justify-content:space-between; align-items:center;">
        <span class="status-badge status-confirmed">✓ CONFIRMED</span>
        <span style="opacity:0.5; font-size:12px;">via ${state.currentBooking.paymentMethod?.toUpperCase()}</span>
      </div>`;
    goToStep(4);
    renderBookings();
    showToast('🎉 Booking Confirmed! PNR: ' + pnr);
  }, 1500);
}

function downloadTicket() {
  showToast('⬇️ Downloading ticket PDF...');
  setTimeout(() => showToast('✅ Ticket saved!'), 1500);
}

function closeModal() {
  document.getElementById('booking-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('booking-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ===================================================
// ===== PNR STATUS =====
// ===================================================
function checkPNR() {
  const pnr = document.getElementById('pnr-input').value.trim();
  if (pnr.length !== 10) { showToast('⚠️ Enter valid 10-digit PNR!'); return; }
  showToast('🔍 Fetching PNR status...');
  setTimeout(() => {
    const data     = PNR_DATA[pnr];
    const resultEl = document.getElementById('pnr-result');
    if (!data) {
      resultEl.innerHTML = `<div class="alert alert-error">❌ No record found for PNR: ${pnr}</div>`;
      resultEl.classList.remove('hidden');
      return;
    }
    const statusClass = data.status === 'confirmed' ? 'status-confirmed' : 'status-wl';
    const statusText  = data.status === 'confirmed' ? '✓ CONFIRMED' : 'WAITLISTED';
    resultEl.innerHTML = `
      <div class="ticket-card">
        <div class="ticket-label">PNR Number</div>
        <div class="ticket-pnr">${data.pnr}</div>
        <div class="ticket-grid">
          <div class="ticket-field"><div class="ticket-label">Train</div><div class="ticket-val">${data.trainName} (${data.train})</div></div>
          <div class="ticket-field"><div class="ticket-label">Route</div><div class="ticket-val">${data.from.split(' ')[0]} → ${data.to.split(' ')[0]}</div></div>
          <div class="ticket-field"><div class="ticket-label">Date</div><div class="ticket-val">${data.date}</div></div>
          <div class="ticket-field"><div class="ticket-label">Class</div><div class="ticket-val">${data.class}</div></div>
          <div class="ticket-field"><div class="ticket-label">Departure</div><div class="ticket-val">${data.depart}</div></div>
          <div class="ticket-field"><div class="ticket-label">Total Fare</div><div class="ticket-val" style="color:var(--accent2)">₹${data.fare.toLocaleString()}</div></div>
        </div>
        <div style="margin-top:16px;"><span class="status-badge ${statusClass}">${statusText}</span></div>
      </div>
      <div style="margin-top:16px; background:#fff; border-radius:12px; border:1.5px solid var(--border); overflow:hidden;">
        <div style="background:var(--bg); padding:12px 16px; font-weight:700; font-size:13px; color:var(--muted);">PASSENGER DETAILS</div>
        ${data.passengers.map(p => `
          <div style="padding:12px 16px; border-bottom:1px solid var(--bg); display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
            <div>
              <div style="font-weight:700;">${p.name}</div>
              <div style="font-size:12px; color:var(--muted);">Age: ${p.age} | ${p.gender==='M'?'Male':'Female'}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-weight:700; font-size:13px;">Seat: ${p.seat}</div>
              <span class="status-badge ${p.status==='CNF'?'status-confirmed':'status-wl'}" style="font-size:11px;">${p.status}</span>
            </div>
          </div>`).join('')}
      </div>
      <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap;">
        <button class="btn-primary" onclick="showToast('📧 Details sent to registered email!')">📧 Email Details</button>
        <button class="btn-secondary" onclick="showToast('📱 SMS sent to registered mobile!')">📱 Send SMS</button>
        ${data.status === 'confirmed' ? `<button class="btn-danger" onclick="showToast('❓ Cancellation requires confirmation.')">Cancel Ticket</button>` : ''}
      </div>`;
    resultEl.classList.remove('hidden');
    showToast('✅ PNR status loaded!');
  }, 800);
}

// ===================================================
// ===== LIVE TRAINS =====
// ===================================================
function renderLiveTrains() {
  document.getElementById('live-trains-list').innerHTML = LIVE_TRAINS.map(t => `
    <div class="live-train-card" data-name="${t.name.toLowerCase()}" data-num="${t.number}" data-status="${t.status}">
      <div>
        <div class="train-name-row" style="margin-bottom:4px;">
          <span class="train-number">${t.number}</span>
          <span class="train-name">${t.name}</span>
          ${t.status === 'cancelled' ? '<span class="status-badge status-cancelled">Cancelled</span>' : ''}
        </div>
        <div style="font-size:12px; color:var(--muted);">${t.from} → ${t.to}</div>
      </div>
      <div class="train-progress">
        <div style="display:flex; justify-content:space-between; font-size:12px;">
          <span style="color:var(--muted);">Currently at: <strong>${t.currentStation}</strong></span>
          <span style="font-weight:700;">${t.status === 'cancelled' ? '—' : t.progress + '%'}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${t.status==='cancelled'?0:t.progress}%"></div></div>
        <div style="font-size:11px; color:var(--muted);">Next: ${t.nextStation}</div>
      </div>
      <div style="text-align:right;">
        <span class="delay-badge ${t.delay===0 && t.status!=='cancelled' ? 'delay-ontime' : 'delay-late'}">
          ${t.status==='cancelled' ? '❌ Cancelled' : t.delay===0 ? '✓ On Time' : `+${t.delay} min delay`}
        </span>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">🚀 ${t.speed} km/h</div>
      </div>
    </div>`).join('');
}

function filterLiveTrains() {
  const search = document.getElementById('live-search').value.toLowerCase();
  const filter = document.getElementById('live-filter').value;
  document.querySelectorAll('.live-train-card').forEach(card => {
    const matchSearch = !search || card.dataset.name.includes(search) || card.dataset.num.includes(search);
    const matchFilter = filter === 'all' || card.dataset.status === filter;
    card.classList.toggle('hidden', !(matchSearch && matchFilter));
  });
}

// ===================================================
// ===== MY BOOKINGS =====
// ===================================================
function renderBookings() {
  const filter   = state.filterBookings || 'all';
  const filtered = filter === 'all' ? myBookings : myBookings.filter(b => b.status === filter);
  const list     = document.getElementById('bookings-list');
  if (filtered.length === 0) { list.innerHTML = `<div class="alert alert-info">No bookings found.</div>`; return; }
  list.innerHTML = filtered.map(b => `
    <div class="booking-card">
      <div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span class="train-number">${b.train}</span>
          <span style="font-weight:700; font-size:15px;">${b.trainName}</span>
        </div>
        <div style="color:var(--muted); font-size:12px;">${b.from} → ${b.to}</div>
      </div>
      <div>
        <div style="font-weight:700;">${typeof b.date === 'string' && b.date.includes('-') ? formatDate(b.date) : b.date}</div>
        <div style="font-size:12px; color:var(--muted);">${b.depart} → ${b.arrive}</div>
        <div style="font-size:12px; color:var(--muted);">${b.class} · ${b.passengers} pax</div>
      </div>
      <div>
        <div style="font-weight:800; font-size:18px; color:var(--accent);">₹${b.fare.toLocaleString()}</div>
        <div style="font-size:11px; color:var(--muted);">PNR: ${b.pnr}</div>
      </div>
      <div>
        <span class="status-badge ${b.status==='upcoming'?'status-confirmed':b.status==='cancelled'?'status-cancelled':'status-rac'}">
          ${b.status==='upcoming' ? '✓ Upcoming' : b.status==='completed' ? '✓ Completed' : '✗ Cancelled'}
        </span>
      </div>
      <div style="display:flex; gap:8px; flex-direction:column;">
        <button class="btn-secondary" style="padding:6px 14px; font-size:12px;" onclick="showToast('📄 Ticket downloaded!')">⬇️ Ticket</button>
        ${b.status === 'upcoming' ? `<button class="btn-danger" onclick="cancelBooking('${b.pnr}')">Cancel</button>` : ''}
      </div>
    </div>`).join('');
}

function filterBookings(filter, btn) {
  document.querySelectorAll('[onclick^="filterBookings"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.filterBookings = filter;
  renderBookings();
}

function cancelBooking(pnr) {
  const b = myBookings.find(x => x.pnr === pnr);
  if (!b) return;
  if (confirm(`Cancel booking for ${b.trainName}?\nRefund: ₹${Math.round(b.fare * 0.75)} (75% refund)`)) {
    b.status = 'cancelled';
    renderBookings();
    showToast('✅ Booking cancelled! Refund initiated.');
  }
}

// ===================================================
// ===== OFFERS =====
// ===================================================
function renderOffers() {
  document.getElementById('offers-grid').innerHTML = OFFERS.map(o => `
    <div class="offer-card" onclick="copyCode('${o.code}')">
      <div class="offer-bg" style="background:${o.color};"></div>
      <span class="offer-badge" style="background:${o.color}; color:${o.accent};">${o.badge}</span>
      <div class="offer-title">${o.title}</div>
      <div class="offer-desc">${o.desc}</div>
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <div class="offer-code">${o.code}</div>
        <div style="font-size:22px; font-weight:900; color:${o.accent};">${o.discount}</div>
      </div>
      <div style="font-size:11px; color:var(--muted); margin-top:8px;">Click to copy code</div>
    </div>`).join('');
}

function copyCode(code) {
  navigator.clipboard?.writeText(code).catch(() => {});
  showToast(`📋 Code "${code}" copied!`);
}

// ===================================================
// ===== TOAST =====
// ===================================================
let toastTimer;
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}