import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function Faq() {
  return (
    <Accordion classname="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do i enroll ? </Accordion.Header>
        <Accordion.Body>
            <p>
                Please contact our whatsapp (5729 3977) or you can visit <Link to='/enroll'>here </Link>
            </p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What should I wear to class?</Accordion.Header>
        <Accordion.Body>
        <p>
        We recommend wearing comfortable clothing that allows for ease of movement. For most classes, athletic wear such as leggings and a fitted top are appropriate. For ballet classes, we recommend wearing ballet slippers and form-fitting clothing.
            </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What styles of dance do you offer?</Accordion.Header>
        <Accordion.Body>
        <p>
        We offer a wide range of dance styles, including Tradistional , contemporary, jazz, hip hop, bollywood , and more. Please refer to our class schedule for a full list of offerings.
            </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Do you offer private lessons?</Accordion.Header>
        <Accordion.Body>
        <p>
        Yes, we offer private lessons for individuals or small groups. Please contact us for more information.
            </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faq;