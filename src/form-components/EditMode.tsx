import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

function ViewMode({
    name,
    isStudent
}: {
    name: string;
    isStudent: boolean;
}): JSX.Element {
    return (
        <div>
            {name} is {isStudent ? "  " : "not "}a student.
        </div>
    );
}

function SwitchStudent({
    isStudent,
    setStudent
}: {
    isStudent: boolean;
    setStudent: (newValue: boolean) => void;
}): JSX.Element {
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="check-student"
                label="Student?"
                checked={isStudent}
                onChange={updateStudent}
            ></Form.Check>
        </div>
    );
}

function StudentForm({
    name,
    setName,
    setStudent,
    isStudent

}: {
    name: string;
    setName: (newVal: string) => void;
    isStudent: boolean;
    setStudent: (newVal: boolean) => void;
}): JSX.Element {
    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formStudentName">
                <Form.Control value={name} onChange={updateName}></Form.Control>
                <Form.Label>Enter your name:</Form.Label>
            </Form.Group>
            <div>
                <SwitchStudent
                    setStudent={setStudent}
                    isStudent={isStudent}
                ></SwitchStudent>
            </div>
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your name");
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? (
                <StudentForm
                    name={name}
                    isStudent={isStudent}
                    setStudent={setStudent}
                    setName={setName}
                />
            ) : (
                <ViewMode name={name} isStudent={isStudent} />
            )}
            <Form.Check
                label="Edit Mode"
                id="edit-check"
                type="switch"
                checked={editMode}
                onChange={updateEditMode}
            />
        </div>
    );
}
