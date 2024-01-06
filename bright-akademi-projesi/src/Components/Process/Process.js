import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import png1 from '../../Images/1.png'
import png2 from '../../Images/2.png'
import png3 from '../../Images/3.png'
import png4 from '../../Images/4.png'
import png5 from '../../Images/5.png'
import png6 from '../../Images/6.png'
import png7 from '../../Images/7.png'
import png8 from '../../Images/8.png'
import png9 from '../../Images/9.png'

const Process = () => {
    return (
        <>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='display-4 text-light my-5'>BAU Bright Süreci</h1>
                <Row className='my-5'>
                    <Col xl={3} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png1} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    Ön Eleme
                                </Card.Title>
                                <Card.Text>
                                    Adaylar online olarak başvuru formunu doldurur ve taleplerini iletirler. Eğitim Çözümleri Departmanımız eğitim kriterlerine uygun katılımcılara sınav davetini ileteceklerdir.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png2} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    WGYS
                                </Card.Title>
                                <Card.Text>
                                    Ön elemeyi geçen katılımcılarımız, sayısal ve sözel becerilerinin ölçüldüğü sınava tabi tutulacaktır.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png3} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    Teknik Mülakat
                                </Card.Title>
                                <Card.Text>
                                    Eğitmenler tarafından alan mülakatları gerçekleştirilir.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png4} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    IK Mülakatı
                                </Card.Title>
                                <Card.Text>
                                    İnsan Kaynakları departmanımız tarafından mülakat gerçekleştirilir.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col xl={3} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png5} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    Sınıf Eğitimi
                                </Card.Title>
                                <Card.Text>
                                    Öğrencilerimiz 6 ay süre ile haftanın belirli günlerinde tam zamanlı olarak Bahçeşehir Üniversitesi Wissen Kampüsü’nde eğitim alırlar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png6} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    Proje
                                </Card.Title>
                                <Card.Text>
                                    Alanında uzman deneyimli eğiticilerimiz ile 6 ay süren temel eğitimin ardından öğrencilerimiz, bireysel ve takım halinde geliştirerek öğrendiklerini uygulayıp bitirme projelerini oluşturacaklar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png7} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    Sertifika
                                </Card.Title>
                                <Card.Text>
                                    6 aylık eğitimlerini başarı ile tamamlayan mezunlarımız Bahçeşehir Üniversitesi sertifikası alırlar. Ayrıca Microsoft Uluslararası Sertifika Sınavı’na ücretsiz olarak yönlendirilirler.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png8} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    Mentorluk
                                </Card.Title>
                                <Card.Text>
                                    Öğrencilerimize 12 ay boyunca kariyer danışmanlığı ayrıca eğitim süresinde teknik uzman tarafından mentorluk desteği sağlanır.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center align-items-center mb-5'>
                    <Col xl={4} sm={6} className='px-5 mb-5'>
                        <Card className='py-5 px-2 process-card why-list-item text-light'>
                            <Card.Img src={png9} className='w-75 m-auto' />
                            <Card.Body>
                                <Card.Title className='process-title'>
                                    İstihdam
                                </Card.Title>
                                <Card.Text>
                                    BAU Bright mezunları bilişim sektöründe profesyonel iş hayatlarına başlamak üzere yönlendirilerek istihdamları sağlanır.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Process