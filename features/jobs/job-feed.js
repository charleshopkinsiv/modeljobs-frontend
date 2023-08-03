
import JobCard from './job-card';

export default function JobFeed() {
    let jobs = [
        {
            title: 'Title for the job',
            body: 'With supporting text below as a natural lead-in to additional content.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Title for the job',
            body: 'With supporting text below as a natural lead-in to additional content.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Title for the job',
            body: 'With supporting text below as a natural lead-in to additional content.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Title for the job',
            body: 'With supporting text below as a natural lead-in to additional content.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Title for the job',
            body: 'With supporting text below as a natural lead-in to additional content.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Title for the job',
            body: 'With supporting text below as a natural lead-in to additional content.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Title for the job',
            body: 'With supporting text below as a natural lead-in to additional content.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Title for the job',
            body: 'With supporting text below as a natural lead-in to additional content.',
            hours: 8,
            hourlyRate: 50,
        },
    ];
    return (
        <div class="row">
            {jobs.map(job => <JobCard {...job} />)}
        </div>
    )
}