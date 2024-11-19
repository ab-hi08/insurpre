document.querySelectorAll('.bookmark').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
  
  function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  function navigateToCalculator() {
    document.querySelector('.background').classList.add('hidden');
    document.querySelector('#calculator-page').classList.remove('hidden');
  }
  
  function navigateBack() {
    document.querySelector('.background').classList.remove('hidden');
    document.querySelector('#calculator-page').classList.add('hidden');
  }
  
  function calculateInsurance() {
    const amount = parseFloat(document.getElementById('amount').value);
    const insuranceType = document.getElementById('insurance-type').value;
  
    let rate;
    switch (insuranceType) {
      case 'health':
        rate = 0.1; // 10%
        break;
      case 'auto':
        rate = 0.08; // 8%
        break;
      case 'home':
        rate = 0.05; // 5%
        break;
      default:
        rate = 0;
    }
  
    if (amount > 0) {
      const estimated = amount * rate;
      document.getElementById('result').textContent = `Estimated Insurance Amount: ₹${estimated.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
      })}`;
    } else {
      document.getElementById('result').textContent = 'Please enter a valid amount.';
    }
  }
  