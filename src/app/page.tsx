import{Home as ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Album2.jpg" width={104} height={104} alt="Capa do Album do Post Malone"/>
              <strong>Post Malone</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/ImagineDragons.jpg" width={104} height={104} alt="Capa do Album do Post Malone"/>
              <strong>Imagine Dragons</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Justin.jpg" width={104} height={104} alt="Capa do Album do Post Malone"/>
              <strong>Justin Bieber</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/RBD.jpg" width={104} height={104} alt="Capa do Album do Post Malone"/>
              <strong>RBD</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Rosalia.jpg" width={104} height={104} alt="Capa do Album do Post Malone"/>
              <strong>Rosalía</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Travis.jpg" width={104} height={104} alt="Capa do Album do Post Malone"/>
              <strong>Travis Scott</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Bruno Borges</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Daily1.JPG" className='w-full' width={120} height={120} alt="Capa do Album do Post Malone"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Kayblack, Tz da Coronel, Israel &...</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Daily2.JPG" className='w-full' width={120} height={120} alt="Capa do Album do Post Malone"/>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Costa Gold, PrimeiraMente, Aka...</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Daily3.JPG" className='w-full' width={120} height={120} alt="Capa do Album do Post Malone"/>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500'>Imagine Dragons, Yeah Yeah Yeahs,...</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Daily4.JPG" className='w-full' width={120} height={120} alt="Capa do Album do Post Malone"/>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500'>Fugees, 50 Cent, Busta Rhymes e mais</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Daily5.JPG" className='w-full' width={120} height={120} alt="Capa do Album do Post Malone"/>
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-500'>Filipe Ret, Selminho DJ, MC MENOR H...</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Daily6.JPG" className='w-full' width={120} height={120} alt="Capa do Album do Post Malone"/>
              <strong className='font-semibold'>Descobertas da Semana</strong>
              <span className='text-sm text-zinc-500'>Seu mixtape semanal cheia de novidades</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Daily8.JPG" className='w-full' width={120} height={120} alt="Capa do Album do Post Malone"/>
              <strong className='font-semibold'>Radar de Novidades</strong>
              <span className='text-sm text-zinc-500'>Confira os lançamentos dos artistas que você...</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Mix.JPG" className='w-full' width={120} height={120} alt="Capa do Album do Post Malone"/>
              <strong className='font-semibold'>Mix de Mc IG</strong>
              <span className='text-sm text-zinc-500'>Veigh, WIU e MD Chefe</span>
            </a>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
