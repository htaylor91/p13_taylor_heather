import Nav from '../components/navigation/Nav'
import SignInLink from '../components/navigation/SignInLink'
import Hero from '../components/Hero'
import Features from '../components/features/Features'

function HomePage(){
    return (
        <>
            <Nav>
                <SignInLink/>
            </Nav>
            <main className='main'>
                <Hero/>
                <Features/>
            </main>
        </>
    )
}

export default HomePage