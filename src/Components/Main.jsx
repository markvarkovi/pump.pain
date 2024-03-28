import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Main() {
    return (
        <>
        <div className='flex w-full h-screen flex-col justify-between'>
          <Header/>
          <Footer/>
        </div>
        </>
    )
}

//flex w-full h-screen flex-col justify-between