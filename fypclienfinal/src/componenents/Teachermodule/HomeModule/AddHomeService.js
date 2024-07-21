import React ,{useState}from 'react'
import Header from "../../Header";
import Footer from "../../Footer";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
import { storage } from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { NavLink,useNavigate } from 'react-router-dom'
export default function AddHomeService() {
  const [course, setCourse] = useState('');
  const [timing, setTiming] = useState('');
  const [about, setAbout] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [educationDetail, setEducationDetail] = useState('');
  const [photo, setPhoto] = useState('');
  const [pptFile, setPptFile] = useState(null);
  const { teacherId } = useParams(); 



  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        console.log('downloadURL', downloadURL);
        setPhoto(downloadURL); // Set the photo state with the download URL
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
  const handlePPt = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        console.log('downloadURL', downloadURL);
        setPptFile(downloadURL); // Set the photo state with the download URL
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
  const handleAddService = async () => {
    console.log("bnbknknmkm")
    try {
      const response = await axios.post(`/api/teacher/service-request/${teacherId}`, {
        course,
        timing,
        price,
        about,
        address,
        educationDetail,
       pptFile,
       photo
      });
      console.log(response.data,"post"); 
      // navigate('/teacheraddedservices')
      // Assuming the response contains a success message
      // Optionally, you can navigate to another page or show a success message to the user
    } catch (error) {
      console.error('Error adding service:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
  <>
  <Header/>
  <div className="isolate bg-white px-6 py-20 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2e6bfa] to-[#aeaaee] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-customBlue sm:text-4xl">Services page</h2>
        
      </div>
      <form  className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="course" className="block text-sm font-semibold leading-6 text-blue-600 italic">
             Service Subject 
            </label>
            <div className="mt-2.5">
              <input
                type="text" name='course'
                value={course} onChange={(e) => setCourse(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-2 border-blue-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="timing" className="block text-sm font-semibold leading-6 text-blue-600 italic">
            Service Timing
            </label>
            <div className="mt-2.5">
              <input
                type="text" name='timing'
                value={timing} onChange={(e) => setTiming(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-2 border-blue-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-semibold leading-6 text-blue-600 italic">
           Price
            </label>
            <div className="mt-2.5">
              <input
                type="text" name='price'
                value={price} onChange={(e) => setPrice(e.target.value)} 
                autoComplete="given-name"
                className="block w-full rounded-md border-2 border-blue-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
         
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-blue-600 italic">
             Address
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={address} onChange={(e) => setAddress(e.target.value)} 
                autoComplete="organization"
                className="block w-full rounded-md border-2 border-blue-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-blue-600 italic">
          Education detail
            </label>
            <div className="mt-2.5">
              <input
                type="text" name='educationDetail'
                value={educationDetail} onChange={(e) => setEducationDetail(e.target.value)}
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-2 border-blue-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label htmlFor="email" className=" mt-2 block text-sm font-semibold leading-6 text-blue-600 italic">
          Cv /Resume 
            </label>
            <input
          style={{ outline: '1px solid #4F46E5' }}
       type="file"
       name="pptFile"
       accept="application/pdf"
       placeholder="File"
       id="pptFile"
     
       onChange={(e) => handlePPt(e)}
     />
             <div className="mt-4 flex text-sm leading-6 text-gray-600">
             </div>
            <label htmlFor="email" className=" mt-2 block text-sm font-semibold leading-6 text-blue-600 italic">
            Servive Photo
            </label>
             
              
                      
                      <input
          style={{ outline: '1px solid #4F46E5' }}
       type="file"
       name="photo"
       placeholder="photo"
       id="photo"
     
       onChange={(e) => handleImage(e)}
     />
                
                  
                   
                   
                 

          </div>
          <div className="sm:col-span-2">
          
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                Experinece
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full w-20 rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                {/* <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
              </div>
            
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="about" className="block text-sm font-semibold leading-6 text-blue-600 italic">
              About Service
            </label>
            <div className="mt-2.5">
              <textarea
                name="about"
                id="about"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                rows={4}
                className="block w-full rounded-md border-2 border-blue-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group> */}
        </div>
        <div className="mt-10">
          <button
            
            onClick={handleAddService}
            className="block w-full    rounded-md bg-customBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-customBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           
       <a href={`/teacheraddedservices/${teacherId}`}>   Add</a>  
            </button>
        </div>
      </form>
    </div>
  <Footer/>
  </>
  
  )
}
