export default function FooterComponent() {
  return (
    <div className="container-fluid bg-dark bt-gradient">  
        <hr></hr>
        <div className="d-flex justify-content-between">
          <div>
            <div className="fw-bolder text-light">PERSONAL TRAINER</div>
            <div className="text-start text-light fst-italic">@ Personal Trainer 2023</div>
          </div>
          <div className="text-light text-gradient">
            <div>Contact: (123) 456-789</div>
            <div>
              <div>Address:</div> 
              <div>270 Park Ave</div>
              <div>Jonesboro, DC</div>
              <div></div>
            </div>
          </div>
        </div>
    </div>
  )
}