const wrapElements = (elems, wrapType, wrapClass) => {
    elems.forEach(char => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
    });
}

// Initialize Splitting js
Splitting();

const timelines = [
    // effect 1
    (chars, line) => {
        return gsap.timeline({
            defaults: {
                duration: 0.7,
                ease: 'expo',
            },
            paused: true
        })
        .addLabel('start', 0)
        .fromTo(line, {
            transformOrigin: '0% 50%',
            filter: 'brightness(100%) blur(30px)',
        }, {
            duration: 0.2,
            ease: 'power3.in',
            scaleX: 1,
            filter: 'brightness(600%) blur(6px)',
        }, 'start')
        .to(line, {
            duration: 0.5,
            startAt: {transformOrigin: '100% 50%'},
            scaleX: 0,
            scaleY: 0.1,
            filter: 'brightness(100%) blur(0px)',
        }, 'start+=0.2')
        .to(chars, {
            stagger: 0.03,
            xPercent: () => gsap.utils.random(-150,150),
            yPercent: () => gsap.utils.random(-150,150),
            rotation: () => gsap.utils.random(-25,25),
            scale: () => gsap.utils.random(1,1.5),
        }, 'start+=0.1');
    },
    // effect 2
    (chars, line) => {
        return gsap.timeline({
            defaults: {
                duration: 0.7,
                ease: 'power3.inOut'
            },
            paused: true
        })
        .addLabel('start', 0)
        .to(line, {
            scaleX: 1
        }, 'start')
        .to(chars, {
            duration: 0.3,
            ease: 'back',
            stagger: {
                amount: 0.4,
                from: 0
            },
            xPercent: () => gsap.utils.random(-10,10),
            yPercent: () => gsap.utils.random(-60,-30),
            rotation: () => gsap.utils.random(-15,15)
        }, 'start');
    },
    // effect 3
    (chars, line) => {
        return gsap.timeline({
            defaults: {
                duration: 0.7,
                ease: 'expo'
            },
            paused: true
        })
        .addLabel('start', 0)
        .fromTo(line, {
            transformOrigin: '0% 50%'
        }, {
            duration: 0.2,
            ease: 'power3.in',
            scaleX: 1
        }, 'start')
        .to(line, {
            duration: 0.5,
            startAt: {transformOrigin: '100% 50%'},
            scaleX: 0
        }, 'start+=0.2')
        .to(chars, {
            stagger: {
                each: 0.025,
                from: '0'
            },
            x: (_, target) => {
                const left = target.getBoundingClientRect()['left'];
                const windowWidth = window.innerWidth;
                return (windowWidth-left) - (windowWidth-left)*0.5
            },
            yPercent: () => gsap.utils.random(-100,100),
            rotation: () => gsap.utils.random(-180,180),
        }, 'start');
    },
    // effect 4
    (chars, line) => {
        return gsap.timeline({
            defaults: {
                duration: 0.9,
                ease: 'expo'
            },
            paused: true
        })
        .addLabel('start', 0)
        .fromTo(line, {
            transformOrigin: '0% 50%'
        }, {
            duration: 0.2,
            ease: 'power3.in',
            scaleX: 1
        }, 'start')
        .to(line, {
            duration: 0.3,
            startAt: {transformOrigin: '100% 50%'},
            scaleX: 0
        }, 'start+=0.2')
        .fromTo(chars, {
            transformOrigin: '50% 300%'
        }, {
            stagger: {
                each: 0.025,
                from: 'start'
            },
            //yPercent: () => gsap.utils.random(-150,150),
            rotation: () => gsap.utils.random(40,90),
        }, 'start');
    },
    // effect 5
    (chars, line) => {
        return gsap.timeline({
            onStart: () => gsap.set(chars[0].parentNode, {perspective: 300}),
            defaults: {
                duration: 1,
                ease: 'power4'
            },
            paused: true
        })
        .addLabel('start', 0)
        .fromTo(line, {
            transformOrigin: '0% 50%'
        }, {
            duration: 0.1,
            ease: 'power1.in',
            scaleX: 1
        }, 'start')
        .to(line, {
            duration: 0.5,
            startAt: {transformOrigin: '100% 50%'},
            scaleX: 0,
            scaleY: 3.5
        }, 'start+=0.1')
        .to(chars, {
            stagger: 0.015,
            rotationX: () => gsap.utils.random(-200,200),
            xPercent: () => gsap.utils.random(-70,70),
            yPercent: () => gsap.utils.random(-200,200),
            z: () => gsap.utils.random(-800,-100),
        }, 'start');
    },
    // effect 6
    (chars, line) => {
        return gsap.timeline({
            onStart: () => gsap.set(chars[0].parentNode, {perspective: 1000}),
            defaults: {
                duration: 1,
                ease: 'power3'
            },
            paused: true
        })
        .addLabel('start', 0)
        .fromTo(line, {
            transformOrigin: '0% 50%'
        }, {
            duration: 0.2,
            ease: 'power1.in',
            scaleX: 1
        }, 'start')
        .to(line, {
            startAt: {transformOrigin: '100% 50%'},
            duration: 0.5,
            scaleX: 0
        }, 'start+=0.3')
        .to(chars, {
            duration: 0.8,
            stagger: 0.035,
            rotationY: 360,
            filter: 'brightness(400%) hue-rotate(90deg)'
        }, 'start');
    },
    // effect 7
    (chars, line) => {
        return gsap.timeline({
            defaults: {
                duration: 0.7,
                ease: 'power3.inOut'
            },
            paused: true
        })
        .addLabel('start', 0)
        .fromTo(line, {
            skewX: -9,
            skewY: -2
        }, {
            scaleX: 1
        }, 'start')
        .fromTo(chars, {
            transformOrigin: '50% 100%'
        }, {
            duration: 0.2,
            ease: 'power1.in',
            stagger: {
                amount: 0.4
            },
            scaleX: 1.4,
            scaleY: 0.05
        }, 'start')
        .to(chars, {
            duration: 0.3,
            ease: 'back',
            stagger: {
                amount: 0.4
            },
            scaleX: 1,
            scaleY: 1
        }, 'start+=0.2');
    },
    // effect 8
    (chars, line, charWraps) => {
        return gsap.timeline({
            defaults: {
                duration: 0.4,
                ease: 'back.inOut',
            },
            paused: true
        })
        .addLabel('start', 0)
        .fromTo(line, {
            transformOrigin: '0% 50%'
        }, {
            duration: 0.2,
            ease: 'power2.in',
            scaleX: 1
        }, 'start')
        .to(line, {
            duration: 0.5,
            ease: 'power2',
            startAt: {transformOrigin: '100% 50%'},
            scaleX: 0,
            scaleY: 0.2
        }, 'start+=0.2')
        
        .to(charWraps, {
            stagger: 0.025,
            yPercent: () => gsap.utils.random(-120,-50),
            rotation: () => gsap.utils.random(-20,20),
        }, 'start')
        .to(chars, {
            stagger: 0.025,
            yPercent: -100
        }, 'start+=0.1')

        .to(charWraps, {
            startAt: {
                yPercent: () => gsap.utils.random(50,120),
                rotation: () => gsap.utils.random(-20,20),
            },
            stagger: 0.025,
            yPercent: 0,
            rotation: 0,
        }, 'start+=0.5')
        .to(chars, {
            stagger: 0.025,
            startAt: {yPercent: 100},
            yPercent: 0
        }, 'start+=0.4')
    },
];

const lineTypeElems = [...document.querySelectorAll('.linetype')];
lineTypeElems.forEach((lineTypeEl, position) => {
    const chars = lineTypeEl.querySelectorAll('.linetype__text .char');
    const line = lineTypeEl.querySelector('.linetype__line');
    
    let charWraps = null;
    if ( 'charwrap' in lineTypeEl.dataset ) {
        wrapElements(chars, 'span', 'char-wrap');
        charWraps = [...chars].map(char => char.parentNode);
    }

    lineTypeEl.addEventListener('mouseenter', () => {
        if ( lineTypeEl.timeline ) {
            lineTypeEl.timeline.progress(0).kill();
        }
        lineTypeEl.timeline = timelines[position](chars, line, charWraps);
        lineTypeEl.timeline.play();
    });
    lineTypeEl.addEventListener('mouseleave', () => {
        if ( lineTypeEl.timeline ) {
            lineTypeEl.timeline.reverse();
        }
    });
});


