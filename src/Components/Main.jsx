import Header from './Header.jsx'

export default function Main() {
    return (
        <>
<div className='flex w-full h-screen flex-col justify-between'>
  <Header/>
  <div className="flex justify-end items-center">
  <div className="flex justify-center items-center text-gray-200 bg-gray-900 mr-40 rounded-lg bg-opacity-40 border-8 border-black border-double" style={{ height: "25rem", width: "25rem" }}>
  <img src="https://i.ibb.co/ZKzWcwG/Harold-1.png" alt="Harold-1" className="p-4 w-full h-full" />
</div>
  </div>
  <div>
    FASz
  </div>
</div>

        </>
    )
}

//flex w-full h-screen flex-col justify-between