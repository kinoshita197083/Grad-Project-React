import React, { Component } from 'react'
import './symptom_article.scss'

export function Symptom_Article() {

    return (
        <main>
            <section className='symptom-section'>
                <article class="symptom-grid symptom-article">

                    <p></p>
                    <h1>A danger foreseen is half avoided</h1>
                    <p>Symptoms usually begin 7-14 days after exposure. This can be as short as a few days or as long as 21 days. However, some people may experience a rash or sores first, followed by other symptoms. Monkeypox symptoms may include:</p>

                    <ul>
                        <li className='ul'>Skin Lesions</li>
                        <li className='ul'>Fever</li>
                        <li className='ul'>Muscle ache</li>
                        <li className='ul'>Fatigue</li>
                        <li className='ul'>Swollen lymph node</li>
                    </ul>

                    <p />


                    {/* <p>In facilisis suscipit bibendum. Suspendisse sed elementum dolor. Mauris quis lacus est. Curabitur vitae nibh at orci ornare pulvinar in id orci. In placerat auctor imperdiet. Vivamus eu placerat massa. Nulla interdum metus in massa ullamcorper, vitae facilisis leo ornare. In libero nulla, cursus mollis sagittis ut, tristique ut sem. Mauris iaculis, nunc ac tempor ornare, velit mi ullamcorper mi, et semper est ante at lacus. Vivamus sollicitudin ultricies aliquet. Suspendisse non augue sit amet sem porta dapibus imperdiet id purus. Cras ullamcorper, dui sed viverra lacinia, urna nisi malesuada augue, aliquet scelerisque nisi ante ac lacus.</p>
                    <blockquote>Proin tempor sed lacus a vulputate. Nunc vestibulum risus ac risus tempor, eu ultricies turpis dapibus. Aenean sed enim interdum, sollicitudin est nec, gravida est. In quis volutpat risus, quis porttitor eros.</blockquote> */}

                    {/* <p>Proin tempor sed lacus a vulputate. Nunc vestibulum risus ac risus tempor, eu ultricies turpis dapibus. Aenean sed enim interdum, sollicitudin est nec, gravida est. In quis volutpat risus, quis porttitor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae vestibulum neque. Suspendisse augue risus, ultricies sit amet posuere vel, aliquet in risus. Suspendisse potenti. Cras malesuada ullamcorper tortor, venenatis ornare purus lacinia in. Nam et diam rhoncus, ultrices quam sit amet, posuere enim. In pretium metus sit amet quam convallis, quis tristique enim congue. Fusce maximus at quam a iaculis. Pellentesque nibh nisi, luctus eget elementum in, finibus non metus. Curabitur porta nisi dictum vulputate consectetur.</p>

                    <p>Proin et vulputate augue. Ut semper magna non fermentum sollicitudin. Aliquam vestibulum rutrum diam sagittis finibus. Proin fermentum diam vel dui posuere pharetra. Sed in viverra libero. Sed dapibus diam sapien, vitae cursus tortor dignissim eu. Nam elit nisi, porttitor non magna vitae, pellentesque posuere nisi. Pellentesque iaculis faucibus diam et tincidunt. Phasellus ullamcorper eleifend orci tincidunt tincidunt. Phasellus dui nulla, tristique quis porttitor eu, maximus vel sapien. Integer mattis accumsan urna lacinia condimentum.</p> */}

                    <p>If someone has flu-like symptoms, they will usually develop a rash 1-4 days later.

                        Monkeypox can be spread from the time symptoms start until the rash has healed, all scabs have fallen off, and a fresh layer of skin has formed. The illness typically lasts 2-4 weeks.</p>
                    <blockquote>Adapted from Centers for Disease Control and Prevention & NSW Health 2022</blockquote>
                    <picture>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-alena-shekhovtcova-6075004.jpg" width='100%' alt="test" />
                        <figcaption>Being A Star In Your Industry Is A Matter Of CITY</figcaption>
                    </picture>
                    <p>People with monkeypox are infectious from the time they first get symptoms until all the lesions have crusted, the scabs have fallen off and a fresh layer of skin has formed underneath.</p>

                    {/* <p>Sed tincidunt ligula non turpis molestie ullamcorper. Donec venenatis ligula volutpat, aliquam felis nec, tempus neque. Pellentesque pharetra venenatis lorem eu gravida. Nunc sed mauris vulputate, lobortis turpis ac, fringilla libero. Maecenas congue quam nec diam consectetur, at finibus est euismod. Fusce ornare ante et metus consectetur, quis cursus sapien scelerisque. Quisque blandit dui a purus suscipit, sit amet accumsan ipsum bibendum. Nullam pellentesque massa massa, et rhoncus diam dapibus quis. Maecenas et sem ipsum. Maecenas tempus et ligula nec vulputate. Aliquam nec massa malesuada, convallis ante at, porta nibh. Vestibulum ex purus, imperdiet non pellentesque eu, tristique at lectus. Suspendisse maximus purus id quam hendrerit, et semper justo tempor. Fusce luctus dui condimentum, scelerisque quam sed, varius ipsum. Curabitur scelerisque leo metus, a consequat dolor sollicitudin a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> */}
                </article>
                {/* <article class="symptom-grid symptom-article" style={{ marginTop: '5%' }}>
                    <h1>Explore the Indicator</h1>
                    <p />
                    <h4 style={{ color: 'red' }}>Disclaimer</h4>
                    <p>The data gathered from confirmed cases didn't have all the symptoms recorded per case. However with the data that was present, the following information was gathered in regards to the most experienced symptoms to form a inference on the major indicators of Monkeypox witnessed globally.</p>
                    <p><i class="fa-solid fa-triangle-exclamation"></i>Warning: The figure contains images that may cause discomfort</p>
                </article> */}
            </section>
        </main>
    )
}