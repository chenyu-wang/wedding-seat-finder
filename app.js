// Wedding guest data extracted from PDFs
const WEDDING_DATA = {
    // All guests with family groupings, table and seat assignments
    guests: [
        // Bride and Groom
        { name: 'Chenyu Wang', family: "Chenyu Wang's", table: 'Bridal Party', seat: 5, role: 'Groom' },
        { name: 'Ping Li', family: "Ping Li's", table: 'Bridal Party', seat: 4, role: 'Bride' },
        
        // Bridal Party
        { name: 'Lester Aguda', family: "Thomas Aguda's", table: 'Bridal Party', seat: 1, role: 'Groomsmen' },
        { name: 'Ernest Wijaya', family: 'Individual', table: 'Bridal Party', seat: 2, role: 'Groomsmen' },
        { name: 'Roger Chuang', family: "Roger Chuang's", table: 'Bridal Party', seat: 3, role: 'Best Man' },
        { name: 'Monica Yaw', family: 'Individual', table: 'Bridal Party', seat: 6, role: 'Bridesmaid' },
        { name: 'Sabrina Zhou', family: 'Individual', table: 'Bridal Party', seat: 7, role: 'Maid-of-honor' },
        { name: 'Angela Fong', family: 'Individual', table: 'Bridal Party', seat: 8, role: 'Bridesmaid' },

        // Table 1
        { name: 'Sonia Suputri', family: "Renaldy Chian's", table: 1, seat: 1 },
        { name: 'Evelyn Ong', family: 'Individual', table: 1, seat: 2 },
        { name: 'Tiffany Tan', family: 'Individual', table: 1, seat: 3 },
        { name: 'Elizabeth Tan', family: 'Individual', table: 1, seat: 4 },
        { name: 'Mia Qian', family: "Jinpeng's", table: 1, seat: 5 },
        { name: 'Edward Guan', family: "Jinpeng's", table: 1, seat: 6 },
        { name: 'James Han', family: 'Individual', table: 1, seat: 7 },
        { name: 'George Yuan', family: 'Individual', table: 1, seat: 8 },
        { name: 'Renaldy Chian', family: "Renaldy Chian's", table: 1, seat: 9 },

        // Table 2
        { name: 'Vivian Cheng', family: 'Vivian', table: 2, seat: 1 },
        { name: 'Han Zhang', family: 'Individual', table: 2, seat: 2 },
        { name: 'Lily Gao', family: 'Individual', table: 2, seat: 3 },
        { name: 'Esther Liu', family: 'Individual', table: 2, seat: 4 },
        { name: 'Ruby Geng', family: 'Individual', table: 2, seat: 5 },
        { name: 'Polly Ping', family: "Roy Ping's", table: 2, seat: 6 },
        { name: 'Roy Ping', family: "Roy Ping's", table: 2, seat: 7 },
        { name: 'Eason Zhao', family: "Lu Huang's", table: 2, seat: 8 },
        { name: 'Lu Huang', family: "Lu Huang's", table: 2, seat: 9 },

        // Table 3
        { name: 'Pin Tan', family: "Pin Tan's", table: 3, seat: 1 },
        { name: 'Caleb Win', family: "Lyndon Win's", table: 3, seat: 2 },
        { name: 'Ivana Win', family: "Lyndon Win's", table: 3, seat: 3 },
        { name: 'Grace Win', family: "Lyndon Win's", table: 3, seat: 4, role: 'Flower Girl' },
        { name: 'Lyndon Win', family: "Lyndon Win's", table: 3, seat: 5 },
        { name: 'Hendra Wijaya', family: 'Individual', table: 3, seat: 6 },
        { name: 'Daniel Gunawan', family: "Daniel Gunawan's", table: 3, seat: 7 },
        { name: 'Maria Tanzil', family: "Daniel Gunawan's", table: 3, seat: 8 },
        { name: 'Jenny Sophian', family: "Pin Tan's", table: 3, seat: 9 },
        { name: 'Joseph Tan', family: "Pin Tan's", table: 3, seat: 10 },

        // Table 4
        { name: 'Jane Massey', family: 'Individual', table: 4, seat: 1 },
        { name: 'Angela Gamel', family: 'Individual', table: 4, seat: 2 },
        { name: 'Bonnie Woo', family: 'Woo', table: 4, seat: 3 },
        { name: 'John Woo', family: 'Woo', table: 4, seat: 4 },
        { name: 'Benny Suwarno', family: "Benny Suwarno's", table: 4, seat: 5 },
        { name: 'Jordan Suwarno', family: "Benny Suwarno's", table: 4, seat: 6 },
        { name: 'Josiah Suwarno', family: "Benny Suwarno's", table: 4, seat: 7 },
        { name: 'Tirza Suwarno', family: "Benny Suwarno's", table: 4, seat: 8 },
        { name: 'Maddie Guggisberg', family: "Mr. G", table: 4, seat: 9 },
        { name: 'Patrick Guggisberg', family: "Mr. G", table: 4, seat: 10 },

        // Table 5
        { name: 'Mandy Chang', family: 'Individual', table: 5, seat: 1 },
        { name: 'Jacquelyn Chong', family: 'Individual', table: 5, seat: 2 },
        { name: 'Michelle Leman', family: "Clement Chan's", table: 5, seat: 3 },
        { name: 'Esther Chan', family: "Clement Chan's", table: 5, seat: 4 },
        { name: 'Elijah Chan', family: "Clement Chan's", table: 5, seat: 5 },
        { name: 'Clement Chan', family: "Clement Chan's", table: 5, seat: 6 },
        { name: 'Jefferson Karim', family: 'Individual', table: 5, seat: 7 },
        { name: 'Rudy Rusli', family: 'Individual', table: 5, seat: 8 },
        { name: 'Senjaya Tresna', family: 'Individual', table: 5, seat: 9 },

        // Table 6
        { name: 'Intan Chen', family: "Harry Chen's", table: 6, seat: 1 },
        { name: 'Harry Chen', family: "Harry Chen's", table: 6, seat: 2 },
        { name: 'Emma Chen', family: "Harry Chen's", table: 6, seat: 3 },
        { name: 'Dorita Lau', family: "Dorita Lau's", table: 6, seat: 4 },
        { name: 'Shane Koo', family: "Dorita Lau's", table: 6, seat: 5 },
        { name: 'Kenny Tan', family: "Kenny Tan's", table: 6, seat: 6 },
        { name: 'Ethan Tan', family: "Kenny Tan's", table: 6, seat: 7 },
        { name: 'Dwi Yoehanes', family: "Kenny Tan's", table: 6, seat: 8 },
        { name: 'Emily Tan', family: "Kenny Tan's", table: 6, seat: 9 },
        { name: 'Anna Chen', family: "Harry Chen's", table: 6, seat: 10 },

        // Table 7
        { name: 'Cong Xiao', family: "Ada Zheng's", table: 7, seat: 1 },
        { name: 'Claire Xiao', family: "Ada Zheng's", table: 7, seat: 2 },
        { name: 'Ada Zheng', family: "Ada Zheng's", table: 7, seat: 3 },
        { name: 'Jean Gao', family: "Lily Gao's", table: 7, seat: 4 },
        { name: 'Faris Sedek', family: "Lily Gao's", table: 7, seat: 5 },
        { name: 'Vianny Chan', family: "Andrew Chan's", table: 7, seat: 6 },
        { name: 'Kaitlyn Chan', family: "Andrew Chan's", table: 7, seat: 7 },
        { name: 'Stephen Chan', family: "Andrew Chan's", table: 7, seat: 8 },
        { name: 'Andrew Chan', family: "Andrew Chan's", table: 7, seat: 9 },

        // Table 8
        { name: 'Penny Li', family: "Penny Li's", table: 8, seat: 1 },
        { name: 'Claire Cong', family: "Penny Li's", table: 8, seat: 2 },
        { name: 'Tyler Cong', family: "Penny Li's", table: 8, seat: 3 },
        { name: 'Erik Cong', family: "Penny Li's", table: 8, seat: 4 },
        { name: 'Alex Chong', family: 'Alex Chong', table: 8, seat: 5 },
        { name: 'Noah Chong', family: 'Alex Chong', table: 8, seat: 6 },
        { name: 'Faith Chong', family: 'Alex Chong', table: 8, seat: 7 },
        { name: 'Susanna Yaw', family: 'Alex Chong', table: 8, seat: 8 },
        { name: 'Lu Wang', family: "Lu Wang's", table: 8, seat: 9 },
        { name: 'Xi Chen', family: "Lu Wang's", table: 8, seat: 10 },

        // Table 9 (Parents)
        { name: 'Hanxue Wang', family: "Chenyu Wang's", table: 9, seat: 1 },
        { name: 'Zhilin Li', family: "Ping Li's", table: 9, seat: 2 },
        { name: 'Qiuzhi Chen', family: "Ping Li's", table: 9, seat: 3 },
        { name: 'Helen Cheong', family: "Helen Cheong's", table: 9, seat: 4 },
        { name: 'Marini Angouw', family: 'Individual', table: 9, seat: 5 },
        { name: 'Joanne Yeung', family: "Joanne Yeung's", table: 9, seat: 6 },
        { name: 'William Yong', family: "Joanne Yeung's", table: 9, seat: 7 },
        { name: 'Jimmy Goh', family: 'Pastors', table: 9, seat: 8 },
        { name: 'Evelin Goh', family: 'Pastors', table: 9, seat: 9 },
        { name: 'Lijiang Yu', family: "Chenyu Wang's", table: 9, seat: 10 },

        // Table 10
        { name: 'Albee Woon', family: "Woon's", table: 10, seat: 1 },
        { name: 'Stephanie Kho', family: 'Individual', table: 10, seat: 2 },
        { name: 'Julia Schisas', family: "Helen Cheong's", table: 10, seat: 3 },
        { name: 'Cherry Zha', family: "Cherry Zha's", table: 10, seat: 4 },
        { name: 'Jaden Koo', family: "Dorita Lau's", table: 10, seat: 5 },
        { name: 'Preston Hsu', family: "Arielle Hsu's", table: 10, seat: 6 },
        { name: 'Justine Aguda', family: "Thomas Aguda's", table: 10, seat: 7 },
        { name: 'Angel Woon', family: "Woon's", table: 10, seat: 8 },
        { name: 'Melanie Wen', family: 'Individual', table: 10, seat: 9 },
        { name: 'Cynthia Lam', family: "Nora's", table: 10, seat: 10 },

        // Table 11
        { name: 'Sarah Tranthim-Fryer', family: "Tranthim-Fryer's", table: 11, seat: 1 },
        { name: 'Priscilla Suwarno', family: 'Individual', table: 11, seat: 2 },
        { name: 'Iechi Suen', family: 'Individual', table: 11, seat: 3 },
        { name: 'Natalie Tan', family: 'Individual', table: 11, seat: 4 },
        { name: 'Jyoti Tamang', family: 'Individual', table: 11, seat: 5 },
        { name: 'Keren Chai', family: 'Individual', table: 11, seat: 6 },
        { name: 'Rudy Suwarno', family: 'Individual', table: 11, seat: 7 },
        { name: 'Sky Zhang', family: 'Individual', table: 11, seat: 8 },
        { name: 'Stephen Den Boer', family: 'Individual', table: 11, seat: 9 },
        { name: 'Cameron Tranthim-Fryer', family: "Tranthim-Fryer's", table: 11, seat: 10 },

        // Table 12
        { name: 'Nora Hao', family: "Nora's", table: 12, seat: 1 },
        { name: 'Wing Lam', family: "Nora's", table: 12, seat: 2 },
        { name: 'Mario Satrio', family: "Mario Satrio's", table: 12, seat: 3 },
        { name: 'Judith Satrio', family: "Mario Satrio's", table: 12, seat: 4 },
        { name: 'Jemima Satrio', family: "Mario Satrio's", table: 12, seat: 5 },
        { name: 'Jethro Satrio', family: "Mario Satrio's", table: 12, seat: 6 },
        { name: 'Cindy Satrio', family: "Mario Satrio's", table: 12, seat: 7 },
        { name: 'Leny Chandra', family: "Woon's", table: 12, seat: 8 },
        { name: 'Alysca Woon', family: "Woon's", table: 12, seat: 9 },
        { name: 'Nicolas Woon', family: "Woon's", table: 12, seat: 10 },

        // Table 13
        { name: 'Jeremiah Tan', family: "Like Tan's", table: 13, seat: 1 },
        { name: 'Ronald Tan', family: "Like Tan's", table: 13, seat: 2 },
        { name: 'Jonathan Tan', family: "Like Tan's", table: 13, seat: 3 },
        { name: 'Tria Sansan', family: "Didier Michel's", table: 13, seat: 4 },
        { name: 'Lucas Michel', family: "Didier Michel's", table: 13, seat: 5 },
        { name: 'Didier Michel', family: "Didier Michel's", table: 13, seat: 6 },
        { name: 'Isabella Michel', family: "Didier Michel's", table: 13, seat: 7 },
        { name: 'Luke Johnstone', family: "Luke Johnstone's", table: 13, seat: 8 },
        { name: 'Lilitan', family: "Luke Johnstone's", table: 13, seat: 9 },
        { name: 'Like Tan', family: "Like Tan's", table: 13, seat: 10 },

        // Table 14
        { name: 'Kyle Huang', family: "Jingya Ai's", table: 14, seat: 1 },
        { name: 'Kai Huang', family: "Jingya Ai's", table: 14, seat: 2 },
        { name: 'Alex Wei', family: "Grace Liu's", table: 14, seat: 3 },
        { name: 'Candace Wei', family: "Grace Liu's", table: 14, seat: 4 },
        { name: 'Grace Liu', family: "Grace Liu's", table: 14, seat: 5 },
        { name: 'Thomas Tang', family: "Lina Han's", table: 14, seat: 6 },
        { name: 'Anne-Grace Tang', family: "Lina Han's", table: 14, seat: 7 },
        { name: 'Eva Tang', family: "Lina Han's", table: 14, seat: 8 },
        { name: 'Lina Han', family: "Lina Han's", table: 14, seat: 9 },
        { name: 'Jingya Ai', family: "Jingya Ai's", table: 14, seat: 10 },

        // Table 15
        { name: 'Summer Tang', family: "Qinlin Li's", table: 15, seat: 1 },
        { name: 'Emma Li', family: "Qinlin Li's", table: 15, seat: 2 },
        { name: 'Qilin Li', family: "Qinlin Li's", table: 15, seat: 3 },
        { name: 'David Chan', family: "David Chan's", table: 15, seat: 4 },
        { name: 'Jasmine Chan', family: "David Chan's", table: 15, seat: 5 },
        { name: 'Su-Chien Wang', family: "Roger Chuang's", table: 15, seat: 6 },
        { name: 'Reynard Chan', family: "Renard Chan's", table: 15, seat: 7 },
        { name: 'Matteo Chan', family: "Renard Chan's", table: 15, seat: 8 },
        { name: 'Leena Chan', family: "Renard Chan's", table: 15, seat: 9 },

        // Table 16
        { name: 'Raymond Chu', family: "Raymond Chu's", table: 16, seat: 1 },
        { name: 'Viraya Lim', family: "Raymond Chu's", table: 16, seat: 2 },
        { name: 'Jade Chan', family: "Fung's", table: 16, seat: 3 },
        { name: 'Magdalene Hai', family: "Fung's", table: 16, seat: 4 },
        { name: 'Fung Hai', family: "Fung's", table: 16, seat: 5 },
        { name: 'Harry Li', family: 'Individual', table: 16, seat: 6 },
        { name: 'Peter Kartosudiro', family: 'Individual', table: 16, seat: 7 },
        { name: 'Tze Ong', family: 'Individual', table: 16, seat: 8 },
        { name: 'Vincent Kok Yee Wee', family: 'Individual', table: 16, seat: 9 },
        { name: 'Antoni Liang', family: 'Individual', table: 16, seat: 10 },

        // Table 17
        { name: 'Angela Teo', family: "Adrian Hartojo's", table: 17, seat: 1 },
        { name: 'Michael Hartojo', family: "Adrian Hartojo's", table: 17, seat: 2 },
        { name: 'Adrian Hartojo', family: "Adrian Hartojo's", table: 17, seat: 3 },
        { name: 'Samuel Hartojo', family: "Adrian Hartojo's", table: 17, seat: 4 },
        { name: 'Janice Liu', family: "Arielle Hsu's", table: 17, seat: 5 },
        { name: 'Chrystal Wang', family: "Cherry Zha's", table: 17, seat: 6 },
        { name: 'Kocdal Antipas', family: 'Individual', table: 17, seat: 7 },
        { name: 'Tomas Aguda', family: "Thomas Aguda's", table: 17, seat: 8 },
        { name: 'Aun Kaewphaluk', family: "Aun Kaewphaluk's", table: 17, seat: 9 },
        { name: 'Vira Kaewphaluk', family: "Aun Kaewphaluk's", table: 17, seat: 10 }
    ],

};

class WeddingSeatFinder {
    constructor() {
        this.currentGuest = null;
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.searchInput = document.getElementById('guestSearch');
        this.searchButton = document.getElementById('searchButton');
        this.clearButton = document.getElementById('clearButton');
        this.searchResults = document.getElementById('searchResults');
        this.guestInfo = document.getElementById('guestInfo');
        this.guestName = document.getElementById('guestName');
        this.tableNumber = document.getElementById('tableNumber');
        this.seatNumber = document.getElementById('seatNumber');
        this.familyMembers = document.getElementById('familyMembers');
    }

    bindEvents() {
        // Search functionality
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleEnterKey();
            }
        });

        this.searchButton.addEventListener('click', () => {
            this.handleEnterKey();
        });

        this.clearButton.addEventListener('click', () => {
            this.clearAll();
        });

        // Hide search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-section')) {
                this.hideSearchResults();
            }
        });
    }

    handleSearch(query) {
        if (query.length < 2) {
            this.hideSearchResults();
            return;
        }

        const results = this.searchGuests(query);
        this.displaySearchResults(results);
    }

    handleEnterKey() {
        const searchValue = this.searchInput.value.trim();
        if (searchValue.length === 0) {
            return; // Don't search if input is empty
        }
        
        const results = this.searchGuests(searchValue);
        if (results.length > 0) {
            this.selectGuest(results[0]);
        }
    }

    searchGuests(query) {
        const searchTerm = query.toLowerCase().trim();
        if (searchTerm.length === 0) {
            return []; // Return empty array for empty search
        }
        
        return WEDDING_DATA.guests.filter(guest => 
            guest.name.toLowerCase().includes(searchTerm)
        ).slice(0, 10); // Limit to 10 results
    }

    displaySearchResults(results) {
        if (results.length === 0) {
            this.hideSearchResults();
            return;
        }

        this.searchResults.innerHTML = results.map(guest => `
            <div class="search-result" onclick="app.selectGuest(${JSON.stringify(guest).replace(/"/g, '&quot;')})">
                <div class="result-name">${guest.name}</div>
                <div class="result-details">
                    Table ${guest.table}${guest.seat ? ', Seat ' + guest.seat : ''}${guest.family !== 'Individual' ? ' • ' + guest.family + ' family' : ''}
                </div>
            </div>
        `).join('');

        this.searchResults.style.display = 'block';
    }

    hideSearchResults() {
        this.searchResults.style.display = 'none';
    }

    selectGuest(guest) {
        this.currentGuest = guest;
        this.hideSearchResults();
        this.displayGuestInfo(guest);
        
        // Clear search input
        this.searchInput.value = '';
    }

    displayGuestInfo(guest) {
        // Display guest name
        this.guestName.textContent = guest.name;
        
        // Display table and seat info
        if (guest.table === 'Bridal Party') {
            this.tableNumber.textContent = `Bridal Party${guest.role ? ' - ' + guest.role : ''}`;
            this.seatNumber.textContent = '';
        } else {
            this.tableNumber.textContent = `Table ${guest.table}`;
            this.seatNumber.textContent = guest.seat ? `Seat ${guest.seat}` : '';
        }

        // Display family members
        this.displayFamilyMembers(guest);

        // Show the guest info section
        this.guestInfo.classList.remove('hidden');
        
        // Scroll to guest info
        this.guestInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    displayFamilyMembers(guest) {
        const familyMembers = this.getFamilyMembers(guest.family, guest.name);
        
        if (familyMembers.length === 0) {
            this.familyMembers.innerHTML = '';
            return;
        }

        const familyText = familyMembers.length === 1 
            ? "Also, We've found the seat for your family member." 
            : "Also, We've found the seats for your family members.";
            
        const familyHtml = `
            <h4>${familyText}</h4>
            ${familyMembers.map(member => `
                <div class="family-member">
                    <span class="member-name">${member.name}</span>
                    <span class="member-seat">
                        Table ${member.table}${member.seat ? ', Seat ' + member.seat : ''}
                    </span>
                </div>
            `).join('')}
        `;

        this.familyMembers.innerHTML = familyHtml;
    }

    getFamilyMembers(family, guestName) {
        if (family === 'Individual') return [];
        
        return WEDDING_DATA.guests.filter(guest => 
            guest.family === family && guest.name !== guestName
        );
    }


    clearAll() {
        // Clear search input
        this.searchInput.value = '';
        
        // Hide search results
        this.hideSearchResults();
        
        // Hide guest info
        this.guestInfo.classList.add('hidden');
        
        // Reset current guest
        this.currentGuest = null;
        
        // Focus back on search input
        this.searchInput.focus();
    }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new WeddingSeatFinder();
});

// Make selectGuest available globally for onclick handlers
window.selectGuest = function(guest) {
    app.selectGuest(guest);
};