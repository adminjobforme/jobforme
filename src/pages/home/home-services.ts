import { HomeServiceItemModel } from '../../shared/home-service-model';
import { Cv, Career, CoverLetter, Interview, JobHunting, LinkedIn,  } from '../../icons/home-icons';

export const homeServices: HomeServiceItemModel[] = [
    {icon: Cv, subheader: 'CV/Resume Service', text: 'We offer CV writing & reviewing service, to enhance the chances of receiving an interview even by over 300%', key: 1},
    {icon: CoverLetter, subheader: 'Cover Letter Service', text: 'Make yourself stand out and let us show, the best version of yourself in your cover letter', key: 3},
    {icon: LinkedIn, subheader: 'LinkedIn Profile Creation & Revision', text: 'In today’s world, a LinkedIn profile is a must have, but having an outstanding LinkedIn profile is a key for the recruiter to be interested in you', key: 6},
    {icon: JobHunting, subheader: 'Job Hunting Assistance', text: 'Have no time to look for the job you dream of? Our team will send your application to all the right places', key: 5},
    {icon: Interview, subheader: 'Interview Preperation', text: 'Talk to one of our experts and you will be prepared for your interview, in a way as never before', key: 4},
    {icon: Career, subheader: 'Career Development Plan', text: 'Thinking of a career change or not sure which direction you should head? At JOB4ME we can talk to you and show you the right path', key: 2}

];