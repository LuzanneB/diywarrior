import React from 'react';
import './Icons.css';


function Icons(){
    return (
        <section className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon"><i className="fas fa-tasks m-auto text-primary" data-bs-hover-animate="pulse"></i></div>
                        <h3>Create Project Task Lists</h3>
                        <p className="lead mb-0">This will help you stay organized</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon"><i className="fas fa-chart-bar m-auto text-primary" data-bs-hover-animate="pulse"></i></div>
                        <h3>Visual Tracking</h3>
                        <p className="lead mb-0">A personalized dashboard that will provide a visual on your progress</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                        <div className="d-flex features-icons-icon"><i className="fas fa-hand-holding-usd m-auto text-primary" data-bs-hover-animate="pulse"></i></div>
                        <h3>Track your Budget</h3>
                        <p className="lead mb-0">Assign projects a budget and easily track your expenses!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Icons;