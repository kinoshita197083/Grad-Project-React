import React, { Component } from 'react'
import './symptom_article_2.scss'

export function Symptom_Article_2() {

    return (
        <main>



            <section className='symptom-section'>
                <div style={{ height: '4rem' }}></div>
                <article class="symptom-grid symptom-article">
                    {/* <picture class="symptom-top">
                        <img src="https://picsum.photos/810/485" alt="test" />
                        <figcaption>Being A Star In Your Industry Is A Matter Of CITY</figcaption>
                    </picture> */}


                    <h1>Monkeypox's Impact in Victoria?</h1>
                    <p>The delayed onset of the global outbreak has reached Australian shores with our first case occuring in May 2022. Since then, Victoria has the highest percentage of australias cases as of September 2022.</p>

                    <p>Person-to-person transmission of monkeypox occurs with very close contact with infected people (such as skin-to skin contact during intimate or sexual contact) and can also spread through respiratory droplets and contact with ‘fomites’ or contaminated surfaces (such as contaminated clothing, towels, or bedding).</p>
                    <p>In facilisis suscipit bibendum. Suspendisse sed elementum dolor. Mauris quis lacus est. Curabitur vitae nibh at orci ornare pulvinar in id orci. In placerat auctor imperdiet. Vivamus eu placerat massa. Nulla interdum metus in massa ullamcorper, vitae facilisis leo ornare. In libero nulla, cursus mollis sagittis ut, tristique ut sem. Mauris iaculis, nunc ac tempor ornare, velit mi ullamcorper mi, et semper est ante at lacus. Vivamus sollicitudin ultricies aliquet. Suspendisse non augue sit amet sem porta dapibus imperdiet id purus. Cras ullamcorper, dui sed viverra lacinia, urna nisi malesuada augue, aliquet scelerisque nisi ante ac lacus.</p>
                    <blockquote>Victoria has the highest percentage of australias cases as of September 2022</blockquote>


                    <picture>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-mitchell-luo-5896356.jpg" width={'550 %'} alt="test" />
                        <figcaption>Flinders Street railway station is located on the corner of Flinders and Swanston streets in the central business district (CBD) of Melbourne, Victoria, Australia. </figcaption>
                    </picture>

                    <p>Monkeypox may be avoided through various preventative measures, which includes vaccination. People should also avoid close contact with people with suspected or confirmed monkeypox. Staying vigilant with hygiene measures including wearing masks and washing hands with soap and water or alcohol-based sanitiser is important.</p>
                </article>
            </section>
        </main>
    )
}