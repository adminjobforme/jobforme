import { forwardRef, MutableRefObject } from 'react';
import { Form } from 'react-bootstrap';
import { FormOptionsModel } from './form-options-model';

interface ChildProps {
    option: string; 
}

const FormOptions = forwardRef<FormOptionsModel, ChildProps>((props: ChildProps, ref) => {
    const {option} = props;  
    switch (option) {
        case '0':{
            return (
            <div className='d-flex flex-column'>
                <Form.Group controlId='formFile' className='mb-3'>
                    <Form.Label className='text-center w-100'>Upload your CV</Form.Label>
                    <Form.Control type='file' name='cv' accept='.doc,.docx,.pdf' ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.cv = r}/>
                </Form.Group>
                <p>files accepted in .doc .docx, .pdf formats only</p>
            </div>
            );
        }
        case '1':{
            return (
            <div className='d-flex flex-column'>
                <Form>
                    <Form.Group controlId='formFile' className='mb-3'>
                        <Form.Label className='text-center w-100'>Upload your Cover Letter</Form.Label>
                        <Form.Control type='file' name='coverLetter' accept='.doc,.docx,.pdf' required={true} ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.coverLetter = r}/>
                    </Form.Group>
                </Form>
                <p>files accepted in .doc, .docx and .pdf formats only</p>
            </div>
            );
        }
        case '2':{
            return (
                <Form>
                    <Form.Group controlId='formFile' className='mb-3'>
                        <Form.Label className='text-center w-100'>LinkedIn Page:</Form.Label>
                        <Form.Control type='text' name='linkedIn' required={true} ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.linkedIn = r}/>
                    </Form.Group>
                </Form>
            );
        }
        case '3':{
            return (
                <div className='text-center mb-3'>
                    We will call the you and arrange a booking
                </div>
            );
        }
        case '4':{
            return (
                <div className='text-center mb-3'>
                    We will call the you and arrange a booking
                </div>
            );
        }
        case '5':{
            return (
            <div className='d-flex flex-column'>
                <Form>
                    <Form.Group controlId='formFileCv' className='mb-3'>
                        <Form.Label className='text-center w-100'>Upload your CV</Form.Label>
                        <Form.Control className='mb-3' type='file' accept='.doc,.docx,.pdf' required ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.cv = r}/>
                        <Form.Label className='text-center w-100'>Upload your Cover Letter</Form.Label>
                        <Form.Control type='file' accept='.doc,.docx,.pdf' required ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.coverLetter = r} />
                    </Form.Group>
                </Form>
                <p>files accepted in .doc .docx, .pdf formats only</p>
            </div>
            );
        }
        case '6':{
            return (
            <div className='d-flex flex-column'>
                <Form>
                    <Form.Group controlId='formFileCv' className='mb-3'>
                        <Form.Label className='text-center w-100'>Upload your CV</Form.Label>
                        <Form.Control className='mb-3' type='file' accept='.doc,.docx,.pdf' required ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.cv = r}/>
                        <Form.Label className='text-center w-100'>LinkedIn Page:</Form.Label>
                        <Form.Control type='text' required={true} ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.linkedIn = r}/>
                    </Form.Group>
                </Form>
                <p>files accepted in .doc .docx, .pdf formats only</p>
            </div>
            );
        }
        case '7':{
            return (
            <div className='d-flex flex-column'>
                <Form>
                    <Form.Group controlId='formFileCv' className='mb-3'>
                        <Form.Label className='text-center w-100'>Upload your Cover Letter</Form.Label>
                        <Form.Control className='mb-3' type='file' accept='.doc,.docx,.pdf' required ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.coverLetter = r} />
                        <Form.Label className='text-center w-100'>LinkedIn Page:</Form.Label>
                        <Form.Control type='text' required={true} ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.linkedIn = r}/>
                    </Form.Group>
                </Form>
                <p>files accepted in .doc .docx, .pdf formats only</p>
            </div>
            );
        }
        case '8':{
            return (
                <div className='d-flex flex-column'>
                <Form>
                    <Form.Group controlId='formFileCv' className='mb-3'>
                        <Form.Label className='text-center w-100'>Upload your CV</Form.Label>
                        <Form.Control className='mb-3' type='file' accept='.doc,.docx,.pdf' required ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.cv = r} />
                        <Form.Label className='text-center w-100'>Upload your Cover Letter</Form.Label>
                        <Form.Control className='mb-3' type='file' accept='.doc,.docx,.pdf' required ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.coverLetter = r} />
                        <Form.Label className='text-center w-100'>LinkedIn Page:</Form.Label>
                        <Form.Control type='text' required={true} ref={(r: HTMLInputElement) => (ref as MutableRefObject<FormOptionsModel>).current.linkedIn = r}/>
                    </Form.Group>
                </Form>
                <p>files accepted in .doc .docx, .pdf formats only</p>
            </div>
            );
        }
        default:{
            return null
        }
    }
})

FormOptions.displayName = 'FormOptions';

export default FormOptions