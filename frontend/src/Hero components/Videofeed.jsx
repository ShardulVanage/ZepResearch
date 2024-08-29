
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from './ui/dialog';
import { PlayCircleIcon, PlayIcon, PlusIcon } from 'lucide-react';
import { InView } from './ui/inView';
const data = [
  {
    id: 1,
    title: ' Ava Kumar',
    subtitle: 'Digital Marketing',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/QZZGCUZcwyk?autoplay=0',
  },
  
    {
    id: 2,
    title: 'Ethan Jain',
    subtitle: 'Academic Coordinator',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/QZZGCUZcwyk?autoplay=0',
  },
    {
    id: 3,
    title: 'Liam Roy',
    subtitle: 'Content Strategist',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/QZZGCUZcwyk?autoplay=0',
  },
  {
    id: 4,
    title: 'Aarav Sharma',
    subtitle: 'Program Manager',
    description: 'Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.',
    image: 'https://plus.unsplash.com/premium_photo-1675129522693-bd62ffe5e015?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ytlink: 'https://youtube.com/embed/QZZGCUZcwyk?autoplay=0',
  },

]
export function VideFeedBck() {
  return (<>
 <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: 'blur(4px)',
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -250px 0px' }}
        >
           <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mt-12">Featured Video Library</h1>
           <p className='py-2'>Voices of Zep Research: Testimonials from Conference Participants</p>
    <div className='flex sm:flex-row flex-col items-center justify-center gap-7 sm:gap-16 p-4 py-8 overflow-y-scroll no-scrollbar overflow-scroll' >
{data.map((item, index) => (
    
    
    <Dialog
    key={index.id}
    transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
        
    }}
    
    >
       <div className='flex flex-col items-center justify-center'>

      
      <DialogTrigger
        style={{
            borderRadius: '9px',
        }}
        className='flex w-[300px] flex-col overflow-hidden border border-zinc-950/10  drop-shadow-md  '
        >
        <DialogImage
          src={item.image}
          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
          className=' object-cover '
          />
        
      </DialogTrigger>
      <h1 className='mt-2 text-lg font-bold inline-flex items-center '>Play Video <PlayCircleIcon className='ml-2'/></h1>
       </div>
       
      <DialogContainer>
        <DialogContent
          style={{
              borderRadius: '24px',
            }}
            className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white  sm:w-[700px]'
            >
           <iframe  className='sm:h-[500px] w-auto h-[300px]'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={item.ytlink}>
      
        </iframe>
            
          {/* <DialogImage
            src='https://images.unsplash.com/photo-1486591978090-58e619d37fe7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
            className='h-full w-full'
            /> */}
          <div className='p-6'>
            <DialogTitle className='text-2xl text-zinc-950 font-bold'>
              {item.title}
            </DialogTitle>
            <DialogSubtitle className='text-zinc-700 font-medium '>
              {item.subtitle}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
                >
              <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                {item.description}
            
              </p>
              <a >
               <a className=' mt-8' variant="outlined">Watch more</a>
               </a>
            </DialogDescription>
          </div>
          <DialogClose className='text-zinc-50' />
        </DialogContent>
      </DialogContainer>
    </Dialog>

))}
    </div>
     <button
        type="button"
        className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
       view more 
      </button>
      </InView>
</>
  );
}