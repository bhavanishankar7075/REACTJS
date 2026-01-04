

---

# PopX - React Interview Task

This is my submission for the React JS developer task. The goal was to build a multi-screen mobile UI based on a provided Adobe XD design. I used React with Tailwind CSS to ensure the design is pixel-perfect and responsive.

##  Live Demo

[https://popx-app-m9h3.onrender.com/]

##  Tech Stack

* **Frontend**: React (Vite)
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM

##  Project Highlights

* **Pixel-Perfect UI**: I carefully followed the Adobe XD design, matching specific hex codes (like `#6C25FF` for the primary purple) and font sizes.
* **Mobile-First Approach**: The app is containerized to look like a mobile interface, centered on the screen for desktop viewing as per the project requirements.
* **Custom Form Components**: I built the signup and login forms with custom floating labels and styled radio buttons to match the mockups exactly.
* **Responsive Layout**: Used a fixed-aspect-ratio container to simulate a mobile app experience while ensuring it centers correctly on all browser sizes.

##  How to Run Locally

1. **Clone the repo**:
`git clone https://github.com/bhavanishankar7075/REACTJS.git`
2. **Install dependencies**:
`npm install`
3. **Start the dev server**:
`npm run dev`

##  Design Notes

* **Landing Page**: Added the decorative numbered circles using absolute positioning to match the specific "staircase" layout.
* **Scrolling**: Implemented internal scrolling for longer pages (like the Signup form) while keeping the main container fixed to 812px height.
* **Assets**: Profile images and icons are integrated to match the final profile screen mockup.

---

