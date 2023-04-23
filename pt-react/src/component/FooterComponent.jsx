import React from "react"

export default function FooterComponent() {
  return (
    <div id="footer" className="w-100 bg-dark bt-gradient mt-xxl-5">  
        <div className="d-flex justify-content-between px-1 mt-5">
          <div className="mt-3 pt-2">
            {/* <div className="fw-bolder text-light">PERSONAL TRAINER</div> */}
            <div className="text-start text-light fst-italic">© Personal Trainer 2023</div>
          </div>
          <div id="quote" className="pt-1">
            <div className="blockquote fw-light text-light-emphasis fst-italic fs-6">I am the master of my fate, I am the captain of my soul.</div>
            <div className="blockquote-footer text-end">--William Ernest Henley</div>
          </div>
          <div className="text-light text-gradient fs-6">
            <div className="fst-italic fw-light mt-0 text-end">Contact: <span className="fw-lighter fst-italic text-end">(123) 456-789</span></div>
            <div className="align-content-end">
              <div className="fst-italic text-end">Address: <span className="fw-lighter fst-italic text-end">270 Park Ave</span></div>
              <div className="fw-lighter text-end">Jonesboro, DC</div>
            </div>
          </div>
        </div>
    </div>
  )
}