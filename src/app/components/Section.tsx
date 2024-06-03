"use client"
import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import no3 from '../image/3.png'
import no2 from '../image/2.png'
import no1 from '../image/1.png'
import mang from '../image/mang.png' 
import manh from '../image/manh.png' 
import mani from '../image/mani.png' 
import manj from '../image/manj.png'
import mank from '../image/mank.png'
import manl from '../image/manl.png'
import Button from 'react-bootstrap/Button'
import good from '../image/good.png'


export const Section = () => {
  return (
  <Container>
<Row>


<Col>

<div className="cards">
    <div className='cardsinner'>


{/* Number 1 */}
<h1 className='h1a'> <b>How it Works</b> </h1>
<h3 className='h1b'> <b><Image src={no3} alt="" className='number'/> Upload your images</b> </h3>
<p style={{fontSize: '12px'}}> Upload 4+ high quality selfies: front facing, 1 person in frame, no glasses or hats.</p>

<Row className='roln'>
<Col>
<Image src={mang} alt="" objectFit='responsive' className='image'style={{marginLeft: '300px'}}/>

</Col>


<Col>
<Image src={manh} alt=""   objectFit='responsive' className='image'style={{marginLeft: '-170px'}}/>

</Col>

<Col>
<Image src={mani} alt=""  objectFit='responsive'className='image'style={{marginLeft: '-480px'}}/>

</Col>

{/* Number 2 */}

</Row>


<h3 className='h1b'> <b><Image src={no2} alt=""  objectFit='responsive'className='number'/> Our AI gets to work</b> </h3>
<p style={{fontSize: '14px'}}> The AI magic takes -20 minutes. You'll get an email when its ready!</p>

<Row className='roln'>
<Col>
<Image src={manj} alt=""  objectFit='responsive'className='image2'style={{marginLeft: '300px'}}/>

</Col>


<Col>
<Image src={mank} alt=""  objectFit='responsive'className='image2'style={{marginLeft: '-170px'}}/>

</Col>

<Col>
<Image src={manl} alt=""  objectFit='responsive'className='image2'style={{marginLeft: '-480px'}}/>

</Col>

{/* Number 3 */}

</Row>


<h3 className='h1b'> <b><Image src={no1} alt="" objectFit='responsive' className='number'/> Get amazing headshots</b> </h3>
<p style={{fontSize: '14px'}}> Once your model is trained, we 'll give you amazing headshots!</p>

<Row className='roln'>
<Col>
<Image src={manj} alt=""  objectFit='responsive'className='image'style={{marginLeft: '300px'}}/>

</Col>


<Col>
<Image src={mank} alt="" objectFit='responsive' className='image'style={{marginLeft: '-170px'}}/>

</Col>

<Col>
<Image src={manl} alt=""  objectFit='responsive' className='image'style={{marginLeft: '-480px'}}/>

</Col>




</Row>



    </div>
</div>

<h1 className='h1a'> Pricing </h1>
<br/>



<Row style={{marginLeft: '50px'}} >
    <Col>
<div className="cardss">
    <div className='cardsinner'>


<h1 className='h1a'style={{marginLeft: '-20px', fontSize: '25px'}}> Starter</h1>
<h1 className='h1c' style={{marginLeft: '90px', fontSize: '25px'}}><b>1 Credit</b></h1>
<p style={{marginLeft: '30px'}}> Perfect for individuals looking to<br/> enhance their online presence</p>
<p style={{marginLeft: '80px'}}> <Image src={good} alt="" height={20} width={30} /> 4 AI Headshots</p>
<br/>
<Button variant="primary" style={{marginLeft: '30px', width: '230px', borderRadius: '20px'}}> Choose Starter</Button> {' '}

    </div>
</div>
</Col>

<Col>
<div className="cardss">
    <div className='cardsinner'>


<h1 className='h1a'style={{marginLeft: '-20px', fontSize: '25px'}}> Basic</h1>
<h1 className='h1c' style={{marginLeft: '90px', fontSize: '25px'}}><b>3 Credit</b></h1>
<p style={{marginLeft: '30px'}}> Ideal for professional requiring<br/> frequent updates to their profiles.</p>
<p style={{marginLeft: '80px'}}> <Image src={good} alt="" height={20} width={30} /> 12 AI Headshots</p>
<br/>
<Button variant="primary" style={{marginLeft: '30px', width: '230px', borderRadius: '20px'}}> Choose Basic</Button> {' '}

    </div>
</div>
</Col>

<Col>
<div className="cardss">
    <div className='cardsinner'>


<h1 className='h1a'style={{marginLeft: '-20px', fontSize: '25px'}}> Premium</h1>
<h1 className='h1c' style={{marginLeft: '90px', fontSize: '25px'}}><b>5 Credit</b></h1>
<p style={{marginLeft: '30px'}}> The best value with unlimited<br/> Possibilities</p>
<p style={{marginLeft: '80px'}}> <Image src={good} alt="" height={20} width={30} /> 20 AI Headshots</p>
<br/>
<Button variant="primary" style={{marginLeft: '30px', width: '230px', borderRadius: '20px'}}> Choose Premium</Button> {' '}

    </div>
</div>
</Col>

</Row>



</Col>










</Row>
  </Container>
  
  )
};
