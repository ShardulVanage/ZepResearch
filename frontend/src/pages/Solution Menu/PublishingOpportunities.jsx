import React from 'react'

function PublishingOpportunities() {
  return (
  
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10">
  <div className="aspect-w-16 aspect-h-7">
    <img className="w-full object-cover rounded-xl"
     src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
     alt="Features Image"/>
  </div>

 
  <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1">
      <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
       Publishing Opportunities
      </h2>
      <p className="mt-2 md:mt-4 text-gray-500">
       At Zep Research, we believe in fostering knowledge sharing and collaboration among industry experts. 
       Our publishing opportunities platform provides a unique chance for researchers,
        academics, and professionals to showcase their work and contribute to the growth of the industry.
      </p>
    </div>
  

    <div className="lg:col-span-2">
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
       
        <div className="flex gap-x-5">
          <svg className="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800">
             Why Publish with Us?
            </h3>
            <p className="mt-1 text-gray-600">
              By publishing with Zep Research, you'll have the opportunity to reach a global audience of industry professionals, researchers, and academics, 
              increasing your visibility and reputation through our renowned conference and publication.
            </p>
          </div>
        </div>
      

       
        <div className="flex gap-x-5">
          <svg className="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800">
             Publication Options
            </h3>
            <p className="mt-1 text-gray-600">
              Zep Research offers various publication options, including our quarterly peer-reviewed journal, Zep Research Journal, featuring original research articles, case studies, and reviews.
            </p>
          </div>
        </div>
        

       
        <div className="flex gap-x-5">
          <svg className="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800">
              Submission Guidelines
            </h3>
            <p className="mt-1 text-gray-600">
             To ensure the highest quality content, we require that submissions be original, unpublished work that aligns with our publication focus
            </p>
          </div>
        </div>
       

      
        <div className="flex gap-x-5">
          <svg className="shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800">
             Peer-Review Process
            </h3>
            <p className="mt-1 text-gray-600">
             All submissions undergo a rigorous peer-review process by our expert editorial board. Reviews are conducted on a blind basis to ensure impartiality
             </p>
          </div>
        </div>
       
      </div>
    </div>
    
  </div>
 
</div>

  )
}

export default PublishingOpportunities