

export default function JobCard({
    title, body, hours, hourlyRange
}) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Los Angeles, California</h6>
                <p> 
                    <span class="badge rounded-pill text-bg-success me-2">$50 / hr</span>
                    <span class="badge rounded-pill text-bg-secondary">8 hrs</span>
                </p>
                <p className="card-text">{ body }</p>
                <a href="#" className="btn btn-outline-secondary btn-sm me-2">View</a>
                <a href="#" className="btn btn-success btn-sm">Send Reply</a>
                </div>
            </div>
        </div>
    )
}