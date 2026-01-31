// script.js
'use strict';
        
        const ticketPrices = {
            carnevale: 45,
            palio: 60,
            biennale: 35,
            opera: 85,
            truffle: 55
        };

        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            window.scrollTo(0, 0);
        }

        function updateTickets(eventId, change) {
            const countElement = document.getElementById(eventId + '-count');
            const totalElement = document.getElementById(eventId + '-total');
            let currentCount = parseInt(countElement.textContent);
            
            currentCount += change;
            if (currentCount < 1) currentCount = 1;
            if (currentCount > 10) currentCount = 10;
            
            countElement.textContent = currentCount;
            totalElement.textContent = currentCount * ticketPrices[eventId];
        }

        function bookEvent(eventName, eventId) {
            const tickets = parseInt(document.getElementById(eventId + '-count').textContent);
            const total = tickets * ticketPrices[eventId];
            
            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = `
                <p style="margin: 1rem 0;"><strong>Event:</strong> ${eventName}</p>
                <p style="margin: 1rem 0;"><strong>Number of Tickets:</strong> ${tickets}</p>
                <p style="margin: 1rem 0;"><strong>Total Amount:</strong> €${total}</p>
                <p style="margin-top: 1.5rem; color: #666;">Your tickets will be sent to your email address. Thank you for booking with Discover Italy!</p>
            `;
            
            document.getElementById('bookingModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('bookingModal').classList.remove('active');
        }

    
        function handleSubmit(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            event.target.reset();
        }

        window.onclick = function(event) {
            const modal = document.getElementById('bookingModal');
            if (event.target === modal) {
                closeModal();
            }
        }
