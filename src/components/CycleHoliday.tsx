import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🪔" | "🎨" | "🎃" | "🎄" | "🦃";
    const Time_Transitions: Record<Holiday, Holiday> = {
        "🎨": "🪔",
        "🪔": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎨"
    };
    const Alphabet_Transitions: Record<Holiday, Holiday> = {
        "🎄": "🪔",
        "🪔": "🎃",
        "🎃": "🎨",
        "🎨": "🦃",
        "🦃": "🎄"
    };
    function changeTime(): void {
        const newHoli2 = Time_Transitions[holi];
        setHoliday(newHoli2);
    }
    const [holi, setHoliday] = useState<Holiday>("🎄");
    function changeAlphabet(): void {
        const newHoli = Alphabet_Transitions[holi];
        setHoliday(newHoli);
    }
    return (
        <div>
            <div>
                <p> Holiday: {holi}</p>
                <Button onClick={changeTime}>Advance by Year</Button>
                <Button onClick={changeAlphabet}>Advance by Alphabet</Button>
            </div>
        </div>
    );
}
