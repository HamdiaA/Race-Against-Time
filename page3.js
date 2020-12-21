//referenced :https://www.youtube.com/watch?v=Wo-kQopjWiQ&ab_channel=BringYourOwnLaptop 

function update(e) {
			var x = e.clientX || e.touches[0].clientX
			var y = e.clientY || e.touches[0].clientY

			document.documentElement.style.setProperty('--cursorX', x + 'px')
			document.documentElement.style.setProperty('--cursorY', y + 'px')
		}

		document.addEventListener('mousemove',update)
		document.addEventListener('touchmove',update)


function buttonclick() {
	 		sessionStorage.setItem("timePassed", timePassed);
	 		location.href = "page4.html"
		}