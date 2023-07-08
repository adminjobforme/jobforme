import { HomeServiceItemModel } from '../../shared/home-service-model';
import { Cv, Career, CoverLetter, Interview, JobHunting, LinkedIn,  } from '../../icons/home-icons';

export const homeServices: HomeServiceItemModel[] = [
    {icon: Cv, subheader: 'CV/Resume Advice', text: 'Sample Text for now', key: 1},
    {icon: Career, subheader: 'Career Advice', text: 'Sample Text for now', key: 2},
    {icon: CoverLetter, subheader: 'Cover Letter Advice', text: 'Sample Text for now', key: 3},
    {icon: Interview, subheader: 'Interview Advice', text: 'Sample Text for now', key: 4},
    {icon: JobHunting, subheader: 'Job Hunting Advice', text: 'Sample Text for now', key: 5},
    {icon: LinkedIn, subheader: 'LinkedIn Profile Advice', text: 'Sample Text for now', key: 6}

];