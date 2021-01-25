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




class InstaGainFollowers extends React.Component{

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
                            <h4 className="my-subheading dh4">gain followers</h4>
                            <h2 className="my-heading dh2">how to <span className="my-red">gain</span> followers</h2>
                        </div>
                        <div className="col-12">
                            <p>Initially, Instagram has been looked as a fun application. However, it has gone far beyond since the inception. Now, Instagram is treated as a content marketing tool of serious nature. Building of an audience base is possible through this platform now also. In the world of social media networking, it is one of the most popular one. More than 200 million users can be found within the platform of Instagram. According to reports, about 60 billion pictures are shared through this application every day whereas the amount of likes is about 1.6 billion only. Now, the question is how to gain followers on Instagram?</p>
                            <p>Due to introduction of Instagram, 58% more brand engagement than Facebook can be obtained now. However, argument can be seen over the number on the occasion. Still, you can come at an average which is pretty huge. You may not like to stay within the average range as a brand at all. So, how to gain more followers on Instagram? Big brands as well as the small brands have been trying their best to become famous on Instagram. In this way, they like to earn more customers for their products and services also.</p>
                            <p>Some tricks can be tried within the platform of Instagram surely to ensure more number of followers in your account. Let’s look at the ways to stay ahead of others in the game of earning more followers on Instagram.</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                            
                            <div id="insta-gain-follower-accordion">

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_1">Cross promotion with the help of dedicated hastags</a>
                                    </div>
                                    <div id="ins_1" className="collapse show" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>In social media, it is always beneficial to create hastags and promote it elsewhere. So, how you can make it popular? To achieve the goal of promoting hastags, you can use other offline channels as well. Print advertisement and signage can be created with the same hastags also. In this way, your brand may become synonymous with the particular hastags.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_2">Look for creative hastags</a>
                                    </div>
                                    <div id="ins_2" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>Caption ideas use with the picture post must be creative and innovative. It is better to think of more than just one word when it comes to hastags. Obvious hastags must be avoided. If you wish to use common hastags then it must be mixed in order to identify your brand even from a distance. Instead trying boring and mundane stuff, you can use funny and ironic intonation for the hastags.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_3">Participate in a trendy conversation</a>
                                    </div>
                                    <div id="ins_3" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>In case of daily post, relevant hastags can be utilized that is very topical at the given time. In case of Carpentry Company, #woodworking is pretty effective. However, specific hastags must be a long tail keyword. In this way, you can be found by the right people easily. Hastags that is universally trending can be useful sometime also such as #instagood or #fun may help you at times also. Both types are required in order to make a mark within Instagram and create some noise for your brand.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_4">Use the bio URL as much as possible</a>
                                    </div>
                                    <div id="ins_4" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>If you have an Instagram profile for a real estate company then do you want to use your home website only? Instead, you can change the URL on regular basis to get the attention of your follower. It is better to change the URL twice a week for effective result. Some clickable links can be posted also to drive more traffic to new features within your content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_5">Have a descriptive caption</a>
                                    </div>
                                    <div id="ins_5" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>Through a picture, lots of things can be said at once. So, story can be created through your Instagram pictures also. By using descriptive caption, you can string a story for yourself and your brand quite easily. It is certainly a great way to get more followers. Strategy can be utilized over a period of time. In the beginning, you may feel weird while writing these captions. However, skills can be developed over a period of time. Voice for the brand can be developed with the use of method also.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_6">Go for influencer marketing</a>
                                    </div>
                                    <div id="ins_6" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>By visiting different kinds of profiles, you can choose a perfect influencer for your brand. During this time, you can “Turn On Post Notifications” in order to be notified about their new content upload within the platform. Through regular interaction with these influencers, you may able turn them in to your brand spokesperson.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_7">Get rid of useless tagged pictures</a>
                                    </div>
                                    <div id="ins_7" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>Content generated by the user can be used for the advantage of your brand. However, tagged pictures cannot be removed completely sometime. Through an ‘Edit Tags’ option you can eliminate unwanted things. It is better to go with the ‘Hide from the profile’ option here. By using these tips, you can manage to earn more followers at the same time.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_8">Photo tag must be approved before showcasing it on the profile</a>
                                    </div>
                                    <div id="ins_8" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>Control of the Instagram profile must be retained at every given occasion. Setting of the profile must be done in a way that tagged picture will not be shown in your profile without your consent. For this you have to select ‘photos of you’ along with ‘add manually option’ from the category of ‘Option’. Embarrassing situation can be avoided easily by using this method.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_9">Have your own Instagram Style</a>
                                    </div>
                                    <div id="ins_9" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>Every human being likes to fit in within their surrounding and society at large. However, you have to come across unique in order to attract the followers on Instagram. For this, you can develop a style of visual content that is exclusive and attractive. As a result, your brand can be recognized easily. So, user may click on your profile every time as they see new post in their newsfeed.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_10">Locally identified</a>
                                    </div>
                                    <div id="ins_10" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>In order to get acquainted with the followers, you must know about particular locations or neighborhood. It can be done easily through the search page of Google. Places Tab may be effective at times. Geotagged posts for that location can be checked for better idea also.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#ins_11">Call to Action</a>
                                    </div>
                                    <div id="ins_11" className="collapse" data-parent="#insta-gain-follower-accordion">
                                        <div className="card-body">
                                            <p>Instagram is a conversation based platform instead of broadcasting. So, what you want your followers to do? In case, you are not sure then assistance can be taken from the experts within the field. Through cleverly call to action process; you can share your content with more number of people. It can be made viral also.</p>
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

export default InstaGainFollowers;