import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { useState } from 'react';

const ContactInfo = ({siteData}) => {
  const [scrollableModal, setScrollableModal] = useState(false);

  const toggleShow = () => setScrollableModal(!scrollableModal);


  return (
    <>
      <MDBBtn color='success' className='text-light border-3 text-capitalize rounded-1 fs-5 mt-3' rippleColor='success' onClick={() => setScrollableModal(!scrollableModal)}>অর্ডারের জন্য যোগাযোগ করুন</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable centered>
          <MDBModalContent>
            <MDBModalHeader>
              <p className='m-0 text-dark fw-semibold fs-5'>যোগাযোগের মাধ্যম</p>
              <MDBBtn
                className='btn-close text-light'
                color='transparent'
                rippleColor='success'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

              <div className="media-box">

                <a href={siteData['fbPage']} rel="noreferrer" className='text-primary text-decoration-none mx-1 fs-5' target="_blank"><i className="fa-brands fa-facebook"></i></a>

                <a aria-label="Chat on WhatsApp" rel="noreferrer" href={`https://wa.me/${siteData['whatsApp']}`} className='text-success text-decoration-none mx-1 fs-5' target="_blank"><i className="fa-brands fa-whatsapp"></i></a>

                <a href={"tel:+" + siteData['contactNumber']} className='text-dark text-decoration-none mx-1 fs-5'><i className="fa-solid fa-phone"></i></a>

                <a href={"mailto:" + siteData['contactMail']} className='text-warning text-decoration-none mx-1 fs-5'><i className="fa-solid fa-envelope"></i></a>

                <a href={siteData['contactLocation']} className='text-danger text-decoration-none mx-1 fs-5' target='__blank'><i className="fa-solid fa-location-dot"></i></a>

              </div>

            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal> 
    </>
  );
};

export default ContactInfo;