import React from 'react'
import {useEffect} from "react";

import 'reactjs-popup/dist/index.css';

import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import {InfoStyled} from "../../Styled/InfoStyled";

const GameStat = ({
                      smShow,
                      setSmShow,
                      lose,
                      win,
                      draw,
                  }) => {

    useEffect(() => {
    }, [win, lose, draw])
    return (
        <>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <InfoStyled>
                            Wins: {win} <br/>
                            Losses: {lose} <br/>
                            Draws: {draw} <br/>
                        </InfoStyled>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </>
    )
}
export default GameStat