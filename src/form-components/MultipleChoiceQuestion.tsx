import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    function optionChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedOption(event.target.value);
    }
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    const isAnswerCorrect = selectedOption === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select value={selectedOption} onChange={optionChange}>
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            {isAnswerCorrect ? "✔️" : "❌"}
        </div>
    );
}
