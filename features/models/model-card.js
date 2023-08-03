

export default function JobCard({
    title, body, hours, hourlyRange
}) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card pt-3">
                <div class="text-center" style={{
                    height: "256px",
                }}>
                    <img src="https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" class="img-fluid" style={{maxHeight: '100%'}} />
                </div>
                <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Los Angeles, California</h6>
                <p> 
                    <span class="badge rounded-pill text-bg-success me-2">$50/hr</span>
                    <span class="badge rounded-pill text-bg-secondary">22yrs</span>
                </p>
                <p className="card-text">{ body }</p>
                <a href="#" className="btn btn-outline-secondary btn-sm me-2">View</a>
                <a href="#" className="btn btn-success btn-sm">Message</a>
                </div>
            </div>
        </div>
    )
}