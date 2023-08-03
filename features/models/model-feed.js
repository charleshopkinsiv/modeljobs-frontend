
import ModelCard from './model-card';

export default function ModelFeed() {
    let models = [
        {
            title: 'Models name',
            body: 'Short description, why photographers should hire.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Models name',
            body: 'Short description, why photographers should hire.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Models name',
            body: 'Short description, why photographers should hire.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Models name',
            body: 'Short description, why photographers should hire.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Models name',
            body: 'Short description, why photographers should hire.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Models name',
            body: 'Short description, why photographers should hire.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Models name',
            body: 'Short description, why photographers should hire.',
            hours: 8,
            hourlyRate: 50,
        },
        {
            title: 'Models name',
            body: 'Short description, why photographers should hire.',
            hours: 8,
            hourlyRate: 50,
        },
    ];
    return (
        <div class="row">
            {models.map(model => <ModelCard {...model} />)}
        </div>
    )
}