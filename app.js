document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const service=document.getElementById('service').value;
  const date=document.getElementById('date').value || 'अभी तय नहीं';
  const message=document.getElementById('message').value.trim();
  const text=`SK Photography Booking%0Aनाम: ${encodeURIComponent(name)}%0Aमोबाइल: ${encodeURIComponent(phone)}%0Aसेवा: ${encodeURIComponent(service)}%0Aतारीख: ${encodeURIComponent(date)}%0Aजानकारी: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/917225049168?text=${text}`,'_blank');
});
if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
