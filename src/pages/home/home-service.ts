import { Cv, Career, CoverLetter, Interview, JobHunting, LinkedIn, Featured,  } from '../../icons/home-icons';
import { HomeCardModel } from '../../shared/models/home-card-model';
import { HomeServiceItemModel } from '../../shared/models/home-service-model';

export const homeServices: HomeServiceItemModel[] = [
    {icon: Cv, subheader: 'CV/Resume Service', text: 'Professional CV writing & reviewing service', key: 1},
    {icon: CoverLetter, subheader: 'Cover Letter Service', text: 'Make yourself stand out and let us show, the best version of yourself in your cover letter', key: 3},
    {icon: LinkedIn, subheader: 'LinkedIn Profile Creation & Revision', text: 'An outstanding LinkedIn profile is a key for the recruiter to be interested in you.', key: 6},
    {icon: JobHunting, subheader: 'Job Hunting Assistance', text: ' Our team will send your application to all the right places for you', key: 5},
    {icon: Interview, subheader: 'Interview Preperation', text: 'Talk to one of our experts and you will be prepared for your interview, in a way as never before', key: 4},
    {icon: Career, subheader: 'Career Development Plan', text: 'Thinking of a career change or not sure which direction you should head? At JOB4ME we can talk to you and show you the right path', key: 2}
];

export const homeCardService: HomeCardModel[] = [
    {icon: Featured ,header: 'CV, Cover Letter or LinkedIn account (Choose One)', info: {header: '', icon: Featured, subheader:''}, mostPopular: false,pricing : {offer: 'Single', value: 60}, subheader: 'Professional CV, Cover Letter or LinkedIn account written by our team'},
    {icon: Featured ,header: 'CV and Cover Letter (Double Bundle)', info: {header: '', icon: Featured, subheader:''}, mostPopular: true,pricing : {offer: 'Double bundle', value: 100}, subheader: 'Professional CV & Cover Letter written by our team'},
    {icon: Featured ,header: 'CV, Cover Letter + LinkedIn (Triple Bundle)', info: {header: '', icon: Featured, subheader:''}, mostPopular: false,pricing : {offer: 'Triple bundle', value: 130}, subheader: 'CV & Cover Letter not enough? Don\'t worry, in this bundle we will create and finish your LinkedIn profile also'}
]