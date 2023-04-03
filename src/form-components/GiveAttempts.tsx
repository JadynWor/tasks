import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function GiveAttempts(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    return (
        <div>
            <h3>Give attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Control
                    value={request}
                    type="number"
                    onChange={(event: ChangeEvent) =>
                        setRequest(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttempt(attempt - 1)}
                    disabled={attempt === 0}
                >
                    use
                </Button>
                <Button onClick={() => setAttempt(attempt + request)}>
                    gain
                </Button>
                Attempts left: {attempt}
            </div>
        </div>
    );
}
