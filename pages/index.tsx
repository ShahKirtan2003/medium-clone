
import Head from 'next/head'
import Link from 'next/link';
import Header from '../components/Header'
import { post } from '../typigs';




interface Props{
  posts: post[];
}



export default function Home (props: Props){
  return (
    <div>
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      {/* Home page */}


      <div className='divide-y divide-slate-900'>

        {/* Header file */}

        <Header />


        {/* Medium logo page  */}


        <div className='pt-24 flex justify-between item-center bg-yellow-400 opacity-100 '>
          <div className='pl-6 py-20 md:pl-14 font-serif space-y-9'>
            <div>
              <h1 className='text-7xl lg:text-8xl'>Stay curious.</h1>
            </div>
            <div className='max-w-md'>
              <h1 className='text-2xl font-medium'>Discover stories, thinking, and expertise from writers on any topic.</h1>
            </div>
            <div className='hover:cursor-pointer bg-slate-900 text-white inline-block rounded-full px-12 mt-3 py-2 text-xl'>
              <h1>Start reading</h1>
            </div>
          </div>
          <div className='hidden md:flex md:justify-center md:items-center'>
            <img className='md:w-28 md:mx-20 lg:mx-10 lg:w-80 ' src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="logo" />
          </div>
        </div>




        {/* Trending article section */}


        <div className='px-14 py-8 '>
          <div className='flex px-2 py-2'>
              <img className='w-8 h-8' src="https://ichf.edu.pl/files/Biblioteka/pliki/staticon.jpg" alt="" />
              <h1 className='pt-2 px-2 font-semibold text-sm'>TRENDING ON MEDIUM</h1>
          </div>



          {/* Top articles */}


          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>

            {props.posts.map((currPost) => (
              <div className='flex px-2 pb-5'>
                <div className='pr-5'>
                  <h1 className=' text-3xl text-gray-300 font-bold'>0{1+props.posts.indexOf(currPost)}</h1>
                </div>
                <Link href={currPost.url} > 
                  <div className='hover:cursor-pointer space-y-1 pt-1'>
                    <div>
                      <h1 className='font-serif'>{currPost.id}</h1>
                    </div>
                    <div>
                      <h1 className='font-black font-serif'>{currPost.title}</h1>
                    </div>
                    <div>
                      <h1 className='font-thin text-sm'>{currPost.createdAt}</h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))} 
          </div>

        </div>




        {/* Explore section */}




        <div className='grid grid-cols-12 px-14'>
              <div className='col-span-7 pt-20'>
                {
                  props.posts.map( (currPost) => (

                    <div className='flex pb-5 justify-between'>
                      <div className='flex'>
                        <div className='pr-5'>
                          <h1 className=' text-3xl text-gray-300 font-bold'>0{1+props.posts.indexOf(currPost)}</h1>
                        </div>

                        <Link href={currPost.url} > 
                          <div className='hover:cursor-pointer space-y-1 pt-1'>
                            <div>
                              <h1 className='font-serif'>{currPost.id}</h1>
                            </div>
                            <div>
                              <h1 className='font-black font-serif'>{currPost.title}</h1>
                            </div>
                            <div>
                              <h1 className='font-thin text-sm'>{currPost.createdAt}</h1>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <img className='' src={"https://source.unsplash.com/random/200x130/?img=" + (props.posts.indexOf(currPost).toString())} alt="" />
                    </div>
                  ))
                }
              </div>
              <div></div>
              <div className='col-span-4 py-12 divide-y-2 '>
                <div className='pb-6'>
                  <div>
                    <h1 className='pb-3 text-sm font-semibold'>DISCOVER MORE OF WHAT MATTERS TO YOU</h1>
                  </div>
                  <div className='flex flex-wrap'>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Self</h1>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Data Science</h1>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Relationships</h1>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Programming</h1>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Productivity</h1>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Javascript</h1>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Machine Learning</h1>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Politics</h1>
                      <h1 className='px-4 py-2 mr-2 my-1 border-2 text-xs text-slate-400 font-semibold rounded-md'>Health</h1>
                  </div>
                </div>
                <div className='flex flex-wrap py-6'>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>Help</h1>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>Status</h1>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>Writers</h1>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>Blog</h1>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>Careers</h1>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>Privacy</h1>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>Terms</h1>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>About</h1>
                  <h1 className='pr-8 hover:cursor-pointer text-slate-500 py-1 text-sm'>Knowable</h1>
                </div>
              </div>
          </div>


      </div>
    </div>
  )
}




// Server side rendering


export const getServerSideProps = async () => {



  // Temporary data for posts 


  const posts = [
    {id: "Dylan Smyth", title: "10 Ways to Make Money Using Your Computer in 2022", createdAt: "Dec 29, 2021 · 3 min read", url: "https://medium.com/@dylancodes/10-ways-to-make-money-using-your-computer-in-2022-bc0432a08eac"},
    {id: "Aayushi Gupta", title: "15 Books Everyone Should Read At Least Once", createdAt: "Dec 6, 2021 · 16 min read", url: "https://medium.com/@aayushi_gupta/15-books-everyone-should-read-at-least-once-b00c6b0ec408"},
    {id: "Ashley Broadwater", title: "4 Websites That Pay Writers $200 to $400 per Article", createdAt: "Jan 18, 2022 · 6 min read", url: "https://medium.com/better-marketing/5-websites-that-pay-writers-200-to-400-per-article-4cfda57e7023"},
    {id: "Benjamin Hardy, PhD", title: "8 Things Every Person Should Do Before 8 A.M.", createdAt: "Dec 2, 2021 · 12 min read", url: "https://medium.com/@benjaminhardy/8-things-every-person-should-do-before-8-a-m-385569b97d41"},
    {id: "Dmitry Kovalev", title: "Stop Saying “Thank you”", createdAt: "Mar 12, 2022 · 5 min read", url: "https://medium.com/@dimakovrb/stop-saying-thank-you-eec9c5662409"},
    {id: "Mr Henriquez", title: "How to improve your English speaking skills by yourself.", createdAt: "Feb 1, 2022 · 6 min read", url: "https://mrhenriquez.medium.com/how-to-improve-your-english-speaking-skills-by-yourself-9b242d394cb7"},

  ];


  return{
    props: {
      posts,
    }
  }
}
