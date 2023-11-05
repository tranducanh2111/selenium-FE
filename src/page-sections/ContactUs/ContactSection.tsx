import React from 'react'
import Heading from '../../components/Heading'
import Form from '@/components/Form'
import Input from '@/components/Input'
import Button from '@/components/Buttons/Button'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactSection: React.FC = () => {
    return (
        <div className=" pt-[90px] px sm:pt-[80px] bg-cover bg-top bg-contact pb-[20px]">
            <div className="max-w-[1160px] py-15 mx-auto lg:flex lg:flex-row content-center lg:items-start lg:gap-4 xl:col xl:flex-row xl:items-start xl:justify-between mb-10 justify-around">
                <div className='introduction pb-10 sm:text-center w-full lg:w-[50%] pl-[20px] xl:pl-0'>
                    <Heading
                        title="Let's connect about something!"
                        description="Our dedicated customer support team is available to assist you with any inquiries or concerns. Feel free to reach out, and we'll do our best to provide you with a prompt and helpful response."
                        titleClassName='text-h2 font-bold pb-[10px]'
                        className=' text-secondary max-w-[405px] xl:max-w-none'
                        descriptionClassName='text-body'
                    />
                </div>
                <div className='introduction max-w-screen-sm sm:w-[500px] mx-auto xl:mx-0 w-[90%] my-[32px] '>
                    <Form>
                        <Heading title='Please fill this form'
                            description='Stay updated on the latest news, promotions, and product releases by connecting with us on social media. We love engaging with our amazing community!'
                            titleClassName='text-h2 font-bold  pb-[10px]'
                            descriptionClassName='text-[#11181C] text-body'
                        />
                        <div className='flex flex-col gap-5 mt-8 mb-4'>
                            <Input placeHolder='Full name' className='focus:border-[#FF6D33] hover:border-[#FF6D33] w-full rounded-md px-3 py-2 border border-light-grey placeholder:text-light-grey placeholder:text-body outline-none' />
                            <Input placeHolder='Email' className='focus:border-[#FF6D33] hover:border-[#FF6D33] w-full rounded-md px-3 py-2 border border-light-grey placeholder:text-light-grey placeholder:text-body outline-none' />
                            <PhoneInput
                                country={'au'}
                                placeholder='Phone number*'
                                inputClass='phone-input' 
                                buttonClass='phone-input-dropdown'
                                searchClass='phone-input-flag'  
                                value={null}
                            />
                            <Input placeHolder='Message' className='h-[150px] focus:border-[#FF6D33] hover:border-[#FF6D33] w-full rounded-md px-3 py-2 border border-light-grey placeholder:text-light-grey placeholder:text-body outline-none' />
                            {/* <Input placeHolder='Phone number' className='w-full rounded-md px-3 py-2 border border-secondary' /> */}
                            <div className='flex flex-row items-start text-body focus:border-[#FF6D33]'>
                                <Input type='checkbox' className='outline-none w-5 h-5 mr-3' />
                                <p>I have read and accept the <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.</p>
                            </div>
                        </div>
                        <Button title='Submit' className='bg-[#FF6D33] w-full text-white text-h5 justify-center'/>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
