/** @format */

import { useState } from 'react';

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
];

function App() {
    return (
        <div>
            <Steps />
            <StepMessage step={1}>
                <p>Learn React ⚛️</p>
            </StepMessage>
            <StepMessage step={2}>
                <p>Apply for jobs 💼</p>
            </StepMessage>
            <StepMessage step={3}>
                <p>Invest your new income 🤑</p>
            </StepMessage>
        </div>
    );
}

function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrev() {
        if (step > 1) setStep((s) => s - 1);
    }
    function handleNext() {
        if (step < 3) setStep((s) => s + 1);
    }
    return (
        <div>
            <button
                className='close'
                onClick={() => setIsOpen((is) => !is)}
            >
                &times;
            </button>
            {isOpen && (
                <div className='steps'>
                    <div className='numbers'>
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </div>

                    <StepMessage step={step}>
                        {messages[step - 1]}
                        <div className='buttons'>
                            <Button
                                bgColor='#e7e7e7'
                                textColor='#333'
                                onClick={() => setStep(1)}
                            >
                                Learn how become him!
                            </Button>
                        </div>
                    </StepMessage>

                    <div className='buttons'>
                        <Button
                            bgColor='#7950f2'
                            textColor='#fff'
                            onClick={handlePrev}
                            text='Prev'
                        >
                            <span>👈</span>Prev
                        </Button>
                        <Button
                            bgColor='#7950f2'
                            textColor='#fff'
                            onClick={handleNext}
                            text='Next'
                        >
                            Next<span>👉</span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;

function StepMessage({ step, children }) {
    return (
        <div className='message'>
            <h3>Step {step}:</h3>
            {children}
        </div>
    );
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <div>
            <button
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                }}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}
