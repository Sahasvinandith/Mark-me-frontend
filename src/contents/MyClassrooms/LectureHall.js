import './LectureHall.css';

export const LectureHall = ({ name, dimensions }) => {
    return (
        <div className="lecture-hall">
            <h3>{name}</h3>
            <p>{dimensions}</p>
        </div>
    );
};
