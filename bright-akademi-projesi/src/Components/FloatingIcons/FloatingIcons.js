import React, { useRef, useState } from 'react'
import { Button, Overlay } from 'react-bootstrap'
import './FloatingIcons.css'
import { Link } from 'react-router-dom'

const FloatingIcons = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <>
            <Link className='my-5 float-icon rounded-circle p-0' variant="light" ref={target} onClick={() => setShow(!show)}>
                <i className="fa-solid fa-circle-plus display-4 text-secondary "></i>
            </Link>
            <Overlay target={target.current} show={show} placement="top" >
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                }) => (
                    <div
                        {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'none',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '10px'
                        }}
                    >
                        <Button variant='light' className='rounded-circle p-1 btn-float' href='/contact' target='_blank'><i className="fa-solid fa-phone fs-1"></i></Button>
                        <Button variant='light' className='rounded-circle text-primary p-1 btn-float' href='www.linkedin.com/in/berkay-baransel-bayir-334465282' target='_blank'><i className="fa-brands fa-linkedin fs-1"></i></Button>
                        <Button variant='light' className='rounded-circle p-1 mb-3 btn-float' href='https://github.com/bbaransel' target='_blank'><i className="fa-brands fa-github fs-1"></i></Button>
                    </div>
                )}
            </Overlay>

        </>
    )
}

export default FloatingIcons