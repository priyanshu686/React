const ContactUs = () => {
  return (
    <div className="container">
      <div
        className="dropdown-item"
        role="combobox"
        aria-activedescendant="id-4.525-selected"
        tabindex="0">
        <div className="dropdown-content">
          <span className="dropdown-label">How can we help you?</span>
          <input
              type="text"
              autocomplete="on"
              className="input-field"
            />

        </div>

        <section className="input-section">
          <section className="input-wrapper">
            
          </section>
          <label className="input-label">Full Name</label>
          <input
              type="text"
              autocomplete="on"
              className="input-field"
            />
        </section>

        <div className="separator"></div>

        <section className="input-section">
          <section className="input-wrapper">
            
          </section>
          <label className="input-label">Email Address</label>
          <input
              type="text"
              autocomplete="on"
              className="input-field"
            />
        </section>

        <div className="separator"></div>

        <section className="input-section">
          <section className="input-wrapper">
            
          </section>
          <label className="input-label">Mobile Number (optional)</label>
          <input
              type="text"
              autocomplete="on"
              className="input-field"
            />
        </section>

        <div className="separator"></div>

        <section className="textarea-section">
          
          <label className="textarea-label">Type text</label>
          
        </section>
        <section>
        <textarea rows="7" className="textarea-field"></textarea>
        </section>

        <div className="separator"></div>

        <button className="submit-button">
          <span className="submit-text">Submit feedback</span>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
