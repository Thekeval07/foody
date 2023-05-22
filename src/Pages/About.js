import React,{ useState} from "react";

const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (name.trim() === "") {
     alert("Name is required");
      return;
    }
    if (email.trim() === "") {
      alert("Email is required");
      return;
    }
    if (phone.trim() === "") {
      alert("Phone number is required");
      return;
    }
    if (people.trim() === "") {
      alert("Number of people is required");
      return;
    }
    if (eventDate.trim() === "") {
      alert("Event date is required");
      return;
    }
    if (eventTime.trim() === "") {
      alert("Event time is required");
      return;
    }
    if (eventDescription.trim() === "") {
      alert("Event description is required");
      return;
    }


    // Perform form submission logic
    console.log({
      name,
      email,
      phone,
      people,
      eventDate,
      eventTime,
      eventDescription,
    });

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setPeople('');
    setEventDate('');
    setEventTime('');
    setEventDescription('');
   
  };
  return (
    <div>
      <div className="container-about">
        <h1>CATERING ORDER </h1>
        <div className="container">
          <div className="border p-4 mb-5">
            <form onSubmit={handleSubmit}>
              <>
                <div className="row ">
                  <div className="col form-margin ">
                  <label className="mb-2 " htmlFor="name">Name *</label>
                  <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name*"
                      
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    
                  </div>
                  <div className="col">
                  <label className="mb-2" htmlFor="email">Email *</label>
                  <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email*"
                      // required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col form-margin">
                  <label className="mb-2" htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number*"
                    // required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  </div>
                  <div className="col">
                  <label className="mb-2" htmlFor="people">Number of People *</label>
                <input
                  type="number"
                  className="form-control"
                  id="people"
                  placeholder="Number of People*"
                  // required
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col form-margin">
                  <label className="mb-2" htmlFor="event-date">Event Date *</label>
                <input
                  type="date"
                  className="form-control"
                  id="event-date"
                  placeholder="dd-mm-yyyy"
                  // required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
                  </div>
                  <div className="col">
                  <label className="mb-2" htmlFor="event-time">Event Time *</label>
                <input
                  type="time"
                  className="form-control"
                  id="event-time"
                  placeholder="--:-- --"
                  // required
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                />
                  </div>
                </div> 
              </>

             
              
              <div className="form-group mt-3">
                <label className="mb-2" htmlFor="event-description">Describe the Event *</label>
                <textarea
                  className="form-control"
                  id="event-description"
                  rows="3"
                  placeholder="Describe the event"
                  // required
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                ></textarea>
              </div>
             
              <h4 className="form-event mt-4">Will Your Event Require:</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="warming-dishes"
                />
                <label className="form-check-label" htmlFor="warming-dishes">
                  Warming Dishes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="serving-utensils"
                />
                <label className="form-check-label" htmlFor="serving-utensils">
                  Serving Utensils
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="lines"
                />
                <label className="form-check-label" htmlFor="lines">
                  Lines
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wait-staff"
                />
                <label className="form-check-label" htmlFor="wait-staff">
                  Wait Staff
                </label>
              </div>
              

              <h6 className="mt-3 mb-4 form-header">** MAY INDLUDE ADDITIONAL CHARGES **</h6>
              
              <p className="form-p border-top" > You will be contacted within 24 hours</p>
              <div className="col-6 center">
              <button type="submit" className="btn form-btn">
                SUBMIT REQUEST
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
