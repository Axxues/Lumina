//------------------State Management------------------
const sliderTrack = document.getElementById('sliderTrack');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

function switchTab(tab) {
    sliderTrack.style.transform = tab === 'register' ? 'translateX(-50%)' : 'translateX(0%)';
    setTimeout(resetForms, 500);
}

function resetForms() {
    [loginForm, registerForm].forEach(form => {
        form.reset();
        form.querySelectorAll('.border-red-500, .border-green-500').forEach(el => el.classList.remove('border-red-500', 'border-green-500'));
        form.querySelectorAll('.validation-icon').forEach(icon => icon.classList.add('opacity-0'));
    });
    document.getElementById('strengthBar').style.width = '0%';
}

//------------------Password------------------
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    //Icon change
    icon.className = type === 'password' 
        ? 'bi bi-eye-slash text-gray-500 cursor-pointer hover:text-brand-600 hover:scale-110 transition-all z-20' 
        : 'bi bi-eye text-brand-600 cursor-pointer hover:text-brand-700 hover:scale-110 transition-all z-20';
}

//------------------Validation------------------
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(input) {
    const val = input.value.trim();
    const parent = input.parentElement;
    const validIcon = parent.querySelector('.validation-icon');
    let isValid = false;

    if (input.type === 'email') isValid = emailRegex.test(val);
    else if (input.id === 'regPass') isValid = checkStrength(val) >= 3;
    else isValid = val.length > 0;

    if(val.length === 0) {
        input.classList.remove('border-red-500', 'border-green-500');
        if(validIcon) validIcon.classList.add('opacity-0');
        return false;
    }

    if(isValid) {
        input.classList.remove('border-red-500');
        input.classList.add('border-green-500');
        if(validIcon) {
            validIcon.classList.remove('opacity-0', 'text-red-500', 'bi-exclamation-circle-fill');
            validIcon.classList.add('text-green-500', 'bi-check-circle-fill');
        }
    } else {
        input.classList.remove('border-green-500');
        input.classList.add('border-red-500');
        if(validIcon) {
            validIcon.classList.remove('opacity-0', 'text-green-500', 'bi-check-circle-fill');
            validIcon.classList.add('text-red-500', 'bi-exclamation-circle-fill');
        }
    }
    return isValid;
}

function checkStrength(pass) {
    let score = 0;
    if (pass.length > 5) score++;
    if (pass.length > 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    
    const bar = document.getElementById('strengthBar');
    const width = (score / 4) * 100;
    bar.style.width = width + '%';
    bar.className = score <= 1 ? 'h-full bg-red-400 transition-all duration-300' :
                    score <= 3 ? 'h-full bg-yellow-400 transition-all duration-300' :
                                'h-full bg-green-500 transition-all duration-300';
    return score;
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        validateField(input);
        if(input.id === 'regPass') checkStrength(input.value);
    });
});

//------------------Submit Logic------------------
function handleSubmit(e, form) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    let allValid = true;

    inputs.forEach(input => {
        if(!validateField(input)) {
            allValid = false;
            input.parentElement.classList.add('animate-shake');
            setTimeout(() => input.parentElement.classList.remove('animate-shake'), 400);
        }
    });

    if(allValid) {
        const btn = form.querySelector('.submit-btn');
        const btnText = btn.querySelector('.btn-text');
        const spinner = btn.querySelector('.loading-spinner');
        
        //Loading State Animation
        btnText.classList.add('opacity-0');
        spinner.classList.remove('opacity-0');
        btn.style.cursor = 'wait';
        btn.classList.add('scale-[0.98]', 'brightness-110');
        
        setTimeout(() => {
            alert('Authentication Successful!');
            btnText.classList.remove('opacity-0');
            spinner.classList.add('opacity-0');
            btn.style.cursor = '';
            btn.classList.remove('scale-[0.98]', 'brightness-110');
            resetForms();
        }, 1500);
    }
}

loginForm.addEventListener('submit', (e) => handleSubmit(e, loginForm));
registerForm.addEventListener('submit', (e) => handleSubmit(e, registerForm));