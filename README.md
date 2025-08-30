# Wedding Seat Finder - Chenyu & Ping

A clean, elegant web application to help wedding guests find their assigned seats and view the venue layout. Built with a focus on simplicity and ease of use.

## Features

- 🔍 **Guest Search**: Type any guest's name to find their exact table and seat
- 👨‍👩‍👧‍👦 **Family Information**: See where family members are seated
- 🪑 **Precise Seating**: Shows both table number AND specific seat position
- 🗺️ **Venue Map**: Interactive floor plan highlighting your location
- 📱 **Mobile Friendly**: Responsive design works on all devices
- 🎨 **Elegant Design**: Clean styling matching modern wedding aesthetics

## How to Use

1. **Open the App**: Simply open `index.html` in any modern web browser
2. **Search Your Name**: Start typing your name in the search box
3. **Select from Results**: Click on your name from the dropdown
4. **View Your Details**: See your table number, seat number, and family members
5. **Find Your Location**: The venue map highlights your table and family tables

## File Structure

```
wedding-seat-finder/
├── index.html          # Main HTML structure
├── styles.css          # Clean, responsive styling
├── app.js             # Search functionality and venue map
├── README.md          # This documentation
├── images/            # Wedding assets
│   └── Logo with Date inside.png
└── files/             # Source data files
    ├── Guest Details.pdf
    ├── Details on each table.pdf
    └── Seat Layout.pdf
```

## Technical Details

- **Pure Vanilla JavaScript**: No external dependencies
- **Georgia Serif Font**: Elegant typography matching reference design
- **CSS Grid & Flexbox**: Modern responsive layout
- **Semantic HTML**: Accessible markup structure
- **Optimized Search**: Fast guest lookup with instant results
- **Interactive Elements**: Hover effects and smooth transitions

## Wedding Information

- **Couple**: Chenyu Wang & Ping Li  
- **Date**: September 21, 2025
- **Reception Guests**: 174 attendees
- **Tables**: 17 guest tables + Bridal Party table
- **Venue**: Interactive floor plan with precise seating

## Data Sources

Guest information extracted from:
- **Guest Details.pdf**: Complete guest list with family groupings
- **Details on each table.pdf**: Table assignments and seat positions  
- **Seat Layout.pdf**: Venue layout and table positioning

## Browser Compatibility

Fully compatible with:
- Chrome, Firefox, Safari, Edge (latest versions)
- iOS Safari, Chrome Mobile
- All modern mobile browsers

## Customization

To adapt this for another wedding:

1. **Update Guest Data**: Modify the `WEDDING_DATA.guests` array in `app.js`
2. **Adjust Table Positions**: Update `WEDDING_DATA.tablePositions` coordinates
3. **Replace Logo**: Update the logo image in the `images/` folder
4. **Customize Styling**: Modify colors and fonts in `styles.css`
5. **Update Wedding Details**: Change dates and names in HTML

## Design Philosophy

This application prioritizes:
- **Simplicity**: Clean, uncluttered interface
- **Functionality**: Fast, accurate seat lookup
- **Accessibility**: Works for all guests regardless of technical ability
- **Elegance**: Beautiful design befitting a special occasion

---

*Created for Chenyu & Ping's Wedding • September 21, 2025*