import { ProductModel } from '../../shared/models/product-model';

export const checkoutItems: Record<number,ProductModel> = {
    0: {unitAmount: 100*60, name: 'CV - writing / editing'},
    1: {unitAmount: 100*60, name: 'Cover Letter - writing / editing'},
    2: {unitAmount: 100*60, name: 'LinkedIn Profile'},
    3: {unitAmount: 100*50, name: 'Interview Preparation'},
    4: {unitAmount: 100*50, name: 'Career Development Plan'},
    5: {unitAmount: 100*100, name: 'CV and Cover Letter'},
    6: {unitAmount: 100*100, name: 'CV and LinkedIn Profile'},
    7: {unitAmount: 100*100, name: 'Cover Letter and LinkedIn'},
    8: {unitAmount: 100*130, name: 'CV, Cover Letter and LinkedIn'}

}