import Nav from '../components/navigation/Nav'
import LoginForm from '../features/auth/LoginForm'
import '../styles/signin.css'

function SignInPage() {

    return (
        <>
          <Nav />
          <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2 className='sign-in-title'>Sign In</h2>
                <LoginForm/>
            </section>
          </main>
        </>
    )
}

export default SignInPage
