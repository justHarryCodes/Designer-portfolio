window.addEventListener('scroll', function() {
            // Get the current scroll position
            const scrolled = window.pageYOffset;
            
            // Select the big text in the background
            const parallaxText = document.getElementById('parallax-text');
            
            // Move the text down at half the speed of the scroll (0.5)
            // The negative percentages keep it centered horizontally and vertically
            parallaxText.style.transform = 'translate(-50%, calc(-50% + ' + (scrolled * 0.5) + 'px))';
        });
