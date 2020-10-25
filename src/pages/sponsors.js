import React, { useState } from "react"

import SEO from "../components/seo"
import Modal from "../components/Modal"

import "../styles/styles.css"

const Sponsors = () => {
  const [state, setState] = useState({
      modalVisibility: false,
      modalTarget: ''
  });

  function toggleModal(modalId) {
    setState({
      modalVisibility: (modalId !== state.modalTarget) || !state.modalVisibility,
      modalTarget: modalId
    })
  }

  function hideModal() {
    setState({
      modalVisibility: false,
      modalTarget: ''
    })
  }
  const loremContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed. In fermentum et sollicitudin ac. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Pretium quam vulputate dignissim suspendisse."
  const modalNames = ["aws", "bettercloud","beyondid","box","dropbox"];
  const modalData = modalNames.map( (name) => {
    let imgSrc = "/images/" + name + ".png";
    return(
      {
        modalName: name,
        modalContent: (
          <>
            <img src={imgSrc} alt={name}/>
            <p>{loremContent}</p>
          </>
        ),
        imgSrc: imgSrc
      }
    )
  })
  
  return (
    <div className="container sponsors-page">
      <SEO title="Sponsors Page" />
      <h1 className="heading--page-title sponsors-page-title">Sponsors</h1>
      <div className="sponsors-body">
        <p>
          Oktane20 is fueled by support of our sponsors. Generate business with a forward-thinking group of IT professionals, and increase exposure for your solutions and services. Make sure you are a part of more strategic IT discussions that center on building new and differentiated experiences in an increasingly mobile and cloud-centric world.
          <br/>
          <br/>
          Contact us at sponsorships@okta.com if you are interested in sponsoring.
        </p>
        <p>
          <a className="orange-link" href="/files/Oktane20Live_Sponsorship_Prospectus_v5_03062020.pdf">View the sponsorship prospectus</a>
        </p>
      </div>
      <h2 className="heading--orange">Platinum Sponsors</h2>
      <div className="all-modals-container">
          {modalData.map((modal, i) => {
              return (
                <Modal
                  key={"modal-" + i}
                  modalData={modal}
                  toggleModal={toggleModal}
                  hideModal={hideModal}
                  modalId={"modal-" + i} 
                  modalVisibility={state.modalVisibility} 
                  modalTarget={state.modalTarget}
                  />
                )
              })
          }
      </div>
    </div>
  )
}

export default Sponsors
