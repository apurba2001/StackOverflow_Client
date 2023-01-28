import './RightSidebar.css'

import comment from '../../assets/message.png'
import pen from '../../assets/pen.png'
import blackLogo from '../../assets/stack-black.png'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width='15' />
                    <p>Observability is key to the future of software(and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width='15' />
                    <p>Podcast 374: How valuable is your screen name?</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="pen" width='15' />
                    <p>Review queus workflows Final release..</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="pen" width='15' />
                    <p>Please welcome Valued Associats #954 -V2Blast #959 SpencerG</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={blackLogo} alt="pen" width='15' />
                    <p>Outdated Ansewrs: accepted answer is now unpinned on Stack Overflow</p>
                </div>
            </div>
            <h4>Hot Mata posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <h5>38</h5>
                    <p>Why was the spam flag declined. yet the question marked as spam</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <h5>20</h5>
                    <p>What is the best course of action when a user has high enough rep to..</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <h5>14</h5>
                    <p>Is a link to the "How to ask" help page a useful commebnt?</p>
                </div>
            </div>
        </div>
    )
}
export default Widget