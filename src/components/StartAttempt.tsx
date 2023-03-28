import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
     const [progress, setProgress] = useState<boolean>(false);
    const [attempt, setAttempt] = useState<number>(4);
    function changeProgress(): void {
        setProgress(progress === false ? true : false);
        if (progress === false) {
            setAttempt(attempt - 1);
        }
    }
    return (
        <div>
            <span> attempts : {attempt}</span>
            <Button
                onClick={changeProgress}
                disabled={progress || attempt === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={changeProgress} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAttempt(1 + attempt)} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
