import Education from './components/education';
import Experience from './components/experience';
import GeneralInfo from './components/general-info';

export default function CvFunctionComponents() {
    return (
        <div className='contentContainerColumn'>
            <div className='container'>
                <GeneralInfo />
            </div>
            <div className='container'>
                <Education />
            </div>
            <div className='container'>
                <Experience />
            </div>
        </div>
    );
}