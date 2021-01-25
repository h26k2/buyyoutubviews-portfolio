import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '5.00', type : 'instagram',
        lists : [
            '1000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : '#'
    },
    {
        title : 'package 2',price : '12.00', type : 'instagram',
        lists : [
            '2500 Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
    {
        title : 'package 3',price : '20.00', type : 'instagram',
        lists : [
            '5000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
    {
        title : 'package 4',price : '40.00', type : 'instagram',
        lists : [
            '10000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
    {
        title : 'package 5',price : '90.00', type : 'instagram',
        lists : [
            '25000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
]


let data1 = [
    {
        title : 'package 1',price : '150.00', type : 'instagram',
        lists : [
            '50K Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
    {
        title : 'package 2',price : '300.00', type : 'instagram',
        lists : [
            '100K Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
    {
        title : 'package 3',price : '500.00', type : 'instagram',
        lists : [
            '250K Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
    {
        title : 'package 4',price : '1000.00', type : 'instagram',
        lists : [
            '500K Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
    {
        title : 'package 5',price : '1500.00', type : 'instagram',
        lists : [
            '1 Million Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : '#'
    },
]




class InstaGetFollowers extends React.Component{


    componentDidMount(){
        
        document.body.removeChild(document.getElementById('h26k2'));
        let js = document.createElement('script');
        js.setAttribute('id','h26k2');
        js.innerHTML = `$(".owl-carousel").owlCarousel({margin:10,nav:true,responsiveClass : true , responsive:{
            0:{
                items:1,
                nav : true
            },
            600:{
                items:2,
                nav : true
            },
            1100:{
                items:3,
                nav : true
            }
        }});`;
        document.body.appendChild(js);

    }


    render(){
        return(
            <div className="instagram pd44">
                <div className="container">


                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">get followers</h4>
                            <h2 className="my-heading dh2">how to <span className="my-red">get</span> followers</h2>
                        </div>
                        <div className="col-12">
                            <p>In 2021, it may not be easy to get followers on Instagram in comparison to couple of years back from now. There are about 1 billion users of Instagram monthly. Use of smart algoriothm can be seen within the platform of Instagram. In addition, you may come across lots of creative brands within the platforms. So, there is no doubt about competitive nature of this social media network.</p>
                            <p>For standing strong with your brand, you certainly require help of followers. On the occasion, lot of hard work may be required on your part to boost the account further. Use of effective strategy can show great results. Still. It is not simple to crack a strategy for yourself.</p>
                            <p>Here are some tips that may help you on the way of gaining more Instagram followers.</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                            
                            <div id="insta-gain-follower-accordion">

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_get_1">Have a complete and branded Instagram profile</a>
                                    </div>
                                    <div id="ins_get_1" className="collapse show" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Through the Instagram profile, brand generally connects with its followers. Therefore, utmost attention must be given to your account. It is important to make your account look complete. Impression is developed over a feed. So, you must attract the people with the posts and feed to click on ‘Follower’ button. Everything must look apt.</p>
                                            <p>Now-a-days, Instagram profile holds similar importance to your company website homepage. Therefore, it cannot be ignored at any given occasion.</p>
                                            <p>By coming to the Instagram profile, a user generally decides to follow a person or brand on most cases. In order to do so, they usually go through the feeds on the profile to come across a quick decision. Bios and stories are checked at the time also. If you like to turn a person into your follower then you must not give importance to editing style of your pictures only. Instead, you should try to create complete profile.</p>
                                            <p>To gain more followers, brands of different sizes are curating their profiles to get new followers. Both the brand and its targeted audience must be kept in the mind always. Presentation and style of the post must align with the image of company. Marketing platforms can be utilized at the time also.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_get_2">Understanding the Adobe Lightroom</a>
                                    </div>
                                    <div id="ins_get_2" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>For improving and editing photography, Adobe Lightroom can be looked as an excellent mobile app. It can be downloaded easily. Obtaining Lightroom is an investment that can assist you on the long run surely. It may help to gain followers also.</p>
                                            <p>In order to ensure a cohesive feed on Instagram, similar filter must be used with the photos. It is a great way to club your pictures together. Editing time on the pictures can be reduced with the process too.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_get_3">Using the Templates for Instagram Stories</a>
                                    </div>
                                    <div id="ins_get_3" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>If you post everyday on Instagram then you can use template for Instagram Stories. In this way, a uniform feature can be created that will be complimentary to your other posts also. Several apps like Unfold and Canva is available that can be used to your benefit. Even on basis of Photoshop knowledge, you can get free templates.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_get_4">Brand can be introduced with Highlights of Instagram Stories</a>
                                    </div>
                                    <div id="ins_get_4" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>By using the Instagram profile highlight, you may able to engage new followers. On the occasion, best possible content must be presented that enables the followers to understand about your business to some extent.</p>
                                            <p>Later on, stories can be created especially for the certain section of the followers. Benefits of Instagram story highlights are used at the time as it enables to reach the visitors that have not followed you during the time. Information about the new launches from the brand can be given to them easily in the process.</p>
                                            <p>Scheduled story by you will be used as the first highlight as it is considered most important feature from the brand. Highlights can be utilized for blog pots, analyrtics and planning also. Simple Instagram story must be made that can be seen without even signing up.</p>
                                            <p>In the end, a call to action can be offered that enables the people to become your follower and create an account at the same time. Similar to the landing page of your website, a highlight can be looked at.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_get_5">Share more selfies</a>
                                    </div>
                                    <div id="ins_get_5" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Instagram is certainly a place for sharing things. Most of the people like to associated and follow a profile with which they can relate to. It may not matter whether it is an influencer or a brand. It can be just an old friend from childhood also. Therefore, you have to make your Instagram account personal and interactive.</p>
                                            <p>It has been noticed that a picture of human face is liked more. Through a video, a brand can be introduced to audience in best possible way. Tone can be set easily with the process. Some of the behind-the-scenes images or videos can be used also to tell the people why you are different from others.</p>
                                            <p>People like to know about the brands that they are using on daily basis. Therefore, you can use your employee as the brand’s spokesperson to the people. Team members can be asked to post about the future business and new launches ahead also. Information about special campaigns can be given ahead too.</p>
                                            <p>If the employee of a company is used for data creation on Instagram then it becomes possible to add personality to the account easily. In this way, pages can be shared with the new audience that is usually connected to your employee. Interest for the brand can be developed through this mode and gain followers too.</p>
                                            <p>Therefore, you must give more time to the face on the video for connecting with the followers.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_get_6">Generate Instagram Ads</a>
                                    </div>
                                    <div id="ins_get_6" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Due to competitive nature of Instagran especially for the brand, you have to grab on as much opportunity as you may get. Right type of audience must be reached to make an impact. Developing an advertisement campaign within the periphery of Instagram may not be difficult at all. However, it may be little intimidating for the small business who has not worked with social media a lot.</p>
                                            <p>Diverse kinds of advertisement can be created that able to target the audience. Most of the job is done by Instagram when it comes to the sponsored post.</p>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">instagram </span> followers</h2>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                        <Pricing data={data}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more <span className="my-red">instagram</span> followers</h2>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                        <Pricing data={data1}/>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default InstaGetFollowers;