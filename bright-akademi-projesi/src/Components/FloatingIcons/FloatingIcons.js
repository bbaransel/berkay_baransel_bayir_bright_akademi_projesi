import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
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
                <i class="fa-solid fa-circle-plus fs-1 text-info "></i>
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
                            rowGap:'10px'
                        }}
                    >
                        <Button variant='light' className='rounded-circle p-1' href='https://github.com/bbaransel'><i class="fa-solid fa-phone fs-3"></i></Button>
                        <Button variant='light' className='rounded-circle text-primary p-1' href='www.linkedin.com/in/berkay-baransel-bayir-334465282'><i class="fa-brands fa-linkedin fs-3"></i></Button>
                        <Button variant='light' className='rounded-circle p-1 mb-2' href='https://github.com/bbaransel'><i class="fa-brands fa-github fs-3"></i></Button>
                    </div>
                )}
            </Overlay>

        </>
    )
}

export default FloatingIcons