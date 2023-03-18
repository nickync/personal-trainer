import React from "react"

export default function FooterComponent() {
  return (
    <div id="footer" className="w-100 bg-dark bt-gradient position-relative align-bottom mt-xxl-5">  
        <div className="d-flex justify-content-between px-1">
          <div className="mt-lg-5">
            <div className="fw-bolder text-light">PERSONAL TRAINER</div>
            <div className="text-start text-light fst-italic">@ Personal Trainer 2023</div>
          </div>
          <div className="mt-lg-5">
            <div className="blockquote fw-light text-light-emphasis fst-italic fs-5">I am the master of my fate, I am the captain of my soul.</div>
            <div className="blockquote-footer text-end">--William Ernest Henley</div>
          </div>
          <div className="text-light text-gradient" style={{fontSize:'13px'}}>
            <div className="fst-italic fw-light mt-3 me-lg-5 pe-lg-5">Contact:</div>
            <div className="fst-italic fw-lighter text-end">(123) 456-789</div>
            <div className="align-content-end">
              <div className="fst-italic me-lg-5 pe-lg-5 ">Address:</div> 
              <div className="text-light fw-lighter text-end">270 Park Ave</div>
              <div className="fw-lighter text-end">Jonesboro, DC</div>
            </div>
          </div>
        </div>
    </div>
  )
}