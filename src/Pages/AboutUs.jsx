import React from 'react'

const name = "Ergül";
const surname = "Efeoğlu";

const AboutUs = (props) => {
  return (
    <>
      <div className="navigation-wrap bg-light start-header start-style">
		    <div className="container">
			    <div className="row">
				    <div className="col-12">
					    <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="#">
                  <img src="https://praxisexperten.com/img/logo/praxisexperten_logo.png" alt=""/>
                </a>	
						    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							    <span className="navbar-toggler-icon"></span>
						    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                      <a className="nav-link" href="#">Startseite</a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">So funktionierts</a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">Unser Angebot</a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">Kontakt</a>
                    </li>
                  </ul>
                </div>
              </nav>		
            </div>
          </div>
        </div>
      </div>

      <div className="section full-height">
        <div className="absolute-center">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Praxisexperten<br/>Beratung für Arztpraxen auf Augenhöhe</h2>
                </div>	
              </div>		
            </div>		
          </div>
          <div className="section mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p>Die Praxisexperten ist ein Unternehmen, dass sich auf Beratung von Ärzten und Praxisgeschäftsführern spezialisiert hat. 
                    Das Team besteht aus hochqualifizierten Fachkräften, die Erfahrung aus der ärztlichen Praxis mitbringen.
                    <br/><br/>Wir bieten Ihnen umfassende Beratungsleistungen für Arztpraxen. Neben der Analyse von Problemen im Bereich der 
                    Praxisgestaltung oder -organisation unterstützen wir unsere Kunden auch beim Aufbau von neuen Praxissitzen oder beim 
                    Umbau bereits existierender Praxisorganisationen. Darüber hinaus bieten wir Digitalisierungslösungen, 
                    die exakt auf die Bedürfnisse einer modernen Arztpraxis angepasst sind. Wir helfen Ihnen dabei, 
                    den Patienten wieder in den Mittelpunkt des ärztlichen Handelns zu stellen.</p>
                </div>	
              </div>		
            </div>			
          </div>

          <div className="section mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <a href="https://calendly.com/praxisexperten" class="contact_us" target="_blank">Nehmen Sie Kontakt auf</a>
                </div>	
              </div>		
            </div>			
          </div>

        </div>
	    </div>

    </>
  )
}

AboutUs.defaultProps = {
  title: 'Default Title',
  name: 'Default Name',
  surname: 'Default Surname'
}

export default AboutUs



/*
<div className="container-fluid main-container-title">
  <div className="row">
    <div className="col-md-12">
      <h1>{props.title}</h1>
    </div>
    <div className="col-md-6">
      <p>{props.name}</p>
    </div>
    <div className="col-md-6">
      <p>{props.surname}</p>
    </div>
  </div>
</div>
*/