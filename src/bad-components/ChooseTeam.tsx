import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMemb: string) {
        if (!team.includes(newMemb)) {
            setTeam([...team, newMemb]);
            setAllOptions(
                allOptions.filter(
                    (person: string): boolean => person !== newMemb
                )
            );
        }
    }
    function clearTeam() {
        setTeam([]);
        setAllOptions(PEOPLE);
    }
    return (
        <div>
            <h3>Select an Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "8px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseMember(option)}
                                size="lg"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Picked:</strong>
                    {team.map((player: string) => (
                        <li key={player}>{player}</li>
                    ))}
                    <Button onClick={clearTeam}>Reset Team</Button>
                </Col>
            </Row>
        </div>
    );
}
