import './TermsAndConditions.css';
import { terms } from './terms';
const TermsAndConditions = () => {
  return (
    <div className='d-flex flex-column' id='terms-and-conditions'>
        <section className='d-flex flex-column' id='contact-us-a'>
            <div className='d-flex flex-column align-items-center justify-content-center w-100 h-100 contact-us-content'>
                <h1 className='fw-bold w-75 text-center'>
                    Terms and Conditions
                </h1>
                <p className='mt-3 text-center w-75 contact-us-a-subheader'>
                    Please take a few minutes to go through our terms and conditions
                </p>
            </div>
        </section>

        <section className='d-flex align-items-center flex-column'>
            {terms.map((term, index) => {
                return(
                    <div key={index} className='d-flex flex-column w-75 py-5 justify-content-center'>
                        <h3 className='text-center'>{term.title}</h3>
                        {term.description.map((desc, index) => {
                            return(
                                <p key={index}>{desc}</p>
                            )
                        })}
                    </div>
                )
            })}
        </section>
    </div>
  )
}

export default TermsAndConditions