document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Fade-Up Animations
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it has become visible
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // 2. Navbar Background Blur on Scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 5%';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.padding = '2rem 5%';
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Optional: Smooth Scroll Offset for Navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

// --- Dot Matrix Clock Logic ---
const DOT_MATRIX = {
    '0': [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    '1': [0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
    '2': [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    '3': [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    '4': [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    '5': [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    '6': [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    '7': [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    '8': [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    '9': [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ':': [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    ' ': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

document.addEventListener('DOMContentLoaded', () => {
    const clockContainer = document.getElementById('dot-matrix-clock');
    if (!clockContainer) return;

    // Initialize DOM elements for HH:MM:SS
    // Total 8 characters
    const clockDigits = Array(8).fill(null).map(() => {
        const digitEl = document.createElement('div');
        digitEl.className = 'digit matrix';
        for (let i = 0; i < 15; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            digitEl.appendChild(dot);
        }
        clockContainer.appendChild(digitEl);
        return digitEl;
    });

    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');

        // Blink colon every second
        const colon = now.getSeconds() % 2 === 0 ? ':' : ' ';
        const timeString = `${h}${colon}${m}${colon}${s}`;

        for (let i = 0; i < timeString.length; i++) {
            const char = timeString[i];
            const pattern = DOT_MATRIX[char];
            const dots = clockDigits[i].children;

            for (let j = 0; j < 15; j++) {
                if (pattern && pattern[j]) {
                    dots[j].classList.add('on');
                } else {
                    dots[j].classList.remove('on');
                }
            }
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
});

// --- Decrypted Text Animation ---
class DecryptedText {
    constructor(element) {
        this.element = element;
        this.originalText = element.dataset.text || element.innerText;
        this.characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|:<>?~";
        this.element.dataset.text = this.originalText; // Ensure data-text is set
        this.interval = null;
        this.bindEvents();
        setTimeout(() => this.animate(), 500); // Initial delay
    }

    animate() {
        let iteration = 0;
        clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.element.innerText = this.originalText
                .split("")
                .map((char, index) => {
                    if (char === " ") return " ";
                    if (index < iteration) {
                        return this.originalText[index];
                    }
                    return this.characters[Math.floor(Math.random() * this.characters.length)];
                })
                .join("");

            if (iteration >= this.originalText.length) {
                clearInterval(this.interval);
                this.element.innerText = this.originalText;
            }

            iteration += 1 / 2; // Control speed
        }, 30);
    }

    bindEvents() {
        this.element.addEventListener("mouseover", () => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.decrypted-text').forEach(el => new DecryptedText(el));
});

// --- Motion Highlight Nav ---
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.motion-link');
    const highlight = document.getElementById('nav-highlight');
    const nav = document.querySelector('.motion-nav');
    if (!navItems.length || !highlight || !nav) return;

    let activeItem = document.querySelector('.motion-link.active');

    // Function to reposition the highlight bubble
    function moveHighlight(item) {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        highlight.style.width = `${rect.width}px`;
        highlight.style.transform = `translateX(${rect.left - navRect.left}px)`;
    }

    // Set initial position if there's an active item
    if (activeItem) {
        highlight.classList.add('has-active');
        // Small timeout to allow fonts/layout to settle before initial calculation
        setTimeout(() => moveHighlight(activeItem), 100);
    }

    navItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            moveHighlight(e.target);
        });

        item.addEventListener('click', (e) => {
            navItems.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
            activeItem = e.target;
            highlight.classList.add('has-active');
        });
    });

    // When mouse leaves the entire nav, snap back to active item
    nav.addEventListener('mouseleave', () => {
        if (activeItem) {
            moveHighlight(activeItem);
        } else {
            highlight.classList.remove('has-active');
        }
    });

    // Handle window resize offsets
    window.addEventListener('resize', () => {
        if (activeItem) moveHighlight(activeItem);
    });
});

// --- Sliding Text Animation ---
document.addEventListener('DOMContentLoaded', () => {
    const slidingTexts = document.querySelectorAll('.sliding-text');

    slidingTexts.forEach(container => {
        const textArea = container.innerText.trim();
        container.innerHTML = ''; // Clear existing text

        // Add each character as a sliding block
        textArea.split('').forEach((char, index) => {
            const charWrapper = document.createElement('span');
            charWrapper.className = 'sliding-char';

            // Stagger the animation delay by letter
            charWrapper.style.transitionDelay = `${index * 0.02}s`;

            // Preserve spaces
            if (char === ' ') {
                charWrapper.style.width = '0.4em';
            }

            // Top letter (Original)
            const topChar = document.createElement('span');
            topChar.className = 'sliding-char-inner';
            topChar.innerHTML = char === ' ' ? '&nbsp;' : char;

            // Bottom letter (Clone)
            const bottomChar = document.createElement('span');
            bottomChar.className = 'sliding-char-inner sliding-char-clone';
            bottomChar.innerHTML = char === ' ' ? '&nbsp;' : char;

            charWrapper.appendChild(topChar);
            charWrapper.appendChild(bottomChar);
            container.appendChild(charWrapper);
        });
    });
});

// --- Scroll Velocity Marquee ---
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('velocity-marquee');
    if (!wrapper) return;

    const track = wrapper.querySelector('.scroll-velocity-track');

    // Duplicate the track content enough times to fill the screen + buffer for seamless infinite scroll
    const clone1 = track.cloneNode(true);
    const clone2 = track.cloneNode(true);
    const clone3 = track.cloneNode(true);

    // Combine all tracks into one continuous long track
    track.classList.remove('scroll-velocity-track'); // Convert original track to a container
    track.style.display = 'flex';

    const movingTrack = document.createElement('div');
    movingTrack.className = 'scroll-velocity-track';
    movingTrack.style.display = 'flex';

    // Append children to moving track
    while (track.firstChild) movingTrack.appendChild(track.firstChild);
    while (clone1.firstChild) movingTrack.appendChild(clone1.firstChild);
    while (clone2.firstChild) movingTrack.appendChild(clone2.firstChild);
    while (clone3.firstChild) movingTrack.appendChild(clone3.firstChild);

    track.appendChild(movingTrack);

    // Velocity Physics Variables
    let currentPosition = 0;
    let targetVelocity = 1; // Base speed
    let currentVelocity = 1;
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    function updateMarquee(time) {
        const deltaTime = (time - lastTime) || 16;
        lastTime = time;

        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        // Add scroll delta to velocity (boost speed based on scroll speed)
        // Adjust the multiplier (0.5) to increase or decrease scroll sensitivity
        const scrollVelocityBoost = scrollDelta * 0.5;

        // Target velocity naturally decays back to base speed (1)
        targetVelocity = 1 + scrollVelocityBoost;

        // Smoothly interpolate current velocity towards target velocity
        currentVelocity += (targetVelocity - currentVelocity) * 0.1;

        // Update position based on current velocity and time
        // Using a small multiplier so base speed isn't too fast
        currentPosition -= currentVelocity * (deltaTime * 0.05);

        // Reset position for seamless infinite scrolling
        // We reset when we've moved roughly one full set of items left
        // Assuming 10 items per set * roughly 150px per item
        // A more dynamic approach checks the width of an individual item
        const itemWidth = movingTrack.children[0].getBoundingClientRect().width;
        const singleSetWidth = itemWidth * 10 + (1.5 * 16 * 10); // 1.5rem gap

        if (currentPosition <= -singleSetWidth) {
            currentPosition += singleSetWidth;
        } else if (currentPosition > 0) {
            currentPosition -= singleSetWidth;
        }

        movingTrack.style.transform = `translate3d(${currentPosition}px, 0, 0)`;

        requestAnimationFrame(updateMarquee);
    }

    requestAnimationFrame(updateMarquee);
});

// --- Starfield Background Animation ---
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Configuration
    const numStars = 400; // Adjust density
    const maxDepth = 1500;
    const baseSpeed = 0.5; // Natural flying speed

    let stars = [];
    let width, height;

    // Smooth mouse controls
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let windowHalfX = 0;
    let windowHalfY = 0;

    function init() {
        resize();
        window.addEventListener('resize', resize);

        // Track mouse to shift perspective slightly
        document.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to center [-1 to 1]
            targetMouseX = (e.clientX - windowHalfX) * 0.5;
            targetMouseY = (e.clientY - windowHalfY) * 0.5;
        });

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        animate();
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        windowHalfX = width / 2;
        windowHalfY = height / 2;
        canvas.width = width;
        canvas.height = height;
    }

    class Star {
        constructor() {
            this.reset();
            // Stagger depth on load so they don't all start far away
            this.z = Math.random() * maxDepth;
        }

        reset() {
            // Spread stars randomly across a wide area relative to screen
            this.x = (Math.random() - 0.5) * width * 2;
            this.y = (Math.random() - 0.5) * height * 2;
            this.z = maxDepth;
            this.pz = this.z;
        }

        update(speedOffset) {
            this.pz = this.z;
            this.z -= baseSpeed + speedOffset;

            // If star passes the camera, reset to back
            if (this.z < 1) {
                this.reset();
                this.pz = this.z; // prevents streaking across screen on reset
            }
        }

        draw(offsetX, offsetY) {
            // Project 3D coordinates to 2D screen
            const focalLength = 300;

            // Current pos
            const scale = focalLength / this.z;
            const px = (this.x - offsetX) * scale + windowHalfX;
            const py = (this.y - offsetY) * scale + windowHalfY;

            // Previous pos (for motion blur line)
            const pScale = focalLength / this.pz;
            // The previous position needs the same offset to draw continuous lines
            const ppx = (this.x - offsetX) * pScale + windowHalfX;
            const ppy = (this.y - offsetY) * pScale + windowHalfY;

            // Opacity fades in as they get closer, fades out at very edge
            const opacity = (1 - (this.z / maxDepth)) * 0.8;

            // Calculate thickness based on depth
            const thickness = Math.max(0.1, 2 * scale);

            ctx.beginPath();
            ctx.moveTo(ppx, ppy);
            ctx.lineTo(px, py);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = thickness;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
    }

    // Dynamic scroll boost for hyperspare effect
    let scrollSpeed = 0;
    let targetScrollSpeed = 0;
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const delta = Math.abs(currentScrollY - lastScrollY);
        targetScrollSpeed = Math.min(delta * 0.2, 20); // Cap max boost
        lastScrollY = currentScrollY;
    });

    function animate() {
        // Clear frame with slightly transparent black to create subtle trailing
        ctx.fillStyle = 'rgba(10, 10, 10, 0.8)'; // Matches your var(--bg-color)
        ctx.fillRect(0, 0, width, height);

        // Smoothly interpolate mouse and scroll values
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // Decay scroll speed hack to base
        scrollSpeed += (targetScrollSpeed - scrollSpeed) * 0.1;
        targetScrollSpeed *= 0.9; // Friction

        for (let star of stars) {
            star.update(scrollSpeed);
            star.draw(mouseX, mouseY);
        }

        requestAnimationFrame(animate);
    }

    init();
});

// --- PRISM Blog Modal ---
window.openBlogModal = function () {
    const modal = document.getElementById('blog-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

window.closeBlogModal = function () {
    const modal = document.getElementById('blog-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    }
}

// Close modal when clicking outside the content area
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('blog-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBlogModal();
            }
        });
    }
});
