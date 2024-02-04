import React from "react";

function Home() {
  return (
    <div className='home-container'>
        <header>
          <h1 className='home-header'>Welcome to BYTES!</h1>
        </header>
        <div className='info'>
          <h2 className='home-header'>Why BYTES?</h2>
          <p>
            Tired of misplacing your favorite recipe? Don’t know what to cook for dinner? Looking for more creative meal prep options? Welcome to BYTES: A one stop shop for all your culinary needs.
          </p>
        </div>

        {/* Two blocks side by side */}
        <div className='home-container-2'>
        <div className="side-by-side">
          <div className="block">
            <h2>Virtual Cookbook</h2>
            <p>Finding the recipe you’re looking for has never been easier. Simply scan and upload your recipes into your virtual cookbook. BYTES will organize your recipes alphabetically for effortless pinpointing. </p>
          </div>
          <div className="block">
            <h2>AI Integration</h2>
            <p>Are you interested in cooking something new, but lacking inspiration? BYTES utilizes generative AI to suggest personalized meal recommendations based on what you’re in the mood for, what ingredients you already have on hand, and will take your weekly grocery budget into consideration.</p>
          </div>
          </div>
        

        {/* Additional container with border */}
        <div className="additional-container">
        <div className="additional-box">
          <h2>Choose BYTES!</h2>
          <p>Don’t waste time rummaging through papers or scrolling through Pinterest, hoping something sparks your interest. Don’t stress, cook your best with BYTES!</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Home;