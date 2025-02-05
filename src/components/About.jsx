import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-4xl text-center font-bold mb-4">About Us</h1>

      <img
        src="https://wallpapercave.com/wp/wp7348236.jpg"
        alt="Team"
        className="w-full h-60 object-cover mb-4 rounded-lg"
      />

      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to <span className="font-semibold">Our Blog</span>, a platform where we share insightful articles, latest updates, and engaging stories across various topics. 
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mt-3">
        Our mission is to create a space where readers can find valuable content, explore different perspectives, and stay informed about the latest trends. We are passionate about delivering high-quality content that educates, inspires, and entertains.
      </p>

      <h2 className="text-2xl font-bold mt-6">Why Choose Us?</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>🔥 Fresh and engaging content</li>
        <li>💡 Well-researched and insightful articles</li>
        <li>🌍 A diverse range of topics covered</li>
        <li>💬 A community-driven platform</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">Meet Our Team</h2>
      <p className="text-lg text-gray-700 leading-relaxed mt-3">
        We are a group of passionate writers, tech enthusiasts, and storytellers dedicated to bringing you the best content possible. Stay connected with us as we continue to grow and evolve.
      </p>

      <h2 className="text-2xl font-bold mt-6">Stay Connected</h2>
      <p className="text-lg text-gray-700 leading-relaxed mt-3">
        Follow us on our social media channels and subscribe to our newsletter to never miss an update. We’d love to hear from you!
      </p>

      <button className="bg-black text-white px-4 py-2 rounded mt-4 hover:bg-gray-800 transition">
        Contact Us
      </button>
    </div>
  );
}

export default About
