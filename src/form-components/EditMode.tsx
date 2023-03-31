import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const nameChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setUserName(event.target.value);
    };

    const studentChange = (event: {
        target: { checked: boolean | ((prevState: boolean) => boolean) };
    }) => {
        setIsStudent(event.target.checked);
    };

    const editModeChange = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <div>
            {isEditMode ? (
                <div>
                    <Form.Label>
                        Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={nameChange}
                        />
                    </Form.Label>
                    <br />
                    <Form.Label>
                        Student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={studentChange}
                        />
                    </Form.Label>
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "a" : "not "} student
                </div>
            )}
            <Form.Check
                type="switch"
                label={isEditMode ? "Save" : "Edit"}
                onChange={editModeChange}
            />
        </div>
    );
}
