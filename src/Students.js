import React from 'react';

const Students = ({ students }) => {
    return (
        <div>
            <h2>Student</h2>
            {students.map((student, index) => (
                <div key={index} style={{ backgroundColor: student.color }}>
                    <p>
                        {' '}
                        {`ID: ${index + 1} Name: ${student.name}, Email: ${
                            student.email
                        }`}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Students;
